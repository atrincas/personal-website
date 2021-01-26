import Link from 'next/link'

export default function MainHeader() {
  return (
    <header className="bg-white min-h-3 fixed top-0 left-0 w-full">
      <div className="max-w-screen-lg mx-auto flex justify-between p-5">
        <h1 className="text-xl text-dark-blue">
          <Link href="/">
            <a>adamtrincas.dev</a>
          </Link>
        </h1>
      </div>
    </header>
  )
}
