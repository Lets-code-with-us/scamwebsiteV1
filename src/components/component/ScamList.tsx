import React from 'react';

const features = [
  {
    id: 1,
    title: 'What is this website all about?',
    color: 'blue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        {/* SVG path data */}
      </svg>
    ),
    description:
      "Scam alert websites are platforms or online resources dedicated to providing information about various types of scams, frauds, and deceptive practices. These websites aim to educate the public about common scams, warning signs to look out for, and steps to take if someone encounters a scam or believes they've been targeted.",
  },
  {
    id: 2,
    title: 'What can you do on this website?',
    color: 'blue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        {/* SVG path data */}
      </svg>
    ),
    description:
      'You can learn about common scams, warning signs, and strategies scammers use. This knowledge can help you identify potential scams when using a scam alert website.',
  },
  {
    id: 3,
    title: 'Benefits of this Website',
    color: 'blue',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        {/* SVG path data */}
      </svg>
    ),
    description:
      'This website raises awareness about different types of scams, fraud schemes, and deceptive practices. By educating the public about common scams, people become more cautious and better equipped to recognize and avoid potential threats.',
  },
];

const ScamList = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-8 pt-24 pb-24">
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="mx-auto max-w-sm rounded overflow-hidden shadow-lg bg-gray-100"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              {feature.icon}
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blue-800">
                {feature.title}
              </div>
              <p className="text-gray-700 text-base">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScamList;
