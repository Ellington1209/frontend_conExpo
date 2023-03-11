import styled, { css } from 'styled-components';


export const Container = styled.div`
  display: flex;
  header {
    background-color: rgb(240, 238, 238);
  }
.logo{
  padding:15px;
  left:5px;
  margin-top:35px;
  margin-bottom:10px;
  position:fixed;
  
}
.logo3{
    width: 180px;
    height: 55px;
}
.name{
  color:black;
}
.footer5{
  position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: rgb(219, 222, 222);
}

  //SIDER BAR STYLES
  ${({ theme }) => css`
    .MuiDrawer-paper {
      background-color: ${theme.colors.secondary};
    }

    .MuiDrawer-paper svg,  .MuiDrawer-paper {
      color: #FFF;
      font-size: 22px;
     
    }
    .MuiDrawer-paper :hover{
      color: #FFF;
    }

    .MuiDivider-root {
      background-color: #FFFFFF;
      width: 90%;
      margin-left: 5%;
    }

    .MuiTypography-root {
      font-size: 17px;
      
    }

    .MuiListItemIcon-root {
      min-width: 32px;
      margin-left: 15px;
      
    }
    .MuiList-root li {
      display: flex;
      flex-direction: column;
     

    }
    .MuiCollapse-root .muiListItemText-root{
      padding-left:31px;
    }
    .MuiList-root li a, .MuiListItemButton-root, .MuiCollapse-root {
      width: 100%;
    }
    .MuiCollapse-root .MuiListItemText-root {
      padding-left: 31px;
    }
    .MuiSvgIcon-root{
      margin-bottom: 7px;
    }
  `}
`;

export const BoxAvatar = styled.div`
  display:  flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

