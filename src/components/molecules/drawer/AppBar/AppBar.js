import * as React from "react";
import {
  Typography,
  IconButton,
  Toolbar,
  Box,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, BoxAvatar } from "./styles";
import { styled } from "@mui/material/styles";
import Sidebar from "../Sidebar/Sidebar";
import MuiAppBar from "@mui/material/AppBar";
import { ReactComponent as Conf } from "../../../../image/conf.svg";
import { ReactComponent as Sino } from "../../../../image/sino.svg";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutRemoveToken } from "../../../../utils/authHelp";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function AvatarAppBar(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    logoutRemoveToken();
    navigate("/login");
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 1 }}
            onClick={() => handleDrawerOpen()}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            fontWeight={600}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            color="black"
          ></Typography>
          <IconButton>
            <Sino href="#" />
          </IconButton>

          <IconButton>
            <Conf href="#" />
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Configurações">
              <BoxAvatar>
                <div className="name">Usuario</div>

                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </BoxAvatar>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={logout}>
                <Typography textAlign="center" fontSize={16}>
                  Sair
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} />
      <Main open={open}>
        <DrawerHeader />
        {props.children}
      </Main>
    </Container>
  );
}
const mapStateToProps = (store) => ({});


export default connect(mapStateToProps)(AvatarAppBar);
