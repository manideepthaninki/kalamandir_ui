import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import {Auth,Hub} from 'aws-amplify';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


 const OAuth2RedirectHandler=(props)=> {
   
  const [user, setUser] = useState(null);
  const [userGroups, setUserGroups] = useState(null);
    

    useEffect(() => {
      console.log("--------------------------------------------------")
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
           getUser().then((userData) => {
// <Redirect to={{pathname: "/profile",state: { from: props.location } }}/> 
let currentUser={
  name:userData.signInUserSession.idToken.payload["name"],
  roles:userData.signInUserSession.idToken.payload["cognito:groups"],
  email:userData.signInUserSession.idToken.payload["email"],
  idToken:userData.signInUserSession.idToken.jwtToken
}

              localStorage.setItem('authUser',JSON.stringify(currentUser))
              localStorage.removeItem('CognitoIdentityServiceProvider.mq5156i3n41cgptacnplpc2on.google_112165768106529439045.idToken');
              localStorage.removeItem('CognitoIdentityServiceProvider.mq5156i3n41cgptacnplpc2on.google_112165768106529439045.accessToken');
              localStorage.removeItem('CognitoIdentityServiceProvider.mq5156i3n41cgptacnplpc2on.google_112165768106529439045.refreshToken');
              }).then( props.history.push("/profile")
              )
        case "signOut":
          localStorage.setItem('authUser',null)
          setUser(null);
          setUserGroups(null);
          break;
        case "signIn_failure":
          console.log("Sign in failure", data);
          break;
      default:
          console.log("in default case ------");
      }
    });

    getUser().then((userData) => {
      setUser(userData);
      if (userData) {
        
        setUserGroups(
          userData.signInUserSession.accessToken.payload["cognito:groups"]
        );
      } else {
        setUserGroups(null);
      }
    });
  }, []);

  function getUser() {
      return Auth.currentAuthenticatedUser()
        .then((userData) => userData)
        .catch(() => console.log("Not signed in"));
    }      
       
         
                 
                 return(
                   <h1>Loading...</h1>
                 )
                 
               
        
    }


export default OAuth2RedirectHandler;