import { ThemeProvider } from '@mui/system';
import { themeDark, themeLight } from '../theme/themes';
import { CssBaseline } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { selectTheme } from '../reducers/uiReducer/uiSlice';
import SearchPage from '../views/SearchPage/SearchPage';
import Nav from '../components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import ShowPage from '../views/Show/ShowPage';

function App() {
  const theme = useAppSelector(selectTheme);
  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <CssBaseline />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<SearchPage />}
        />
        <Route
          path="show/:id"
          element={<ShowPage />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
