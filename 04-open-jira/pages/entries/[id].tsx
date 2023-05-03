import { GetServerSideProps } from 'next'
import { Layout } from '@/components/layouts/Layouts'
import { Entry, EntryStatus } from '@/interfaces';
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
import { ChangeEvent, useMemo, useState, FC, useContext } from 'react';
import { dbEntries } from '@/database';
import { EntriesContext } from '@/context/entries/EntriesContext';



const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
    entry: Entry
}

export const EntryPage:FC<Props> = ({ entry }) => {

    const { updateEntry } = useContext(EntriesContext);

    const [inputValue, setInputValue ] = useState(entry.description);
    const [ status, setStatus ] = useState<EntryStatus>(entry.status);
    const [ touched, setTouched ] = useState(false);

    const onInputValueChanged = (event: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(event.target.value)
    }

    const onStatusChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        setStatus( event.target.value as EntryStatus);
    }

    const onSave = () => {
        if ( inputValue.trim().length === 0 ) return;

        const updatedEntry: Entry = {
            ...entry,
            status,
            description: inputValue
        }
        updateEntry( updatedEntry );
    }

    const isNotValid = useMemo(() => inputValue.length >= 0 && touched, []);


  return (
    <Layout title={ inputValue.substring(0, 20) + '...' } >
        <Grid 
            container
            justifyContent='center'
            sx={{ marginTop: 2 }}
        >
            <Grid item xs = { 12 } sm = { 8 } md = { 6 }>
                <Card>
                    <CardHeader
                        title= {`Entrada: `}
                        subheader={ `Creada hace: ${ entry.createdAt }` }
                    />
                        <CardContent>
                            <TextField
                                sx= {{ marginTop: 2, marginBottom:1 }}
                                fullWidth
                                placeholder='Nueva Entrada'
                                autoFocus
                                multiline
                                label='Nueva Entrada'
                                value={ inputValue }
                                onChange={ onInputValueChanged }
                                onBlur={ () => setTouched ( true ) }
                                helperText= { isNotValid && 'Ingrese un valor: ' }
                                error={ isNotValid }
                            />
                            <FormControl>
                                <FormLabel> Estado: </FormLabel>
                                <RadioGroup
                                    row
                                    value={ status }
                                    onChange={ onStatusChanged }
                                >
                                    {
                                        validStatus.map( option => (
                                            <FormControlLabel
                                                key={ option }
                                                value={ option }
                                                control={ <Radio/> } 
                                                label={ capitalize(option) }
                                                onClick={ onSave }                                        
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
                                onClick={ onSave }
                                disabled = { inputValue.length <= 0  }
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


// Debe usar getServerSideProps cuando:
// - Solo si necesita renderizar previamente una página cuyos datos deben obtenerse en el momento de la solicitud
// Usar el SSR PROPS solo definir requests hechas por el usuario desde el servidor 

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string };

    const entry = await dbEntries.getEntryById(id);

    // Esta validacion me permite redireccionar al HomePage si el ID de Mongo es invalido 

    if ( !entry ) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            entry: entry
        }
    }
}

export default EntryPage
