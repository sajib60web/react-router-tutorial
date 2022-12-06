import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { blogsData } from '../data';

const Blog = () => {
    const { title } = useParams();
    const [bodyData, setBodyData] = useState("");
    
    useEffect(() => {
        const blogData = blogsData.filter((blog) => blog.title === title);
        setBodyData(blogData[0].body);
    }, [])

    return (
        <div>
            <h2>{title}</h2>
            <p>{bodyData.slice(0, 100)}</p>
            <p>{bodyData.slice(101, 200)}</p>
            <p>{bodyData.slice(201, 1000)}</p>
        </div>
    )
}

export default Blog