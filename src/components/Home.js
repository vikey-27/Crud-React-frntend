import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import List from "../pages/List";
import Navbar from "./Navbar";
const Home=()=>{
    return<React.Fragment>
        <Navbar />
        <Routes>
            <Route path='/' element={<Create />}/>
            <Route path='/List' element={<List />} />
            <Route path='/edit/:lid' element={<Edit />} />
            <Route path='*' element={<Create />} />
        </Routes>
        
    </React.Fragment>

}

export default Home;