import { useLottie } from 'lottie-react';
import React from 'react'
import signUpAnimation from './../../assets/Animation/signUpAnimation.json'
import FormSignUp from '../../components/FormSignUp/FormSignUp';
import UserHeader from '../../components/UserHeader/UserHeader';

const SignUpPage = () => {
  const options = {
    animationData: signUpAnimation,
    loop: true
  };
    
  const { View } = useLottie(options);
  return (
    <>
      <UserHeader/>
      <div className='flex'>
        <div className="w-1/2">
          {View}
        </div>
        <div className="w-1/2">
          <FormSignUp />
        </div>
          
      </div>
    </>
  );
};

export default SignUpPage;