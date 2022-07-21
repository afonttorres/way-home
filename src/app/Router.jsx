import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { AboutUs } from '../pages/aboutUs/AboutUs';
import { Detail } from '../pages/detail/Detail';
import { Home } from '../pages/home/Home';
import { Landing } from '../pages/landing/Landing';
import { Match } from '../pages/match/Match';
import { Search } from '../pages/search/Search';
import { Upload } from '../pages/upload/Upload';


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/about-us' element={<AboutUs />}></Route>
                <Route path='/landing' element={<Landing />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/upload' element={<Upload />}></Route>
                <Route path='/search' element={<Search />}></Route>
                <Route path='/detail/:id' element={<Detail />}></Route>
                <Route path='/matches' element={<Match />}></Route>
            </Routes>
        </BrowserRouter>
    )
}