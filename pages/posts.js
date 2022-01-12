import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostsGridItem } from '../components/grid-item'

import thumbVirusTotal from '../public/images/contents/post-virustotal.png'

const Posts = () => (
  <Layout title="posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Section>
          <PostsGridItem id="virustotal" title="Virus Total" thumbnail={thumbVirusTotal}>
          Full page screenshot on one click
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem id="virustotal" title="Virus Total" thumbnail={thumbVirusTotal}>
          Downloading without any issues
          </PostsGridItem>
        </Section>

        <Section delay={0.1}>
        <PostsGridItem id="virustotal" title="Virus Total" thumbnail={thumbVirusTotal}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="virustotal"
            title="Virus Total"
            thumbnail={thumbVirusTotal}
          >
            An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section delay={0.1}>
        <PostsGridItem id="virustotal" title="Virus Total" thumbnail={thumbVirusTotal}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="virustotal"
            title="Virus Total"
            thumbnail={thumbVirusTotal}
          >
            An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Section delay={0.3}>
        <PostsGridItem id="virustotal" title="Virus Total" thumbnail={thumbVirusTotal}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="virustotal"
            title="Virus Total"
            thumbnail={thumbvirustotal}
          >
            An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section delay={0.3}>
        <PostsGridItem id="virustotal" title="Virus Total" thumbnail={thumbVirusTotal}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="virustotal"
            title="Virus Total"
            thumbnail={thumbVirusTotal}
          >
            An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old Posts
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Section delay={0.5}>
          <PostsGridItem id="virustotal" title="Virus Total" thumbnail={thumbVirusTotal}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="virustotal"
            title="Virus Total"
            thumbnail={thumbVirusTotal}
          >
            An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section delay={0.5}>
        <PostsGridItem id="virustotal" title="Virus Total" thumbnail={thumbVirusTotal}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="virustotal"
            title="Virus Total"
            thumbnail={thumbVirusTotal}
          >
            An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section delay={0.6}>
        <PostsGridItem id="virustotal" title="Virus Total" thumbnail={thumbVirusTotal}>
          An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
        <Section>
          <PostsGridItem
            id="virustotal"
            title="Virus Total"
            thumbnail={thumbVirusTotal}
          >
            An Instagram clone with React and JavaScript!
          </PostsGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
