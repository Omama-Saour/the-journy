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

export const apidocer = axios.create({
	timeout: 3000000,
	baseURL:'https://dockerjourney.flaamingo.com',
	headers: {
		Authorization,
		// 'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'http://localhost:3000',
		// "content-type": "multipart/form-data",
	},
});


export const apidocerFile = axios.create({
	baseURL:'https://dockerjourney.flaamingo.com',
	headers: {
		Authorization,
		// 'Content-Type': 'application/json',
		// 'Access-Control-Allow-Origin': 'http://localhost:3000',
		"content-type": "multipart/form-data; boundary=<calculated when request is sent>",
	},
});