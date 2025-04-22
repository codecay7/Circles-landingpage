

import imageData from '../assets/images.json?import';
import FAQ from "./FAQ";

function Homepage() {

    return (
        <div className="w-full h-screen bg-primary  ">



            {/* signup and login button starts  */}
            <div className="w-full h-14  mt-32 flex justify-center items-center">
                <div className="w-72 h-full ">
                    <div className=" h-full w-full font-semibold text-xl flex justify-around items-center  border-4 border-dashed rounded-3xl border-black p-2 gap-2">
                        <button className="   bg-black h-full w-full border-1  bg-mainBackgroundColor rounded-3xl radius text-white">SignUp</button>
                        <button className="  h-full w-full border-1  bg-black rounded-3xl text-white">Login</button>
                    </div>
                </div>
            </div>

            {/* hero section starts */}
            <div className="w-full h-4/6   bg-primary  mt-8 flex justify-center items-center p-6 ">
                <div className="w-11/12 h-full bg-black border-dashed  border-t-4  border-primary rounded-t-[10vh]  overflow-hidden">

                    <div className=" h-full w-full font-bold flex justify-around items-center bg-cardbg  ">
                        <h1 className="text-[7vw] text-wrap text-center text-black">WE ARE SOLUTION <br />FOR YOUR CAREER.</h1>
                    </div>
                </div>

            </div>

            {/* what we offer starts */}
            <div className="w-full h-screen  bg-primary  flex justify-center items-center pt-44 pb-10 pl-10 pr-10 relative ">
                <div className="w-[70vw] h-[500px] bg-cardbg border-dashed border-4 border-black rounded-[10vh] flex relative flex-col pl-5 pr-5 pb-10  ">

                    {/* {we offer box } */}
                    <div className="w-[40vw] h-[15vh] bg-primary flex absolute left-1/2 top-1/6 transform -translate-x-1/2 -translate-y-1/2  rounded-full px-3 pt-3 pb-3 border-b-4 border-dashed  border-black " >
                        <div className="w-full h-full bg-black flex items-ceter justify-center  rounded-full text-white text-[3.5vw] font-bold">
                            WE OFFER
                        </div>
                    </div>

                    {/* {we offers .....} */}
                    {/* 1 */}
                    <div className=" h-[10vw] w-full   p-3 mt-36 flex justify-between items-center text-center gap-[10vw] font-medium ">
                        <div className="h-full w-[50vw] p-4 bg-primary  flex justify-center  rounded-full text-[1.5vw] text-wrap items-center"> Interaction With Circles</div>
                        <div className="h-full w-[50vw] p-4 bg-primary flex justify-center  rounded-full text-[1.5vw] text-wrap items-center"> Points For Internship</div>
                    </div>

                    {/* 2 */}
                    <div className="h-[10vw] w-full  p-3 mt-36 flex  justify-between items-center text-center gap-[2vw] font-medium ">
                        <div className="h-full w-[50vw] p-4 bg-primary flex justify-center  rounded-full text-[1.5vw] text-wrap items-center">Community Meetups </div>
                        <div className="h-full w-[50vw] p-4 bg-primary flex justify-center  rounded-full text-[1.5vw] text-wrap items-center">Alumni Mentors </div>
                        <div className="h-full w-[50vw] p-4 bg-primary flex justify-center  rounded-full text-[1.5vw] text-wrap items-center"> Workshops</div>
                    </div>
                </div>
            </div>



            {/* Leaked interface starts */}
            <div className="w-full h-screen bg-primary flex flex-col md:flex-row items-center justify-center gap-6 p-10">

                {/* First Div */}
                <div className="w-full md:w-[25%] h-[100vh] md:h-[50vh] mr-10 bg-cardbg flex justify-center items-center rounded-r-[10vh] shadow-md text-[4vw] font-bold border-dashed border-r-4 border-black text-black">
                    <h1>Leaked <br />Interface</h1>
                </div>


                {/* Second Div with Image */}

                {imageData.map((image) => (
                    <div key={image.id} className="w-full md:w-[25%] h-[100vh] md:h-[70vh] bg-secondary flex justify-center items-center rounded-3xl shadow-md overflow-hidden border-dashed border-4 border-gray-600 transition-transform duration-400 hover:scale-105">
                        <img src={image.url} alt={image.title} className="w-full h-full object-cover" />

                    </div>
                ))}


            </div>


            <FAQ />

            {/* footer starts */}

            {/* Left part */}
            <div className=" w-full h-screen  bg-primary pt-20 flex flex-col md:flex-row justify-center items-center pb-40 overflow-hidden">

                {/* Left Section */}
                <div className="h-full w-full  flex flex-col text-[6vw] justify-center p-10">
                    <div className="h-[70vh] w-[90%] md:w-[37vw] bg-cardbg flex justify-center items-center text-center text-black font-bold rounded-b-[10vh] mx-auto  border-black  border-dashed border-b-4">
                        We do it Right.
                    </div>
                </div>

                {/* Right Section */}
                <div className="h-full w-full flex flex-col md:flex-col md:justify-around md:items-end p-10 text-xl font-medium">

                    <a className="w-full md:w-full border-b-2 border-white  flex justify-end md:justify-end items-center mb-4 md:mb-0"
                        href=""> Resources
                    </a>
                    <a className="w-full md:w-full border-b-2 border-white  flex justify-end md:justify-end items-center mb-4 md:mb-0"
                        href=""> Careers
                    </a>
                    <a className="w-full md:w-full border-b-2 border-white  flex justify-end md:justify-end items-center mb-4 md:mb-0"
                        href="">Blogs
                    </a>
                    <a className="w-full md:w-full border-b-2 border-white  flex justify-end md:justify-end items-center mb-4 md:mb-0"
                        href="" >Newsletter
                    </a>
                    <a className="w-full md:w-full border-b-2 border-white  flex justify-end md:justify-end items-center mb-4 md:mb-0"
                        href="" > FAQs
                    </a>
                    <a className="w-full md:w-full border-b-2 border-white  flex justify-end md:justify-end  items-center mb-4 md:mb-0"
                        href="" > Contact Us
                    </a>

                </div>
            </div>






        </div>
    );
}
export default Homepage;
