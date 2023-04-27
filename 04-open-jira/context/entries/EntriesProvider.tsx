import { FC, useReducer, useEffect } from 'react';
// import { EntriesContext, entriesReducer } from '';
// import { v4 as uuidv4 } from 'uuid';
import { EntriesReducer } from './entriesReducer';
import { EntriesContext } from './EntriesContext';
import { Entry } from '@/interfaces';
import { entriesApi } from '@/apis';


export interface EntriesState {
    entries: Entry[],
    children?: any

}


const Entries_INITIAL_STATE: EntriesState = {
    entries: []
}


export const EntriesProvider: FC<EntriesState> = ({ children }) => {

    const [ state, dispatch ] = useReducer(EntriesReducer, Entries_INITIAL_STATE )

    const addNewEntry = (description: string ) => {
        // const newEntry: Entry = {
        //     _id: uuidv4(),
        //     description: description,
        //     createdAt: Date.now(),
        //     status: 'pending'
        // }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }


    const updateEntry = (entry: Entry) => {
        dispatch({ type: '[Entry] Entry-Updated', payload: entry })
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