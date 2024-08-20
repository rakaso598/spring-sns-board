// CurrentUser.js
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from './api';
import './CurrentUser.css';

const CurrentUser = ({ openModal }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getCurrentUser();
            setUser(userData);
        };

        fetchUser();
    }, []);

    if (user === null) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>You are not logged in.</div>;
    }

    return (
        <div className="title">
            <h1>Welcome, {user.memberName}!</h1>
            <p>{user.email}으로 로그인되어 있습니다.</p>
            <button onClick={openModal}>내 정보 관리</button>
        </div>
    );
};

export default CurrentUser;
