import axios from 'axios'


export const upcomingMovies = async (currentPage) => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
        params: {
            api_key: '727bba0b6fe9f5c087b422ac5511d582',
            language: 'en-US',
            page: currentPage
        }
    })
      return response.data
    }
    catch (e) {
        throw new Error(e)
    }
}