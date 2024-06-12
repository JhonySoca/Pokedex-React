
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.scss"
import {Home} from './pages/Home';
import { PokeDetail } from './pages';
import PokemonProVider from './context/PokemonContext';


const router=createBrowserRouter([
  {
  path:"/",
  element: <Home/>
  },

  {
  path:"/:pokeId",
  element: <PokeDetail/>
  }
])
  



ReactDOM.createRoot(document.getElementById('root')!).render(
    <PokemonProVider>
<RouterProvider router={router}/>
    </PokemonProVider>
    
  
);




