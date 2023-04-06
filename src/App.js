import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import Root from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailsPage from './pages/ProductDetails';

const router = createBrowserRouter([
  { path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductDetailsPage />},
    ], 
  },
])

function App() {
  return <RouterProvider router={router}/>;
  }

export default App;
