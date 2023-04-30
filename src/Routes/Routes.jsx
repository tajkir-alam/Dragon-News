import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news/')
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-data-server-tajkir-alam.vercel.app/categories/${params.id}`)
            }
        ]
    }
])

export default router;