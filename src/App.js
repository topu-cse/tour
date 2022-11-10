
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Layout/Main'
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Blog from './component/Blog/Blog';
import Myreview from './component/Myreview/Myreview';
import ReviewShow from './component/ReviewShow/ReviewShow';
import ServiceCart from './component/Home/ServiceCart/ServiceCart';
import PrivateRoute from './Routed/Privatrouts';
import AddService from './component/AddService/AddService';

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
          path:'/blog',element:<Blog></Blog>
        },
       {
        path:'/register',element:<Register></Register>
       },
       {
        path:'/myreview/:id',
        element:<Myreview></Myreview>,
        loader:({params})=>fetch(`https://tourist-server-ten.vercel.app/services/${params.id}`)
       },
       {
            path:'/reviewshow',
            element:<PrivateRoute><ReviewShow></ReviewShow></PrivateRoute>
       },
      {
        path:'/service',
        element:<ServiceCart></ServiceCart>
      },
      {
        path:'/service/add',
        element:<PrivateRoute><AddService></AddService></PrivateRoute>
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
