export default function MainHeader() {
  return (
    <header className="bg-white min-h-3">
      <div className="container-md max-w-screen-md mx-auto flex justify-between p-5">
        <h1 className="text-xl">adamtrincas.dev</h1>
        <nav>
          <ul className="flex text-dark-blue">
            <li className="mr-6">
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
