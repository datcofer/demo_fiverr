import React from 'react'
import { useRoutes } from 'react-router-dom';
import UserTemplate from '../template/UserTemplate/UserTemplate';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import { path } from '../common/path';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/signUpPage/SignUpPage';
import ListJobPage from '../pages/ListJobPage/ListJobPage';

const useRoutesCustom = () => {
    const routes = useRoutes([
        {
            path: path.homePage,
            element: <UserTemplate />,
            children:[
                {
                    path: path.listJob,
                    element:<ListJobPage/>
                }
            ]
        },
        {
            path: path.pageNotFound,
           element: <PageNotFound/> 
        },
        {
            path: path.signIn,
            element:<LoginPage/>
        },
        {
            path: path.signUp,
            element:<SignUpPage/>
        },
    ])
    return (
        routes
  )
}

export default useRoutesCustom;