const funcS = () => {
	switch(process.env.NODE_ENV) {
		case 'production':
			return ""
		case 'development':
			return "http://icarus.codes:8000"
		default:
			return ''
	}
}
// export SERVER_PORT;
export const SERVER_PORT = funcS();