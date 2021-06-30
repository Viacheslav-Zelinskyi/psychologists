import { IonCard, IonCardSubtitle, IonSlide, IonSlides } from '@ionic/react';
import { useSelector } from 'react-redux';
import './timeSlider.css';

const slideOpts = {
	initialSlide: 0,
	speed: 400,
	slidesPerView: 3,
	spaceBetween: 0,
};

const TimeSlider = ({ selectedDate, setHours }: any) => {
	const reservedHours = useSelector((state: any) => state.reservedHours);
	const psychologistId = useSelector((state: any) => state.selectedPsychologist.id);

	let disabledHour = reservedHours.map(
		(item: any) => (item.psychologistsId === psychologistId ? item.timestamp : null) //Get reserved hour
	);

	return (
		<IonSlides pager={false} options={slideOpts}>
			{Array.from(Array(19).keys())
				.slice(8)
				.map((item) => {
					const cardDate = new Date();
					cardDate.setDate(selectedDate.getDate());
					cardDate.setMonth(selectedDate.getMonth());
					cardDate.setHours(item);
					cardDate.setMinutes(0);
					cardDate.setSeconds(0);
					cardDate.setMilliseconds(0);
					return (
						<IonSlide key={item}>
							<TimeCard
								disabledClassName={
									disabledHour.includes(cardDate.getTime()) ? { color: 'rgb(218, 218, 218)' } : {}
								}
								hour={item}
								setHours={setHours}
								selectedDate={selectedDate}
							></TimeCard>
						</IonSlide>
					);
				})}
		</IonSlides>
	);
};

const TimeCard = ({ hour, selectedDate, setHours, disabledClassName }: any) => {
	return (
		<IonCard
			onClick={() => {
				selectedDate.setHours(hour);
				selectedDate.setMinutes(0);
				selectedDate.setSeconds(0);
				selectedDate.setMilliseconds(0);
				setHours(hour.toString().length > 1 ? hour + ':00' : '0' + hour + ':00');
			}}
			className="timeCard"
		>
			<IonCardSubtitle>
				<p style={disabledClassName} className={hour === selectedDate.getHours() ? 'selectedHour' : 'hour'}>
					{hour.toString().length > 1 ? hour + ':00' : '0' + hour + ':00'}
				</p>
			</IonCardSubtitle>
		</IonCard>
	);
};

export default TimeSlider;
