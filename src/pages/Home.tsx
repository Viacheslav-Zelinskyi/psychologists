import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Slider from '../components/slider';
import DateTimePicker from '../components/dateTimePicker';

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonContent>
				<Slider></Slider>
				<DateTimePicker></DateTimePicker>
			</IonContent>
		</IonPage>
	);
};

export default Home;
