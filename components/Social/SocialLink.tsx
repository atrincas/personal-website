import { useRef } from 'react'
import { useHoverStateValue } from '../store/HoverState'
import useOpacityAdjuster from '../hooks/useOpacityAdjuster'

type Props = {
  href: string
  title: string
  icon: ({ className }: { className: string }) => JSX.Element
}

export default function SocialLink({ href, title, icon }: Props) {
  const [, { setHoveredElement, resetHoveredElement }] = useHoverStateValue()
  const ref = useRef(null)
  const { shouldReduceOpacity } = useOpacityAdjuster({ referenceEl: ref })
  const Icon = icon

  const handleOnMouseEnter = () => setHoveredElement(ref)
  const handleOnMouseLeave = () => resetHoveredElement()

  const custcomClasses = () =>
    shouldReduceOpacity
      ? 'opacity-50'
      : 'hover:fill-current transition duration-200 ease-in-out transform hover:scale-125'

  return (
    <a
      ref={ref}
      href={href}
      title={title}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      target="_blank"
      rel="noopener"
    >
      <Icon className={custcomClasses()} />
    </a>
  )
}
