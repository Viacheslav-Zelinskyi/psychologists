import { IonButton, IonCard, IonCardSubtitle, IonGrid, IonRow } from '@ionic/react';
import { useSelector } from 'react-redux';
import { addReservation } from '../../../api';
import './confirmCard.css';

const month = [
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря',
];

const ConfirmCard = ({ selectedDate, hours, day }: any) => {
	const selectedPsychologist = useSelector((state: any) => state.selectedPsychologist);

	return (
		<IonCard className="confirmCardContainer">
			<IonGrid>
				<IonRow className="selectedDate">
					<IonCardSubtitle className="selectResult">Дата: </IonCardSubtitle>
					<IonCardSubtitle className="selectResultValue">
						{day?.split(' ')[0]} {month[day?.split(' ')[1]]}
					</IonCardSubtitle>
				</IonRow>
				<IonRow className="selectedDate">
					<IonCardSubtitle className="selectResult">Время: </IonCardSubtitle>
					<IonCardSubtitle className="selectResultValue">{hours}</IonCardSubtitle>
				</IonRow>
			</IonGrid>
			<IonButton
				className="confirmButton"
				color="secondary"
				onClick={() => {
					addReservation(selectedDate.getTime(), selectedPsychologist.id);
				}}
			>
				ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
			</IonButton>
		</IonCard>
	);
};

export default ConfirmCard;
