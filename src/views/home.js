import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Legacy Operations Developer</title>
        <meta property="og:title" content="Legacy Operations Developer" />
      </Helmet>
    </div>
  )
}

export default Home
