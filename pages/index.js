export default function Home() {
  return (
    <div className="bg-black">
      <nav className="h-20 border-b border-t-0 border-l-0 border-r-0 border-white border border-opacity-20">
        <div className="grid grid-cols-3 gap-2 container-md h-full">
          <div className="hidden md:block" />
          <div className="col-span-3 md:col-span-2 text-white h-full">
            <div className="flex flex-row">
              <div className="border-b-2 border-green-transparent px-6 py-7 flex flex-row">
                <img src="/icon/book.svg" alt="book-icon" className="mr-5" />
                <p className="font-normal">Overview</p>
              </div>
              <div className="px-6 py-7 opacity-50 flex flex-row hover:opacity-100 transition duration-500 ease-in-out">
                <img src="/icon/code.svg" alt="code-icon" className="mr-5" />
                <p className="font-normal">Projects</p>
              </div>
              <div className=" px-6 py-7 opacity-50 flex flex-row hover:opacity-100 transition duration-500 ease-in-out">
                <img src="/icon/jobs.svg" alt="jobs-icon" className="mr-5" />
                <p className="font-normal">Experience</p>
              </div>

            </div>
          </div>
        </div>
      </nav>
      <div className="container-md mx-auto bg-black h-full md:h-screen px-14">
        <div className="md:grid md:grid-cols-3 md:gap-2 container-md h-full">
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
          <div className="col-span-2 text-white">
            <div className="flex pb-2 pt-14 align-middle">
              <div className="flex-1 align-left">
                <p className="font-bold text-lg inline-block align-middle">A little thing about me</p>
              </div>
              <div className="flex flex-1 justify-end ">
                <p className="mr-5 opacity-50 font-thin hidden md:block">Reach me here</p>
                <img src="/icon/github.svg" alt="github-icon" className="mr-2 opacity-50 hover:opacity-100 transition duration-500 ease-in-out" />
                <img src="/icon/linkedin.svg" alt="linkedin-icon" className="mr-2 opacity-50 hover:opacity-100 transition duration-500 ease-in-out" />
                <img src="/icon/email.svg" alt="Location-icon" className="mr-2 opacity-50 hover:opacity-100 transition duration-500 ease-in-out" />

              </div>
            </div>
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
                <p className="font-thin mr-5 opacity-50 hover:opacity-100 transition duration-500 ease-in-out">See all project</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className=" p-4 rounded-xl border border-white border-opacity-20">
                <div className="flex">
                  <div className="flex-auto align-left">
                    <p className="font-bold text-left text-green-primary">
                      Neurovi Medical System
                    </p>
                  </div>
                  <div className="flex flex-auto justify-end">
                    <div className="border border-opacity-20 border-green-gradient hover:bg-green-transparent hover:bg-opacity-50  py-1 px-3 rounded-xl transition duration-500 ease-in-out">
                      <p className="text-xs text-opacity-80 text-green-bright hover:text-white">Details</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-left text-white opacity-50 mb-20">
                  Frontend Developer - PT. Tamadun International
                </p>
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="absolute inset-x-0 bottom-0">
                      <div className="flex flex-wrap-reverse">
                        <div className="flex flex-row align-left mr-5 mb-1">
                          <div className="rounded-full bg-yellow bg-opacity-50 border border-yellow border-opacity-90 w-2.5 h-2.5 mr-2 mt-0.5 " />
                          <p className="text-xs">Javascript</p>
                        </div>
                        <div className="flex flex-row align-left mr-5 mb-1">
                          <div className="rounded-full bg-green-transparent bg-opacity-50 border border-green-transparent border-opacity-90 w-2.5 h-2.5 mr-2 mt-0.5 " />
                          <p className="text-xs">Vue.JS</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute bottom-0 right-0">
                      <img src="/icon/pin.svg" alt="pin-icon" className="mr-2 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" p-4 rounded-xl border border-white border-opacity-20">
                <div className="flex">
                  <div className="flex-auto align-left">
                    <p className="font-bold text-left text-green-primary">
                      Store GG
                    </p>
                  </div>
                  <div className="flex flex-auto justify-end">
                    <div className="border border-opacity-20 border-green-gradient hover:bg-green-transparent hover:bg-opacity-50 py-1 px-3 rounded-xl transition duration-500 ease-in-out">
                      <p className="text-xs text-opacity-80 text-green-bright hover:text-white">Details</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-left text-white opacity-50 mb-20">
                  Fullstack Javascript - Self Project
                </p>
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="absolute inset-x-0 bottom-0">
                      <div className="flex flex-wrap-reverse">
                        <div className="flex flex-row align-left mr-5 mb-1">
                          <div className="rounded-full bg-white bg-opacity-50 border border-white border-opacity-90 w-2.5 h-2.5 mr-2 mt-0.5 " />
                          <p className="text-xs">Express</p>
                        </div>
                        <div className="flex flex-row align-left mr-5 mb-1">
                          <div className="rounded-full bg-green-transparent bg-opacity-50 border border-green-transparent border-opacity-90 w-2.5 h-2.5 mr-2 mt-0.5 " />
                          <p className="text-xs">MongoDB</p>
                        </div>
                        <div className="flex flex-row align-left mr-5 mb-1">
                          <div className="rounded-full bg-blue-lightPrimary bg-opacity-50 border border-blue-lightPrimary border-opacity-90 w-2.5 h-2.5 mr-2 mt-0.5 " />
                          <p className="text-xs">Typescript</p>
                        </div>
                        <div className="flex flex-row align-left mr-5 mb-1">
                          <div className="rounded-full bg-blue-primary bg-opacity-50 border border-blue-primary border-opacity-90 w-2.5 h-2.5 mr-2 mt-0.5 " />
                          <p className="text-xs">NextJS</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute bottom-0 right-0">
                      <img src="/icon/pin.svg" alt="pin-icon" className="mr-2 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" p-4 rounded-xl border border-white border-opacity-20">
                <div className="flex">
                  <div className="flex-auto align-left">
                    <p className="font-bold text-left text-green-primary">
                      International Conference - LSF 2021
                    </p>
                  </div>
                  <div className="flex flex-auto justify-end">
                    <div className="relative">
                      <div className="absolute top-0 right-0">
                        <div className="border border-opacity-20 border-green-gradient hover:bg-green-transparent hover:bg-opacity-50 py-1 px-3 rounded-xl transition duration-500 ease-in-out">
                          <p className="text-xs text-opacity-80 text-green-bright hover:text-white">Details</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-left text-white opacity-50 mb-20">
                  Event Landing Page - UII Yogyakarta
                </p>
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="absolute inset-x-0 bottom-0">
                      <div className="flex flex-wrap-reverse">
                        <div className="flex flex-row align-left mr-5 mb-1">
                          <div className="rounded-full bg-white bg-opacity-50 border border-white border-opacity-90 w-2.5 h-2.5 mr-2 mt-0.5 " />
                          <p className="text-xs">Wordpress</p>
                        </div>
                        <div className="flex flex-row align-left mr-5 mb-1">
                          <div className="rounded-full bg-purple-lightPrimary bg-opacity-50 border border-purple-lightPrimary border-opacity-90 w-2.5 h-2.5 mr-2 mt-0.5 " />
                          <p className="text-xs">Elementor</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute bottom-0 right-0">
                      <img src="/icon/pin.svg" alt="pin-icon" className="mr-2 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" p-4 rounded-xl border border-white border-opacity-20">
                <div className="flex">
                  <div className="flex-auto align-left">
                    <p className="font-bold text-left text-green-primary">
                      Hackafarm 2021
                    </p>
                  </div>
                  <div className="flex flex-auto justify-end">
                    <div className="relative">
                      <div className="absolute top-0 right-0">
                        <div className="border border-opacity-20 border-green-gradient hover:bg-green-transparent hover:bg-opacity-50 py-1 px-3 rounded-xl transition duration-500 ease-in-out">
                          <p className="text-xs text-opacity-80 text-green-bright hover:text-white">Details</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-left text-white opacity-50 mb-20">
                  Event Landing Page - PT. Indmira
                </p>
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="absolute inset-x-0 bottom-0">
                      <div className="flex flex-wrap-reverse">
                        <div className="flex flex-row align-left mr-5 mb-1">
                          <div className="rounded-full bg-white bg-opacity-50 border border-white border-opacity-90 w-2.5 h-2.5 mr-2 mt-0.5 " />
                          <p className="text-xs">Wordpress</p>
                        </div>
                        <div className="flex flex-row align-left mr-5 mb-1">
                          <div className="rounded-full bg-purple-lightPrimary bg-opacity-50 border border-purple-lightPrimary border-opacity-90 w-2.5 h-2.5 mr-2 mt-0.5 " />
                          <p className="text-xs">Elementor</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute bottom-0 right-0">
                      <img src="/icon/pin.svg" alt="pin-icon" className="mr-2 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <footer className="py-8 border-t border-b-0 border-l-0 border-r-0 border-white border border-opacity-20">
        <p className="text-white text-opacity-50 px-4 text-xs text-center">Built with 💕 - Inspired by github.com</p>
      </footer>
    </div>
  );
}
