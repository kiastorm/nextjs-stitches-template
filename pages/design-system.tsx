import { Box } from '@design-system/box'
import { Button } from '@design-system/button'
import { Container } from '@design-system/container'
import { Flex } from '@design-system/flex'
import { Grid } from '@design-system/grid'
import { Heading } from '@design-system/heading'
import { Image } from '@design-system/image'
import { Paragraph } from '@design-system/paragraph'
import { Section } from '@design-system/section'
import { Separator } from '@design-system/separator'
import { Sub } from '@design-system/sub'
import { Sup } from '@design-system/sup'
import { Text } from '@design-system/text'
import { TextField } from '@design-system/text-field'
import { ArrowRightIcon, PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

const Home = () => {
  return (
    <Box>
      <Section size="3">
        <Container size="2">
          <Heading id="text" size="3" css={{ mb: '$4', scrollMarginTop: '$7' }}>
            Next.js with TypeScript, ESLint, Jest &amp; Modulz Design System.
          </Heading>
          <Paragraph>
            This template gets you set up with everything you need to build a
            frontend project with Next.js, TypeScript, Stitches &amp; and
            Modulz&apos; design system as a starting point for your own.
          </Paragraph>
          <Paragraph>
            All credit goes to the contributors of the projects that make this
            possible!
          </Paragraph>
        </Container>
      </Section>
      <Section size="3">
        <Container size="2">
          <Heading id="text" size="4" css={{ scrollMarginTop: '$7' }}>
            Text
          </Heading>
          <Separator size="2" css={{ my: '$6' }} />
          <Flex css={{ fd: 'column', gap: '$4' }}>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h1"
                css={{ fontWeight: 500, lineHeight: '55px' }}
              >
                The quick brown fox
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="8"
                as="h2"
                css={{ fontWeight: 500, lineHeight: '37px' }}
              >
                The quick brown fox jumped
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="7"
                as="h3"
                css={{ fontWeight: 500, lineHeight: '30px' }}
              >
                The quick brown fox jumped
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="6" as="p" css={{ lineHeight: '30px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="5" as="p" css={{ lineHeight: '29px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="4" as="p" css={{ lineHeight: '29px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="2" as="p" css={{ lineHeight: '20px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="1" as="p" css={{ lineHeight: '20px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
          </Flex>
          <Flex css={{ fd: 'column', gap: '$4' }}>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="red"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="crimson"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="pink"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="purple"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="violet"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="indigo"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="blue"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="cyan"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="teal"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="green"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="lime"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="yellow"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="orange"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="gold"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="bronze"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="gray"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="9"
                as="h2"
                variant="contrast"
                gradient
                css={{
                  fontWeight: 500,
                  lineHeight: '68px',
                  WebkitBackgroundClip: 'text',
                }}
              >
                The quick brown fox jumped over the lazy dog
              </Text>
            </Flex>
          </Flex>
          <Flex css={{ fd: 'column', gap: '$4', mt: '$6' }}>
            <Flex css={{ ai: 'center' }}>
              <Text size="6" as="h1" variant="red" css={{ lineHeight: '30px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="6"
                as="h2"
                variant="crimson"
                css={{ lineHeight: '30px' }}
              >
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="6"
                as="h3"
                variant="pink"
                css={{ lineHeight: '30px' }}
              >
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="6"
                as="p"
                variant="purple"
                css={{ lineHeight: '30px' }}
              >
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="6"
                as="p"
                variant="violet"
                css={{ lineHeight: '30px' }}
              >
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="6"
                as="p"
                variant="indigo"
                css={{ lineHeight: '30px' }}
              >
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="6" as="p" variant="blue" css={{ lineHeight: '30px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="6" as="p" variant="cyan" css={{ lineHeight: '30px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="6" as="p" variant="teal" css={{ lineHeight: '30px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="6"
                as="p"
                variant="green"
                css={{ lineHeight: '30px' }}
              >
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="6" as="p" variant="lime" css={{ lineHeight: '30px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="6"
                as="p"
                variant="yellow"
                css={{ lineHeight: '30px' }}
              >
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="6"
                as="p"
                variant="orange"
                css={{ lineHeight: '30px' }}
              >
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text size="6" as="p" variant="gold" css={{ lineHeight: '30px' }}>
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
            <Flex css={{ ai: 'center' }}>
              <Text
                size="6"
                as="p"
                variant="bronze"
                css={{ lineHeight: '30px' }}
              >
                The quick brown fox jumped over the lazy dog.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section size="3">
        <Container size="2">
          <Heading id="typography" size="4" css={{ scrollMarginTop: '$7' }}>
            Typography
          </Heading>
          <Separator size="2" css={{ my: '$6' }} />
          <Flex css={{ fd: 'column', gap: '$4' }}>
            <Heading size="4" as="h1">
              This is a heading size 4
            </Heading>
            <Heading size="3" as="h1">
              This is a heading size 3
            </Heading>
            <Heading size="2" as="h1">
              This is a heading size 2
            </Heading>
            <Heading size="1" as="h1">
              This is a heading size 1
            </Heading>
            <Paragraph size="2">
              This is a Paragraph size 2. Design in the target medium. Prototype
              with real components. Handoff production code.
            </Paragraph>
            <Paragraph size="1">
              This is a Paragraph size 1. A really long paragraph of text, to
              demonstrate prose text, like for example, the kind you might read
              in a blog post. The reason we&apos;re using prose here is because
              the most common use case for this container size is longform text.
              So we&apos;re previewing some longform text here so we can make
              sure the container width provides an optimal line length for this
              font size.
            </Paragraph>
            <Paragraph>
              This is a Sup and Sub demo. The kind you might read in a blog
              post.<Sup>1</Sup> This is a really long paragraph of text, to
              demonstrate prose text.<Sub>1</Sub>
            </Paragraph>
          </Flex>
        </Container>
      </Section>
      <Section size="3">
        <Container size="2">
          <Heading id="button" size="4" css={{ scrollMarginTop: '$7' }}>
            Button
          </Heading>
          <Separator size="2" css={{ my: '$6' }} />
          <Flex css={{ gap: '$6' }}>
            <Button>Button</Button>
            <Button size="2">Button</Button>
            <Button size="3">Button</Button>
          </Flex>
          <Flex css={{ mt: '$6', gap: '$6' }}>
            <Button>Button</Button>
            <Button variant="blue">Important</Button>
            <Button variant="green">Secure</Button>
            <Button variant="red">Warning</Button>
          </Flex>
          <Flex css={{ mt: '$6', gap: '$6' }}>
            <Button ghost>Button</Button>
            <Button ghost variant="blue">
              Important
            </Button>
            <Button ghost variant="green">
              Secure
            </Button>
            <Button ghost variant="red">
              Warning
            </Button>
          </Flex>
          <Box
            css={{
              position: 'relative',
              mt: '$6',
            }}
          >
            <Image src="https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
            <Box
              css={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                m: '$4',
              }}
            >
              <Button variant="transparentWhite">Transparent White</Button>
            </Box>
          </Box>
          <Box
            css={{
              position: 'relative',
              mt: '$6',
            }}
          >
            <Image src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
            <Box
              css={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                m: '$4',
              }}
            >
              <Button variant="transparentBlack">Transparent Black</Button>
            </Box>
          </Box>
          <Flex css={{ mt: '$6', gap: '$6' }}>
            <Button variant="red" disabled>
              Disabled
            </Button>
            <Button variant="red" state="active">
              Active
            </Button>
            <Button variant="red" state="waiting" disabled>
              Waiting
            </Button>
          </Flex>
          <Flex css={{ gap: '$6', mt: '$6' }}>
            <Button>
              <Box
                css={{
                  mr: '$1',
                }}
              >
                <PlusIcon />
              </Box>
              Button
            </Button>
            <Button variant="blue">
              Button
              <Box
                css={{
                  ml: '$1',
                }}
              >
                <ArrowRightIcon />
              </Box>
            </Button>
            <Button variant="green">
              <Box
                css={{
                  mr: '$1',
                }}
              >
                <PlusIcon />
              </Box>
              Button
              <Box
                css={{
                  ml: '$1',
                }}
              >
                <ArrowRightIcon />
              </Box>
            </Button>
          </Flex>
        </Container>
      </Section>
      <Section size="3">
        <Container size="2">
          <Heading id="container" size="4" css={{ scrollMarginTop: '$7' }}>
            Container
          </Heading>
          <Separator size="2" css={{ my: '$6' }} />
        </Container>
        <Container size="1">
          <Heading size="3" css={{ marginBottom: '$3' }}>
            Size 1
          </Heading>
          <Box
            css={{
              p: '$5',
              border: '1px solid $slate6',
              borderRadius: '$3',
            }}
          >
            <form>
              <TextField
                type="email"
                size="2"
                placeholder="Email"
                autoComplete="off"
                css={{ mb: '$3' }}
              />
              <TextField
                type="password"
                size="2"
                placeholder="Password"
                autoComplete="off"
                css={{ mb: '$3' }}
              />
              <Flex css={{ ai: 'center', jc: 'space-between' }}>
                <Text size="2" css={{ color: '$slate11' }}>
                  Forgot password
                </Text>
                <Button size="2" variant="blue">
                  Log in
                </Button>
              </Flex>
            </form>
          </Box>
        </Container>
        <Container size="2" css={{ my: '$9' }}>
          <Heading size="3" css={{ marginBottom: '$3' }}>
            Size 2
          </Heading>
          <Paragraph>
            This is a really long paragraph of text, to demonstrate prose text,
            like for example, the kind you might read in a blog post. The reason
            we&apos;re using prose here is because the most common use case for
            this container size is longform text. So we&apos;re previewing some
            longform text here so we can make sure the container width provides
            an optimal line length for this font size.
          </Paragraph>
        </Container>
        <Container size="3" css={{ my: '$9' }}>
          <Heading size="3" css={{ marginBottom: '$3' }}>
            Size 3
          </Heading>
          <Grid
            css={{
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '$7',
            }}
          >
            <Box>
              <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                This is a much shorter paragraph of text, to demonstrate narrow
                text container. The reason we&apos;re using text here is because
                one common use case for this container size is a 3-up grid.
              </Text>
            </Box>
            <Box>
              <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                This is a much shorter paragraph of text, to demonstrate narrow
                text container. The reason we&apos;re using text here is because
                one common use case for this container size is a 3-up grid.
              </Text>
            </Box>
            <Box>
              <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                This is a much shorter paragraph of text, to demonstrate narrow
                text container. The reason we&apos;re using text here is because
                one common use case for this container size is a 3-up grid.
              </Text>
            </Box>
          </Grid>
        </Container>
        <Container size="4">
          <Heading size="3" css={{ marginBottom: '$3' }}>
            Size 4
          </Heading>
          <Text as="p" size="3" css={{ ta: 'center', bc: '$slate3', py: '$2' }}>
            No max width
          </Text>
        </Container>
      </Section>
      <Section size="3">
        <Container size="2">
          <Heading id="textField" size="4" css={{ scrollMarginTop: '$7' }}>
            TextField
          </Heading>
          <Separator size="2" css={{ my: '$6' }} />
          <Flex css={{ ai: 'flex-start', gap: '$6' }}>
            <TextField size="1" placeholder="Size 1" />
            <TextField size="2" placeholder="Size 2" />
          </Flex>
          <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
            <TextField size="1" placeholder="Ghost" variant="ghost" />
            <TextField size="2" placeholder="Ghost" variant="ghost" />
          </Flex>
          <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
            <TextField placeholder="Invalid" state="invalid" />
            <TextField placeholder="Valid" state="valid" />
          </Flex>
          <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
            <TextField placeholder="Cursor default" cursor="default" />
            <TextField placeholder="Cursor text" cursor="text" />
          </Flex>
          <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
            <TextField placeholder="Read only placeholder" readOnly />
            <TextField
              placeholder="Read only value"
              defaultValue="100"
              readOnly
            />
            <TextField placeholder="Disabled placeholder" disabled />
            <TextField
              placeholder="Disabled value"
              defaultValue="100"
              disabled
            />
          </Flex>
        </Container>
      </Section>
    </Box>
  )
}

export default Home
