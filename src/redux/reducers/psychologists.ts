import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState: any = [];

export const addPsychologists: any = createAction('ADD_PSYCHOLOGISTS');

export default createReducer(initialState, {
	[addPsychologists]: function (state: any, action) {
		if(action.payload) state.push(action.payload);
	},
});
