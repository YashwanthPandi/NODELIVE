const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sample resume data (replace with your actual data)
const resume = {
  personalDetails: {
    name: "Yashwanth Pandi",
    address: "8461 Independence Ave, Canoga Park, Los Angeles - 91304",
    phone: "(805) 501-5991",
    email: "pandiyashwanth@gmail.com",
    linkedin: "linkedin.com/in/yashwanthpandi/"
  },
  objective: "Software Engineer with 2+ years of experience at Cisco, seeking full-time Software Engineer roles. Passionate about leveraging a strong understanding of data structures, algorithms, and distributed computing concepts to develop innovative software solutions. Proficient in Agile and Scrum methodologies, with experience in database design, SQL querying, cybersecurity principles, and cloud computing platforms.",
  education: [
    {
      degree: "Master of Science in Information Technology",
      institution: "California Lutheran University",
      gpa: "3.6/4.0",
      dates: "Nov 2021 - Feb 2023",
      courses: [
        "Project Management",
        "Information Security",
        "Business Statistics",
        "Software Planning and Development",
        "IT Management",
        "Data Management",
        "Enterprise Systems",
        "Data Communication, and Networking"
      ]
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communication",
      institution: "Andhra University - Sir C.R Reddy College of Engineering",
      gpa: "3.2/4.0",
      dates: "May 2021",
      courses: [
        "Software Engineering",
        "Database Management Systems",
        "Network Security"
      ]
    }
  ],
  technicalSkills: {
    methodologies: ["Agile", "Scrum"],
    dataStructures: ["Linked Lists", "Trees", "Sorting Algorithms"],
    networkingProtocols: ["TCP/IP", "HTTP", "DNS"],
    databaseDesign: ["MSSQL", "PostgreSQL", "Entity-Relationship Modeling"],
    cybersecurityPrinciples: ["Access Control", "Encryption", "Firewalls"],
    projectManagement: ["Planning (Gantt charts, WBS)", "Scheduling", "Coordination"],
    programmingLanguages: ["JavaScript", "TypeScript", "Python", "C", "SQL"],
    developmentTools: ["Git", "Maven", "Jenkins"],
    cloudComputing: ["AWS", "GCP", "Azure"],
    webTechnologies: ["HTML5", "CSS3", "React", "Angular", "Express.js", "Node.js", "MongoDB"]
  },
  professionalExperience: [
    {
      company: "Cisco Systems",
      location: "Bangalore, India",
      role: "Software Engineer",
      dates: "Nov 2021 - Feb 2023",
      responsibilities: [
        "Enhanced Angular-based applications, resulting in a 20% performance improvement.",
        "Demonstrated proficiency in TypeScript, ensuring robust and bug-resistant code.",
        "Utilized HTML and CSS to optimize user experience and interaction.",
        "Successfully integrated RESTful APIs for seamless data transactions and communication.",
        "Streamlined development process with Node.js and Webpack.",
        "Identified and rectified errors, ensuring high-quality code."
      ]
    },
    {
      company: "Fiverr",
      location: "Hyderabad, India",
      role: "Freelancer",
      dates: "Mar 2021 - Jul 2022",
      responsibilities: [
        "Engaged in MEAN stack development and cutting-edge technologies including NLP and Python.",
        "Fostered collaboration, ensuring clear project requirements understanding.",
        "Facilitated effective communication among stakeholders."
      ]
    }
  ],
  projects: [
    {
      name: "Value Engineering Management Tool",
      association: "Cisco",
      dates: "Jul 2022 - Dec 2022",
      description: "Creation of sustainable value at project, product, process, organizational or social level, improving and sustaining a desirable balance between stakeholder needs and resources."
    },
    {
      name: "Connected Quality Insights",
      association: "Cisco",
      dates: "Jan 2022 - Jun 2022",
      description: "A reporting mechanism for monitoring supply chain metrics through a unified interface, facilitating tracking of inventory levels, logistics management, and warehouse operations."
    },
    {
      name: "Efficient Air Quality Monitoring System Using IoT",
      association: "Andhra University",
      dates: "Jul 2019 - Feb 2020",
      description: "Design and deployment of an advanced Air Quality Monitoring System leveraging IoT technology to enhance environmental monitoring capabilities."
    }
  ],
  certifications: [
    "Foundation of Cybersecurity (Jun 2023)",
    "Amazon Web Services Security Specialty (Nov 2022)",
    "Graduate Record Examinations (Nov 2022)",
    "English Proficiency Test (Oct 2022)",
    "Jira Fundamentals Badge (Jul 2022)",
    "ONEx Agile Fundamentals (Jun 2022)",
    "Java Full Stack Developer (Apr 2022)",
    "Python (Jan 2022)",
    "Full Stack Web Development (Jul 2021)",
    "Fundamentals of Digital Marketing (May 2021)",
    "Introduction to Virtualization (Mar 2019)"
  ],
  leadership: [
    "Head of Operations at IEEE Student Chapter, CRR COE (2020-2021)",
    "Founding and Board Member of the California Lutheran University IT Club",
    "International Peer Mentor for Center of Global Engagement in California Lutheran University"
  ]
};

app.use(express.static(path.join(__dirname)));

// Serve the HTML documentation at the root endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/personal-details', (req, res) => {
  res.json(resume.personalDetails);
});

app.get('/objective', (req, res) => {
  res.json(resume.objective);
});

app.get('/education', (req, res) => {
  res.json(resume.education);
});

app.get('/technical-skills', (req, res) => {
  res.json(resume.technicalSkills);
});

app.get('/professional-experience', (req, res) => {
  res.json(resume.professionalExperience);
});

app.get('/projects', (req, res) => {
  res.json(resume.projects);
});

app.get('/certifications', (req, res) => {
  res.json(resume.certifications);
});

app.get('/leadership', (req, res) => {
  res.json(resume.leadership);
});

app.listen(port, () => {
  console.log(`Resume API server is running at http://localhost:${port}`);
});
