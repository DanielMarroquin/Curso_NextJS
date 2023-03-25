import { NextPage } from "next";
import { GetStaticProps } from 'next'
import { Layout } from '../components/layouts';
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import { Grid, Card, Row, Text } from "@nextui-org/react";


interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons, 'listado')
  return (
    <>
      <Layout title="Listado de Pokemons">
        <Grid.Container gap={ 2 } justify = 'flex-start'>
          {
            pokemons.map(({ id, name, img }) => (
              <Grid xs={6} sm={3} md={2} xl={1} key={id} >
                <Card hoverable clickable>
                  <Card.Body css={{p: 1}} >
                    <Card.Image
                      src={img}
                      width="100%"
                      height={ 140 }
                    />
                  </Card.Body>
                  <Card.Footer>
                    <Row justify="space-between">
                      <Text>{name}</Text>
                      <Text># {id}</Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))
          }
        </Grid.Container>
      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  console.log(data, 'data')

  const pokemons: SmallPokemon[] = data.results.map(( poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"

  return {
    props: {
      pokemons
    }
  }
}



export default HomePage


