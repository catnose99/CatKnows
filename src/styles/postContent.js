import { css } from "styled-components";
import svgHeadingBar from "../svg/others/heading-bar.svg";
import svgHeadingIcon from "../svg/others/heading-icon.svg";

const postContentStyle = css`
  margin: 1.5em 0 1em;
  line-height: 1.9;

  a:hover {
    text-decoration: underline;
  }
  p {
    margin-bottom: 1em;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 35px 0 10px;
    font-weight: 600;
    line-height: 1.5;
  }
  h2 {
    position: relative;
    margin: 45px 0 12px;
    padding-left: 15px;
    font-size: 1.5em;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      display: inline-block;
      width: 10px;
      height: 40px;
      background-image: url("${svgHeadingBar}");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  h3 {
    margin: 45px 0 12px;
    font-size: 1.3em;
  }
  h4 {
    position: relative;
    padding-left: 30px;
    font-size: 1em;
    &:before {
      position: absolute;
      top: -2px;
      left: 0;
      content: "";
      display: inline-block;
      width: 25px;
      height: 25px;
      background-image: url("${svgHeadingIcon}");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  ul, ol {
    margin: 1em 0;
    p {
      margin: 0;
    }
  }
  ul {
    padding-left: 1.2em;
  }
  ul li {
    margin: .4em 0;
    list-style: disc;
  }
  ul ul {
    margin: 0;
  }
  ol {
    counter-reset: number;
    & > li {
      list-style: none;
      list-style-position: inside;
      position: relative;
      line-height: 25px;
      padding-left: 34px;
      margin: 1em 0;
      &:before {
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #5c9ee7;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        line-height: 25px;
        content: counter(number);
        counter-increment: number;
        background: ${props => props.theme.colors.highlight};
      }
    }
  }
  strong {
    font-weight: 600;
  }
  del {
    text-decoration: line-through;
  }
  hr {
    display: block;
    margin: 2em 0;
    border: none;
    border-top: dotted 3px #e1eaf3;
  }
  table {
    display: block;
    border-spacing: 2px;
    border-collapse: separate;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    width: auto;
    line-height: 1.4;
    th {
      background-color: ${props => props.theme.colors.highlight};
      color: #FFF;
      padding: 12px 15px;
      text-align: center;
      &[align="center"] {
        text-align: center;
      }
      &[align="right"] {
        text-align: right;
      }
    }
    td {
      background-color:  ${props => props.theme.colors.whitesmoke};
      color: ${props => props.theme.colors.blackLight};
      padding: 10px 15px;
    }
    thead tr {
      th:first-child {
        border-radius: 5px 0 0 0;
      }
      th:last-child {
        border-radius: 0 5px 0 0;
      }
    }
    tbody tr:last-child {
      td:first-child {
        border-radius: 0 0 0 5px;
      }
      td:last-child {
        border-radius: 0 0 5px 0;
      }
    }
  }
  .gatsby-resp-image-wrapper {
    margin: 1em 0;
    box-shadow: 0 1px 3px rgba(0,0,0,.25);
    border-radius: 4px;
    overflow: hidden;
  }
`;

export default postContentStyle;
