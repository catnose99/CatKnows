import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import ContentWrapper from "./ContentWrapper";
import svgNew from "../svg/categories/new.svg";
import svgDesign from "../svg/categories/design.svg";
import svgDev from "../svg/categories/dev.svg";
import svgCollection from "../svg/categories/collection.svg";
import svgIdea from "../svg/categories/idea.svg";

const Nav = styled.nav`
  display: block;
  margin: 0;
  padding: 1.5em 0;
`;

const CategoryItemList = styled.ul`
  display: flex;
`;

const CategoryItem = styled.li`
  width: 70px;
  margin: 0 20px 0 0;
  text-align: center;
  .cat-item__link {
    text-decoration: none;
    color: #fff;
  }
  .cat-item__image {
    padding: 2px;
    background: ${props => props.theme.colors.blackLight};
    border-radius: 50%;
    position: relative;
    img {
      position: relative;
      background: ${props => props.theme.colors.blackLight};
      border-radius: 50%;
      display: block;
      z-index: 2;
    }
  }
  .cat-item__name {
    margin-top: 8px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: rgb(114, 125, 134);
  }
  &.active {
    .cat-item__image:after {
      content: "";
      position: absolute;
      display: block;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${props => props.theme.colors.gradient};
      animation: rotating 2s linear infinite;
    }
    img {
      border: solid 2px ${props => props.theme.colors.background};
    }
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const CategoryLink = ({ catName, catIcon, catLink, path }) => {
  return (
    <CategoryItem className={catLink === path && "active"}>
      <Link to={catLink} className="cat-item__link">
        <div className="cat-item__image">
          <img src={catIcon} alt={catName} />
        </div>
        <div className="cat-item__name">{catName}</div>
      </Link>
    </CategoryItem>
  );
};

const CategoryMenu = ({ location }) => {
  const path = location.pathname;
  return (
    <Nav>
      <ContentWrapper>
        <CategoryItemList>
          <CategoryLink
            catName="New"
            catIcon={svgNew}
            catLink="/"
            path={path}
          />
          <CategoryLink
            catName="Design"
            catIcon={svgDesign}
            catLink="/a"
            path={path}
          />
          <CategoryLink
            catName="Dev"
            catIcon={svgDev}
            catLink="/a"
            path={path}
          />
          <CategoryLink
            catName="Idea"
            catIcon={svgIdea}
            catLink="/a"
            path={path}
          />
          <CategoryLink
            catName="Collection"
            catIcon={svgCollection}
            catLink="/my-second-post/"
            path={path}
          />
        </CategoryItemList>
      </ContentWrapper>
    </Nav>
  );
};

export default CategoryMenu;
