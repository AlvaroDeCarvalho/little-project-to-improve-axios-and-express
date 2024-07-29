import axios from 'axios'

export const apiInstance = axios.create({
    baseURL: 'https://fake-api-tau.vercel.app/api/eplay'
})

const api = {
    getFeaturedGame: async() =>await apiInstance.get('/destaque'),
    getFeaturedPromocoes:async () =>await apiInstance.get('/promocoes'),
    getFeaturedEmBreve:async () =>await apiInstance.get('/em-breve'),
    getActionGames:async () =>await apiInstance.get('/acao'),
    getSportGames:async () => apiInstance.get('/esportes'),
    getSimulationGames: async () =>await apiInstance.get('/simulacao'),
    getFightGames:async () =>await apiInstance.get('/luta'),
    getRpgGames:async () =>await apiInstance.get('/rpg'),
    getGame:async (id: number) =>await apiInstance.get(`/jogos/${id}`),
    getUsers: async () => await axios.get('http://localhost:3000/users'),
  };

  export default api;