import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import ActorsPage from "./pages/actorsPage";
import MoviePage from "./pages/movieDetailsPage";
import ActorPage from "./pages/actorDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import TVReviewPage from "./pages/tvReviewPage";
import SiteHeader from './components/siteHeader'
import MovieUpcomingsPage from "./pages/movieUpcomingsPage";
import PopularMoviesPage from "./pages/popularMoviesPage.js";
import TVPage from "./pages/tvPage.js";
import FavouriteTVsPage from "./pages/favouriteTvsPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./moviesContext";
import TVsContextProvider from "./contexts/tvsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import AddTVReviewPage from './pages/addTvReviewPage'

import { PublicPage} from "./pages";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/actors/" element={ <ActorsPage /> } />
            <Route path="movies/upcoming" element={ <MovieUpcomingsPage /> } />
            <Route path="movies/popular" element={ <PopularMoviesPage /> } />
            <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/actors/:id" element={<ActorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/TVReviews/form" element={<AddTVReviewPage/>} />
            <Route path="/TVReviews/:id" element={ <TVReviewPage /> } />
            <Route path="/TVs/" element={<TVPage />} />

            <Route path="/public" element={<PublicPage />} /> 
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </MoviesContextProvider>

        {/* <AuthProvider>
          <AuthHeader />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies/:id">Public</Link>
            </li>
          
            <li>
              <Link to="/TVs/">Profile</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/movie" component={MoviePage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/tv" component={TVPage} />
        
            <Redirect from="*" to="/" />
          </Switch>
        </AuthProvider> */}


        {/* <TVsContextProvider>
         <Routes>
        
        <Route exact path="/TVs/favourites" element={<FavouriteTVsPage />} />
        </Routes> 
        </TVsContextProvider> */}


      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
