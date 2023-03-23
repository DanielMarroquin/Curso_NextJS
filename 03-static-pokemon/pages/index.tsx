import { NextPage } from "next";
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts';


const HomePage: NextPage = () => {
  return (
    <>
      <Layout title="Listado de Pokemons">
        <Button color="gradient">
          Hola Mundooo..!!
        </Button>
      </Layout>
    </>
  )
}

export default HomePage


