import { UIContext } from '@/context/ui'
import { Entry } from '@/interfaces'
import { Card, CardActionArea, CardContent, Typography, CardActions } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, DragEvent, useContext } from 'react'

interface Props {
  entry: Entry
}

export const EntryCard:FC<Props> = ({ entry }) => {

  const { startDragging, endDragging } = useContext( UIContext );
  
  const router = useRouter();

  const onDragStart = ( event: DragEvent ) => {
    event.dataTransfer.setData('text', entry._id);
    startDragging();
    // TODO: modificar el estado para indicar que estoy haciendo drag
  }

  const onDragEnd = () => {
    endDragging();
    // TODO: cancelar on drog
  }

  const onClick = () => {
    router.push(`/entries/${ entry._id }`)
  }


  return (
    <Card
        onClick={ onClick }
        sx={{ marginBottom: 1 }}
        draggable
        onDragStart={ onDragStart }
        onDragEnd= { onDragEnd }
    >
        <CardActionArea sx={{ minHeight: '100px' }}>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'end', padding: 2 }}>
                <Typography variant='body2'>Hace 20 minutos</Typography>
            </CardActions>

        </CardActionArea>

        
    </Card>
  )
}
