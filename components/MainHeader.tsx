import Link from 'next/link'

export default function MainHeader() {
  return (
    <header className="bg-white min-h-3">
      <div className="container-md max-w-screen-md mx-auto flex justify-between p-5">
        <h1 className="text-xl">
          <Link href="/">adamtrincas.dev</Link>
        </h1>
        <nav>
          <ul className="flex text-dark-blue">
            <li className="mr-6">
              <a href="#" className="hover:underline">
                about
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
