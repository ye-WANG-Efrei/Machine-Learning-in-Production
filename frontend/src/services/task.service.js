import axios from "axios";
import http from "../http-common";


export const getAllTasks = () => {
		return http.get("/findAll");
	}

export const getTask = (id) => {
	return http.get(`/${id}`);
}

export const createTask = (data) => {
	// return axios.post("http://localhost:8083/api/tasks",
	// {headers: {
	// 	"Content-type": "application/json",
	// }},
	// data);
	return axios.post("http://localhost:8083/api/tasks/create",
		data);
}

export const updateTask =(id, data) => {
	return http.put(`/${id}`, data);
}

export const deleteTask = (id) => {
	return http.delete(`/${id}`);
}

export const deleteAllTasks = () => {
	return http.delete(`/`);
}

export const findTaskByTitle = (title) => {
	return http.get(`/findAll?title=${title}`);
}