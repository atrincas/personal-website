import { githubLanguageUsage } from 'github-language-usage'
import Social from '../components/Social/Social'
import LanguageStats from '../components/LanguageStats'

import { Props } from '../types'

function Home({ data }: Props) {
  return (
    <>
      <header>
        <hgroup>
          <h1>Hi, I'm Adam</h1>
          <h2>full_stack_developer</h2>
        </hgroup>
      </header>
      <Social />
      <hr className="my-10" />
      <div>
        <article className="my-10 md:max-w-xs">
          <h3 className="mb-2 relative">My Github language usage</h3>
          <LanguageStats data={data} />
          <p className="mt-5 text-xs italic">
            Contribution to this{' '}
            <a
              className="text-dark-blue underline hover:no-underline"
              href="https://www.npmjs.com/package/github-language-usage"
              target="_blank"
              rel="noopener"
            >
              npm package
            </a>
            .
          </p>
        </article>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await githubLanguageUsage(process.env.PAT_GITHUB || '', 'atrincas')

  return { props: { data } }
}

export default Home
