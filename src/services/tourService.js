import axios from "axios";

const API_URL = "http://localhost:3000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const tourService = {
  getAll: async () => {
    try {
      const response = await axios.get(`${API_URL}/tours`, getAuthHeaders());
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getById: async (id) => {
    try {
      const response = await axios.get(
        `${API_URL}/tours/${id}`,
        getAuthHeaders()
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  create: async (tourData) => {
    try {
      const response = await axios.post(
        `${API_URL}/tours`,
        tourData,
        getAuthHeaders()
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  update: async (id, tourData) => {
    try {
      const response = await axios.put(
        `${API_URL}/tours/${id}`,
        tourData,
        getAuthHeaders()
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  delete: async (id) => {
    try {
      const response = await axios.delete(
        `${API_URL}/tours/${id}`,
        getAuthHeaders()
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  toggleActive: async (id, active) => {
    try {
      const response = await axios.patch(
        `${API_URL}/tours/${id}`,
        { active },
        getAuthHeaders()
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

