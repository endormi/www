import React, { Fragment } from "react";
import Headroom from "react-headroom";
import { Flex, Image } from "rebass";
import styled from "styled-components";
import { SectionLinks } from "react-scroll-section";
import Fade from "react-reveal/Fade";
import RouteLink from "./RouteLink";
import Logo from "../icon/icon.png";

const capitalize = s => {
  return s && s[0].toUpperCase() + s.slice(1);
};

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => {
      return props.theme.colors.primaryDark;
    }};
  }

  position: absolute;
  width: 100%;
`;

const formatLinks = allLinks => {
  return Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === "home";
      return isHome
        ? {
            ...acc,
            home: value
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }]
          };
    },
    { links: [], home: null }
  );
};

const Header = () => {
  return (
    <HeaderContainer>
      <Fade top>
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          p={3}
        >
          <SectionLinks>
            {({ allLinks }) => {
              const { home, links } = formatLinks(allLinks);

              const homeLink = home && (
                <Image
                  src={Logo}
                  width="75px"
                  alt="Portfolio Logo"
                  onClick={home.onClick}
                  stssyle={{
                    cursor: "pointer"
                  }}
                />
              );
              const navLinks = links.map(({ name, value }) => {
                return (
                  <RouteLink
                    key={name}
                    onClick={value.onClick}
                    selected={value.selected}
                  >
                    {name}
                  </RouteLink>
                );
              });

              return (
                <Fragment>
                  {homeLink}
                  <Flex mr={[0, 3]}>{navLinks}</Flex>
                </Fragment>
              );
            }}
          </SectionLinks>
        </Flex>
      </Fade>
    </HeaderContainer>
  );
};

export default Header;
