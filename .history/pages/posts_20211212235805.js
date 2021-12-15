import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostsGridItem } from '../components/grid-item'

import thumbBounceApp from '../public/images/contents/post-bounceapp.png'

const Post = () => (
  <Layout title="posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <PostsGridItem id="bounceapp" title="Bounce App" thumbnail={thumbBounceApp}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="bounceapp"
            title="Bounce App"
            thumbnail={thumbBounceApp}
          >
            Music recommendation app for iOS
          </PostsGridItem>
        </Section>

        <Section delay={0.1}>
        <PostsGridItem id="bounceapp" title="Bounce App" thumbnail={thumbBounceApp}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="bounceapp"
            title="Bounce App"
            thumbnail={thumbBounceApp}
          >
            Music recommendation app for iOS
          </PostsGridItem>
        </Section>
        <Section delay={0.1}>
        <PostsGridItem id="bounceapp" title="Bounce App" thumbnail={thumbBounceApp}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="bounceapp"
            title="Bounce App"
            thumbnail={thumbBounceApp}
          >
            Music recommendation app for iOS
          </PostsGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
        <PostsGridItem id="bounceapp" title="Bounce App" thumbnail={thumbBounceApp}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="bounceapp"
            title="Bounce App"
            thumbnail={thumbBounceApp}
          >
            Music recommendation app for iOS
          </PostsGridItem>
        </Section>
        <Section delay={0.3}>
        <PostsGridItem id="bounceapp" title="Bounce App" thumbnail={thumbBounceApp}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="bounceapp"
            title="Bounce App"
            thumbnail={thumbBounceApp}
          >
            Music recommendation app for iOS
          </PostsGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old Posts
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <PostsGridItem id="bounceapp" title="Bounce App" thumbnail={thumbBounceApp}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="bounceapp"
            title="Bounce App"
            thumbnail={thumbBounceApp}
          >
            Music recommendation app for iOS
          </PostsGridItem>
        </Section>
        <Section delay={0.5}>
        <PostsGridItem id="bounceapp" title="Bounce App" thumbnail={thumbBounceApp}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="bounceapp"
            title="Bounce App"
            thumbnail={thumbBounceApp}
          >
            Music recommendation app for iOS
          </PostsGridItem>
        </Section>
        <Section delay={0.6}>
          <PostsGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </PostsGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Post
