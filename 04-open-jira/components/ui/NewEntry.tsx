import { Button, Box, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { ChangeEvent, useState } from 'react';

export const NewEntry = () => {

    // 
    const [isAdding, setIsAdding] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if ( inputValue.length === 0 ) return
        console.log({ inputValue })
    }


  return (
    <>
    <Box sx={{ marginBottom: 3, paddingX: 2 }}>
        {
            isAdding ? (
                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder='Nueva Tarea'
                        autoFocus
                        multiline
                        label='Descripción de Tarea'
                        helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                        error={ inputValue.length <= 0 && touched }
                        value={ inputValue }
                        onChange={ onTextFieldChanged }
                        onBlur={ () => setTouched(true) }
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button variant='contained' color='success' endIcon={ <SaveIcon/> } onClick={ onSave }>
                            Guardar
                        </Button>

                        <Button variant='outlined' color='warning' onClick={() => setIsAdding(false)}>
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
                    onClick={() => setIsAdding(true)}
                >
                    Agregar Tarea
                </Button>
            )
        }    
    </Box>
    </>
  )
}