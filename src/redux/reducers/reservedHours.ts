import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState: any = [];

export const addReservedHours: any = createAction('ADD_RESERVED_HOURS');

export default createReducer(initialState, {
	[addReservedHours]: function (state: any, action) {
		if(action.payload) state.push(action.payload);
	},
});