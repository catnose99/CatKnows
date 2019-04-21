---
title: "Fastly + Railsでキャッシュをパージする方法"
date: "2019-04-21T22:12:03.284Z"
category: "dev"
description: "Fastly + Railsでページのキャッシュをインスタント・パージ（削除削除）する方法をまとめました。"
emoji: "🗑"
---

前回はRailsでFastlyを使う方法を書きました。

[[simple]]
| 👉 [**Fastly + Rails + Herokuでページをキャッシュする方法**](/rails-heroku-fastly/)

今回は、キャッシュしたコンテンツを削除（パージ）する方法を紹介します。

## Fastlyのインスタント・パージ
Fastlyの魅力の1つは、**キャッシュを即時に削除する**インスタント・パージ（Instant Purge）機能です。FastlyのAPI経由でインスタント・パージを行うことで

- 動的なページでもページキャッシュ
- コンテンツが更新されたらキャッシュを即削除

ということが可能になります。Webサービスでも積極的にページキャッシュができるのは嬉しいところです。

## RailsからAPI経由でキャッシュをパージする方法

ここからは「RailsからFastlyのAPIを叩いてインスタント・パージする」方法（の一例）を紹介します。

### HTTPリクエスト用にhttpartyを追加

RailsからHTTPリクエストを投げるための手段はいくつかありますが、今回は機能がシンプルで直感的に使える[httparty](https://github.com/jnunemaker/httparty)というGemを使うことにします。

```ruby:title=Gemfile
gem "httparty"
```

### パージ用のクラスを作成
パージのAPIリクエストは複数の`model`や`controller`から行うことになるかもしれないので、汎用的なクラスを作成しておきます。

そこで`lib`ディレクトリに`cache_purger.rb`というクラスを作成することにします。

#### 自作クラスが自動で読み込まれるように設定
Railsのデフォルト設定では`lib`ディレクトリ以下のファイルは読み込まれません。次のコードを`application.rb`に追加することで、自動で`lib`以下が読み込まれるようになります。

```ruby:title=application.rb
config.autoload_paths += %W(#{config.root}/lib)
```

#### クラスを作成
以下のように自作クラスを作ります。簡単な解説はコメントで載せました。

```ruby:title=lib/cache_purger.rb
class CachePurger

  # 指定したパスをパージするリクエストを送るメソッド
  def purge(path)
    return if Rails.env.development? # 開発環境ではリクエストを飛ばさない

    HTTParty.post(
      "https://api.fastly.com/purge/https://example.com#{path}",
      headers: {
        "Fastly-Key" => ENV["YOUR_FASTLY_TOKEN"] # API tokenをヘッダー情報に含める
      }
    )
  end

  # 例：トップページをパージするメソッド
  def purge_home
    purge("/") # さきほど指定したpurgeメソッドを呼び出す
  end

  # 例：ユーザーの情報が載っているページをパージするメソッド
  def purge_user(user)
    purge("/#{user.username}") # ユーザーページのパージ
    purge("/#{user.username}/posts") # ユーザーの投稿一覧をパージ
  end

end

```
👆
- 引数で指定したパスをパージする`purge`という汎用的なメソッドを作ります。この中でFastlyAPIにHTTPリクエストを送るようにします。
- 次に「トップページをパージするためのメソッド」や「ユーザー情報が載っているページをパージするためのメソッド」など、キャッシュを削除するのに都合の良い単位でパージメソッドを作っていきます。

[[simple]]
| ✍️パージのリクエスト先のURLは[FastlyのAPIドキュメント](https://docs.fastly.com/api/purge)を参考にしてみてください。

### modelやcontrollerからパージ用メソッドを呼び出す

あとはキャッシュをパージしたいところで定義したクラスメソッドを呼び出します。

以下のように`model`から「[Active Recordコールバック](https://railsguides.jp/active_record_callbacks.html)」を使って呼び出すケースが多いのではないかと思います。

```ruby:title=user.rb
after_update :purge_user_cache

private
  def purge_user_cache
    CacheBuster.new.purge_user(self)
  end 
```

👆`after_update`（オブジェクトの更新後に呼び出される）や`after_destroy`（削除後に呼び出される）などのコールバックを利用すると楽ですね。

パージメソッドを使ったRakeタスクを作り、スケジューラーで呼び出すようにすれば「毎日0時にキャッシュがクリアされる」というような設定も簡単に実現できます。

以上、Fastlyでインスタント・パージを行う方法の紹介でした。