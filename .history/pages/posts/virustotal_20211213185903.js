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
          <ListItem mb={4}>
            <Meta>FREE AND UNBIASED</Meta>
            <span>VirusTotal is free to end users for non-commercial use.</span>
          </ListItem>
          <Meta>TEST IT NOW</Meta>
          <Link href="https://www.virustotal.com/gui/home/upload" target="_blank">
            AND ENJOY BEING SAFE ON THE WEB! 
            <ExternalLinkIcon mx="2px" />
          </Link>
        </List>
      </Container>
    </Layout>
  )
  
  export default Posts
  