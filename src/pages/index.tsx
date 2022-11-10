import type { NextPage } from 'next';
import Head from 'next/head';

import { Box, Text, Link as ChakraLink } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Juan Miguel Sanchez</title>
        <meta name='description' content="Mig's CMS" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Box p={12}>
          <Text fontSize={'xl'}>Juan Miguel Sanchez</Text>
          <Text fontSize={'2xl'}>Hello. I make websites.</Text>
          <Text fontSize={'xl'} px={7} pt={3}>
            <ChakraLink href={'https://github.com/jmigsan'}>Github</ChakraLink>
          </Text>
          <Text fontSize={'xl'} px={7} pt={3}>
            <ChakraLink
              href={
                'https://www.linkedin.com/in/juan-miguel-sanchez-ab884523b/'
              }
            >
              LinkedIn
            </ChakraLink>
          </Text>
        </Box>
      </main>
    </>
  );
};

export default Home;
