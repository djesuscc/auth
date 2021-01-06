import React, { useEffect, useState } from 'react'
import auth0 from 'auth0-js'
const Home = () => {
  const webAuth = new auth0.WebAuth({
    domain: 'colcs.us.auth0.com',
    clientID: '2LMKZoJcG9wltAdIk0l6pvsWWB5tggUV',
    redirectUri: 'http://localhost:3000/success',
    responseType: 'token id_token',
  })

  useEffect(() => {
    webAuth.parseHash((error, result) => {
      if (typeof window !== 'undefined') {
        if (error) {
          console.warn(error)
        } else {
          console.log('Result', result)
        }
      }
    })
  }, [])

  return(
    <div>Este es el success</div>
  )
}

export default Home