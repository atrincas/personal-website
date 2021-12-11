import { GithubIcon, LinkedinIcon } from '../../icons'

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
    url: 'https://github.com/atrincas',
    Icon: GithubIcon,
    title: 'Github'
  }
]
