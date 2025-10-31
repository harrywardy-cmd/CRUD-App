
import './App.css';
import AddUser from "./addUser/AddUser"
import User from './getUser/User';
import Signup from './signup/Signup';
import Update from "./updateUser/Update";
import Login from './login/Login';
import {RouterProvider, createBrowserRouter} from "react-router-dom"

function App() {
  const route = createBrowserRouter([
    {
      path:"/signup",
      element:<Signup />,
    },
    {
      path:"/",
      element:<Login />,
    },
    {
      path:"/user",
      element:<User />,
    },
    {
      path:"/add",
      element:<AddUser/>,
    },
    {
      path:"/Update/:id",
      element:<Update />,
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
