import React from "react";
import PageTemplate from "../components/templateTvPage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTV } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteTVReviewPage = (props) => {
  const location = useLocation()
  const { TVId } = location.state;
  const { data: TV, error, isLoading, isError } = useQuery(
    ["TV", { id: TVId }],
    getTV
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate TV={TV}>
      <ReviewForm TV={TV} />
    </PageTemplate>
  );
};

export default WriteTVReviewPage;