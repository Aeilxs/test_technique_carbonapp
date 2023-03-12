import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';

export default function ShowPage() {
  const { id } = useParams();
  return <Container>TEST</Container>;
}
