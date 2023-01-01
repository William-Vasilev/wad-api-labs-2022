import React from "react";
import { getTVs } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToTvFavourites'

const TVPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getTVs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const TVs = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = TVs.filter(T => T.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (TVId) => true 

  return (
    <PageTemplate
      title="Discover TV shows"
      TVs={TVs}
      action={(TV) => {
        return <AddToFavouritesIcon TV={TV} />
      }}
    />
);
};

export default TVPage;