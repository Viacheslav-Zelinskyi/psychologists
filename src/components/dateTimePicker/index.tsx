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

	const reservedHoursStore = useSelector((state: any) => state.reservedHours);
	const selectedPsychologist = useSelector((state: any) => state.selectedPsychologist.id);

	const [reservedHours, setReservedHours] = useState(
		reservedHoursStore.map((item: any) => (item.psychologistsId === selectedPsychologist ? item : null))
	);

	useEffect(() => {
		setReservedHours(
			reservedHoursStore
				.map((item: any) => (item.psychologistsId === selectedPsychologist ? item : null))
				.filter((e: any) => e !== null)
		);
	}, [selectedPsychologist]); //Re-render default date and time if psychologist changed

	useEffect(() => {
		if (reservedHours.length > 0) {
			let reservedDate = new Date(reservedHours[0]?.timestamp);
			let hour = reservedDate.getHours();
			setDay(reservedDate.getDate() + ' ' + reservedDate.getMonth());
			setHours(hour.toString().length > 1 ? hour + ':00' : '0' + hour + ':00');
		}
	}, [reservedHours]); //Set default date and time

	return (
		<>
			<p className="dateHeader">Возможная дата </p>
			<DaySlider selectedDate={selectedDate} setDay={setDay}></DaySlider>
			<p className="dateHeader">Свободное время </p>
			<TimeSlider selectedDate={selectedDate} setHours={setHours}></TimeSlider>
			<ConfirmCard selectedDate={selectedDate} day={day} hours={hours}></ConfirmCard>
		</>
	);
};

export default DateTimePicker;
