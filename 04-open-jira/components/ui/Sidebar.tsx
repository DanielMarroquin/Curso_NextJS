import { useContext } from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import EmailIcon from "@mui/icons-material/Email";
import { UIContext } from '../../context/ui/UIContext';

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {

  const { sidemenuOpen, closeSideMenu } = useContext(UIContext)

  return (
    <Drawer 
      anchor="left"
      open={ sidemenuOpen }
      onClose={ closeSideMenu }
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {
            menuItems.map((text, index) => (
                <ListItem key={text}>
                    <ListItemIcon>
                        {index % 2 ? <AllInboxIcon /> : <EmailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            ))
          }
        </List>
        <Divider/>
        <List>
          {
            menuItems.map((text, index) => (
                <ListItem key={text}>
                    <ListItemIcon>
                        {index % 2 ? <AllInboxIcon /> : <EmailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  );
};
