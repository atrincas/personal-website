import LanguageBar from './LanguageBar'
import { Props } from '../../types'
import { CircleIcon } from '../../icons'

export default function LanguageStats({ data }: Props) {
  return (
    <div className="max-w-sm">
      <LanguageBar languages={data} />
      <ul>
        {data.map((lang) => (
          <li key={lang.name} className="inline-flex text-xs">
            <div className="inline-flex flex-items-center flex-nowrap link-gray text-small mr-3">
              <CircleIcon fill={lang.color} />
              <span className="font-bold mr-1">{lang.name}</span>
              <span className="text-gray-900">{lang.percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
