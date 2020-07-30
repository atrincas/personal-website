import GithubIcon from '../../icons/github.svg'
import LinkedinIcon from '../../icons/linkedin.svg'
import GmailIcon from '../../icons/gmail.svg'

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
