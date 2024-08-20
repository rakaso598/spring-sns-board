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
            <h1>Posts</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    required
                />
                <textarea
                    name="content"
                    value={post.content}
                    onChange={handleInputChange}
                    placeholder="Content"
                    required
                ></textarea>
                <button type="submit">{editMode ? 'Update' : 'Create'}</button>
            </form>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>글쓴이: {post.member.memberName}</p>
                        <p>{post.content}</p>
                        <button onClick={() => handleEdit(post)}>Edit</button>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostComponent;
