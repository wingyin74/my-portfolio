import { IconType } from 'react-icons'
import {
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiGhost,
  SiVuedotjs,
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
  SiSocketdotio,
  SiMaterialdesign,
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
      icon: SiNextdotjs,
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
      icon: SiStyledcomponents,
    },
    {
      name: 'HTML5 & CSS3',
      icon: SiMaterialdesign,
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: SiNodedotjs,
    },
    {
      name: 'Express.js',
      icon: SiNodedotjs,
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
      icon: SiSocketdotio,
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
      icon: SiNextdotjs,
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
      icon: SiStyledcomponents,
    },
    {
      name: 'Chakra UI',
      icon: BsQuestionSquare,
    },
    {
      name: 'Material UI',
      icon: SiMaterialdesign,
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
      icon: SiNodedotjs,
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

