import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("id"));

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const { userid } = useParams();
    // console.log(userid);
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchParams({
            name: name,
            age: age
        })
    }
    return (
        <div>
            <h1>User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="text" name='age' value={age} onChange={(e) => { setAge(e.target.value) }} />
                <button type='submit'>Find User</button>
            </form>
        </div>
    )
}

export default User