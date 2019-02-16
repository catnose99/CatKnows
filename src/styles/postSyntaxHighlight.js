import { css } from "styled-components";

const boxPaddingSide = "1.2em";

const SyntaxHighlightStyle = css`
  .gatsby-highlight {
    margin: 1.5em 0;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      margin: 1.5em -${props => props.theme.sideSpace.contentSmall};
    }
  }
  code[class*="language-"],
  pre[class*="language-"] {
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: normal;
    font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 14.5px;
    color: #4cb4e6;
    text-shadow: none;
  }
  pre[class*="language-"],
  :not(pre) > code[class*="language-"] {
    background: ${props => props.theme.colors.blackLight};
    border-radius: 7px;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      border-radius: 0;
    }
  }
  pre[class*="language-"] {
    padding: 1.4em ${boxPaddingSide};
    overflow: auto;
  }

  pre[class*="language-"] {
    position: relative;
  }
  pre[class*="language-"] code {
    white-space: pre;
    display: block;
  }

  :not(pre) > code[class*="language-"] {
    padding: 0.15em 0.2em 0.05em;
    border-radius: 0.3em;
    border: 0.13em solid #7a6652;
    box-shadow: 1px 1px 0.3em -0.1em #000 inset;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: rgba(255, 255, 255, 0.4);
  }
  .token.operator,
  .token.boolean,
  .token.number {
    color: #a77afe;
  }
  .token.attr-name,
  .token.string {
    color: #f39b3b;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #f39b3b;
  }
  .token.selector,
  .token.inserted {
    color: #3eda86;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword,
  .token.important,
  .token.deleted {
    color: #fd7372;
  }
  .token.regex,
  .token.statement {
    color: #4cb4e6;
  }
  .token.placeholder,
  .token.variable {
    color: #fff;
  }
  .token.important,
  .token.statement,
  .token.bold {
    font-weight: 600;
  }
  .token.punctuation {
    color: #bebec5;
  }
  .token.entity {
    cursor: help;
  }
  .token.italic {
    font-style: italic;
  }

  code.language-markup {
    color: #f9f9f9;
  }
  code.language-markup .token.tag {
    color: #fd7372;
  }
  code.language-markup .token.attr-name {
    color: #3eda86;
  }
  code.language-markup .token.attr-value {
    color: #f39b3b;
  }
  code.language-markup .token.style,
  code.language-markup .token.script {
    color: #4cb4e6;
  }
  code.language-markup .token.script .token.keyword {
    color: #4cb4e6;
  }

  /* Line highlight plugin */
  .gatsby-highlight-code-line {
    background-color: rgba(0, 0, 0, 0.3);
    display: table;
    min-width: calc(100% + ${boxPaddingSide} * 2);
    margin-right: -${boxPaddingSide};
    margin-left: -${boxPaddingSide};
    padding-left: 5px;
    border-left: 5px solid #4cb4e6;
  }
`;

export default SyntaxHighlightStyle;
