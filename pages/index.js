/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/organisms/Navbar';
import Biodata from '../components/organisms/Biodata';
import Card from '../components/molecules/Card';
import HeaderAndSocmed from '../components/organisms/HeaderAndSocmed';
import Footer from '../components/organisms/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>@ramadhanabs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-black w-100">
        <Navbar active="overview" />
        <div className="container-md mx-auto bg-black h-full md:h-screen px-14">
          <div className="md:grid md:grid-cols-3 md:gap-2 container-md h-full">
            <Biodata />
            <div className="col-span-2 text-white">
              <HeaderAndSocmed title="A little thing about me" />
              <div className="text-white bg-gradient-to-r bg-green-transparent bg-opacity-20 border-2  border-green-bright border-opacity-10 py-12 p-4 rounded-xl">
                <p className="text-2xl font-bold text-left">
                  #MyPurpose 😇
                </p>
                <p className="text-xs font-thin pt-2">Help and encourage others with code.</p>
              </div>
              <div className="flex pb-2 pt-14 align-middle">
                <div className="flex-1 align-left">
                  <p className="font-bold text-lg inline-block align-middle">Featured Project</p>
                </div>
                <div className="flex flex-1 justify-end ">
                  <Link href="/project">
                    <a className="font-thin mr-5 opacity-50 hover:opacity-100 transition duration-500 ease-in-out">See all project</a>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <Card title="Neurovi Medical System" subtitle="Frontend Developer - PT. Tamtech International" tech={['Javascript', 'VueJS']} link="http://neurovi.ip-dynamic.com:1000/login" featured />
                <Card title="Store GG" subtitle="Fullstack Developer - Self Project" tech={['MongoDB', 'NextJS', 'Express', 'Typescript']} featured />
                <Card title="ICLSF 2021" subtitle="Event Landing Page - UII Yogyakarta" tech={['Wordpress', 'Elementor']} link="https://iclsfuii.com/" featured />
                <Card title="Hackafarm 2021" subtitle="Event Landing Page - PT Indmira" tech={['Wordpress', 'Elementor']} link="https://hackafarm.com/" featured />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
