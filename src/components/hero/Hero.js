import React, { useState, useEffect } from 'react';
import Title from '../layouts/Title';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHeroData(data.user.about);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!heroData) {
    return <div>No data available</div>;
  }

  const { name, title, subTitle, quote, avatar } = heroData;

  return (
    <section id="introduction" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Introduction" des="Get to Know Me" />
      </div>
      <div className="max-w-6xl mx-auto mt-8">
        <div className="flex items-center justify-center">
          <div className="hero-content">
            <h1 className="text-4xl font-bold">{name}</h1>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-lg">{subTitle}</p>
            <p className="text-lg">{quote}</p>
          </div>
          <div className="hero-image">
            {avatar && <img src={avatar.url} alt="Hero" style={{ maxWidth: '200px', borderRadius: '50%' }} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
