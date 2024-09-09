import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Rootlayout from './layouts/Rootlayout';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Post from './components/Post';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'services',
          element: <Services />
        },
        {
          path: 'blog',
          element: <Blog/>
        },
        {
          path: 'contact',
          element: <Contact />
        },
				{
					path:'blog/:id',
					element:<Post/>
				}
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
