 
import { useEffect, useState } from "react";
import CardLayout from "./CardLayout";



const ServiceCard = () => {
    


    const [card, setCard] = useState([]);
   

    useEffect(()=>{
        fetch('/public/gym.json')
        .then(res => res.json())
        .then(data=>setCard(data))
    },[])

    return (
       <div>
        <h2 className="text-center text-5xl font-semibold mt-10">Our Services</h2>
         <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-3 container mx-auto gap-4 mt-3">
            
            {
             card.map(Card => <CardLayout  key={Card.id} card={Card}></CardLayout>)
            }
         </div>
       </div>
    );
};

export default ServiceCard ;