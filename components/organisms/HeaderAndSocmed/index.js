import PropTypes from 'prop-types';

export default function index(props) {
  const { title } = props;
  return (
    <div className="flex pb-2 pt-14 align-middle">
      <div className="flex-1 align-left">
        <p className="font-bold text-xs md:text-lg inline-block align-middle">{title}</p>
      </div>
      <div className="flex flex-1 justify-end ">
        <p className="mr-5 opacity-50 font-thin hidden md:block">Reach me here</p>
        <a href="https://www.github.com/ramadhanabs">
          <img src="/icon/github.svg" alt="github-icon" className="mr-2 opacity-50 w-4 h-4 md:w-5 md:h-5 hover:opacity-100 transition duration-500 ease-in-out" />
        </a>
        <a href="https://www.linkedin.com/in/ramadhanabagus/">
          <img src="/icon/linkedin.svg" alt="linkedin-icon" className="mr-2 opacity-50 w-4 h-4 md:w-5 md:h-5 hover:opacity-100 transition duration-500 ease-in-out" />
        </a>
        <a href="/#">
          <img src="/icon/email.svg" alt="Location-icon" className="mr-2 opacity-50 w-4 h-4 md:w-5 md:h-5 hover:opacity-100 transition duration-500 ease-in-out" />
        </a>
      </div>
    </div>
  );
}

index.propTypes = {
  active: PropTypes.string.isRequired,
};
