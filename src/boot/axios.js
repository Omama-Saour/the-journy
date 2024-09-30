import axios from 'axios';
import Cookie from "cookie-universal";

const cookie = Cookie();
const Authorization = cookie.get('accessToken')
	? 'Bearer ' + cookie.get('accessToken')
	: undefined;

// TODO: add base url to env
export const api = axios.create({

	baseURL:'https://journey.flaamingo.com/api',
	headers: {
		Authorization,
		// 'Content-Type': 'application/json',
	},
});
