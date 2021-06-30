import { IonCard, IonCardSubtitle, IonSlide, IonSlides } from '@ionic/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './timeSlider.css';

const slideOpts = {
	initialSlide: 0,
	speed: 400,
	slidesPerView: 3,
	spaceBetween: 0,
};

const DaySlider = ({ selectDate, setHours }: any) => {
	const reservedHours = useSelector((state: any) => state.reservedHours);
	const psychologistId = useSelector((state: any) => state.selectedPsychologist.id);

	const [selectedHour, selectHour] = useState(0);

	let disabledHour = reservedHours.map(
		(item: any) => (item.psychologistsId === psychologistId ? item.timestamp : null) //Get reserved hour
	);

	return (
		<IonSlides pager={false} options={slideOpts}>
			{Array.from(Array(19).keys())
				.slice(8)
				.map((item) => {
					const cardDate = new Date();
					cardDate.setDate(selectDate.getDate());
					cardDate.setMonth(selectDate.getMonth());
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
								selectDate={selectDate}
								selectedHour={selectedHour}
								selectHour={selectHour}
								disabledHour={disabledHour}
							></TimeCard>
						</IonSlide>
					);
				})}
		</IonSlides>
	);
};

const TimeCard = ({ hour, selectedHour, selectHour, selectDate, setHours, disabledClassName }: any) => {
	return (
		<IonCard
			onClick={() => {
				selectHour(hour);
				selectDate.setHours(hour);
				selectDate.setMinutes(0);
				selectDate.setSeconds(0);
				selectDate.setMilliseconds(0);
				setHours(hour.toString().length > 1 ? hour + ':00' : '0' + hour + ':00');
			}}
			className="timeCard"
		>
			<IonCardSubtitle>
				<p style={disabledClassName} className={hour === selectedHour ? 'selectedHour' : 'hour'}>
					{hour.toString().length > 1 ? hour + ':00' : '0' + hour + ':00'}
				</p>
			</IonCardSubtitle>
		</IonCard>
	);
};

export default DaySlider;
