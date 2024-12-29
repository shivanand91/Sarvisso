import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import SearchPages from "../pages/SearchPages"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Profile from "../pages/Profile"
import About from "../pages/About"

const router = createBrowserRouter([
   {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'search',
                element: <SearchPages/>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'about',
                element: <About />
            },
       ]
   }
])

export default router