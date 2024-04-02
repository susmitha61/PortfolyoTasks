import React, { useState, useEffect } from 'react';
import Title from '../layouts/Title';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState({
    description: '',
    expYear: 0,
    address: '',
    phoneNumber: '',
    contactEmail: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAboutData({
          description: data.user.about.description,
          expYear: data.user.about.expYear,
          address: data.user.about.address,
          phoneNumber: data.user.about.phoneNumber,
          contactEmail: data.user.about.contactEmail
        });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="About Me" des="Get to Know Me" />
      </div>
      {loading && (
        <div className="w-full text-center mt-8">Loading about data...</div>
      )}
      {error && (
        <div className="w-full text-center mt-8">Error: {error.message}</div>
      )}
      {!loading && !error && (
        <div className="max-w-6xl mx-auto mt-8">
          <p className="text-lg">{aboutData.description}</p>
          <p className="text-gray-500">Experience: {aboutData.expYear} years</p>
          <p className="text-gray-500">Address: {aboutData.address}</p>
          <p className="text-gray-500">Phone: {aboutData.phoneNumber}</p>
          <p className="text-gray-500">Email: {aboutData.contactEmail}</p>
        </div>
      )}
    </section>
  );
};

export default AboutPage;
