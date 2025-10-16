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
  SiVuedotjs,
  SiNuxtdotjs,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiDjango,
  SiFlask,
  SiOpenai,
  SiChatbot ,
  SiAutomattic,
  SiFirebase,
  SiSupabase,
  SiAmazonaws,
  SiVercel,
  SiTailwindcss,
  SiChakraui,
  SiScrumalliance,
  SiWebpack,
  SiDatabricks,
  SiGooglecontaineroptimizedos,
  SiMaterialdesignicons,
  SiAntdesign,
  SiFastapi,
  SiMakerbot,
  SiZapier,
  SiMlflow,
  SiNetlify,
  SiRender,
  SiHeroku,
  SiOpenaccess,
  SiGoogleoptimize,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
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
      name: 'Vue.js',
      icon: SiVuedotjs,
    },
    {
      name: 'Nuxt.js',
      icon: SiNuxtdotjs,
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
      name: 'HTML5',
      icon: SiHtml5,
    },
    {
      name: 'CSS3',
      icon: SiCss3,
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: SiNodedotjs,
    },
    {
      name: 'Express.js',
      icon: SiExpress,
    },
    {
      name: 'Python',
      icon: SiPython,
    },
    {
      name: 'Django',
      icon: SiDjango,
    },
    {
      name: 'FastAPI',
      icon: SiFastapi,
    },
    {
      name: 'Flask',
      icon: SiFlask,
    },
    {
      name: 'GraphQL',
      icon: SiGraphql,
    },
  ],
  ai_automation: [
    {
      name: 'OpenAI API',
      icon: SiOpenai,
    },
    {
      name: 'Chatbot Development',
      icon: SiChatbot ,
    },
    {
      name: 'Real-time Agents',
      icon: SiSocketdotio,
    },
    {
      name: 'ML Integration',
      icon: SiMlflow,
    },
    {
      name: 'API Automation',
      icon: SiAutomattic,
    },
    {
      name: 'Make',
      icon: SiMakerbot,
    },
    {
      name: 'Zapier',
      icon: SiZapier,
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
      icon: SiFirebase,
    },
    {
      name: 'Supabase',
      icon: SiSupabase,
    },
  ],
  cloud_deployment: [
    {
      name: 'AWS',
      icon: SiAmazonaws,
    },
    {
      name: 'Netlify',
      icon: SiNetlify,
    },
    {
      name: 'Render',
      icon: SiRender,
    },
    {
      name: 'Heroku',
      icon: SiHeroku,
    },
    {
      name: 'Vercel',
      icon: SiVercel,
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
      icon: SiTailwindcss,
    },
    {
      name: 'Chakra UI',
      icon: SiChakraui,
    },
    {
      name: 'Material UI',
      icon: SiMaterialdesign,
    },
    {
      name: 'Ant Design',
      icon: SiAntdesign,
    },
    {
      name: 'Styled Component',
      icon: SiStyledcomponents,
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
      icon: SiScrumalliance,
    },
    {
      name: 'Webpack',
      icon: SiWebpack,
    },
  ],
  other_expertise: [
    {
      name: 'Data Processing',
      icon: SiDatabricks,
    },
    {
      name: 'Performance Optimization',
      icon: SiGoogleoptimize,
    },
    {
      name: 'Responsive Design',
      icon: SiReact,
    },
    {
      name: 'Accessibility',
      icon: SiOpenaccess,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]): Skill[][] => {
  const middle = Math.ceil(srcArray.length / 2);
  return [srcArray.slice(0, middle), srcArray.slice(middle)];
};

