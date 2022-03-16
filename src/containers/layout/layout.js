import React from 'react'
import {routes} from "../../services/routes";
import { Route, Routes } from 'react-router-dom';

export default function Layout() {
    return (
        <Routes>
            {routes.map((route, index) => {
                return <Route path={route.path} element={route.Component} key={index} />
            })}
        </Routes>
    )
}
