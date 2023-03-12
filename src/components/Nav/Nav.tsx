import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TvIcon from '@mui/icons-material/Tv';
import { IconButton } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectTheme, toggleTheme } from '../../reducers/uiReducer/uiSlice';

export default function Nav() {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex' }}>
        <TvIcon sx={{ mr: 2 }} />
        <Typography
          variant="h6"
          component="div"
        >
          TV Maze
        </Typography>
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
