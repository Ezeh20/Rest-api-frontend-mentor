import React from 'react'
import { useLocation } from 'react-router-dom'

const BordersComponent = () => {
    const loc = useLocation()
    console.log(loc)
    return (
        <div>BordersComponent</div>
    )
}

export default BordersComponent