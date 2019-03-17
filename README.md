<p>
  Made with
  <a href="https://github.com/gatsbyjs/gatsby">
    Gatsby.js <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="20" style="vertical-align: middle;" />
  </a>
</p>

## Markdown

There are some custom blocks for Markdown(will be automatically converted to styled blocks).

### Set meta data

You have to set post meta data in frontmatter(At the top of each markdown file).

```
title: Example title
date: "2019-01-28T22:40:32.169Z"
description: "This text will be used as meta/og description"
category: "design"
emoji: "😁"
```

_cagegory: must be just 1 category_
_emoji: converted to Twemoji and used as HeroImage_

### Custom Blocks

#### Gray colored block

```
[[simple | title here]]
| content here
```

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

### Ads

When to add ads(e.g. Google Adsense) on your site,
make sure the ads are shown only on production.

```
if(process.env.NODE_ENV === "production") {
  // Ads here
}
```

### Licence
MIT (except for images/icons/blog contents)

You are not allowed to use or distribute images/icons/blogContents included in this project.