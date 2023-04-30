import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-data-server-tajkir-alam.vercel.app/news/')
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-data-server-tajkir-alam.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({ params }) => fetch(`https://dragon-news-data-server-tajkir-alam.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;