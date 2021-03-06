import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


import thumbGoogleNextjs from '../public/images/projects/google-nextjs.jpg'
import thumbNetflixRedux from '../public/images/projects/netflix-redux.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[2, 2, 2]} gap={7}>
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
            githubSource="https://github.com/devhugoregadas/netflix-clone/tree/master"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Airbnb Next.js"
            thumbnail={thumb500PaidUsers}
            liveView="https://airbnb-clone-nextjs-eight.vercel.app"
            githubSource="https://github.com/devhugoregadas/google-docs-nextjs-tailwind"
          />
          <GridItem
            title="I stopped setting a financial goal for my SaaS"
            thumbnail={thumbFinancialGoal}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
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
