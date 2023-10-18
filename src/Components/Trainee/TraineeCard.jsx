import { useEffect, useState } from "react";
import TraineeCardLayout from "./TraineeCardLayout";





const TraineeCard = () => {
    


    const [card, setCard] = useState([]);
   

    useEffect(()=>{
        fetch('/Trainee.json')
        .then(res => res.json())
        .then(data=>setCard(data))
    },[])

    return (
       <div>
        <h2 className="text-center text-5xl font-semibold mt-10">EXPERT <span className="text-orange-600">TRAINERS </span> </h2>
        <p className="text-center m-16 md:ml-20 mr-20">Our best expert trainee is a dedicated and highly motivated individual who is committed to mastering their chosen field. They are characterized by their passion for learning, exceptional work ethic, and eagerness to acquire both theoretical knowledge and practical skills.</p>
         <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-3 container mx-auto gap-4 mt-3">
            
            {
             card.map(Card => <TraineeCardLayout key={Card.id} card={Card}>
                 </TraineeCardLayout>)
            }
         </div>
       </div>
    );
};

export default TraineeCard ;