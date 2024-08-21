import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostComponent.css';

const PostComponent = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({ title: '', content: '' });
    const [editMode, setEditMode] = useState(false);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                await axios.put(`/api/posts/${postId}`, post);
            } else {
                await axios.post('/api/posts', post);
            }
            fetchPosts();
            setPost({ title: '', content: '' });
            setEditMode(false);
        } catch (error) {
            console.error('Error saving post:', error);
        }
    };

    const handleEdit = (post) => {
        setPost(post);
        setEditMode(true);
        setPostId(post.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/posts/${id}`);
            fetchPosts();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div>
            <hr style={{ border: '1px solid gray', margin: '20px 0' }} />
            <h1 style={{ color: 'blue' }}>글을 작성해보세요!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleInputChange}
                    placeholder="제목을 여기에!"
                    required
                />
                <textarea
                    name="content"
                    value={post.content}
                    onChange={handleInputChange}
                    placeholder="내용은 여기에!"
                    required
                ></textarea>
                <button
                    type="submit"
                    style={{
                        backgroundColor: editMode ? 'green' : 'blue',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    {editMode ? '글을 수정할게요!' : '지금 바로 글 쓰기!'}
                </button>
            </form>
            <hr style={{ border: '1px solid gray', margin: '20px 0' }} />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.member && post.member.memberName ? (
                            <p style={{ color: 'blueviolet' }}>글쓴이: {post.member.memberName}</p>
                        ) : (
                            <p style={{ color: 'blueviolet' }}>글쓴이: 유저 정보가 없습니다.</p>
                        )}</p>
                        <p>{post.content}</p>

                        <button onClick={() => handleEdit(post)}>수정</button>
                        <button onClick={() => handleDelete(post.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostComponent;
