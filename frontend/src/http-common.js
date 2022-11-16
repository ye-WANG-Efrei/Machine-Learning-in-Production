import axios from "axios";

export default axios.create({
	baseURL: "http://localhost:8083/api/tasks",
	headers: {
		"Content-type": "application/json",
	},
});

//2LcTbcLjdvPWBH2p
