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
            <h1 style={{ margin: '10px', padding: '0', color: '#3D3B30' }}>{user.memberName}님 안녕하세요!</h1>
            <button style={{ margin: '10px', width: '30%' }} onClick={openModal}>회원정보관리</button>
        </div>
    );
};

export default CurrentUser;
