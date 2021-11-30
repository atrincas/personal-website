import { GithubIcon, GmailIcon, LinkedinIcon } from '../../icons'

interface SocialElements {
  url: string
  Icon: () => JSX.Element
  title: string
}
export const SOCIALS: SocialElements[] = [
  {
    url: 'https://www.linkedin.com/in/adamtrincas/',
    Icon: LinkedinIcon,
    title: 'LinkedIn'
  },
  {
    url: 'mailto:atrincas@gmail.com',
    Icon: GmailIcon,
    title: 'Email'
  },
  {
    url: 'https://github.com/atrincas',
    Icon: GithubIcon,
    title: 'Github'
  }
]
