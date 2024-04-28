import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            My portfolio page
            <nav>
                <ul>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    {/* <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li> */}
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Root;