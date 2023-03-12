import { Container, ThemeProvider } from '@mui/system';
import { themeDark, themeLight } from '../../theme/themes';
import { CssBaseline } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { selectTheme } from '../../reducers/uiReducer/uiSlice';
import Form from '../Form/Form';
import Nav from '../Nav/Nav';
import Grid from '../Grid/Grid';

function App() {
  const theme = useAppSelector(selectTheme);
  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <CssBaseline />
      <Nav />
      <Container>
        <Form />
        <Grid />
      </Container>
    </ThemeProvider>
  );
}

export default App;
