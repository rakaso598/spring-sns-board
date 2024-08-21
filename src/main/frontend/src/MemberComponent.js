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
                    <p>Google 등 소셜 계정으로 로그인한 경우 사용자 정보 수정이 불가능합니다.</p>
                    <p>탈퇴버튼 클릭시 즉시 회원탈퇴되며 해당 유저의 정보를 읽을 수 없게 됩니다.</p>
                </div>
            ) : (
                <p>로그인된 사용자가 없습니다.</p>
            )}
        </div>
    );
};

export default MemberComponent;
