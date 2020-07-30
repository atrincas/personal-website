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

export default function Technologies() {
  return (
    <article className="my-10 md:max-w-xs">
      <h3 className="mb-2">Technologies I work with</h3>
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
  )
}
