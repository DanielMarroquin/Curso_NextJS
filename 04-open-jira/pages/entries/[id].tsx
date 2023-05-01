import { Layout } from '@/components/layouts/Layouts'
import { EntryStatus } from '@/interfaces';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { 
    capitalize, 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    Grid, 
    Radio, 
    RadioGroup, 
    TextField, 
    IconButton } from '@mui/material'



const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished']

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
                    />
                        <CardContent>
                            <TextField
                                sx= {{ marginTop: 2, marginBottom:1 }}
                                fullWidth
                                placeholder='Nueva Entrada'
                                autoFocus
                                multiline
                                label='Nueva Entrada'
                            />
                            <FormControl>
                                <FormLabel> Estado: </FormLabel>
                                <RadioGroup
                                    row
                                >
                                    {
                                        validStatus.map( option => (
                                            <FormControlLabel
                                                key={ option }
                                                value={ option }
                                                control={ <Radio/> } 
                                                label={ capitalize(option) }                                        
                                            />
                                        ) )
                                    }
                                </RadioGroup>
                            </FormControl>

                        </CardContent>

                        <CardActions>
                            <Button
                                startIcon={ <SaveIcon/> }
                                variant='contained'
                                fullWidth
                                color='secondary'
                            >
                                Guardar
                            </Button>
                        </CardActions>
                </Card>

            </Grid>

        </Grid>

        <IconButton
            sx = {{ 
                position: 'fixed',
                bottom: 30,
                right: 30,
                backgroundColor: 'red'
             }}
        >
            <DeleteIcon/>
        </IconButton>
    </Layout>
  )
}

export default EntryPage
