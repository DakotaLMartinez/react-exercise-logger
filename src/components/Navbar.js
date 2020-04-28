import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({}) => {
  return (
    <section id="navigation">
      <nav>
        <Link to={{
          pathname: `/routines`
        }}>
          Routines
        </Link>
        <Link to={{
          pathname: `/workouts`
        }}>
          Workouts
        </Link>
      </nav>
    </section>
  )
}

export default Navbar