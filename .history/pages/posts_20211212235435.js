import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
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
        {/* <Section>
          <PostsGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </PostsGridItem>
        </Section> */}

        {/* <Section delay={0.1}>
          <PostsGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </PostsGridItem>
        </Section>
        <Section delay={0.1}>
          <PostsGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
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
          <PostsGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </PostsGridItem>
        </Section>
        <Section delay={0.3}>
          <PostsGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
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
          <PostsGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </PostsGridItem>
        </Section>
        <Section delay={0.5}>
          <PostsGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          > */}
            {/* Automatic audio file tagging tool using FreeDB for Windows
          </PostsGridItem>
        </Section>
        <Section delay={0.6}>
          <PostsGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </PostsGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Post
