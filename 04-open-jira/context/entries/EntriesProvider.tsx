import { FC, useReducer } from 'react';
// import { EntriesContext, entriesReducer } from '';
import { v4 as uuidv4 } from 'uuid';
import { EntriesReducer } from './entriesReducer';
import { EntriesContext } from './EntriesContext';
import { Entry } from '@/interfaces';


export interface EntriesState {
    entries: Entry[],
    children?: any

}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Lorem ipsum, dolor sit amet adipisicing elit. Impedit, libero.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'In-Progress: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas',
            status: 'in-progress',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: ipsum sit amet consectetur adipisicing elit. Quasi, accusantium.',
            status: 'finished',
            createdAt: Date.now()
        }
    ]
}


export const EntriesProvider: FC<EntriesState> = ({ children }) => {

    const [ state, dispatch ] = useReducer(EntriesReducer, Entries_INITIAL_STATE )

    const addNewEntry = (description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description: description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }

  return (
    <EntriesContext.Provider value={{
        ...state,
        //Methods
        addNewEntry

    }}>
        { children }
    </EntriesContext.Provider>
  )
}