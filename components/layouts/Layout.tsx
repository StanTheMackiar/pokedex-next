import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element | JSX.Element[],
    title?: string,
    img?: string,
}

export const Layout = ({ children, title, img }: Props) => {

    const origin = (typeof window === 'undefined') ? '' : 
    window.location.origin

  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="Stanly Calle" />
            <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
            <meta name="keywords" content={ `${title}, pokemon, pokedex`} />
            <meta property="og:title" content={`Informacion sobre ${title}`} />
            <meta property="og:description" content={`Esta es la pagina de detalles de ${title}`} />
            <meta property="og:image" content={`${img}` ||      `${ origin }/img/pokemon.jpg` } />
        </Head>

        <Navbar />

        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
