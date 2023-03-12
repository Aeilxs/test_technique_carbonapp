import { Button, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ShowCardProps {
  imgSrc: string;
  title: string;
  content: string;
}

export default function ShowCard({ imgSrc, title, content }: ShowCardProps) {
  const [elevation, setElevation] = useState(2);
  const navigate = useNavigate();
  return (
    <Card
      sx={{ cursor: 'pointer' }}
      onMouseEnter={() => setElevation(10)}
      onMouseLeave={() => setElevation(2)}
      elevation={elevation}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <Box
          component="img"
          sx={{ width: '100%', maxHeight: '500px', objectFit: 'fill', borderBottom: '1px solid lightgrey' }}
          src={imgSrc}
        />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            p: 1,
            height: '100px',
            overflowY: 'auto',
            '::-webkit-scrollbar': {
              width: '0.2em',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: '#D3D3D3',
              borderRadius: '20px',
            },
          }}
        >
          {content}
        </Typography>
        <Box sx={{ textAlign: 'right', mt: 2 }}>
          <Button
            sx={{ mr: 1 }}
            variant="contained"
            onClick={() => navigate('/show/1')}
          >
            More details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
