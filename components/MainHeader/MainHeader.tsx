import Link from 'next/link'

export default function MainHeader() {
  return (
    <header className="bg-white min-h-3">
      <div className="container-md max-w-screen-md mx-auto flex justify-between p-5">
        <h1 className="text-xl text-dark-blue">
          <Link href="/">
            <a>adamtrincas.dev</a>
          </Link>
        </h1>
        <nav>
          <ul className="flex text-dark-blue">
            <li className="mr-6">
              <a href="https://adamtrincas.netlify.app/cv" target="_blank">
                resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
