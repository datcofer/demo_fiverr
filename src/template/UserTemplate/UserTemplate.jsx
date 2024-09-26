import React from 'react'
import UserHeader from '../../components/UserHeader/UserHeader';
import UserFooter from '../../components/UserFooter/UserFooter';
import { Outlet } from 'react-router-dom';
import Wrapper from '../../components/WrapperSuggestJob/Wrapper';
import ListJob from '../../components/UserBodyHome/ListJob/ListJob';
import SeviceSlide from '../../components/UserBodyHome/ListSevice/SeviceSlide';
import Talent from '../../components/UserBodyHome/Talent/Talent';
import Banner from '../../components/UserBodyHome/Banner/Banner';
import Feedback from '../../components/UserBodyHome/Feedback/Feedback';


const UserTemplate = () => {
  return (
    <>
      {/* header  */}
      <UserHeader />
      {/* main  */}
      <Wrapper>
        <main>

          <Banner/>
          <ListJob />
          <SeviceSlide />
          <Talent />
          <Feedback/>
          <Outlet />
        </main>
      </Wrapper>
      {/* footer  */}
      <UserFooter />
    </>
  );
};

export default UserTemplate;