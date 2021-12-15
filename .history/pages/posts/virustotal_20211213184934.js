import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import { Title, Meta, PostImage } from '../../components/posts'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  
  const Posts = () => (
    <Layout title="Virus Total">
      <Container>
        <Title>
          VirusTotal <Badge>2021</Badge>
        </Title>
        <P>
        There are countless programs to download, many of which are extremely useful and many of which are completely free. 
        However, you must exercise caution when using new tools to avoid being scammed or injured. This is where <b>VirusTotal</b> comes in!
        </P>
        <List ml={4} my={4}>
          <ListItem mb={4}>
            <Meta>HOW IT WORKS</Meta>
            <span>VirusTotal analyze items using over 70 antivirus scanners, URL/domain blocklisting services, 
            and a variety of tools to extract signals from the content under investigation.</span>
          </ListItem>
          <ListItem>
            <Meta>HOW</Meta>
            <span>Bounce was designed to be easy to use, but if you're not quite sure how everything works we're here for you. Follow these simple steps:</span>
          </ListItem>
          <Meta>START</Meta>
          <Link href="https://bounceapp.com" target="_blank">
            CLICK HERE 
            <ExternalLinkIcon mx="2px" />
          </Link>
  
        </List>
  
        <Heading as="h4" fontSize={18} my={6}>
          <Center>HOW TO USE IT</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
              <Badge mr={2}>STEP 1</Badge>
              <b>Grab a screenshot.</b> Type in the web page address and click the <b>"Grab Screenshot"</b> button.
              <SimpleGrid mt={2} columns={1} gap={2}>
        <PostImage src="/images/contents/post-bounceapp-step1.jpg" alt="bounceapp" />
      </SimpleGrid>
          </ListItem>
  
          <ListItem>
              <Badge mr={2}>STEP 2</Badge>
              <b>Add your name.</b> Type in the name you want to show on your notes. We'll save it until you change it.
        <SimpleGrid mt={2} columns={1} gap={2}>
              <PostImage src="/images/contents/post-bounceapp-step2.jpg" alt="bounceapp" />
        </SimpleGrid>
          </ListItem>

          <ListItem>
              <Badge mr={2}>STEP 3</Badge>
              <b>Make some notes.</b> Click anywhere on your screenshot, and type in what you want to say.
        <SimpleGrid mt={2}>
              <PostImage src="/images/contents/post-bounceapp-step3.jpg" alt="bounceapp" />
        </SimpleGrid>
          </ListItem>
  
          <ListItem>
              <Badge mr={2}>STEP 4</Badge>
              <b>Share your feedback.</b> Click the <b>"Save"</b> button in the top right corner to finalize this Bounce
        <SimpleGrid mt={2}>
              <PostImage src="/images/contents/post-bounceapp-step4.jpg" alt="bounceapp" />
        </SimpleGrid>
          </ListItem>

          <ListItem>
              <Badge mr={2}>STEP 5</Badge>
              <b>Make some notes.</b> Copy the URL that shows up under <b>"Share this feedback"</b> and put it anywhere you want.
        <SimpleGrid mt={2}>
              <PostImage src="/images/contents/post-bounceapp-step5.jpg" alt="bounceapp" />
        </SimpleGrid>
          </ListItem>
  
          <ListItem>
              <Badge mr={2}>STEP 6 </Badge>
              <b>Watch it Bounce!</b> The people you've shared your page with can make their own notes, save them, and bounce them!
        <SimpleGrid mt={2}>
              <PostImage src="/images/contents/post-bounceapp-step6.jpg" alt="bounceapp" />
        </SimpleGrid>
          </ListItem>
        </UnorderedList>
  
      </Container>
    </Layout>
  )
  
  export default Posts
  