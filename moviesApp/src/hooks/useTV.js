import { useEffect, useState } from "react";
import {getTV} from '../api/tmdb-api'

const useTV = id => {
  const [TV, setTV] = useState(null);
  useEffect(() => {
    getTV(id).then(TV => {
      setTV(TV);
    });
  }, [id]);
  return [TV, setTV];
};

export default useTV