import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface ShowCardProps {
  imgSrc: string;
}

export default function ShowCard({ imgSrc }: ShowCardProps) {
  console.log(imgSrc);
  return (
    <Card>
      <Box
        component="img"
        src={imgSrc}
      />

      <CardContent>
        <Typography>test</Typography>
      </CardContent>
    </Card>
  );
}
