import { Navigate,RouteObject } from 'react-router-dom';
import { lazy } from 'react';
const NavBar =lazy(()=>import('./SideBarLayout'));
const AddReparation=lazy(()=>import('./pages/reparation/AddReparation')); 
const AddBonDeTravail=lazy(()=>import('./pages/workorder/AddBonDeTravail')); 
const AddBonDeCommande=lazy(()=>import('./features/commandeorder/AddCommandeOrder')); 
const Reparation=lazy(()=>import('./pages/reparation/Reparation')); 
const BonDeTravil=lazy(()=>import('./pages/workorder/BonDeTravail')); 
const Login=lazy(()=>import('./pages/login/Login')); 
const CommandeOrders=lazy(()=>import('./features/commandeorder/CommandeOrders')); 
const WorkOrders=lazy(()=>import('./features/workorder/WorkOrders')); 


const routes: RouteObject[] = [
  {
   path:'',
   element:<Login />,
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
        element: <WorkOrders />
      },
      {
        path: 'AddBonDeTravail',
        element: <AddBonDeTravail />
      },
      {
        path: 'GererBonDeCommande',
        element: <CommandeOrders />
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

