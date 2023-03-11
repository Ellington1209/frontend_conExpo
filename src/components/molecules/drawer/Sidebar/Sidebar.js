/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { Drawer, List,  ListItem, ListItemButton, ListItemIcon, ListItemText, Box, styled, Collapse} from '@mui/material';
import{ EventNote, ExpandLess, ExpandMore  }from '@mui/icons-material';



import Logo from '../../../../image/Logobranca.png'
import { Dashboard, PlayCircleFilled } from '@mui/icons-material';


const drawerWidth = 238;

const perfilUsuario = {
  admin: [
    {
      name: 'Dashboard',
      icon: Dashboard,
      route: '/dashboard',
      isSubmenu: false,
    },
    // {
    //   name:'Aulas',

    //   icon: Receitas,
    //   route: '#',
    //   isSubmenu: true,
    //   submenu: [
    //     {
    //     name: 'Visão Geral',
    //     submenuRoute: '/receitas/visaoGeral'
    //     },
       
    //     {
    //     name: 'Mesas',
    //     submenuRoute: '/receitas/mesas'
    //     },
    // ],
   
    
    // },
    {
      name: 'Programação ',
      icon:  EventNote,
      route: '/programacao',
      isSubmenu: false,
    },
    {
      name: 'Transmissão Online ',
      icon: PlayCircleFilled,      
      route: '/streaming',
      isSubmenu: false,
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
  const handleClickMenu = (index) => {setIsExpand(state => index === state ? 999 : index)}
  

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
        <Box width={'100%'} height="80px"display='flex' flexDirection="column" marginTop="30px">
          <img className="logo3" src={Logo} />
        </Box> 
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