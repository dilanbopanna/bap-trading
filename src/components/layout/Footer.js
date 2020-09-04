import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">We are a group of Traders helping out the trading community to learn and enhance.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="Mailto:bopannamj@gmail.com">Email</a>
          </li>
          <li>
            <a href="tel:+918105528922">Phone</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.instagram.com/bap_trading/?hl=en">Instagram</a>
          </li>
          <li>
            <a href="https://t.me/niftyfutandoptions">Telegram</a>
          </li>
         
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
