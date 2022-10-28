import { RouteObject } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SuspenseLoader from './pages/SuspenseLoader';
const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);
const NavBar = Loader(lazy(() => import('./SideBarLayout')));
const AddReparation = Loader(lazy(() => import('./pages/reparation/AddReparation')));
const AddBonDeTravail = Loader(lazy(() => import('./pages/workorder/AddBonDeTravail')));
const AddBonDeCommande = Loader(lazy(() => import('./pages/bondecommande/AddBonDeCommande')));
const Reparation = Loader(lazy(() => import('./pages/reparation/Reparations')));
const BonDeTravil = Loader(lazy(() => import('./pages/workorder/BonDeTravail')));
const Login = Loader(lazy(() => import('./pages/login/Login')));
const BonDeCommande = Loader(lazy(() => import('./pages/bondecommande/BonDeCommande')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <Login />,
  },
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        path: 'AddReparation',
        element: <AddReparation />
      },
      {
        path: 'GererReparation',
        element: <Reparation />
      },
      {
        path: 'AddReparation',
        element: <AddReparation />
      },
      {
        path: 'GererBonDeTravail',
        element: <BonDeTravil />
      },
      {
        path: 'AddBonDeTravail',
        element: <AddBonDeTravail />
      },
      {
        path: 'GererBonDeCommande',
        element: <BonDeCommande />
      },
      {
        path: 'AddBonDeCommande',
        element: <AddBonDeCommande />
      },
      {
        path: 'AccountSettings',
        element: <NavBar />
      }
    ]
  }
];

export default routes;

