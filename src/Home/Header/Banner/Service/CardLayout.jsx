// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const CardLayout = ({ card }) => {
    console.log(card)

    const { id, image, title, description, price } = card;





    return (


        <div className="card card-compact bg-white gap-4 mt-4 border-2" >
            <figure><img className="w-full h-48 " src={image} alt="" /></figure>
            <div className=" h-1/5 p-2">
                <div>
                    <h2 className=" text-xl font-semibold">{title}</h2>
                    <p className="text-base font-normal" >{description}</p>
                    <p>Price : ${price}</p>
                </div>

            </div>
            <div className=" text-center mt-6">
                <Link to={'/details/:id'}>
                    <button className="btn btn-error bg-orange-600">Dtails</button>
                </Link>

            </div>

        </div>



    );
};


export default CardLayout;
