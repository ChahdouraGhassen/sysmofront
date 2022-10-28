import {
  Box,
  styled,
  Divider,
  useTheme,
} from '@mui/material';
//-------------------import pages ---------------------
import SidebarMenu from './SidebarMenu';
import Logo from '../../images/profil-sysmo.png';
//--------------------------------------------------------
const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);
//------------------------------------------------------------
function Sidebar() {
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background:'#D22924',
        }}
      >
          <Box
          width={'100%'} 
          height={'20%'}>
              <img src={Logo} width="100%" alt=''/>
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(1),
              mx: theme.spacing(2),
              background: theme.colors.alpha.trueWhite[30]
            }}
          />
          <SidebarMenu />
        <Divider
          sx={{
            background: theme.colors.alpha.trueWhite[10]
          }}
        />
      </SidebarWrapper>
      
    </>
  );
}

export default Sidebar;
