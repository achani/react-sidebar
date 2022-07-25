import React from 'react';
import { Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Main from './pages/Main';
import Search from './pages/SearchPage';

 const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/home" element={<Main/>} /> 
            <Route path='/my-applications' element={<Home/>} />
            <Route path='/spark-ui' element={<Home/>} />
            <Route path='/search' element={<Search/>} />
        </Routes>
    )
}

export default AppRoutes;