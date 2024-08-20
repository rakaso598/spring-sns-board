// api.js
import axios from 'axios';

export const getCurrentUser = async () => {
    try {
        const response = await axios.get('/api/members/me');
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error
            return null;
        }
        throw error;
    }
};
