const funcS = () => {
	switch(process.env.NODE_ENV) {
		case 'production':
			return ""
		case 'development':
			return "http://127.0.0.1:8000"
		default:
			return ''
	}
}
// export SERVER_PORT;
export const SERVER_PORT = funcS();