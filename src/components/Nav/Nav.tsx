import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TvIcon from '@mui/icons-material/Tv';
import { IconButton } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectTheme, toggleTheme } from '../../reducers/uiReducer/uiSlice';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const theme = useAppSelector(selectTheme);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex' }}>
        <Box
          component="h4"
          onClick={() => navigate('/')}
          sx={{ display: 'flex', cursor: 'pointer' }}
        >
          <TvIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component="div"
          >
            TV Maze
          </Typography>
        </Box>
        <IconButton
          onClick={() => {
            dispatch(toggleTheme(theme === 'dark' ? 'light' : 'dark'));
          }}
          sx={{ marginLeft: 'auto' }}
        >
          {theme === 'dark' ? <WbSunnyIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
