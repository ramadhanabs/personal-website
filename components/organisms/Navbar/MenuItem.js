/* eslint-disable jsx-a11y/anchor-is-valid */
import cx from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function MenuItem(props) {
  const {
    title, icon, active, href,
  } = props;
  const classItem = cx({
    'border-b-2': active,
    'border-green-transparent': active,
    'opacity-100': active,
    'px-6': true,
    'py-7': true,
    flex: true,
    'flex-row': true,
    'justify-center': true,
    'md:flex-grow-0': true,
    'opacity-50': true,
    transition: true,
    'duration-500': true,
    'ease-in-out': true,
    'hover:opacity-100': true,
  });
  return (
    <Link href={href}>
      <a className={classItem}>
        <img src={`/icon/${icon}`} alt="jobs-icon" className="mr-2 md:mr-5" />
        <p className="font-normal hidden md:block">{title}</p>
      </a>
    </Link>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
