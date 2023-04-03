import { FC } from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
    title?: string,
    children?: any
}


export const Layout: FC<Props> = ({ title = 'Open - Jira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            { title }
        </Head>
        {/* NAVBAR */}
        <Navbar/>

        <Box sx = {{ paddingTop: '10px 20px' }}>
            { children }
        </Box>
        {/* SIDEBAR */}
    </Box>
  )
}
