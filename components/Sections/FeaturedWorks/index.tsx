import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
import { WorkHistory } from 'config/workhistory'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const workhistory = WorkHistory

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
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
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the full-stack applications and AI-powered platforms I've built as a freelance developer, showcasing my expertise in React, AI integration, and modern web technologies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        {workhistory.map((work, index) => (
          <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
            <FeaturedCard
              idx={index}
              title={work.title}
              src={work.imageSrc}
              description={work.description}
              height={{ base: '130px', md: '225px', '2xl': '300px' }}
              ctaUrl={work.url}
              isMobile={isMobile}
            />
          </MotionGridItem>
        ))}
      </MotionGrid>
    </Stack >
  )
}

export default memo(FeaturedWorksSection)
