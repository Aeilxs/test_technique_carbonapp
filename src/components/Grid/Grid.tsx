import { Box } from '@mui/system';
import { selectShows, ShowData } from '../../reducers/showReducer/showSlice';
import { useAppSelector } from '../../store/hooks';
import { removeHTMLTags } from '../../utils/removeHTMLTags';
import ShowCard from '../Card/ShowCard';

export default function Grid() {
  const shows = useAppSelector(selectShows);
  return (
    <Box
      sx={{
        display: ['flex', 'flex', 'grid'],
        flexDirection: 'column',
        gap: 3,
        gridTemplateColumns: 'repeat(2, 1fr)',
        py: 2,
      }}
    >
      {shows.map((show: ShowData) => (
        <ShowCard
          key={show.id}
          title={show.name}
          content={removeHTMLTags(show.summary)}
          imgSrc={show.image}
        />
      ))}
    </Box>
  );
}
