import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState: any = {};

export const selectPsychologist: any = createAction('SELECT_PSYCHOLOGIST');

export default createReducer(initialState, {
	[selectPsychologist]: function (state: any, action) {
		if(action.payload) state.id = action.payload
	},
});