import { 
  createBrowserRouter,
  Route,
  Link,  
  NavLink,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'

import { RootLayout } from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import NotFound from './pages/NotFound'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="help" element={<HelpLayout/>}>
            <Route path="faq" element={<Faq/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
          {/* for routes that dont match any of the above given ones */}
          {/* custom 404 */}
          <Route path="*" element={<NotFound/>}/>
    </Route>

  )
)

function App() {
  return (
   
    
     <RouterProvider router={router}/>

  );
}

export default App;
