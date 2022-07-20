import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { MainButton } from '../components/buttons/MainButton';
import { Detail } from '../pages/detail/Detail';
import { Home } from '../pages/home/Home';
import { Search } from '../pages/search/Search';
import { Upload } from '../pages/upload/Upload';


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/upload' element={<Upload />}></Route>
                <Route path='/search' element={<Search />}></Route>
                <Route path='/detail/:id' element={<Detail />}></Route>
                <Route path='/buttons' element={<MainButton />}></Route>
            </Routes>
        </BrowserRouter>
    )
}