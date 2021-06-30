import { IonCard, IonCardSubtitle, IonSlide, IonSlides } from '@ionic/react';
import './daySlider.css';

const slideOpts = {
	initialSlide: 0,
	speed: 400,
	slidesPerView: 3,
	spaceBetween: -20,
};

const dayOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const DaySlider = ({ selectedDate, setDay }: any) => {
	return (
		<IonSlides pager={false} options={slideOpts}>
			{Array.from(Array(7).keys()).map((item) => {
				/*Create 7 card of day */
				let cardDate = new Date();
				cardDate.setDate(cardDate.getDate() + item); //Each card has its time
				return (
					<IonSlide key={item}>
						<DayCard
							cardDate={cardDate}
							day={cardDate.getDate()}
							isToday={item === 0}
							dayOfWeek={dayOfWeek[cardDate.getDay()]}
							setDay={setDay}
							selectedDate={selectedDate}
						></DayCard>
					</IonSlide>
				);
			})}
		</IonSlides>
	);
};

const DayCard = ({ day, isToday, dayOfWeek, selectedDate, cardDate, setDay }: any) => {
	return (
		<IonCard
			onClick={
				dayOfWeek === 'Вс' || dayOfWeek === 'Сб'
					? () => {}
					: () => {
							selectedDate.setDate(cardDate.getDate());
							selectedDate.setMonth(cardDate.getMonth());
							setDay(selectedDate.getDate() + ' ' + selectedDate.getMonth()); //Set selected date
					  }
			} // Don't select if Weekends
			className={
				(selectedDate.getDate() === cardDate.getDate() ? 'dayCardSelected' : 'dayCard') +
				(dayOfWeek === 'Вс' || dayOfWeek === 'Сб' ? ' disabledDay' : '') //Gray cards background for the weekends
			}
		>
			<IonCardSubtitle>
				<p className={selectedDate.getDate() === cardDate.getDate() ? 'selectedDay' : 'day'}>
					{isToday ? 'Сегодня' : dayOfWeek}
				</p>
			</IonCardSubtitle>
			<IonCardSubtitle>
				<p className={selectedDate.getDate() === cardDate.getDate() ? 'selectedDayNumber' : 'dayNumber'}>
					{day}
				</p>
			</IonCardSubtitle>
		</IonCard>
	);
};

export default DaySlider;
