import React,{ useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navber from '../layout/navber';
//pages
import About from '../pages/about';
import Addblog from '../pages/addblog';
import Error from '../pages/error';
import Home from '../pages/home';
import Protected from './protected';

const Index = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
       <BrowserRouter>
                                        <Navber />
                            {isLogin? <button onClick={()=>setIsLogin(!isLogin)}>Log In</button> : <button onClick={()=>setIsLogin(!isLogin)}>Log out{" "}</button>}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-blog" element={<Protected isLogin={isLogin}><Addblog/></Protected>}/>
                <Route path="/*" element={<Error/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
       </BrowserRouter>
    );
};

export default Index;