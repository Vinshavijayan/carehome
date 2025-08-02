import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "✅ Experienced and Certified Professionals",
      description: "Our care associates are rigorously vetted, background-checked, and certified. They undergo ongoing training in safety, patient care, infection control, and specialized conditions such as dementia, stroke recovery, and fall prevention."
    },
    {
      title: "✅ Custom Care Plans",
      description: "We develop individualized care plans in collaboration with families, healthcare teams, and case managers to ensure holistic, goal-driven care."
    },
    {
      title: "✅ Flexible Staffing Solutions",
      description: "Whether you're a healthcare facility in need of temporary staff or a family looking for daily home support, our flexible service model allows us to adapt quickly and efficiently to your needs."
    },
    {
      title: "✅ Quality Assurance and Oversight",
      description: "Our supervisors conduct regular check-ins and assessments to ensure the highest standards of care are maintained."
    },
    {
      title: "✅ Cultural Sensitivity and Respect",
      description: "We honor the diverse backgrounds, values, and preferences of each client, delivering care that respects cultural, religious, and personal traditions."
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto"> {/* Content container remains 3xl */}
        <h2 className="text-2xl font-light text-secondary sm:text-2xl text-center">
          Why Choose Us ?
        </h2>
      </div>
      
      {/* New container just for the red background section with 8xl width */}
      <div className="max-w-8xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-4 py-4"> {/* Inner content container */}
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start">
              
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 text-left">{reason.title}</h3>
                <div className="mt-2 bg-[#EAF4FE] p-4 w-full">
                  <p className="text-base text-gray-600 text-left">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;