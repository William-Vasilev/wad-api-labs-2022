import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TVsContext } from "../contexts/tvsContext";
import { useQueries } from "react-query";
import { getTV } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteTVReview from "../components/cardIcons/writeTvReview";

const FavouriteTVsPage = () => {
  const {favourites: TVIds } = useContext(TVsContext);

  
  const favouriteTVQueries = useQueries(
    TVIds.map((TVId) => {
      return {
        queryKey: ["TV", { id: TVId }],
        queryFn: getTV,
      };
    })
  );
  
  const isLoading = favouriteTVQueries.find((T) => T.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const TVs = favouriteTVQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      name="Favourite TV shows"
      TVs={TVs}
      action={(TV) => {
        return (
          <>
            <RemoveFromFavourites TV={TV} />
            <WriteTVReview TV={TV} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTVsPage;