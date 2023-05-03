import { FC, useReducer, useEffect } from 'react';
import { EntriesReducer } from './entriesReducer';
import { EntriesContext } from './EntriesContext';
import { Entry } from '@/interfaces';
import { entriesApi } from '@/apis';
import { useSnackbar } from 'notistack';


export interface EntriesState {
    entries: Entry[],
    children?: any

}


const Entries_INITIAL_STATE: EntriesState = {
    entries: []
}


export const EntriesProvider: FC<EntriesState> = ({ children }) => {

    const [ state, dispatch ] = useReducer(EntriesReducer, Entries_INITIAL_STATE );

    const { enqueueSnackbar } = useSnackbar();

    const addNewEntry = async (description: string ) => {
        const { data } = await entriesApi.post<Entry>('/entries', { description });

        dispatch({ type: '[Entry] Add-Entry', payload: data })
    }


    const updateEntry = async ({ _id, description, status }: Entry) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`, { description, status });

            dispatch({ type: '[Entry] Entry-Updated', payload: data });

            // TODO: Mostrar alerta snackBar
            enqueueSnackbar('Entrada Actualizada', {
                variant: 'success',
                autoHideDuration: 1500,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }

            })

        } catch (error) {
            console.log({ error });
            
        }

    }

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: '[Entry] Load-Entries', payload: data })
    }


    useEffect(() => {
        refreshEntries();
    }, []);
    

  return (
    <EntriesContext.Provider value={{
        ...state,
        //Methods
        addNewEntry,
        updateEntry

    }}>
        { children }
    </EntriesContext.Provider>
  )
}