import { FC, useReducer } from 'react';
// import { EntriesContext, entriesReducer } from '';
import { EntriesReducer } from './entriesReducer';
import { EntriesContext } from './EntriesContext';


export interface EntriesState {
    entries: [],
    children?: any

}


const Entries_INITIAL_STATE: EntriesState = {
    entries: []
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