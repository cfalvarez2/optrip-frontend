import axios from 'axios'

import { SERVER_BASE_URL } from './utils/constant'

/*const FlightsAPI = {
  getFlight: async (token, origin, destination, date) => {
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/flights`, {
        headers: {
          'Content-Type': 'application/json',
          'session-cookie': await token,
        },
      })
      return response
    } catch (error) {
      return error.response
    }
  },*/