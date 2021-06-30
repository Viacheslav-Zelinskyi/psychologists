import { IonCard, IonCardSubtitle, IonSlide, IonSlides } from '@ionic/react';
import { useState } from 'react';
import './daySlider.css';

const slideOpts = {
	initialSlide: 0,
	speed: 400,
	slidesPerView: 3,
	spaceBetween: -20,
};

const dayOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const DaySlider = ({ selectDate, setDay }: any) => {
	const [selectedDay, selectDay] = useState<Number>();
	return (
		<IonSlides pager={false} options={slideOpts}>
			{Array.from(Array(7).keys()).map((item) => {
				//Create 7 card of day
				let now = new Date();
				now.setDate(now.getDate() + item); //Each card has its time
				return (
					<IonSlide key={item}>
						<DayCard
							now={now}
							selectDate={selectDate}
							day={now.getDate()}
							isToday={item === 0}
							dayOfWeek={dayOfWeek[now.getDay()]}
							selectedDay={selectedDay}
							selectDay={selectDay}
							setDay={setDay}
						></DayCard>
					</IonSlide>
				);
			})}
		</IonSlides>
	);
};

const DayCard = ({ day, isToday, dayOfWeek, selectedDay, selectDay, now, selectDate, setDay }: any) => {
	return (
		<IonCard
			onClick={
				dayOfWeek === 'Вс' || dayOfWeek === 'Сб'
					? () => {}
					: () => {
							selectDay(day);
							selectDate.setDate(now.getDate());
							selectDate.setMonth(now.getMonth());
							setDay(selectDate.getDate() + ' ' + selectDate.getMonth());
					  }
			} // Don't select if Weekends
			className={
				(selectedDay === day ? 'dayCardSelected' : 'dayCard') +
				(dayOfWeek === 'Вс' || dayOfWeek === 'Сб' ? ' disabledDay' : '')
			}
		>
			<IonCardSubtitle>
				<p className={selectedDay === day ? 'selectedDay' : 'day'}>{isToday ? 'Сегодня' : dayOfWeek}</p>
			</IonCardSubtitle>
			<IonCardSubtitle>
				<p className={selectedDay === day ? 'selectedDayNumber' : 'dayNumber'}>{day}</p>
			</IonCardSubtitle>
		</IonCard>
	);
};

export default DaySlider;
