
import './App.css';
import AddUser from "./addUser/AddUser"
import User from './getUser/User';
import Update from "./updateUser/Update";
import {RouterProvider, createBrowserRouter} from "react-router-dom"

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
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
