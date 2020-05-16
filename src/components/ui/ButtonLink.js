import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({pathname, children}) => {
  return (
    <Link className="ml-1 inline-block bg-green-600 px-2 py-1 rounded" to={{
      pathname
    }}>
      {children}
    </Link>
  )
}

export default ButtonLink;