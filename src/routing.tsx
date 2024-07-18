import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Layout = React.lazy( () => import('./pages/Layout/Layout') );
const Home  = React.lazy( () => import('./pages/Home') );
const About = React.lazy( () => import('./pages/About') );

const MyRoutes = () => {
    
    const defaultLoading = () => {
		return ( <div id='suspence-loader'>Loading...</div> )
	}

    return(
        <BrowserRouter>
            <Layout>
                <Suspense fallback={ defaultLoading() } >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<Home />} />
                    </Routes>
                </Suspense>
            </Layout>
        </BrowserRouter>
    )
}

export default MyRoutes;
