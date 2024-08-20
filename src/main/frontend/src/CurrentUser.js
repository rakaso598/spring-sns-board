// CurrentUser.js
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from './api';

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
        <div>
            <h1>Welcome, {user.memberName}!</h1>
            <p>Email: {user.email}</p>
            <button onClick={openModal}>내 정보 관리</button>
        </div>
    );
};

export default CurrentUser;
