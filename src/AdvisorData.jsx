import React from 'react';

const advisors = [
  {
    id: 1,
    name: 'Suzie Chang',
    pictureUrl: 'https://mjlsp.wisc.edu/wp-content/uploads/sites/259/2021/12/Suzie-Chang-Photo.jpg',
    websiteUrl: 'https://mjlsp.wisc.edu/staff/suzie-chang/',
    role: 'Program Advisor and Outreach Liaison',
    email: 'schang42@wisc.edu',
  },
  {
    id: 2,
    name: 'Heidi Hakseth',
    pictureUrl: 'https://mjlsp.wisc.edu/wp-content/uploads/sites/259/2022/06/Hakseth_H_1.jpg',
    websiteUrl: 'https://mjlsp.wisc.edu/staff/heidi-hakseth/',
    role: 'Executive Assistant',
    email: 'hahakseth@wisc.edu',
  },
  {
    id: 3,
    name: 'Chou Yee Ngue Her',
    pictureUrl: 'https://mjlsp.wisc.edu/wp-content/themes/uw-theme/dist/images/profile-gray.png',
    websiteUrl: 'https://mjlsp.wisc.edu/staff/chou-yee-ngue-her/',
    role: 'Program Advisor',
    email: 'chouyeengue.her@wisc.edu',
  },
  {
    id: 4,
    name: 'Adriana Hernandez',
    pictureUrl: 'https://mjlsp.wisc.edu/wp-content/uploads/sites/259/2023/04/Hernandez_Adriana_047a_sq-768x768.jpg',
    websiteUrl: 'https://mjlsp.wisc.edu/staff/hernandez-adriana/',
    role: 'Program Advisor',
    email: 'kalscheur@wisc.edu',
  },
  {
    id: 5,
    name: 'Raul A. Leon',
    pictureUrl: 'https://mjlsp.wisc.edu/wp-content/uploads/sites/259/2022/06/Raul-Leon-original.jpg',
    websiteUrl: 'https://mjlsp.wisc.edu/staff/leon-raul-a/',
    role: 'Executive Director, Assistant Vice Provost for Student Engagement and Scholarship Programs',
    email: 'rleon@wisc.edu',
  },
  {
    id: 6,
    name: 'Emma Porterwinkel',
    pictureUrl: 'https://mjlsp.wisc.edu/wp-content/uploads/sites/259/2022/12/Emma-Porter-headshot.jpg',
    websiteUrl: 'https://mjlsp.wisc.edu/staff/porter-emma/',
    role: 'Program Advisor',
    email: 'eporter6@wisc.edu',
  },
  {
    id: 7,
    name: 'Kao Yong Thao',
    pictureUrl: 'https://mjlsp.wisc.edu/wp-content/uploads/sites/259/2019/12/Thao_K_3.jpg',
    websiteUrl: 'https://mjlsp.wisc.edu/staff/thao-kao-yong/',
    role: 'Associate Director',
    email: 'kaoyong.thao@wisc.edu',
  },
];

const AdvisorsList = () => {
  const chunkSize = 3; // Number of advisors per row

  const chunkedAdvisors = [];
  for (let i = 0; i < advisors.length; i += chunkSize) {
    chunkedAdvisors.push(advisors.slice(i, i + chunkSize));
  }

  return (
    <div>
      {chunkedAdvisors.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between' }}>
          {row.map((advisor) => (
            <div key={advisor.id} style={{ flex: 1, maxWidth: '33%', padding: '10px' }}>
              <img
                src={advisor.pictureUrl}
                alt={advisor.name}
                style={{ width: '50%', height: 'auto' }}
              />
              <h3>
                <a href={advisor.websiteUrl} target="_blank" rel="noopener noreferrer">
                  {advisor.name}
                </a>
              </h3>
              <p>{advisor.role}</p>
              <p>
                <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdvisorsList;