import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    //1. obtener ref contextuser
    //2. extraer set user☺
    const { setUser } = useContext(UserContext);

    const newUser = {
        id: 123,
        name: 'Leonardo'
    }
    return (
        <div>
        <h1>LogiScreen</h1>
            <hr></hr>
            <button className = "btn btn-primary" 
            onClick ={() => setUser(newUser)}>
                Login
            </button>
        </div>
    )
}
