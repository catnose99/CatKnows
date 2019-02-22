---
title: "CatKnowsマークダウン チートシート"
date: "2019-02-21T22:12:03.284Z"
category: "dev"
description: "このブログで使っているマークダウン表現のチートシートです。"
emoji: "🐣"
---

ブログ「CatKnows」のマークダウンチートシートをまとめておく。
完全に僕自身の参照用のものだ。ちなみにブログのソースコードは[GitHub上で公開](https://github.com/catnose99/CatKnows)している。

------
### 見出し

```
## Heading2
### Heading3
#### Heading4
##### Heading5
```
## Heading2
### Heading3
#### Heading4
##### Heading5

------
### リスト
```
- Sample text
- Sample text
- Sample text
  - Sample text
  - Sample text
```
- Sample text
- Sample text
- Sample text
  - Sample text
  - Sample text

```
1. Sample text
2. Sample text
3. Sample text
4. Sample text
5. Sample text
```
1. Sample text
2. Sample text
3. Sample text
4. Sample text
5. Sample text

------
### インラインテキスト装飾
```
*イタリック*
**太字**
~~打ち消し線~~
インラインで`code`を挿入する
こちらは[僕のTwitterのリンク](https://twitter.com/catnose99)
```

*イタリック*

**太字**

~~打ち消し線~~

インラインで`code`を挿入する

こちらは[僕のTwitterのリンク](https://twitter.com/catnose99)です。

------
### テーブル
```
| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |
```

| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

-----
### コード

<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">```css
  body {
    color: red;
  }
```
</code></pre></div>

```css:title=style.css
  body {
    color: red;
  }
```


-----
### 画像
```
![画像サンプル](./image.jpg)
```

![画像サンプル](./image.jpg)

画像ファイルは投稿のindex.mdと同フォルダ内に配置する
#### 画像のサイズ調整
```
[[imageMedium]]
| ![画像中](./image.jpg)

[[imageSmall]]
| ![画像小](./image.jpg)
```
[[imageMedium]]
| ![画像中](./image.jpg)

[[imageSmall]]
| ![画像小](./image.jpg)

-----
### ボックス

```
[[simple | Hello ]]
| Some note here

[[info | Memo]]
| Some note here

[[notice | Note]]
| Some note here

[[alert | 🙅 Danger! ]]
| - You can also use lists
| - like this

```

[[simple | Hello ]]
| Some note here

[[info | Memo]]
| Some note here

[[notice | Note]]
| Some note here

[[alert | 🙅 Danger! ]]
| - You can also use lists
| - like this


-----
### 水平線

```
-----
```

-----
### Youtube埋め込み
```
`youtube:https://www.youtube.com/embed/19R93fiKyRA`
```

`youtube:https://www.youtube.com/embed/19R93fiKyRA`

### ツイート埋め込み
```
//scriptコードは除くこと
<blockquote class="twitter-tweet" data-lang="ja">
  <p lang="ja" dir="ltr">だれでも簡単に美しいWebポートフォリオを作成できるサービス RESUME（レジュメ）をリリースしました🎉<br><br>イラストレーター、カメラマン、デザイナー、エンジニアだけでなく、研究者、マーケターなどなど誰でも使えるサービスです！<br>ポートフォリオを作りたい人に届け〜<a href="https://t.co/DtTLqSqs7I">https://t.co/DtTLqSqs7I</a> <a href="https://t.co/Oq7ib0Um3k">pic.twitter.com/Oq7ib0Um3k</a></p>&mdash; CatNose😺 (@catnose99) <a href="https://twitter.com/catnose99/status/1090554889816555520?ref_src=twsrc%5Etfw">2019年1月30日</a>
</blockquote>
```
<blockquote class="twitter-tweet" data-lang="ja">
  <p lang="ja" dir="ltr">だれでも簡単に美しいWebポートフォリオを作成できるサービス RESUME（レジュメ）をリリースしました🎉<br><br>イラストレーター、カメラマン、デザイナー、エンジニアだけでなく、研究者、マーケターなどなど誰でも使えるサービスです！<br>ポートフォリオを作りたい人に届け〜<a href="https://t.co/DtTLqSqs7I">https://t.co/DtTLqSqs7I</a> <a href="https://t.co/Oq7ib0Um3k">pic.twitter.com/Oq7ib0Um3k</a></p>&mdash; CatNose😺 (@catnose99) <a href="https://twitter.com/catnose99/status/1090554889816555520?ref_src=twsrc%5Etfw">2019年1月30日</a>
</blockquote>