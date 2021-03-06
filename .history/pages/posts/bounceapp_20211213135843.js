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
          <ListItem>
            <Meta>Why</Meta>
            <span>For most creative people, asking for feedback is difficult. After all, who wants to open themselves up to criticism?
            It's a vital part of the design process, though, and ultimately everybody on the team is better off for it.</span>
          </ListItem>
          <ListItem>
            <Meta>HOW</Meta>
            <span>For most creative people, asking for feedback is difficult. After all, who wants to open themselves up to criticism?
            It's a vital part of the design process, though, and ultimately everybody on the team is better off for it.</span>
          </ListItem>
          <p></p>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://archive.craftz.dog/blog.odoruinu.net/2015/12/23/the-four-painters-a-video-work-created-with-deep-learning/">
              The four painters: A Video Work Created with Deep Learning{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://archive.craftz.dog/blog.odoruinu.net/2015/12/19/created-movie-with-deep-learning/">
              Deep Learningを使って映像作品を作った
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://news.ycombinator.com/item?id=10782289">
              <Badge mr={2}>Hacker News</Badge>
              The Four Painters: A Video Work Created with Deep Learning
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
  
          <ListItem>
            <Link href="https://gigazine.net/news/20151224-deep-learning-four-painters/">
              <Badge mr={2}>Gigazine</Badge>
              実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the
              four painters」
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <Box>
          <iframe
            src="https://player.vimeo.com/video/146373709"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
          />
        </Box>
  
        {/* <PostImage
          src="/images/works/the-four-painters_eyecatch.jpg"
          alt="walknote"
        />
        <PostImage src="/images/works/the-four-painters_01.jpg" alt="walknote" />
        <PostImage src="/images/works/the-four-painters_02.jpg" alt="walknote" /> */}
      </Container>
    </Layout>
  )
  
  export default Posts
  