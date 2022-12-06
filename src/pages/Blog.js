import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

const Blog = () => {
    const { title } = useParams();
    const location = useLocation();
    
    // Data find
    const find_data = location.state;

    return (
        <div>
            <h2>{title}</h2>
            <p>{find_data.body.slice(0, 100)}</p>
            <p>{find_data.body.slice(101, 200)}</p>
            <p>{find_data.body.slice(201, 1000)}</p>
        </div>
    )
}

export default Blog