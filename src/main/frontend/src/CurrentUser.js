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
            <h1>{user.memberName}님 안녕하세요!</h1>
            <button onClick={openModal}>사용자 정보 보기</button>
        </div>
    );
};

export default CurrentUser;
