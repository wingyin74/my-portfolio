import { Link } from '@chakra-ui/react'

export type Company = 'Freelance' | 'Sinocloud' | 'Internship'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Freelance: {
    name: 'Freelance',
    longName: 'Freelance Software Developer',
    subDetail: 'Upwork',
    url: 'https://www.upwork.com/',
    position: 'Full Stack & AI Developer',
    duration: 'Aug 2021 - Present',
    logo: {
      light: '/worked_at_logos/freelance/upwork_logo.png',
      dark: '/worked_at_logos/freelance/upwork_logo.png',
    },
    roles: [
      <>
        Delivered full-stack and AI-powered solutions for clients worldwide, combining web development expertise with cutting-edge AI integrations.
      </>,
      <>
        Built responsive frontends using React, Next.js, and Tailwind CSS, and integrated AI tools such as chatbots, real-time agents, and automation systems.
      </>,
      <>
        Managed end-to-end project delivery, from requirement gathering to deployment, ensuring client satisfaction and long-term collaboration.
      </>,
    ],
  },
  Sinocloud: {
    name: 'Sinocloud',
    longName: 'Sinocloud Group Limited',
    subDetail: 'Hong Kong SAR',
    url: 'https://www.sinocloud.com/',
    position: 'Software Developer',
    duration: 'Dec 2017 - Aug 2021',
    logo: {
      light: '/worked_at_logos/sinocloud/sinocloud_logo.png',
      dark: '/worked_at_logos/sinocloud/sinocloud_logo.png',
    },
    roles: [
      <>
        Developed responsive and user-friendly web applications with a strong emphasis on performance, accessibility, and seamless user experience.
      </>,
      <>
        Built and maintained scalable frontends using React, TypeScript, and Tailwind CSS, while integrating RESTful APIs and backend services.
      </>,
      <>
        Collaborated with cross-functional teams to deliver reliable software solutions, improve workflows, and support business growth.
      </>,
    ],
  },
  Internship: {
    name: 'Internship',
    longName: 'Software Development Internship',
    subDetail: 'Various Projects',
    url: '#',
    position: 'Software Development Intern',
    duration: 'Jun 2017 - Dec 2017',
    logo: {
      light: '/worked_at_logos/internship/internship_logo.png',
      dark: '/worked_at_logos/internship/internship_logo.png',
    },
    roles: [
      <>
        Assisted in developing LLM-based applications, including chatbots and text analysis tools, focusing on performance optimization and smooth integration.
      </>,
      <>
        Contributed to the design and improvement of big data processing pipelines to handle large datasets efficiently for analytics and decision-making.
      </>,
      <>
        Gained hands-on experience in software development practices, collaborating with senior developers and enhancing technical and problem-solving skills.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Freelance,
  Experiences.Sinocloud,
  Experiences.Internship,
]
