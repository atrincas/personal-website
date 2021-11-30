import { HoverStateProvider } from '../store/HoverState'
import SocialLink from './SocialLink'
import { SOCIALS } from './constants'

export default function Social() {
  return (
    <HoverStateProvider>
      <div className="mt-5">
        <ul className="flex">
          {SOCIALS.map((social, i) => (
            <li key={`${social.title}-${i}`} className="mr-3">
              <SocialLink href={social.url} title={social.title} icon={social.Icon} />
            </li>
          ))}
        </ul>
      </div>
    </HoverStateProvider>
  )
}
