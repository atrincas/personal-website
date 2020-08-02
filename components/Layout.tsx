import Head from 'next/head'
import MainHeader from './MainHeader'
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
          content="I'm Adam, a front end developer from the Netherlands. Look around and learn more about me."
        ></meta>
      </Head>
      <MainHeader />
      {children}
      <Footer />
    </>
  )
}
