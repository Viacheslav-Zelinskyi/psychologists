import { IonContent, IonIcon } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ConfirmCard from './confirmCard';
import './dateTimePicker.css';
import DaySlider from './daySlider';
import TimeSlider from './timeSlider';

const selectedDate = new Date();

const DateTimePicker: React.FC = () => {
	const [hours, setHours] = useState<String>();
	const [day, setDay] = useState<String>();

	const reservedHoursState = useSelector((state: any) => state.reservedHours);
	const selectedPsychologist = useSelector((state: any) => state.selectedPsychologist.id);

	let reservedHours = reservedHoursState.map(
		(item: any) => (item.psychologistsId === selectedPsychologist ? item : null) //Reserved hour with selected psychologist
	);
	reservedHours = reservedHours.filter((e: any) => e !== null); //Array cleaning

	useEffect(() => {
		let reservedDate = new Date(
			reservedHours[reservedHours.length - 1]?.timestamp
				? reservedHours[reservedHours.length - 1]?.timestamp
				: new Date().getTime()
		);
		console.log(reservedDate);
		let hour = reservedDate.getHours();
		setDay(reservedDate.getDate() + ' ' + reservedDate.getMonth());
		setHours(hour.toString().length > 1 ? hour + ':00' : '0' + hour + ':00');
	}, [reservedHoursState]); //Set default date from redux

	return (
		<>
			<p className="dateHeader">Возможная дата </p>
			<DaySlider selectDate={selectedDate} setDay={setDay}></DaySlider>
			<p className="dateHeader">Свободное время </p>
			<TimeSlider selectDate={selectedDate} setHours={setHours}></TimeSlider>
			<ConfirmCard selectedDate={selectedDate} day={day} hours={hours}></ConfirmCard>
		</>
	);
};

export default DateTimePicker;
