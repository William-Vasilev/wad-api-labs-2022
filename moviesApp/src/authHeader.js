import React, { useContext } from "react";
//import { withRouter } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

function withRouter(Component) {
  function ComponentRouter(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentRouter;
}




const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <p>
      Welcome {context.userName}! <button onClick={() => context.signout()}>Sign out</button>
    </p>
  ) : (
    <p>
      You are not logged in{" "}
      <button onClick={() => history.push("/login")}>Login</button>
    </p>
  );
};

export default withRouter(BaseAuthHeader);