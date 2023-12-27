// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import {Provider} from "react-redux"
// import store from "./store"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store"
import {RouterProvider} from "react-router-dom"
import router from "./router"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider store={store} router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
