import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


import thumbGoogleNextjs from '../public/images/projects/google-nextjs.jpg'
import thumbNetflixRedux from '../public/images/projects/netflix-redux.jpg'
import thumbAirbnbNextjs from '../public/images/projects/airbnb-nextjs.jpg'
import thumbGoogleDocsNextjs from '../public/images/projects/google-docs-nextjs.jpg'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={7}>
          <GridItem
            title="Google Next.js"
            thumbnail={thumbGoogleNextjs}
            liveView="https://google-nextjs-tailwind-six.vercel.app"
            githubSource="https://github.com/devhugoregadas/google-docs-nextjs-tailwind"
          />
         


          <GridItem
            title="Netflix Redux"
            thumbnail={thumbNetflixRedux}
            liveView="https://netflix-clone-wheat-nine.vercel.app"
            githubSource="https://github.com/devhugoregadas/netflix-clone"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            title="Airbnb Next.js"
            thumbnail={thumbAirbnbNextjs}
            liveView="https://airbnb-clone-nextjs-eight.vercel.app"
            githubSource="https://github.com/devhugoregadas/airbnb-clone-nextjs"
          />
          <GridItem
            title="Google Docs Next.js"
            thumbnail={thumbGoogleDocsNextjs}
            liveView="https://google-docs-nextjs-tailwind.vercel.app"
            githubSource="https://github.com/devhugoregadas/google-docs-nextjs-tailwind"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 1, 2]} gap={5}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            iveView="https://google-docs-nextjs-tailwind.vercel.app"
            githubSource="https://github.com/devhugoregadas/google-docs-nextjs-tailwind"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=vj723NlrIQc"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
