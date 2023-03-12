import { Box, Button, TextField } from '@mui/material';
import { searchShows } from '../../reducers/showReducer/showMiddleware';
import { selectSearchValue, setValue } from '../../reducers/uiReducer/uiSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export default function Form() {
  const searchValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchShows());
    console.log('submit');
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', mb: 2 }}
      onSubmit={handleSubmit}
    >
      <TextField
        onChange={(event) => dispatch(setValue(event.target.value))}
        value={searchValue}
        label="Search for something !"
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
  );
}
