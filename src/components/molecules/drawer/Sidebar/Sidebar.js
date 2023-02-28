/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { Drawer, List,  ListItem, ListItemButton, ListItemIcon, ListItemText, Box, styled, Collapse} from '@mui/material';
import { ReactComponent as Dashboard } from '../../../../image/dashboard.svg';
import { ReactComponent as Receitas } from '../../../../image/Vector.svg';
import { ReactComponent as Pagamentos } from '../../../../image/cartaoPagamento.svg';
import { ReactComponent as Acessos } from '../../../../image/acessos.svg';
import { ReactComponent as Clientes } from '../../../../image/Usuarios.svg';
import { ReactComponent as Display } from '../../../../image/QRcode.svg';
import { ReactComponent as Pedidos } from '../../../../image/ReceiptFilled.svg';
import { ReactComponent as Configuracao } from '../../../../image/SettingsFilled.svg';
import { ReactComponent as Sair } from '../../../../image/LogoutFilled.svg';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Logo from '../../../../image/logo.svg'


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
      name:'Receitas',

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
    {
      name:'Pagamentos',
      icon: Pagamentos,
      route: '#',
      isSubmenu: true,
      submenu: [
        {
        name: 'Mesas Abertas',
        submenuRoute: '/pagamentos/mesasAbertas'
        },       
        {
        name: 'Eventos de Pagamento',
        submenuRoute: '/pagamentos/eventosPagamento'
        },
        {
        name: 'Histórico de Mesas',
        submenuRoute: '/pagamentos/historicoMesas'
        },
    ],    
    },
    {
      name:'Acessos',
      icon: Acessos,
      route: '#',
      isSubmenu: true,
      submenu: [
        {
        name: 'Usuários',
        submenuRoute: '/acessos/usuarios'
        },
       
        {
        name: 'Perfis',
        submenuRoute: '/acessos/perfis'
        },

    ],    
    },
    {
      name:'Clientes',
      icon: Clientes,
      route: '#',
      isSubmenu: true,
      submenu: [
        {
        name: 'Estabelecimento',
        submenuRoute: '/clientes/estabelecimento'
        },       
        {
        name: 'Configuração de Pagamento',
        submenuRoute: '/clientes/pagconfiguracao'
        },
        {
        name: 'Consumidores',
        submenuRoute: '/clientes/consumidores'
        },

    ],    
    },
    {
      name: 'Gerador Display',
      icon: Display,
      route: '/display',
      isSubmenu: false,
    },
    {
      name: 'Pedidos de Display',
      icon: Pedidos,
      route: '/pedidos',
      isSubmenu: false,
    },
    {
      name:'Configuração',
      icon: Configuracao,
      route: '#',
      isSubmenu: true,
      submenu: [
        {
        name: 'Gráficas',
        submenuRoute: '/configuracao/graficas'
        },       
        {
        name: 'Tipos de Displays',
        submenuRoute: '/configuracao/tiposDisplays'
        },       
    ],    
    },
    {
      name: 'Termos e Politicas',
      icon: Pedidos,
      route: '/termos',
      isSubmenu: false,
    },
    {
      name: 'Sair',
      icon: Sair,
      route: '/#',
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
        <div class="logo">
          <img src={Logo} />
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