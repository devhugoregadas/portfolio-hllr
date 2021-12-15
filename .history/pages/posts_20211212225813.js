import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectsGridItem } from '../components/grid-item'


import thumbGoogleNextjs from '../public/images/projects/google-nextjs.jpg'
import thumbNetflixRedux from '../public/images/projects/netflix-redux.jpg'
import thumbAirbnbNextjs from '../public/images/projects/airbnb-nextjs.jpg'
import thumbGoogleDocsNextjs from '../public/images/projects/google-docs-nextjs.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={7}>
          <ProjectsGridItem
            title="Google Next.js"
            thumbnail={thumbGoogleNextjs}
            liveView="https://google-nextjs-tailwind-six.vercel.app"
            githubSource="https://github.com/devhugoregadas/google-docs-nextjs-tailwind"
          />
         


          <ProjectsGridItem
            title="Netflix Redux"
            thumbnail={thumbNetflixRedux}
            liveView="https://netflix-clone-wheat-nine.vercel.app"
            githubSource="https://github.com/devhugoregadas/netflix-clone"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <ProjectsGridItem
            title="Airbnb Next.js"
            thumbnail={thumbAirbnbNextjs}
            liveView="https://airbnb-clone-nextjs-eight.vercel.app"
            githubSource="https://github.com/devhugoregadas/airbnb-clone-nextjs"
          />
          <ProjectsGridItem
            title="Google Docs Next.js"
            thumbnail={thumbGoogleDocsNextjs}
            liveView="https://google-docs-nextjs-tailwind.vercel.app"
            githubSource="https://github.com/devhugoregadas/google-docs-nextjs-tailwind"
          />
        </SimpleGrid>
      </Section>

      {/* <Section delay={0.5}>
        <SimpleGrid columns={[1, 1, 2]} gap={5}>
          <ProjectsGridItem
            title=""
            thumbnail={}
            liveView=""
            githubSource=""
          />
          <ProjectsGridItem
            title=""
            thumbnail={thumb50xFaster}
            liveView=""
            githubSource=""
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
)

export default Posts
