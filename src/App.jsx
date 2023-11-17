import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import HomePage from "./pages/HomePage"


import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import CityList from "./Components/CityList"

import CountryList from "./Components/CountryList"
import City from "./Components/City"
import Form from "./Components/Form"
import { CitiesProvider } from "./contexts/CitiesContext"


function App() {

 

  return (
    <>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="product" element={<Product />}/>
            <Route path="pricing" element={<Pricing />}/>
            <Route path="login" element={<Login />}/>
            <Route path="app" element={<AppLayout />}>
              {/* <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />  N.B This one is better than the immediate, though th immediate is no longer common*/}

              <Route index element={<Navigate replace to="cities" />} /> 

              <Route path="cities" element={<CityList />} />

              <Route path="cities/:id" element={<City />} />

              <Route path="countries" element={<CountryList />} />

              <Route path="form" element={<Form />} />
            </Route>

            <Route path="*" element={<PageNotFound />}/>

          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </>
  )
}

export default App
