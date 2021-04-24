import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID n1cmw_lU1JugqEcTuCx-uXxS_BGzhUSbkWdLAjrj3DU',
  },
});
