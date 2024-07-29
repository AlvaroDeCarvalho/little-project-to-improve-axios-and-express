import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Post from './Components/newPost'
import React from 'react'
const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
        </Routes>
    )
}

export default RoutesApp
