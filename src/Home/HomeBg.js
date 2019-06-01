import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import LocationSearch from '../Search/LocationSearch.js';


export default class HomeBg extends Component {
  state = {}


  render() {

    const styles = {
      container:{
      position: 'absolute',
      top: 300,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      size:'massive'
    }
  }

  const TextStyles = {
    container:{
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

  const SignInButton = {
    container:{
      position: 'absolute',
      top: 10,
      left: 0,
      right: 100,
      bottom: 0,
      flex: 50,
      textAlign: 'right',
  }
  }

  const SignUpButton = {
    container:{
      position: 'absolute',
      top: 10,
      left: 0,
      right: 20,
      bottom: 0,
      flex: 50,
      textAlign: 'right',
  }
  }

    return (
    <div>
      <img src='https://cf.ua/m/blog/43b1da4a0a2302806bcc9702d1551645/images/gallery-1447358888-clx110114clkt-59a6da0936811.jpg' />
    <div style={SignUpButton.container}>
      <Button href="/BuyerSellerRegistry">Sign Up</Button>
    </div>
    <div style={SignInButton.container}>
      <Button>Sign In</Button>
    </div>
    <div style={TextStyles.container}>
      <h1>
        Because Home is where the heart is.
      </h1>
    </div>
      <div style={styles.container}>
        <LocationSearch/>
      </div>
    </div>


    );
  }
}
