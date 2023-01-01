import React, { useContext } from "react";
import { TVsContext } from "../../contexts/tvsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ TV }) => {
  const context = useContext(TVsContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(TV);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;