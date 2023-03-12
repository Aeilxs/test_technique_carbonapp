import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface AttributeProps {
  title: string;
  content: string | undefined | string[] | JSX.Element;
}

export default function Attribute({ title, content }: AttributeProps) {
  return (
    <Box sx={{ my: 1 }}>
      <Typography
        sx={{ mb: 1, textDecoration: 'underline' }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography sx={{ my: 2 }}>{content}</Typography>
      <Divider />
    </Box>
  );
}
