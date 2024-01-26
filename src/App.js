import React, { Suspense, useState } from 'react'
import { lazy } from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import RestrauntMain from './component/RestrauntMain';
import Contact from './component/Contact';
import Menu from './component/Menu';
import Cart from './component/Cart';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import { DarkModeProvider } from './component/DarkModeContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


const About = lazy(() => import('./component/About'));



const AppHome = ()=>{
    


    return(
        <div>
            <Provider store={appStore}>

            <Header />
            <Outlet/>
            <Footer/>
            </Provider>
        </div>
    )
}

const AppProvider = createBrowserRouter([
    {
        element: <DarkModeProvider><AppHome/></DarkModeProvider>,
        children: [
            {
                path:'/',
                element: <RestrauntMain/>
            },
            {
                path: '/about',
                element: <Suspense><About/></Suspense>
            },
            {
                path: '/contact',
                element: <Contact/>
            },{
                path: "/restraunt/:resId",
                element: <Menu/>
            },{
                path: "/cart",
                element: <Cart/>
            }
        ]
    },
    
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppProvider}/>);