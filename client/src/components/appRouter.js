import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {routes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path="*" element={<Navigate to={HOME_ROUTE} replace={true} />}/>
        </Routes>
    );
}

export default AppRouter;