import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo, DragEvent } from 'react'
import { EntryCard } from './EntryCard'
import { EntryStatus } from '@/interfaces'
import { EntriesContext } from '@/context/entries/EntriesContext'
import { UIContext } from '@/context/ui'
import styles from './EntryList.module.css'


interface Props {
  status: EntryStatus
}


export const EntryList:FC<Props> = ({ status }) => {
  
  const { entries, updateEntry } = useContext( EntriesContext );


  const { isDragging, endDragging } = useContext(UIContext)

  const entriesByStatus = useMemo( () => entries.filter(entry => entry.status === status), [entries, status])
  
  const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {
    event.preventDefault();
  }

  const onDropEntry = ( event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');

    const entry = entries.find( e => e._id === id )!;
    entry.status = status;
    updateEntry( entry );
    endDragging();
    // console.log(id)
  }

  return (
    // TODO: Aqui va el fragmento frop 
    <div
      onDrop={ onDropEntry }
      onDragOver={ allowDrop }
      className={ isDragging ? styles.dragging : '' }
    >
        <Paper sx={{ 
            height: 'calc(100vh - 800px)', 
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
                borderRadius: '50px',
              },
            minHeight: '500px', 
          }}>
            <List sx={{ opacity: isDragging ? 10 : 1, transition: 'all.3s' }}>
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
