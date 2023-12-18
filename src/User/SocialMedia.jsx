import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import imagee from '/coding/Projects/frostybytes/src/assets/frozen2.jpg';
import profile1 from '/coding/Projects/frostybytes/src/assets/profile1.jpg';
import profile2 from '/coding/Projects/frostybytes/src/assets/user-1.jpg'
import profile3 from '/coding/Projects/frostybytes/src/assets/user-2.jpeg'
import imagee2 from '/coding/Projects/frostybytes/src/assets/family.jpg'
import imagee3 from '/coding/Projects/frostybytes/src/assets/frozen3.jpg'
import  imagee4 from '/coding/Projects/frostybytes/src/assets/abc.jpeg'



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const cardData = [
  {
    avatar: profile1, // Use the image as the avatar
    title: 'John ',
    subheader: 'November 29, 2023',
    image: imagee,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    method: [
      'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat...',
      // ... other steps
    ],
  },
  {
    avatar: profile2, // Use the image as the avatar
    title: 'Abraham',
    subheader: '11 hr ago ',
    image: imagee2,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    method: [
      'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat...',
      // ... other steps
    ],
  },
  {
    avatar: profile3, // Use the image as the avatar
    title: 'cristopher',
    subheader: 'December 9, 2023',
    image: imagee3,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    method: [
      'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat...',
      // ... other steps
    ],
  },
  {
    avatar: profile1, // Use the image as the avatar
    title: 'shyn',
    subheader: 'December 11, 2023',
    image: imagee4,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    method: [
      'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat...',
      // ... other steps
    ],
  },
  {
    avatar: profile1, // Use the image as the avatar
    title: 'shyn',
    subheader: 'December 11, 2023',
    image: imagee4,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    method: [
      'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat...',
      // ... other steps
    ],
  },
  {
    avatar: profile1, // Use the image as the avatar
    title: 'shyn',
    subheader: 'December 11, 2023',
    image: imagee4,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    method: [
      'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.',
      'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat...',
      // ... other steps
    ],
  },
];

const CardContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '16px', // Adjust the gap as needed
});

export default function SocialMedia() {
  const [expanded, setExpanded] = React.useState(false);
  const [favorites, setFavorites] = React.useState(Array(cardData.length).fill(false));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  return (
    <>
    <div className="SocialMedia bg-dark p-4" style={{ background: 'linear-gradient(to right top, #d3d3d3, #dadde1, #dde8ed, #e0f4f4, #e9fff5)' }}> 
    <h1 className="text-success text-center">Social Media Reviews</h1>



    <CardContainer className="p-3 d-flex m-auto " style={{width:'75%'}}>
      {cardData.map((card, index)  => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={<img src={card.avatar} alt="Profile" style={{ width: 40, height: 40, borderRadius: '50%' }} />}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={card.title}
            subheader={card.subheader}
          />
          <CardMedia component="img" height="194" image={card.image} alt="Paella dish" style={{ borderRadius: '0' }} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <IconButton
                  aria-label="add to favorites"
                  onClick={() => handleFavoriteClick(index)}
                  style={{ color: favorites[index] ? 'red' : 'inherit' }}
                >
                  <FavoriteIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  {card.method.map((step, stepIndex) => (
                    <Typography key={stepIndex} paragraph>
                      {step}
                    </Typography>
                  ))}
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </CardContainer>
      </div>
    </>
  );
}