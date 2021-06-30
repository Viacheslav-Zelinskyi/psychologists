import { combineReducers, configureStore } from '@reduxjs/toolkit';
import psychologistsReducers from './reducers/psychologists';
import reservedHoursReducers from './reducers/reservedHours';
import selectedPsychologist from './reducers/selectedPsychologist';

const rootReducers = combineReducers({
	psychologists: psychologistsReducers,
	reservedHours: reservedHoursReducers,
	selectedPsychologist: selectedPsychologist,
});

const store = configureStore({
	reducer: rootReducers,
});

export default store;
