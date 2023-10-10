
import SecondBanner from "../Components/Second Banner/SecondBanner";
import TraineeCard from "../Components/Trainee/TraineeCard";
import Banner from "./Header/Banner/Banner";
import ServiceCard from "./Header/Banner/Service/ServiceCard";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <SecondBanner></SecondBanner>
            <TraineeCard></TraineeCard>
            

        </div>
    );
};

export default Home;