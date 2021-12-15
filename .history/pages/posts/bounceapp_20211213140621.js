import {
    Box,
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/posts'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Posts = () => (
    <Layout title="Bounce App">
      <Container>
        <Title>
          BounceApp <Badge>2021</Badge>
        </Title>
        <P>
        A little app from ZURB that lets people add feedback to any interface, 
        and toss that back and forth with other people.
        </P>
        <List ml={4} my={4}>
          <ListItem mb={4}>
            <Meta>Why</Meta>
            <span>For most creative people, asking for feedback is difficult. After all, who wants to open themselves up to criticism?
            It's a vital part of the design process, though, and ultimately everybody on the team is better off for it.</span>
          </ListItem>
          <ListItem>
            <Meta>HOW</Meta>
            <span>Bounce was designed to be easy to use, but if you're not quite sure how everything works we're here for you. Follow these simple steps:</span>
          </ListItem>
  
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>How to use it</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
              <Badge mr={2}>STEP 1</Badge>
              <b>Grab a screenshot.</b>Type in the web page address and click the "Grab Screenshot" button.
          </ListItem>
  
          <ListItem>
              <Badge mr={2}>STEP 2</Badge>
              <b>Grab a screenshot.</b>Type in the web page address and click the "Grab Screenshot" button.
          </ListItem>
        </UnorderedList>
  
      </Container>
    </Layout>
  )
  
  export default Posts
  