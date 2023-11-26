import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import imagee from "/coding/Projects/frostybytes/src/assets/family.jpg";

export default function PopularProducts() {
  const theme = useTheme();
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <ShoppingCartIcon /> : (
              <FavoriteIcon color={isFavorite ? 'secondary' : 'inherit'} onClick={handleFavoriteClick} />
            )}
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? (
              <FavoriteIcon color={isFavorite ? 'secondary' : 'inherit'} onClick={handleFavoriteClick} />
            ) : <ShoppingCartIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={imagee}
        alt="Live from space album cover"
        style={{ borderRadius: '0' }}
      />
    </Card>
  );
}
