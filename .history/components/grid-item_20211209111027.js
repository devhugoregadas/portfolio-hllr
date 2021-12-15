import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Icon, ButtonGroup, Button } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { IoLogoGithub } from 'react-icons/io5'
import { IoMdOpen } from 'react-icons/io4'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay>
        <ButtonGroup spacing='5'>
        <Button
                variant="outline"
                colorScheme="#da4167"
                leftIcon={<Icon as={IoLogoGithub} />}
                href={href}
                mt="10px"
              >
                Code
              </Button>
              <Button
                variant="outline"
                colorScheme="#da4167"
                leftIcon={<Icon as={IoMdOpen} />}
                href={href}
                mt="10px"
              >
                Preview
              </Button>

</ButtonGroup>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 15px;
      }
    `}
  />
)
