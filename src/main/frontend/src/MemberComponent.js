import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemberComponent = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const response = await axios.get('/api/members/me');
            setCurrentUser(response.data);
        } catch (error) {
            console.error('Error fetching current user:', error);
        }
    };

    const deleteCurrentUser = async () => {
        if (currentUser && currentUser.id) {
            try {
                await axios.delete(`/api/members/${currentUser.id}`);
                alert('회원 탈퇴가 완료되었습니다.');
                window.location.href = 'http://localhost:8090/login';
                setCurrentUser(null);
            } catch (error) {
                console.error('Error deleting current user:', error);
            }
        }
    };


    return (
        <div>
            <h1>회원 관리</h1>
            <h2>현재 사용자 정보</h2>
            {currentUser ? (
                <div>
                    <p>이름: {currentUser.memberName}</p>
                    <p>이메일: {currentUser.email}</p>
                    <button onClick={deleteCurrentUser}>회원 탈퇴</button>
                </div>
            ) : (
                <p>로그인된 사용자가 없습니다.</p>
            )}
        </div>
    );
};

export default MemberComponent;
