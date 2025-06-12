import { createBrowserRouter } from 'react-router';
import Auth from '../components/screens/auth/Auth';
import Home from '../components/screens/home/Home';
import NewWorkout from '../components/screens/new-workout/NewWorkout';
import Profile from '../components/screens/profile/Profile';

const routers = createBrowserRouter([
  {
    path: '/',
    component: Home,
    isAuth: false,
  },
  {
    path: 'auth',
    component: Auth,
    isAuth: false,
  },
  {
    path: 'new-workout',
    component: NewWorkout,
    isAuth: true,
  },
  {
    path: 'profile',
    component: Profile,
    isAuth: false,
  },
]);

export default routers;
