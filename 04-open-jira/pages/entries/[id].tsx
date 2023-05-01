import { Layout } from '@/components/layouts/Layouts'
import SaveIcon from '@mui/icons-material/Save';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@mui/material'
import React from 'react'

export const EntryPage = () => {
  return (
    <Layout title='............' >
        <Grid 
            container
            justifyContent='center'
            sx={{ marginTop: 2 }}
        >
            <Grid item xs = { 12 } sm = { 8 } md = { 6 }>
                <Card>
                    <CardHeader
                        title='Entrada:'
                        subheader={ `Creada hace: .... minutos` }
                    >
                        <CardContent>
                            <TextField
                                sx= {{ marginTop: 2, marginBottom:1 }}
                                fullWidth
                                placeholder='Nueva Entrada'
                                autoFocus
                                multiline
                                label='Nueva Entrada'
                            />
                            {/* RADIO */ }
                        </CardContent>

                        <CardActions>
                            <Button
                                startIcon={ <SaveIcon/> }
                                variant='contained'
                                fullWidth
                            >
                                Save
                            </Button>
                        </CardActions>

                    </CardHeader>
                </Card>

            </Grid>

        </Grid>
    </Layout>
  )
}

export default EntryPage
