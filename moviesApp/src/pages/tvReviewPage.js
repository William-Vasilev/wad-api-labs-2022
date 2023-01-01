import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateTvPage";
import TVReview from "../components/tvReview";

const TVReviewPage = (props) => {
  let location = useLocation();
  const {TV, review} = location.state;

  return (
    <PageTemplate TV={TV}>
      <TVReview review={review} />
    </PageTemplate>
  );
};

export default TVReviewPage;