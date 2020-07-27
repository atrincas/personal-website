import LanguageStats from '../components/LanguageStats'

import GithubIcon from '../icons/github.svg'
import LinkedinIcon from '../icons/linkedin.svg'
import GmailIcon from '../icons/gmail.svg'

// TODO: Replace this data to database:
const technologies = [
  'html',
  'css',
  'javascript',
  'typescript',
  'react',
  'redux',
  'ruby on rails',
  'styled components',
  'tailwindcss'
]

export default function Home() {
  return (
    <main role="main" className="container-md max-w-screen-md mx-auto px-5 py-10">
      <header className="flex flex-col-reverse items-center md:flex-row md:justify-between ">
        <hgroup>
          <h1>Hi, I'm Adam</h1>
          <h2>Front_End_Developer</h2>
        </hgroup>
        <img src="/images/adam-trincas.jpeg" alt="Adam Trincas" className="w-32 h-32 rounded" />
      </header>
      <div className="flex justify-center md:justify-start my-10">
        <ul className="flex">
          <li className="mr-3">
            <a href="https://github.com/atrincas" title="Github" target="_blank">
              <GithubIcon />
            </a>
          </li>
          <li className="mr-3">
            <a href="https://www.linkedin.com/in/adamtrincas/" title="LinkedIn" target="_blank">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="mailto:atrincas@gmail.com" title="Email" target="_blank">
              <GmailIcon />
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-10" />
      <article className="my-5">
        <h3>Technologies I work with</h3>
        <ul className="flex flex-wrap">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="
              bg-transparent
              hover:bg-light-blue
              text-dark-blue
              font-semibold
              hover:text-white
              text-sm
              text-center
              mr-2 mb-2
              p-2
              border
              border-lightbg-light-blue
              hover:border-transparent
              rounded
              "
            >
              {tech}
            </li>
          ))}
        </ul>
      </article>
      <article className="my-5">
        <h3>My Github language usage</h3>
        <LanguageStats />
      </article>
      <article className="my-5">
        <h3>Latest Projects</h3>
      </article>
    </main>
  )
}
