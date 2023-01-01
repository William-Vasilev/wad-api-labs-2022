import React from "react";
import { useParams } from 'react-router-dom';
import TVDetails from "../components/tvDetails/";
import PageTemplate from "../components/templateTvPage";
import useTV from "../hooks/useTV";
import { getTV } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVPage = (props) => {
  const { id } = useParams();

  const { data: TV, error, isLoading, isError } = useQuery(
    ["TV", { id: id }],
    getTV
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {TV ? (
        <>
          <PageTemplate TV={TV}>
            <TVDetails TV={TV} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV shows details</p>
      )}
    </>
  );
};

export default TVPage;