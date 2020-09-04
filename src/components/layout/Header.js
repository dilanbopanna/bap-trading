import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import icon from '../../assets/icon1.png'

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img src={icon}/>
        </div>
        BAP Trading
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Pricing
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
      
      </div>
      <div className="hidden md:block">
        <Button className="text-sm"><a href="mailto:bopannamj@gmail.com" style={{color:'white'}}>Start Free Trial</a></Button>
      </div>
    </div>
  </header>
);

export default Header;
