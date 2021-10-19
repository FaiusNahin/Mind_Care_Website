import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Details from './Pages/ServiceDetails/Details/Details';
import SignUp from './Pages/SignUp/SignUp';
import LogIn from './Pages/LogIn/LogIn';
import AuthProvider from '../src/context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Seminars from './Pages/Seminar/Seminars/Seminars';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/details/:detailId">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/seminars">
            <Seminars></Seminars>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
