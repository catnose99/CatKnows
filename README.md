<p>
  Forked from 
  <a href="https://github.com/gatsbyjs/gatsby-starter-blog">
    Gatsby's blog starter <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="20" style="vertical-align: middle;" />
  </a>
</p>

## Development

```
gatsby develop
```

## Markdown

There are some custom blocks for Markdown(will be automatically converted to styled blocks).

### Set meta data

You have to set post meta data in frontmatter(At the top of each markdown file).

```
title: Example title
date: "2019-01-28T22:40:32.169Z"
description: "This text will be used as meta/og description"
category: "design" //set just 1category
emoji: "😁"  //converted to Twemoji and used as HeroImage
```

### Custom Blocks

#### Info block

```
[[info | title here]]
| content here
```

#### Alert block

```
[[alert | title here]]
| content here
```

#### Notice block

```
[[notice | title here]]
| content here
```

#### Advance

You can use lists like this

```
[[alert | Danger! ]]
| - Don't smoke.
| - Don't each to much.
| - Don't stay home.
```
