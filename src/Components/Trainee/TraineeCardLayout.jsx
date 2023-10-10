import PropTypes from 'prop-types'

const TraineeCardLayout = ({ card }) => {
    console.log(card)

    const {  image, title, description, category} = card;





    return (


        <div className="card card-compact bg-white gap-4 mt-4 border-2 shadow-xl" >
            <figure><img className="w-full h-48 p-4" src={image} alt="" /></figure>
            <div className=" h-1/5 p-4 ">
                <div>
                    <p className='text-red-600'>  {category}</p>
                    <h2 className=" text-2xl font-semibold">{title}</h2>
                    <p className="text-base font-normal" >{description}</p>
                    
                </div>

            </div>
            {/* <div className=" text-center mt-6">
                <Link to={'/details/:id'}>
                    <button className="btn btn-error bg-orange-600">Dtails</button>
                </Link>

            </div> */}

        </div>



    );
};

export default TraineeCardLayout;
TraineeCardLayout.prototype={
    card: PropTypes.object
}