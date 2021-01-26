import Head from 'next/head'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = 'Adam Trincas' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="I'm Adam, a front end developer from the Netherlands. Look around my personal website to learn more about me."
        ></meta>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="max-w-screen-lg mx-auto min-h-screen relative py-16">
        <main role="main" className="max-w-screen-lg px-5 py-10">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
