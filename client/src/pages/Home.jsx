import React from 'react'

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl max-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800' >Welcome to Auth App</h1>
      <p className='mb-4 text-slate-700'>
      Creating an authentication app using the MERN (MongoDB, Express.js, React, Node.js) stack along with Tailwind CSS, JSON Web Tokens (JWT), and Redux Toolkit is a powerful and modern approach to building robust and scalable web applications. In this comprehensive description, we'll delve into the key components and functionalities of your authentication app, exploring how each technology contributes to the overall development.<br/><br/>
      The app's workflow begins with user registration and login functionalities. Tailwind CSS ensures an appealing and responsive design, while the MERN stack handles server-side processing and database interactions. Upon successful authentication, a JWT is generated, and Redux Toolkit manages the user's authentication statProtected routes, accessible only to authenticated users, are implemented using the JWT stored on the client side. This ensures that sensitive information and actions are restricted to authorized users. The app's architecture promotes scalability and maintainability, crucial for long-term success.
      </p>
    </div>
  )
}
