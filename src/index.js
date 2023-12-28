import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store"
import {RouterProvider} from "react-router-dom"
import {Provider} from "react-redux"
import router from "./router"
import "@/theme.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </Provider>
    </React.StrictMode>
);