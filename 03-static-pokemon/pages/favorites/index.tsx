import { Layout } from '@/components/layouts'
import { Container, Text, Image } from '@nextui-org/react';

export const FavoritesPage = () => {
  return (
    <Layout title='Mis Pókemons Favoritos'>
      <Container css={{
        display: 'flex',
        flexDirection: 'Column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>
        <Text h1> No hay favoritos</Text>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
          width={250}
          height={250}
          css={{
            opacity: 0.1
          }}
        />
      </Container>
    </Layout>
  )
}

export default FavoritesPage
