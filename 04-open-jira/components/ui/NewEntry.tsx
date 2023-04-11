import { Button, Box, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { ChangeEvent, useContext, useState } from 'react';
import { EntriesContext } from '@/context/entries/EntriesContext';
import { UIContext } from '@/context/ui';

export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext);
    
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

    // const [isAdding, setIsAdding] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(event.target.value)
    }


    const onSave = () => {
        if ( inputValue.length === 0 ) return
        console.log({ inputValue })
        // AddNewEntry(inputValue)
        addNewEntry( inputValue );
        setIsAddingEntry(false);
        setTouched( false );
        setInputValue('');

    }


  return (
    <>
    <Box sx={{ marginBottom: 3, paddingX: 2 }}>
        {
            isAddingEntry ? (
                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        // placeholder='Describe los pasos a realizar en la tarea.'
                        autoFocus
                        multiline
                        label='Descripción de la Tarea'
                        helperText={ inputValue.length <= 0 && touched && 'Es necesario ingresar un valor.' }
                        error={ inputValue.length <= 0 && touched }
                        value={ inputValue }
                        onChange={ onTextFieldChanged }
                        onBlur={ () => setTouched(true) }
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button variant='contained' color='success' endIcon={ <SaveIcon/> } onClick={ onSave }>
                            Guardar
                        </Button>

                        <Button variant='outlined' color='warning' onClick={() => setIsAddingEntry(false)}>
                            Cancelar
                        </Button>
                    </Box>
                </>
            )
            : (
                <Button 
                    startIcon={ <AddCircleRoundedIcon/> }
                    fullWidth
                    variant='contained'
                    color='secondary'
                    onClick={() => setIsAddingEntry(true)}
                >
                    Agregar Tarea
                </Button>
            )
        }    
    </Box>
    </>
  )
}
