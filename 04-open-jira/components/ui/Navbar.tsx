import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={ 0 }>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
                <MenuTwoToneIcon/>
            </IconButton>
            <Typography variant='h6'>OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}
