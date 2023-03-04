import {
  Box,
  styled,
  Divider,
  useTheme,
} from '@mui/material';
//-------------------import pages ---------------------
import SidebarMenu from './SidebarMenu';
import Logo from '../../images/sysmo.jpg';
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
    <div >
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background: 'linear-gradient(to right, #000000, #CD0F09);',
        }}
      >
        <Box
          marginTop={'5%'}
          marginLeft={'18%'}
          >
          <img src={Logo} width="70%" height="70%" alt='error' />
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

    </div>
  );
}

export default Sidebar;
