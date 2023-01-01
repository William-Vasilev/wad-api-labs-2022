import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteTVReviewIcon = ({ TV }) => {
  return (
    <Link
      to={'/reviews/form'}
      state={{
          TVId: TV.id,
        }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteTVReviewIcon;