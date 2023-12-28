import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store"
import {RouterProvider} from "react-router-dom"
import router from "./router"
import "@/theme.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider store={store} router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);