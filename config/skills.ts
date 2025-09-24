import { IconType } from 'react-icons'
import {
  SiDotNet,
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiReact,
  SiNextDotJs,
  SiRedux,
  SiStyledComponents,
  SiGhost,
  SiVueDotJs,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSocketDotIo,
  SiMaterialUi,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiMicrosoft,
  SiElectron,
  SiPython,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'ai_automation'
  | 'database'
  | 'cloud_deployment'
  | 'ui_frameworks'
  | 'tools_workflow'
  | 'other_expertise'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'Next.js',
      icon: SiNextDotJs,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
    },
    {
      name: 'JavaScript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Tailwind CSS',
      icon: SiStyledComponents,
    },
    {
      name: 'HTML5 & CSS3',
      icon: SiMaterialUi,
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: SiNodeDotJs,
    },
    {
      name: 'Express.js',
      icon: SiNodeDotJs,
    },
    {
      name: 'Django',
      icon: SiPython,
    },
    {
      name: 'Flask',
      icon: SiPython,
    },
    {
      name: 'RESTful APIs',
      icon: SiGraphql,
    },
    {
      name: 'GraphQL',
      icon: SiGraphql,
    },
  ],
  ai_automation: [
    {
      name: 'OpenAI API',
      icon: BsQuestionSquare,
    },
    {
      name: 'Chatbot Development',
      icon: BsQuestionSquare,
    },
    {
      name: 'Real-time Agents',
      icon: SiSocketDotIo,
    },
    {
      name: 'ML Integration',
      icon: BsQuestionSquare,
    },
    {
      name: 'API Automation',
      icon: SiGraphql,
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
    },
    {
      name: 'Firebase',
      icon: SiGooglecloud,
    },
    {
      name: 'Supabase',
      icon: SiPostgresql,
    },
  ],
  cloud_deployment: [
    {
      name: 'AWS',
      icon: SiGooglecloud,
    },
    {
      name: 'Vercel',
      icon: SiNextDotJs,
    },
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'CI/CD',
      icon: SiGitlab,
    },
  ],
  ui_frameworks: [
    {
      name: 'Tailwind CSS',
      icon: SiStyledComponents,
    },
    {
      name: 'Chakra UI',
      icon: BsQuestionSquare,
    },
    {
      name: 'Material UI',
      icon: SiMaterialUi,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
  ],
  tools_workflow: [
    {
      name: 'Git & GitHub',
      icon: SiGit,
    },
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Agile/Scrum',
      icon: BsQuestionSquare,
    },
    {
      name: 'Webpack',
      icon: BsQuestionSquare,
    },
  ],
  other_expertise: [
    {
      name: 'Data Processing',
      icon: SiPython,
    },
    {
      name: 'Performance Optimization',
      icon: SiNodeDotJs,
    },
    {
      name: 'Responsive Design',
      icon: SiReact,
    },
    {
      name: 'Accessibility',
      icon: BsQuestionSquare,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}

