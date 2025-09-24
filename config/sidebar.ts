import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wing-yin-ba2212386/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/wingyin74',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/wingyin74',
    icon: FaDev,
  },
]
