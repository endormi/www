import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';

const Background = () => {
  return (
    <div>
      <Triangle color="primaryDark" height={['25vh', '28vh']} width={['75vw', '65vw']} invertX />

      <Triangle color="#b2b7bb" height={['20vh', '25vh']} width={['80vw', '60vw']} invertY />
    </div>
  );
};

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  return (
    <Section.Container id="home" Background={Background}>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            contentfulAbout {
              name
              roles
              socialLinks {
                id
                url
                name
                fontAwesomeIcon
              }
            }
          }
        `}
        render={data => {
          const { name, socialLinks, roles } = data.contentfulAbout;

          return (
            <Fragment>
              <Heading
                textAlign="center"
                as="h2"
                color="primary"
                fontSize={[5, 6, 8]}
                mb={[3, 4, 5]}
              >
                {`Hello, I'm ${name}!`}
              </Heading>

              <Heading
                as="h2"
                color="primary"
                fontSize={[4, 5, 6]}
                mb={[3, 5]}
                textAlign="center"
                style={centerHorizontally}
              >
                <TextLoop interval={5000}>
                  {roles
                    .sort(() => {
                      return Math.random() - 0.5;
                    })
                    .map(text => {
                      return (
                        <Text width={[300, 500]} key={text}>
                          {text}
                        </Text>
                      );
                    })}
                </TextLoop>
              </Heading>

              <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
                {socialLinks.map(({ id, ...rest }) => {
                  return (
                    <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                      <SocialLink {...rest} />
                    </Box>
                  );
                })}
              </Flex>
            </Fragment>
          );
        }}
      />
    </Section.Container>
  );
};

export default LandingPage;
