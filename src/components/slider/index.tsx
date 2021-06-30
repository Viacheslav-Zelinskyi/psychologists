import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import './slider.css';
import SliderCard from './sliderCards';
import { useEffect, useState } from 'react';
import { selectPsychologist } from '../../redux/reducers/selectedPsychologist';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
	initialSlide: 0,
	speed: 400,
};

const SlidesExample: React.FC = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	const store: any = useSelector((state) => state);
	const dispatch: any = useDispatch();

	useEffect(() => {
		if (isLoaded) dispatch(selectPsychologist(store.psychologists[0].id)); //Save to the redux selected psychologist
	}, [isLoaded]);

	useEffect(() => {
		if (store.psychologists.length > 0) {
			setIsLoaded(true); //Waiting for data from the firestore to be initialized
		}
	}, [store]);

	return (
		<>
			{isLoaded ? (
				<IonSlides
					pager={true}
					options={slideOpts}
					className="peopleSlider"
					onIonSlideDidChange={(event) => getIndex(event, store, dispatch)}
				>
					{store.psychologists.map((item: any) => (
						<IonSlide key={item.id}>
							<SliderCard
								name={item.name}
								imageUrl={item.imageUrl}
								sessionTime={item.sessionTime}
							></SliderCard>
						</IonSlide>
					))}
				</IonSlides>
			) : null}
		</>
	);
};

const getIndex = async (event: any, store: any, dispatch: any) => { // Get index of active slide
	let index: number = 0;
	await event.target.getActiveIndex().then((value: any) => (index = value));
	dispatch(selectPsychologist(store.psychologists[index].id));
};

export default SlidesExample;
