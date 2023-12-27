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
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path:"/login",
        element:<div>this is login</div>
    },
    {
        path:"/article",
        element:<div>this is article</div>
    }
])
root.render(
    <React.StrictMode>
        <RouterProvider store={store} router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
