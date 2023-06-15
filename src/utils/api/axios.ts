import axios from "axios";
const baseUrl: string = import.meta.env.VITE_SERVER_URL;

export const apiPost = async (path: string, body = {}) => {
	return await axios.post(`${baseUrl}${path}`, body);
};
