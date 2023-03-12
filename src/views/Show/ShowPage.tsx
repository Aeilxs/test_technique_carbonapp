import { Box, Button, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { selectShows } from '../../reducers/showReducer/showSlice';
import { useAppSelector } from '../../store/hooks';
import { removeHTMLTags } from '../../utils/removeHTMLTags';
import Attribute from './Attribute/Attribute';

export default function ShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const show = useAppSelector(selectShows).find((show) => show.id.toString() === id);
  const attributes = [
    { title: 'Language', content: show?.language },
    { title: 'Genres', content: show?.genres.map((genre) => genre + ' ') },
    { title: 'First broadcast', content: show?.premiered },
    { title: 'Ended', content: show?.ended },
    { title: 'Summary', content: removeHTMLTags(show?.summary ?? 'No summary available') },
    {
      title: 'Official website',
      content: show?.officialSite ? <Link to={show.officialSite}>Click here</Link> : 'No official website',
    },
  ];

  return (
    <Paper
      elevation={2}
      sx={{ p: 2 }}
    >
      <Container sx={{ my: 2 }}>
        <Button
          sx={{ mb: 2 }}
          onClick={() => navigate('/')}
          variant="contained"
        >
          Back to search
        </Button>
        <Box
          component="img"
          src={show?.image}
          sx={{ width: '100%', mx: 'auto' }}
        />
        <Typography
          textAlign="center"
          variant="h2"
        >
          {show?.name}
        </Typography>
        {attributes.map((attribute) => (
          <Attribute
            key={attribute.title}
            title={attribute.title}
            content={attribute.content}
          />
        ))}
      </Container>
    </Paper>
  );
}
