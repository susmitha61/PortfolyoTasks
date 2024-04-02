import React, { useState, useEffect } from 'react';
import Title from '../layouts/Title';

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTimelineData(data.user.timeline);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTimelineData();
  }, []);

  return (
    <section id="timeline" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Timeline" des="My Work Journey" />
      </div>
      {loading && (
        <div className="w-full text-center mt-8">Loading timeline data...</div>
      )}
      {error && (
        <div className="w-full text-center mt-8">Error: {error.message}</div>
      )}
      {!loading && !error && timelineData.length === 0 && (
        <div className="w-full text-center mt-8">No timeline data available</div>
      )}
      {!loading && !error && timelineData.length > 0 && (
        <div className="max-w-6xl mx-auto mt-8">
          {timelineData.map((item) => (
            <div key={item._id} className="bg-[#1e2024] rounded-lg shadow-shadowOne p-4 my-4">
              <h3 className="text-lg font-bold">{item.company_name}</h3>
              <p className="text-gray-500">{item.jobTitle}</p>
              <p className="text-gray-500">{item.startDate} - {item.endDate}</p>
              <ul className="list-disc pl-6 mt-2">
                {item.bulletPoints.map((point, index) => (
                  <li key={index} className="text-gray-400">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Timeline;
