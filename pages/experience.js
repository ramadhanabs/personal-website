import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import Biodata from '../components/organisms/Biodata';
import HeaderAndSocmed from '../components/organisms/HeaderAndSocmed';
import Footer from '../components/organisms/Footer';

export default function experience() {
  return (
    <div>
      <Head>
        <title>@ramadhanabs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-black w-100">
        <Navbar active="experience" />
        <div className="container-md mx-auto bg-black h-full md:h-screen px-14">
          <div className="md:grid md:grid-cols-3 md:gap-2 container-md h-full">
            <Biodata />
            <div className="col-span-2 text-white">
              <HeaderAndSocmed title="My Professional Experiences" />
              <div className="text-white bg-gradient-to-r  border  border-white border-opacity-20 py-6 p-4 rounded-xl mb-5">
                <p className="text-2xl font-bold text-left text-green-primary">
                  Neurovi Medical System - Internship
                </p>
                <p className="text-xs font-thin pt-2 pb-10">Frontend Developer</p>
                <p className="text-xs font-thin pt-2">August 2021 - November 2021</p>
              </div>
              <div className="text-white border  border-white border-opacity-20  py-6 p-4 rounded-xl mb-5">
                <p className="text-2xl font-bold text-left text-green-primary">
                  Astra Credit Companies - Internship
                </p>
                <p className="text-xs font-thin pt-2 pb-10"> Quality Control</p>
                <p className="text-xs font-thin pt-2">January 2021 - May 2021</p>
              </div>
              <div className="text-white bg-gradient-to-r  border  border-white border-opacity-20 py-6 p-4 rounded-xl mb-5">
                <p className="text-2xl font-bold text-left text-green-primary">
                  Marketing & Communication FTI UII
                </p>
                <p className="text-xs font-thin pt-2 pb-10"> Lead of Creative Digital Marketing</p>
                <p className="text-xs font-thin pt-2">January 2019 - February 2021</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
