import { request } from '@octokit/request'
import useSWR from 'swr'

import CircleIcon from '../icons/circle.svg'
import LanguageBar from './LanguageBar'

async function fetcher() {
  const response = await request('GET /user/repos', {
    headers: {
      authorization: `token ${process.env.PAT_GITHUB}`
    }
  })

  const repos = await response.data.map((repo) => repo.name)
  const languages = repos.map(async (name: string) => {
    return getLanguagesFromRepo(name)
  })
  return Promise.all(languages)
}

async function getLanguagesFromRepo(repo = 'english-for-kids') {
  const response = await request('GET /repos/:user/:name/languages', {
    headers: {
      authorization: `token ${process.env.PAT_GITHUB}`
    },
    user: 'atrincas',
    name: repo
  })
  return response.data
}

function checkLanguages(data) {
  const totals = data.reduce((total, item) => {
    const names = Object.keys(item)
    const obj = total
    names.forEach((name) => {
      if (!total || !Object.keys(total).includes(name)) {
        obj[name] = item[name]
      } else {
        obj[name] = obj[name] + item[name]
      }
    })
    return obj
  }, {})

  const totalNum = Object.values(totals).reduce((a, b) => a + b, 0)

  return Object.keys(totals).map((name) => {
    const percentage = (100 / totalNum) * totals[name]
    const roundedNumber = Math.round((percentage + Number.EPSILON) * 100) / 100

    return {
      name,
      percentage: roundedNumber,
      color: colors[name]
    }
  })
}

const colors = {
  CSS: '#563d7c',
  HTML: '#e34c26',
  JavaScript: '#f1e05a',
  Ruby: '#701516',
  TypeScript: '#2b7489'
}

export default function LanguageStats() {
  const { data } = useSWR('/:user/repos', fetcher)

  if (!data) return <div>Loading</div>

  const languages = checkLanguages(data)

  return (
    <div className="max-w-sm">
      <LanguageBar languages={languages} />
      <ul>
        {languages.map((lang) => (
          <li key={lang.percentage} className="inline-flex text-xs">
            <div className="inline-flex flex-items-center flex-nowrap link-gray text-small mr-3">
              <CircleIcon fill={lang.color} />
              <span className="ext-bold mr-1">{lang.name}</span>
              <span>{lang.percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
