import React from 'react'

const Hero = () => {

    const divBackStyle = {
        backgroundImage: "url('/images/Shape_02.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 105%",
    }

    return (
        <>
            <div style={divBackStyle} className="hero_container lg:px-40 py-20 md:px-20 sm:px-10 lg:pb-60 px-10 md:pb-10">
                <div className="grid lg:grid-cols-2 gap-2 justify-center items-center pb-10 md:grid-cols-1">
                    <div>
                        <p className="text-white font-bold lg:text-left md:text-center text-xl md:text-base">BUSINESS WORKFLOW</p>
                        <h2 className="text-white font-bold lg:text-left md:text-center text-4xl md:text-6xl py-6 max-w-2xl md:mx-auto lg:mx-0">Get the most efficient UI design for your business now!</h2>
                        <p className="text-white lg:text-left md:text-center text-xl md:text-base max-w-full mx-auto md:mx-auto lg:mx-0">Hire me to design a clean and modern UI for your product's website</p>
                        <div className="lg:text-left py-6 mt-10 md:text-center grid lg:block md:block sm:block">
                            <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-6 sm:py-2 sm:px-6 border-none rounded">
                                HIRE ME
                            </button>

                            <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-3 px-6 sm:py-2 sm:px-6 border border-white-500 rounded mt-3 sm:mt-0 sm:ml-3">
                                PORTFOLIO
                            </button>
                        </div>
                    </div>

                    <div className="lg:text-right md:text-center flex justify-center md:pt-10 md:pb-10 lg:pt-0 lg:pb-0">
                        <img className="lg:text-right md:text-center" src="/images/image_02.png"/>
                    </div>
                </div>
            </div>
            {/* <div style={{backgroundImage: "url('/images/Shape_02.png')", width: "100%"}}>
            </div> */}
        </>
    )

}

export default Hero
