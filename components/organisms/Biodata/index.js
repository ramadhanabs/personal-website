export default function index() {
  return (
    <div className="flex flex-col md:px-10">
      <div className="flex justify-center pt-10 mx-auto">
        <img src="/images/photo_profile.png" width={280} height={280} alt="" />
      </div>
      <div className="pt-10 pb-5 md:px-5 text-white">
        <h2 className="text-4xl font-semibold text-center md:text-left">Ramadhana Bagus Solichuddin</h2>
        <h4 className="text-xl font-thin text-center md:text-left">Frontend Engineer</h4>
      </div>
      <div className="md:px-5">
        <button type="button" className=" block bg-green-transparent bg-opacity-30 border-2 border-green-bright border-opacity-20 p-2 rounded-xl hover:ring-2 hover:bg-opacity-50 transition duration-500 ease-in-out w-full">
          <p className="text-green-secondary text-center hover:text-white transition duration-500 ease-in-out">
            Contact Me
          </p>
        </button>
      </div>
      <div className="text-white hidden md:block">
        <div className="flex flex-row px-5 py-5">
          <div className="mr-4">
            <img src="/icon/location.svg" alt="Location-icon" className="mt-1" />
          </div>
          <div className="align-middle font-thin">
            <p>Yogyakarta, Indonesia</p>
          </div>
        </div>
        <div className="flex flex-row px-5">
          <div className="mr-4">
            <img src="/icon/mdi_school.svg" alt="Location-icon" className="mt-1" />
          </div>
          <div className="align-middle font-thin">
            <p>
              Bachelor of Computer Science,
              {' '}
              <br />
              {' '}
              Universitas Islam Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
