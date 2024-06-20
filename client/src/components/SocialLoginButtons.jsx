import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const SocialLoginButtons = ({ handleGoogleLogin, handleFacebookLogin, handleGoogleLoginFailure }) => {
  return (
    <div className="socialLoginButtons">
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Sign up with Google"
        onSuccess={handleGoogleLogin}
        onFailure={handleGoogleLoginFailure}
      />
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookLogin}
      />
    </div>
  );
};

export default SocialLoginButtons;
