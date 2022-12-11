import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';

type Props = {
  category: Category;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => {
  return (
    <Link href={`/news/${category}`} className={`navlink ${isActive && 'underline decoration-orange-400 underline-offset-4 font-bold text-lg'}`}>
      {category}
    </Link>
  );
};

export default NavLink;
