import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostsGridItem } from '../components/grid-item'
import {
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5'
import thumbPostBounce from '../public/images/contents/post-bounceapp.png'
import thumbPostVirus from '../public/images/contents/post-virustotal.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a front-end developer based in Geneva, Switzerland!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">^
            Hugo Regadas
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/photo-hllr.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I don&apos;t like to define myself by the work I have done.
          I define myself by the work I want to do. Skills can be taught, personality is inherent.
          I prefer to keep learning, keep challenging myself, and do interesting things that matter.

        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1990</BioYear>
          Born in Geneva, Switzerland
        </BioSection>
        <BioSection>
          <BioYear>2011</BioYear>
          Completed the Master&apos;s Program in the Automation and Robotic
          Graduate School of ATEC Siemens, Porto, Portugal
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Worked at Hospital Braga, as maintenance of medical equipment
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Worked in various differents niches, from developing a network in hotel,
          to working as a construction worker
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My devotions
        </Heading>
        <Paragraph>
        Art, Music, Gaming, Playing Guitar, Photography, Cigars and Rum.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/devhugoregadas" target="_blank">
              <Button
                variant="ghost"
                colorScheme="#da4167"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @devhugoregadas
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="www.linkedin.com/in/hugo-regadas-front-end-developer" target="_blank">
              <Button
                variant="ghost"
                colorScheme="#da4167"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Hugo Regadas
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={7} margin={7}>
          <PostsGridItem
            id="bounceapp"
            title="BounceApp"
            thumbnail={thumbPostBounce}
          >
            Full page screenshot on one click
          </PostsGridItem>
          <PostsGridItem
            id="bounceapp"
            title="VirusTotal"
            thumbnail={thumbPostVirus}
          >
            Downloading without any issues
          </PostsGridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
