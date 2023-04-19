import axios from "axios";

const $axios = axios.create();

$axios.interceptors.request.use(
	async (config) => {
		const tokens = JSON.parse(localStorage.getItem("tokens"));
		if (tokens) {
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${tokens.access}`,
			};
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default $axios;
