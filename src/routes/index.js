import About from 'containers/client/About/About';
import DemoAntDesign from 'containers/client/DemoAntDesign/DemoAntDesign';
import DemoHOC from 'containers/client/DemoHOC/DemoHOC';
import Parent from 'containers/client/DemoHook/Parent';
import Home from 'containers/client/Home/Home';
import MovieDetail from 'containers/client/MovieDetail/MovieDetail';
import Review from 'containers/client/Review/Review';
import SeatPlan from 'containers/client/SeatPlan/SeatPlan';
import Theater from 'containers/client/Theater/Theater';

export const clientRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/theater',
    component: Theater,
    exact: false,
  },
  {
    path: '/review',
    component: Review,
    exact: false,
  },
  {
    path: '/about',
    component: About,
    exact: false,
  },
  {
    path: '/movie-detail/:movieId',
    component: MovieDetail,
    exact: false,
  },
  {
    path: '/seat-plan/:id',
    component: SeatPlan,
    exact: false,
  },
  {
    path: '/demo-hook',
    component: Parent,
    exact: false,
  },
  {
    path: '/demo-hoc',
    component: DemoHOC,
    exact: false,
  },
  {
    path: '/demo-hoc',
    component: DemoHOC,
    exact: false,
  },
  {
    path: '/demo-antd',
    component: DemoAntDesign,
    exact: false,
  },
];

export const adminRoutes = [];
