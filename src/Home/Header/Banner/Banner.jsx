

const Banner = () => {
    return (
        <div className=" text-center md:p-36 w-full  backdrop-brightness-90 mt-none bg-cover h-4/5 "  style={{ 
            backgroundImage: `url("https://i.ibb.co/51bKy2c/pexels-photo-931321.jpg ")` 
          }}>
            
            <p className=" text-lg pt-20 md:text-4xl text-white font-medium">WORK HARDER, GET STRONGER</p>
            <h2 className="text-2xl  md:text-8xl font-bold text-white">EASY WITH OUR <span className="text-orange-600">GYM</span></h2>
            <div>
            <input className="outline-none border-l-2 border-t-2 border-b-2 p-1 rounded- mt-3 " type="text" placeholder="Search Here"/> <span><button className=" p-1 rounded-md bg-orange-600 text-white">search</button></span>
            </div>
        </div>
    );
};

export default Banner;