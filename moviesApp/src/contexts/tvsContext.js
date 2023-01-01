import React, { useState } from "react";

export const TVsContext = React.createContext(null);

const TVsContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavourites = (TV) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(TV.id)) {
      newFavourites.push(TV.id);
    }
    setFavourites(newFavourites);
  };

  
  const removeFromFavourites = (TV) => {
    setFavourites( favourites.filter(
      (TVId) => TVId !== TV.id
    ) )
  };


  const addReview = (TV, review) => {
    setMyReviews( {...myReviews, [TV.id]: review } )
  };

 return (
    <TVsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </TVsContext.Provider>
  );
};

export default TVsContextProvider;