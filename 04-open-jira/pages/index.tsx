import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material'; 
import { Layout } from '@/components/layouts/Layouts';
import { EntryList, NewEntry } from '@/components/ui';


const HomePage: NextPage = () => { 

  console.log(process.env.NEXT_PUBLIC_CLIENT_KEY)


  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={ 2 } padding={ 2 }>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader  title='Pendientes' />
            <CardContent>
              <NewEntry/>
              <EntryList status='pending'/>
              {/* Aregar una nueva entrada */}
            </CardContent>

          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader  title='En Progreso' />
            <CardContent>
              <EntryList status='in-progress'/>
              {/* Aregar una nueva entrada */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader  title='Completadas' />
            <CardContent>
              <EntryList status='finished' />
              {/* Aregar una nueva entrada */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
