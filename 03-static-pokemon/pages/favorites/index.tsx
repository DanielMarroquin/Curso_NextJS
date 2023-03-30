import { Layout } from '@/components/layouts'
import NoFavorites from '@/components/ui/noFavorites';
import { useEffect, useState } from 'react';
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritePokemons } from '@/components/pokemon';

export const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
  
  }, [])
  

  return (
    <Layout title='Mis Pókemons Favoritos'>
      {
        favoritesPokemons.length === 0 
        ? (<NoFavorites/> )
        : ( <FavoritePokemons pokemons={favoritesPokemons} />)
      }

    </Layout>
  )
}

export default FavoritesPage
