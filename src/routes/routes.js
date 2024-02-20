import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { GenerationProfile } from "../pages/generationProfile/GenerationProfile"

export const RoutesApp = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/bR4sDfG2tH" element={<GenerationProfile/>}/>
        </Routes>

    )
}