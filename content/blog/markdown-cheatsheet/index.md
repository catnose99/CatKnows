---
title: "CatKnowsマークダウン チートシート"
date: "2019-02-21T22:12:03.284Z"
category: "dev"
emoji: "🐣"
---

ブログ「CatKnows」のマークダウンチートシートをまとめておく。
完全に僕の参照用のものだが、GitHubでブログのソースコードを公開しているので、もしかすると参考になる人もいるかもしれない。

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