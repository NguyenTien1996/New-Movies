import React,{ lazy, Suspense} from 'react';
import {Skeleton} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import {isAuthenticated} from "./service/login";

const HomeComponent = lazy(() => import('./pages/home'));
const NewFilmComponent = lazy(() => import('./pages/newFilm'));
const SearchFilmComponent = lazy(() => import('./pages/searchFilm'));
const DetailsFilmComponent = lazy(() => import('./pages/details'));
const LoginComponent = lazy(() => import('./pages/login'));

const LoginRouter = ({children, ...rest}) => {
    const isLogin = isAuthenticated();
    return(
        <Route
            {...rest}
            render={({location}) => isLogin ? (
                <Redirect to={{
                        pathname: "/home",
                        state: { from: location }
                    }}
                />
            ) : (children)}
        />
    )
}

const PrivateRoute = ({ children, ...rest }) => {
    const auth = isAuthenticated();
    return (
      <Route
        {...rest}
        render={({ location }) => auth ? (children) : (
          <Redirect to={{
            pathname: "/login",
            state: { from: location }
          }} />
        )}
      />
    )
  }

  const Movie = () => {
     return (
       <>
        <Router>
            <Suspense fallback={<Skeleton active/>}>
                <Switch>
                    <PrivateRoute path='/home'>
                        <HomeComponent/>
                    </PrivateRoute>
                    <PrivateRoute path='/new-film'>
                        <NewFilmComponent/>
                    </PrivateRoute>
                    <PrivateRoute path='/search-film'>
                        <SearchFilmComponent/>
                    </PrivateRoute>
                    {/*localhost:3000/ten-bo-phim~2199 */}
                    <PrivateRoute path="/movie/:slug~:id">
                        <DetailsFilmComponent/>
                    </PrivateRoute>
                    <LoginRouter path='/login'>
                        <LoginComponent/>
                    </LoginRouter>
                    
                    <Route extract path='/'>
                        <HomeComponent/>
                    </Route>

                    
                </Switch>
            </Suspense>     
        </Router> 
       </>
     );
  }
  export default Movie;