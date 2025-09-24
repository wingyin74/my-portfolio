import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places i’ve worked.
    </Heading>
    <Text variant="description">
      Since 2017, I've had the privilege to work with several companies and clients that have enabled me
      to hone my skills and talents in full-stack development and AI integration. These experiences have shaped my
      passion for building scalable digital solutions. Currently I am working as a{' '}
      <Link href="https://www.upwork.com/" target="_blank" rel="noreferrer">
        Freelance Developer
      </Link>
      {' '}delivering AI-powered applications worldwide.
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
