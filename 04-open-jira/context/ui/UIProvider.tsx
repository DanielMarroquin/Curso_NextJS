import { FC, useReducer } from 'react';
import { uiReducer, UIContext } from './';


export interface UIState {
    sidemenuOpen: boolean,
    children?: any

}


const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
}


export const UIProvider: FC<UIState> = ({ children }) => {

    const [ state, dispatch ] = useReducer(uiReducer, UI_INITIAL_STATE )

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' })
    }

  return (
    <UIContext.Provider value={{
        ...state,
        openSideMenu
    }}>
        { children }
    </UIContext.Provider>
  )
}