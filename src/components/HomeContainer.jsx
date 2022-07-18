import React from 'react'
import delivery from '../img/delivery.png';
import Hero from '../img/heroBg.png';
import { heroData } from '../utils/Data';


const HomeContainer = () => {

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className="flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={delivery}
              className="w-full h-full object-contain bg-white"
              alt="Delivery Bike"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{' '}
          <span className="text-orange-500 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
          deleniti? Sed iusto pariatur eius, ipsam autem animi fugiat
          reiciendis, blanditiis nemo natus nisi maiores sapiente magni nihil
          cumque distinctio voluptatum.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2 w-full md:w-auto rounded-lg hover:shadow-lg transition-all duration-100 ease-in-out  "
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        {/* <div className='w-full flex items-center justify-center relative'> */}
        <img
          src={Hero}
          className="ml-auto h-420 w-full lg:w-auto  lg:h-650"
          alt="HeroBg"
        />
        <div className="w-full h-full absolute top-0 left-0  flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div key={n.id} className="lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl  flex flex-col items-center justify-center  drop-shadow-lg">
                <img src={n.imgSrc} className=" w-20 lg:w-40  -mt-10 lg:-mt-20" alt="" />
                <p className=" text-base lg:text-xl mt-1 lg:mt-3 font-semibold text-textColor">
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-2">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>

            ))}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default HomeContainer