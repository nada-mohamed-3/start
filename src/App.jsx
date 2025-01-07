import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './About/About'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import Notfound from './Notfound/Notfound'

function App() {
  let Routes = createBrowserRouter([
    { 
      path:'',
      element:<Layout/>,
      children:[
         {index:true,element:<Home/>},
         {path:'about',element:<About/>},
         {path:'protfolio',element:<Portfolio/>},
         {path:'contact',element:<Contact/>},
         {path:'*',element:<Notfound/>}
      ]

    }])
  return (
     <>
         <RouterProvider router={Routes} />
     </>
  )
}

export default App
