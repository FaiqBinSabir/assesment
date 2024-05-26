export default function SideHero() {
  return (
    <div className=" mr-2   py-6">
      <div className="flex justify-between items-center mb-10">
        <ChevronLeftIcon className="h-6 w-4 text-gray-600" />
        <div className="flex space-x-8">
          <img
            alt="Microsoft Partner"
            src="https://images.pexels.com/photos/9683980/pexels-photo-9683980.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-20 w-40 rounded-3xl"
          />
          <img
            alt="Salesforce"
            src="https://images.pexels.com/photos/1591055/pexels-photo-1591055.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-20 w-40 rounded-3xl"
          />
          <img
            alt="Webmerge"
            src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-20 w-40 rounded-3xl"
          />
          <img
            alt="Cloudera Connect"
            src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-20 w-40 rounded-3xl"
          />
        </div>
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap -mx-2">
        <div className="w-full lg:w-1/2 px-2 mb-8 lg:mb-0">
          <img
            alt="Marketing Consultant"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-lg w-full sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg h-96  object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 px-1 flex flex-col justify-end lg:pl-0">
          <div className="w-9/12">
            <h1 className="text-5xl font-bold mb-4">Welcome To Strategic Marketing consultants Group</h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium....
            </p>
            <button className="w-max bg-blue-900 text-white border border-blue-600 hover:bg-blue-100 hover:text-blue-900 px-6 py-3 rounded-md text-lg font-medium">
              Learn More
            </button>
          </div>
          <div className="mt-6">
            <img
              src="https://images.pexels.com/photos/8297069/pexels-photo-8297069.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
