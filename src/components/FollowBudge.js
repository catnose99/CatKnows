import React from "react";
import styled from "styled-components";
import svgTwitterWhite from "../svg/socials/twitter-white.svg";

const Follow = styled.div`
  margin-top: 2em;
  text-align: left;
`;

const FollowLink = styled.a`
  display: inline-flex;
  align-items: center;
  background: #20a8ea;
  color: #fff;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  .follow-link-text {
    padding: 5px 7px;
    background: #dfebf3;
    color: #445271;
    font-size: 14px;
    transition: 0.2s;
  }
  img {
    display: block;
    width: 31px;
    padding: 0 5px;
    height: 17px;
  }
  &:hover .follow-link-text {
    background: #d3ebfb;
  }
`;

const ShareButtons = () => {
  return (
    <Follow>
      <FollowLink href="https://twitter.com/catnose99" rel="nofollow">
        <img src={svgTwitterWhite} alt="Twitter" />
        <div className="follow-link-text">@catnose99をフォロー</div>
      </FollowLink>
    </Follow>
  );
};

export default ShareButtons;
