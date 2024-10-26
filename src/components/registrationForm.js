import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import React from 'react';
import { registerUser } from "../redux/actions";

const RegisterUser = () => {
    const dispatch = useDispatch();
    const registeredUsers = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [matchPassword, setMatchPassword] = useState("");
    const [stop, setStop] = useState("");

    const register = () => {
        if (!username || !password || !matchPassword) {
            setStop("All fields are required");
            return;
        }

        if (password !== matchPassword) {
            setStop("Passwords are different");
            return;
        }

        const userRegistered = registeredUsers.filter((user) => user.username === username);
        if (userRegistered) {
            setStop("Username already exists");
            return;
        }

        dispatch(registerUser({ username, password }));
        setStop("");
        setUsername("");
        setPassword("");
        setMatchPassword("");
    };

    return (
        <div className="register-User">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={matchPassword}
                onChange={(e) => setMatchPassword(e.target.value)}
            />
            <button onClick={register}>Register</button>
            {stop && <p>{stop}</p>}
        </div>
    );
}

export default RegisterUser;
