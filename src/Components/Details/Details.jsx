import { useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    console.log(details)
     const {image, title, description,  } = details
     console.log(image)
    // // const {id} = useParams();
    // // const idInt = parseInt(id);
    // // console.log(idInt)
    // //  const detail = details.find(job => job.id === idInt)
    // //  console.log(detail)
    // //  const {image, title, description,  } = detail
    // // console.log(id, detail)
    
    // // const donatHandler = () =>{
    // // //     saveDonation(idInt)
    // // //    toast('Successfully Done')
   
    // }
    

    return (
        <div className="container mx-auto p-2 lg:relative ">
           <div className="mt-3">
            <img className=" w-full h-700 mx-auto " src={image} alt="" />

            
            <div className="">
                <h2 className="text-2xl">{title}</h2>
                <p className="text-base">{description}</p>
            </div> 
            </div>
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default Details;