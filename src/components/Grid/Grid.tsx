import { Box } from '@mui/system';
import ShowCard from '../Card/Card';
import { useAppSelector } from '../../store/hooks';
import { selectShows } from '../../reducers/showReducer/showSlice';

export default function Grid() {
  const shows = useAppSelector(selectShows);
  console.log(shows);
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {shows.map((show: any) => (
        <ShowCard imgSrc={show.show.image.medium} />
      ))}
    </Box>
  );
}
