import { List, Paper } from '@mui/material'
import React from 'react'
import { EntryCard } from './EntryCard'


export const EntryList = () => {
  return (
    // TODO: Aqui va el fragmento frop 
    <div>
        <Paper sx={{ 
            height: 'calc(100vh - 180px)', 
            overflow: 'auto', 
            backgroundColor: 'transparent', 
            padding: '1px 7px',
            '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#121212',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#ffff',
                borderRadius: '0px',
              }, }}>
            <List sx={{ opacity: 1 }}>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
            </List>
        </Paper>
    </div>
  )
}
