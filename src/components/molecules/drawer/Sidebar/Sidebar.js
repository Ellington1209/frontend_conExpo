/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { Drawer, List,  ListItem, ListItemButton, ListItemIcon, ListItemText, Box, styled, Collapse} from '@mui/material';
import { ReactComponent as Dashboard } from '../../../../image/dashboard.svg';
import { ReactComponent as Receitas } from '../../../../image/Vector.svg';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Logo from '../../../../image/Logobranca.png'


const drawerWidth = 238;

const perfilUsuario = {
  admin: [
    {
      name: 'Dashboard',
      icon: Dashboard,
      route: 'dashboard',
      isSubmenu: false,
    },
    {
      name:'Aulas',

      icon: Receitas,
      route: '#',
      isSubmenu: true,
      submenu: [
        {
        name: 'Visão Geral',
        submenuRoute: '/receitas/visaoGeral'
        },
       
        {
        name: 'Mesas',
        submenuRoute: '/receitas/mesas'
        },
    ],
   
    
    },
   
  ],
  user: [
    {
      name: '',
      icon: "",
      route: ''
    }
  ],
}


const NewHOC = (PassedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <PassedComponent {...this.props} />
        </div>
      )
    }
  }
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Sidebar = props => {
  const { open } = props
  const perfil = 'admin'

  const [isExpand, setIsExpand] = React.useState(999)

  const handleClickMenu = (index) => {
    setIsExpand(state => index === state ? 999 : index)
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
         
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
       <DrawerHeader>   
        <div className="logo">
          <img className="logo3" src={Logo} />
        </div> 
        </DrawerHeader>
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {perfilUsuario[perfil].map((p,index) => {
            const IconComponent = NewHOC(p.icon)

            return (
              <ListItem key={p.name} disablePadding>
                <ListItemButton  component="a" href={p.route} onClick={() => handleClickMenu(index)}>
                  <ListItemIcon>
                    <IconComponent />
                  </ListItemIcon>
                  <ListItemText primary={p.name} />
                  {p.isSubmenu ? isExpand === index ? <ExpandLess /> : <ExpandMore /> : <></>}
                </ListItemButton>                
                {
                p.isSubmenu && (
                  p.submenu.map(menu => {
            return (
              <Collapse in={isExpand === index} timeut="auto" unmountOnExit>
                <List component= "div" disablePadding>
                  <ListItemButton component='a' href={p.submenuRoute} >
                  <ListItemText primary={menu.name}/>
                  </ListItemButton>
                </List>  
              </Collapse>
             
            )
          })

          )
      }
         </ListItem>
     )
    })}
       </List> 
                 
            
    </Box>
    </Drawer>
  )
}

export default Sidebar;