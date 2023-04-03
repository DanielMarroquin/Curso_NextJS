import { Typography } from '@mui/material'; 
import type { NextPage } from 'next';
import { Layout } from '@/components/layouts/Layouts';


const HomePage: NextPage = () => { 
  return (
    <Layout>
      <Typography variant='h2' color='primary'>
        Hola Mundo
      </Typography>
    </Layout>
  )
}

export default HomePage
