// TODO: Replace this data to database:
const technologies = [
  'html',
  'css',
  'javascript',
  'react',
  'redux',
  'nextjs',
  'styled components',
  'tailwindcss'
]

export default function Home() {
  return (
    <main role="main" className="container-md max-w-screen-md mx-auto px-5 py-10">
      <header>
        <hgroup>
          <h1>Hi, I'm Adam</h1>
          <h2>Front_End_Developer</h2>
        </hgroup>
      </header>
      <article className="my-5">
        <h3>Technologies I actively work with</h3>
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
              text-center m-2 p-2
              border
              border-lightbg-light-blue
              hover:border-transparent
              rounded
              cursor-auto
              "
            >
              {tech}
            </li>
          ))}
        </ul>
      </article>
      <article className="my-5">
        <h3>Latest Articles</h3>
      </article>
    </main>
  )
}
