import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo } from 'react'
import { EntryCard } from './EntryCard'
import { EntryStatus } from '@/interfaces'
import { EntriesContext } from '@/context/entries/EntriesContext'
import { escape } from 'querystring'

interface Props {
  status: EntryStatus
}


export const EntryList:FC<Props> = ({ status }) => {
  
  const { entries } = useContext( EntriesContext );

  const entriesByStatus = useMemo( () => entries.filter(entry => entry.status === status), [entries])
  

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
                {
                  entriesByStatus.map(entry => (
                    <EntryCard key={ entry._id } entry={ entry }/>
                  ))
                }
                {/* <EntryCard/> */}
            </List>
        </Paper>
    </div>
  )
}
