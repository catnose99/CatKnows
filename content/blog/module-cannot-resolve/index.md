---
title: "Netlifyデプロイ時にCan't resolveエラーが出たら"
date: "2019-02-20T22:12:03.284Z"
category: "dev"
emoji: "😭"
---

Gatsby.jsでつくったブログをいざNetlifyでデプロイしようとしたところ、以下のようなエラーが出た。

```
Module not found: Error: Can't resolve '../components/Layout' in '/opt/build/r epo/src/pages'
resolve '../components/Layout' in '/opt/build/repo/src/pages'
using description file: /opt/build/repo/package.json (relative path: ./src/p ages)
Field 'browser' doesn't contain a valid alias configuration
```

僕のローカルファイル上には、たしかに`Layout.js`は存在するのに`Can't resolve '../components/Layout'`と言われてしまっている。

心当たりがあったのは、Gatsby Starter Templateを利用するなかで、`layout.js`というコンポーネントのファイル名を`Layout.js`に変えていたこと。そこでGitHub上でcomponentsディレクトリを見てみると、ファイル名が`layout.js`のままになってしまっている。


## Gitがcase-sensitiveじゃなかった
そうだ、Gitのデフォルト設定では、大文字小文字の変更を判別してくれないのだった。つまり、`layout.js`⇒`Layout.js`の変更が無視されていた。ローカルでは問題なく表示されているが、それがリモートへ反映されていなかったというわけだ。

### 対処法
以下のコマンドを実行すれば大文字小文字の変更まで判別してくれるようになる。

```
git config core.ignorecase false
```

古いファイルがGit上で残ってしまっている場合は、さらに
```
git rm --cached ファイル名
```
で消しておく。