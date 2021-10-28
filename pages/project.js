import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import Biodata from '../components/organisms/Biodata';
import Card from '../components/molecules/Card';
import HeaderAndSocmed from '../components/organisms/HeaderAndSocmed';
import Footer from '../components/organisms/Footer';

export default function Project() {
  return (
    <div>
      <Head>
        <title>@ramadhanabs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-black w-100">
        <Navbar active="projects" />
        <div className="container-md mx-auto bg-black h-full md:h-full px-14">
          <div className="md:grid md:grid-cols-3 md:gap-2 container-md h-full">
            <div className="hidden md:block mb-14">
              <Biodata />
            </div>
            <div className="col-span-2 text-white">
              <HeaderAndSocmed title="Project" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <Card title="Neurovi Medical System" subtitle="Frontend Developer - PT. Tamtech International" tech={['Javascript', 'VueJS']} link="http://neurovi.ip-dynamic.com:1000/login" featured />
                <Card title="Store GG" subtitle="Fullstack Developer - Self Project" tech={['MongoDB', 'NextJS', 'Express', 'Typescript']} link="https://github.com/ramadhanabs/storegg" />
                <Card title="ICLSF 2021" subtitle="Event Landing Page - UII Yogyakarta" tech={['Wordpress', 'Elementor']} link="https://iclsfuii.com/" />
                <Card title="Hackafarm 2021" subtitle="Event Landing Page - PT Indmira" tech={['Wordpress', 'Elementor']} link="https://hackafarm.com/" />
                <Card title="IFRC 2021" subtitle="Event Landing Page - PT Adaro" tech={['Wordpress', 'Elementor']} link="https://ifrcofficial.com/" />
                <Card title="Edustore" subtitle="Fullstack Developer - Self Project" tech={['PHP', 'VueJS', 'Laravel']} link="https://edustore.ramadhanabs.tech/" />
                <Card title="Tropicalindo" subtitle="Landing Page - PT. Apra Nusantara Global" tech={['Wordpress', 'Elementor']} link="https://fruitstropicalindo.com/" />
                <Card title="Spices Tropicalindo" subtitle="Landing Page - PT. Apra Nusantara Global" tech={['Wordpress', 'Elementor']} link="https://origintropicalindo.com/" />
                <Card title="Fit & Health Android App" subtitle="Frontend Developer - College Submission" tech={['Firebase', 'Java']} />
                <Card title="SIAGA Bencana" subtitle="Fullstack Developer - College Submission" tech={['PHP', 'Codeigniter', 'Bootstrap']} />
                <Card title="Kalografi" subtitle="UI/UX Designer - Last Year Projects" tech={['Figma']} link="https://kalografi.herokuapp.com/" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
