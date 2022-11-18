import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ErrorPage from './Components/ErrorPage';

import RegistrationPage from './Pages/RegistrationPage';
import HomePage from './Pages/HomePage';
import GlobalLayout from './Layout/GlobalLayout';
import LoginPage from './Pages/LoginPage'


function App() {

const router = createBrowserRouter ([
  {path: "/",
   element: <GlobalLayout />,
   errorElement: <ErrorPage />,
   children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/registration",
      element: <RegistrationPage />
    }
   ]}
])



  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
