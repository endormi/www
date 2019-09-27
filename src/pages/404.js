import React from 'react';
import { Heading, Box } from 'rebass';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => {
  return (
    <div>
      <Triangle color="backgroundDark" height={['35vh', '25vh']} width={['95vw', '60vw']} invertY />

      <Triangle color="primary" height={['25vh', '30vh']} width={['75vw', '70vw']} invertX />
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <Layout>
      <Section.Container id="404" Background={Background}>
        <Box width={[320, 400, 600]} m="auto">
          <Heading color="primaryDark" fontSize={['9rem', '13rem', '16rem']}>
            404
          </Heading>
          <Heading color="#2d5980" fontSize={['4rem', '5rem', '6rem']}>
            {"There isn't anything here"}
          </Heading>
        </Box>
      </Section.Container>
    </Layout>
  );
};

export default NotFoundPage;
