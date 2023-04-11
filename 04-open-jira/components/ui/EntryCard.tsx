import { Entry } from '@/interfaces'
import { Card, CardActionArea, CardContent, Typography, CardActions } from '@mui/material'
import { FC } from 'react'

interface Props {
  entry: Entry
}

export const EntryCard:FC<Props> = ({ entry }) => {
  return (
    <Card sx={{ marginBottom: 1 }} >
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
