/* eslint-disable jsx-a11y/anchor-is-valid */
import cx from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function index(props) {
  const {
    title, subtitle, tech, featured, link,
  } = props;
  const techClassItem = cx({
    'rounded-full': true,
    border: true,
    'bg-opacity-50': true,
    'border-opacity-90': true,
    'w-2.5': true,
    'h-2.5': true,
    'mr-2': true,
    'mt-0.5': true,
  });

  function checkColor(item) {
    switch (item) {
      case 'Elementor':
      case 'PHP':
        return 'bg-purple-lightPrimary border-purple-lightPrimary';
      case 'Javascript':
      case 'Firebase':
        return 'bg-yellow border-yellow';
      case 'VueJS':
      case 'MongoDB':
        return 'bg-green-transparent border-green-transparent';
      case 'Typescript':
        return 'bg-blue-lightPrimary border-blue-lightPrimary';
      case 'NextJS':
      case 'ReactJS':
        return 'bg-blue-primary border-blue-primary';
      default:
        return 'bg-white border-white';
    }
  }
  const techStack = tech.map((item) => (
    <div className="flex flex-row align-left mr-5 mb-1">
      <div className={`${techClassItem} ${checkColor(item)}`} />
      <p className="text-xs">{item}</p>
    </div>
  ));

  const isFeatured = cx({
    relative: true,
    hidden: !featured,
    block: featured,
  });

  return (
    <div className=" p-4 rounded-xl border border-white border-opacity-20">
      <div className="flex">
        <div className="flex-1 md:flex-auto align-left">
          <p className="font-bold text-left text-green-primary">
            {title}
          </p>
        </div>
        <div className="flex flex-auto justify-end">
          <div className="relative">
            <div className="absolute top-0 right-0">
              <div className="border border-opacity-20 border-green-gradient hover:bg-green-transparent hover:bg-opacity-50 px-4 rounded-xl transition duration-500 ease-in-out">
                <Link href={`${link}`}>
                  <a className="text-xs text-opacity-80 text-green-bright hover:text-white pb-2">Link</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-left text-white opacity-50 mb-20">
        {subtitle}
      </p>
      <div className="grid grid-cols-2">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0">
            <div className="flex flex-wrap-reverse">
              {techStack}
            </div>
          </div>
        </div>
      </div>
      <div className={isFeatured}>
        <div className="absolute bottom-0 right-0">
          <img src="/icon/pin.svg" alt="pin-icon" className="mr-2 opacity-50" />
        </div>
      </div>
    </div>
  );
}

index.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string,
  featured: PropTypes.bool,
  tech: PropTypes.shape([]),
};
