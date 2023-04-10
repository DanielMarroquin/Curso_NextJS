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
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, libero.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, enim?',
            status: 'in-progress',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusantium.',
            status: 'finished',
            createdAt: Date.now()
        }
    ]
}


export const EntriesProvider: FC<EntriesState> = ({ children }) => {

    const [ state, dispatch ] = useReducer(EntriesReducer, Entries_INITIAL_STATE )
  return (
    <EntriesContext.Provider value={{
        ...state
    }}>
        { children }
    </EntriesContext.Provider>
  )
}