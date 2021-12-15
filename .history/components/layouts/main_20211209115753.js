import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Loader from '../gbl-pc-loader'

const LazyVoxelPc = dynamic(() => import('../gbl-pc'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={21}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hugo's homepage" />
        <meta name="author" content="Hugo Regadas" />
        <meta name="author" content="Hugo Regadas" />
        <title>Hugo Regadas - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelPc />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
