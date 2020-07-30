type Props = {
  label: string
  symbol: React.ReactNode
}

export default function Emoji({ label, symbol }: Props) {
  return (
    <span
      className="not-italic"
      role="img"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}
