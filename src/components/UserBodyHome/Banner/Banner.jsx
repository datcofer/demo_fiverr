import React from 'react'
import useResponsive from '../../../hooks/useReponsive';
import WrapperSuggestJob from '../../WrapperSuggestJob/WrapperSuggestJob';
import FormSeachProduct from '../../Form/FormSearchProduct';
import LogoMeta from '../../Icon/LogoIconBanner/LogoMeta';
import LogoGoogle from '../../Icon/LogoIconBanner/LogoGoogle';
import LogoNetflix from '../../Icon/LogoIconBanner/LogoNetflix';
import LogoPandG from '../../Icon/LogoIconBanner/LogoPandG';
import LogoPayPal from '../../Icon/LogoIconBanner/LogoPayPal';
import LogoPayoneer from '../../Icon/LogoIconBanner/LogoPayoneer';

const Banner = () => {
  const isResponsive = useResponsive({
    mobile: 576,
    tablet: 768,
  })
  return (
    <div className='container mt-4'>
      <div className="flex flex-col justify-center items-center gap-4 text-center bg-[url('assets/images/banner.png')] bg-cover bg-center bg-no-repeat py-32 rounded-3xl">
        {/* TITLE  */}
        <h2 className={` ${isResponsive.mobile ? "text-2xl" : "text-6xl"} text-white leading-normal `}>Find the right <span className='italic text-green-400'>freelance</span><br />service, right away</h2>
        {/* FORM SEARCH PRODUCT */}
        <WrapperSuggestJob>
          <FormSeachProduct />
        </WrapperSuggestJob>
        {/* LOGO ICON */}
        <div className={`${isResponsive.mobile ? "block space-y-4" : "flex justify-center items-center space-x-12"} opacity-50 mt-8`}>
          <p className='text-sm font-bold text-white'>Trusted by:</p>
          <LogoMeta />
          <LogoGoogle />
          <LogoNetflix />
          <LogoPandG />
          <LogoPayPal />
          <LogoPayoneer />
        </div>
      </div>
    </div>
  );
};

export default Banner;