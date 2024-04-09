import axios from 'axios';

export const movieDetail = async (id) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
                api_key: '727bba0b6fe9f5c087b422ac5511d582',
                language: 'en-US',
              
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const movieCasting = async ( id ) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
            params: {
                api_key: '727bba0b6fe9f5c087b422ac5511d582',
                language: 'en-US',
             
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
 }
 