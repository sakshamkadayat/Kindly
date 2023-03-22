
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Books } from "../pages/Books";
import { Home } from "../pages/Home";
import { Template } from "./outlet";
import { Video } from "../pages/video";
import {Aud} from "../pages/audio"
export function Rout() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Template></Template>}>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/home' element={<Home></Home>}></Route>
                        <Route path='/about' element={<About></About>}></Route>
                        <Route path='/books' element={<Books></Books>}></Route>
                        <Route path='/audio' element={<Aud></Aud>}></Route>
                        <Route path='/Video' element={<Video></Video>}></Route>


                    </Route>
                </Routes>
            </BrowserRouter>


        </>
    );
}