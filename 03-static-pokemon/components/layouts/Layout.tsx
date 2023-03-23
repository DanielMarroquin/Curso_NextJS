import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

interface Props {
  title?: string,

}


export const Layout = ({ children, title }: PropsWithChildren<Props> ) => {
  return (
    <>
      <Head>
          <title>{ title || 'Pokedex-APP'}</title>
          <meta name="author" content="Daniel Marroquin"/>
          <meta name="description" content={`Informacion sobre el pokemon: ${title}`}/>
          <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
      </Head>
      {/* Navbar */}
      <main>
          { children }
      </main>

    </>
  )
}
