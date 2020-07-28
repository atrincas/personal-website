type Props = {
  languages: {
    name: string
    percentage: number
    color: string
  }[]
}

export default function LanguageBar({ languages }: Props) {
  return (
    <div className="mb-2">
      <span className="flex h-2 overflow-hidden bg-gray-300 rounded">
        {languages.map((lang) => (
          <span
            key={lang.percentage}
            style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
          ></span>
        ))}
      </span>
    </div>
  )
}
