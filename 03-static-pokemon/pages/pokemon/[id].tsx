import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import { Layout } from '@/components/layouts'

interface Props {
  // pokemon: any
  id: string;
  name: string;

}


const PokemonPage: NextPage<Props> = ({ id, name }) => {
    const router = useRouter();
    console.log(router.query, 'what is ')
  return (
    <Layout title='Algun poke'>
        <h2>{id} - {name}</h2>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: { id: '1' }
      },
      {
        params: { id: '2' }
      },
      {
        params: { id: '3' }
      }
    ],
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async (ctx) => {
// const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  return {
    props: {
      id: 1,
      name: 'Bulbasaur'
    }
  }
}




export default PokemonPage