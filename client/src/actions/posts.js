import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

//Action Creators
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPost();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const deletePost = (id) => async (dispatch) => {
	if (window.confirm('Do you really want to delete this post?')) {
		try {
			await api.deletePost(id);
			dispatch({ type: DELETE, payload: id });
		} catch (error) {
			console.log(error);
		}
	} else {
		return;
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);

		dispatch({ type: LIKE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
// const action = { type: "FETCH_ALL", payload: [] };
