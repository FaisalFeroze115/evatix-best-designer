import React from 'react'

const Footer = () => {

    const footerBackStyle = {
        backgroundImage: "url('/images/Shape_05.png')",
        backgroundRepeat: "no-repeat",
        backgroundPositionTop: "0",
        backgroundSize: "cover"
    }

    return (
        <div style={footerBackStyle} className="footer_container pt-48 sm:pt-32 flex-col justify-center items-center">
            <span className="text-white text-6xl sm:text-4xl font-semibold border-b-2 sm:pb-3 border-white mb-10">Start a project with me</span>
            <p className="py-10 max-w-xl text-2xl sm:text-base text-white sm:mx-auto mx-8">Let's discuss our ideas for presenting your business to the world in an attractive, efficient and effective way.</p>
            <div className="pb-10">
                <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-28 lg:py-2 md:py-4 lg:px-6 md:px-14 border-none rounded">
                    HIRE ME
                </button>
            </div>
        </div>
    )
}

export default Footer
