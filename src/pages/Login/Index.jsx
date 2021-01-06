import React, { useEffect, useState } from 'react'
import auth0 from 'auth0-js'

const Login = () => {
  const [username, setUserName] = useState('djesuscc@gmail.com')
  const [password, setPassword] = useState('Ketogains!')
  
  const webAuth = new auth0.WebAuth({
    domain: 'colcs.us.auth0.com',
    clientID: 'dxZeah4mD3q442eIgCmJGGfSo7dj77mX',
    redirectUri: 'http://localhost:3000/success',
    responseType: 'token id_token',
  })
  

  const login = async ({ username, password }) => {
    webAuth.redirect.loginWithCredentials(
      {
        connection: 'Username-Password-Authentication',
        username,
        password,
        scope: 'openid email profile'
      },
      (error) => console.log(error)
    )
   
  }

  useEffect(() => {
    const handleAsync = async () => {
      let i = 1;
      if (i===1) {
        await login({ username, password })
        i=2
      }
      
    }

    handleAsync()
  }, [])

  return(
    <div>Login</div>
  )
}

export default Login