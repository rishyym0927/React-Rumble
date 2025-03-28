import React from 'react'

const About = () => {
  return (
    <div>
        <h1>About Us</h1>
        <div style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
            <p>
                This is a simple application built with React and Vite. It demonstrates the use of React Router for navigation between pages.
            </p>
            <p>
                The application consists of a home page and an about page. The home page includes a counter that increments when clicked, and a link to navigate to the about page. The about page provides information about the application.
            </p>
        </div>
    </div>
  )
}

export default About