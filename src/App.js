
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Layout/Main'
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';

import Privatrouts from './Routed/Privatrouts';
import Products from './Products';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',element:<Main></Main>,
      children:[
        {
          path:'/',element:<Home></Home>
        },
        {
          path:'/login',element:<Login></Login>
        },
        {
          path:'/products',element:<Products></Products>
        },
       {
        path:'/register',element:<Register></Register>
       }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
