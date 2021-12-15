import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, ListItem, Link, Button, Icon } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
    <LinkOverlay href={href} target="_blank">
        <Text mb={4} mt={4}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={}>{children}</Text>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />

            <Link href={href} target="_blank">
              <Button
                variant="ghost"
                colorScheme="#da4167"
                rightIcon={<Icon as={IoLogoGithub} />}
              >
                Source Code
              </Button>
            </Link>
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
          <Text mt={3} fontSize={20}>
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
        border-radius: 25px;
      }
    `}
  />
)
