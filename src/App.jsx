import { useState } from 'react'
// import reactLogo from './_assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './_utils/router'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Root from './_components/Root'
import Home from './_components/Home'
import About from './_components/About'
import Projects from './_components/Projects'
import Contact from './_components/Contact'
import ErrorBoundary from './_components/ErrorBoundary'


function App() {
    // return (
    //     <RouterProvider router={router}/>
    // )

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<ErrorBoundary />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
