import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { ActorsContext } from "../../contexts/actorContext";

export default function ActorCard({ actor, action }) {
  //const { favouriteActors, addToFavouriteActors } = useContext(ActorsContext);
 
  //  if (favouriteActors.find((id) => id === actor.id)) {
  //    actor.favouriteActors = true;
  //  } else {
  //   actor.favouriteActors = false
  //  }
 
  //  const handleAddToFavouriteActors = (e) => {
  //    e.preventDefault();
  //    addToFavouriteActors(actor);
  //  };
 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //     actor.favouriteActors ? (
        //     <Avatar sx={{ backgroundColor: 'red' }}>
        //       <FavoriteIcon />
        //     </Avatar>
        //   ) : null
        // }
    
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
            actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        
      </CardContent>
      <CardActions disableSpacing>
    {action(actor)}
    <Link to={`/actors/${actor.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
    </Link>
  </CardActions>
    </Card>
  );
}