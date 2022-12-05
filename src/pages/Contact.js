import React from 'react'
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Contact Page</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus illum architecto alias hic a, sit eligendi consequuntur, tempore est iste qui corporis incidunt, optio delectus sint facilis tenetur quia consequatur modi maiores. Accusamus, rem. Aliquid eligendi culpa quis earum adipisci, neque, est voluptatem assumenda sit veritatis quibusdam impedit maxime.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla iusto dolores nisi necessitatibus? Suscipit aspernatur amet nulla. Rem, cum quasi tempora illo libero enim dolores itaque minus dolorem consequatur.</p>
            <button onClick={()=> { navigate('/') }}>Go To Home</button>
        </div>
    )
}

export default Contact