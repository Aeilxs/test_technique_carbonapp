import { Alert, Box, Button, LinearProgress, TextField } from '@mui/material';
import { searchShows } from '../../reducers/showReducer/showMiddleware';
import { selectShowMessage, selectShowStatus } from '../../reducers/showReducer/showSlice';
import { selectSearchValue, setValue } from '../../reducers/uiReducer/uiSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export default function Form() {
  const searchValue = useAppSelector(selectSearchValue);
  const { severity, message } = useAppSelector(selectShowMessage);
  const status = useAppSelector(selectShowStatus);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchShows());
  };

  return (
    <>
      <Box
        component="form"
        sx={{ display: 'flex', py: 2 }}
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(event) => dispatch(setValue(event.target.value))}
          value={searchValue}
          label="Search for a show !"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        <Button
          variant="contained"
          type="submit"
        >
          Search
        </Button>
      </Box>
      {status === 'pending' && <LinearProgress />}
      {message && <Alert severity={severity}>{message}</Alert>}
    </>
  );
}
