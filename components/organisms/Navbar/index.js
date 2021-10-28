import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

export default function index(props) {
  const { active } = props;
  return (
    <nav className="h-20 border-b border-t-0 border-l-0 border-r-0 border-white border border-opacity-20 sticky top-0 z-50 bg-black">
      <div className="grid grid-cols-3 gap-2 container-md h-full">
        <div className="hidden md:block" />
        <div className="col-span-3 md:col-span-2 text-white h-full">
          <div className="flex flex-auto md:flex-row">
            <MenuItem title="Overview" icon="book.svg" href="/" active={active === 'overview'} />
            <MenuItem title="Projects" icon="code.svg" href="/project" active={active === 'projects'} />
            <MenuItem title="Experience" icon="jobs.svg" href="/experience" active={active === 'experience'} />
          </div>
        </div>
      </div>
    </nav>
  );
}

MenuItem.propTypes = {
  active: PropTypes.string.isRequired,
};
