import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
          Discover the art of Trading
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Learn, Execute & Earn. Be a part of trading community and experiece the joy of trading.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg"><a href="https://t.me/niftyfutandoptions" target='_blank' style={{color:'white'}}>Get Started</a></Button>
          </p>
          <p className="mt-4 text-gray-600">Click here & Enjoy the ride!</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Pricing</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">₹1999</p>
              <p className="mt-4">
                 One month Subcription plan with accuracy level of 85%-90%
                
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">₹2999</p>
              <p className="mt-4">
              Three month Subcription plan with accuracy level of 85%-90%
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">₹4999</p>
              <p className="mt-4">
              Five month Subcription plan with accuracy level of 85%-90%
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how the market reacts to the current situations and optimize the outcome.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Execution Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will analyse and predict the Entry & Exit points.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Nifty & BankNifty
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We mostly provide clues on Nifty and Banknifty analysing all the situations.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+80%" secondaryText="Accuracy Level" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+90%" secondaryText="Client Satisfaction" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Daily Calls" />
          </div>
        </div>
      </div>
    </section>
   
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow with us?</h3>
      <p className="mt-8 text-xl font-light">
       Start your paid subcription plan right away!!
      </p>
      <p className="mt-8">
        <Button size="xl"><a href="tel:+918105528922" target='_blank' style={{color:'white'}}>Get Started Now</a></Button>
      </p>
    </section>
  </Layout>
);
