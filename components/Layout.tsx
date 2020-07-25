import React from 'react'
import Head from 'next/head'

type Props = {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = 'Adam Trincas' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
