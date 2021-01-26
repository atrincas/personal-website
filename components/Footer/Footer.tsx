export default function Footer() {
  return (
    <footer className="w-full px-5 pb-5 absolute bottom-0">
      <hr className="my-10" />
      <p className="text-center text-xs">© {new Date().getFullYear()} Adam Trincas</p>
    </footer>
  )
}
