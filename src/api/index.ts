import firebase from '../firebase';

export const getPsychologists = async (setState: Function) => {
	firebase
		.firestore()
		.collection('psychologists')
		.onSnapshot((snapshot) => {
			const items = snapshot.docs.map((item) => ({
				id: item.id,
				...item.data(),
			}));
			setState(items);
		});
};

export const getReservedHours = async (setState: Function) => {
	firebase
		.firestore()
		.collection('reservedHours')
		.onSnapshot((snapshot) => {
			const items = snapshot.docs.map((item) => ({
				id: item.id,
				...item.data(),
			}));
			setState(items);
		});
};

export const addReservation = async (timestamp: number, id: string) => {
	firebase.firestore().collection('reservedHours').add({ psychologistsId: id, timestamp: timestamp });
};
