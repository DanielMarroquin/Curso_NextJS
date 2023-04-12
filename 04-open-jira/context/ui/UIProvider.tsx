import { FC, useReducer } from 'react';
import { uiReducer, UIContext } from './';


export interface UIState {
    sidemenuOpen: boolean,
    isAddingEntry: boolean,
    isDragging: boolean,
    children?: any

}


const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}


export const UIProvider: FC<UIState> = ({ children }) => {

    const [ state, dispatch ] = useReducer(uiReducer, UI_INITIAL_STATE )

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' })
    }


    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' })
    }

    const setIsAddingEntry = ( isAdding: boolean ) => {
        dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding })
    }

  return (
    <UIContext.Provider value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        
        setIsAddingEntry
    }}>
        { children }
    </UIContext.Provider>
  )
}