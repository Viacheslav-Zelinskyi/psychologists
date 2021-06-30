import React from 'react';
import {
	IonContent,
	IonImg,
	IonPage,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonGrid,
	IonRow,
} from '@ionic/react';
import './sliderCards.css';

const Card = ({ name, imageUrl, sessionTime }: sliderCardProps) => {
	return (
		<IonPage>
			<IonContent>
				<IonCard>
					<IonCardHeader>
						<IonCardSubtitle className="cardSubtitle">{name}</IonCardSubtitle>
					</IonCardHeader>
					<IonGrid>
						<IonRow>
							<IonImg src={imageUrl}></IonImg>
							<IonCardContent className="durationContainer">
								<IonCardSubtitle className="duration">Длительность консультации: </IonCardSubtitle>
								<IonCardSubtitle className="durationNumber">{sessionTime} минут </IonCardSubtitle>
							</IonCardContent>
						</IonRow>
					</IonGrid>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

interface sliderCardProps {
	name: string;
	imageUrl: string;
	sessionTime: number;
}

export default Card;
