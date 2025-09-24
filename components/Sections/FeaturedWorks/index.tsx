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
const MotionGrid = motion(Grid) as any
const MotionGridItem = motion(GridItem) as any

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
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="The Real View"
            src="/works/therealview.png"
            description="AI-powered platform that analyzes strata and condo documents for real estate professionals. Built with Laravel, Nuxt, PostgreSQL, and integrated OpenAI for document summarization, Stripe for payments, deployed on AWS with Cloudflare."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://therealview.ca"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="SmartStager.ai"
            description="AI-powered photo tool for real estate listings that generates staged rooms, improves lighting, and enhances image quality. Built with React, Tailwind, Supabase for user management, and Stripe for credits and payments."
            src="/works/smartstager.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://smartstager.ai"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="StrataShare"
            description="Platform for managing and sharing condo/HOA documents with secure storage and access control. Built with React, TypeScript, Tailwind, Supabase for authentication and storage, and Stripe for subscriptions."
            src="/works/stratashare.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://stratashare.ca"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Statabase"
            description="Platform providing structured player and sports data with detailed stats and insights. Built with React for the frontend, Strapi for content management, and Stripe for subscription handling."
            src="/works/statabase.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://statabase.org"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="Honest Sources"
            description="E-commerce platform specializing in premium pool and waterpark towels. Built with React and Lovable for fast development, integrated Calendary for scheduling and operations support."
            src="/works/honestsources.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://honestsources.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={6}
            title="ThreadWorks Pro"
            description="Smart textile platform for hotels that simplifies the quoting process for linens and fabrics. Built with React and Lovable, integrated Calendary to streamline client scheduling and service workflows."
            src="/works/threadworks.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://threadWorkspro.com"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
