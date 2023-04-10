// import { EntriesState } from './';
import { EntriesState } from "./EntriesProvider";


type EntriesActionType = 
   | { type: 'Entries - _ActionName' }


export const EntriesReducer = ( state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        // case '[Entries] - _ActionName':
        //     return {
        //         ...state,
        //     }

        default:
            return state;
    }
}