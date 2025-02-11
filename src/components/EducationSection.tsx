import { GraduationCap, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const education = [
  {
    degree: "Post Graduate Diploma in Product Management",
    institution: "Great Learning, India",
    period: "Jan'23 – Jul'23",
    grade: "3.71 / 4 CGPA",
  },
  {
    degree: "Master of Business & Administration (Marketing & Operations)",
    institution: "University of Madras, India",
    period: "2019 - 2021",
    grade: "7.6 / 10 CGPA",
  },
  {
    degree: "Doctor of Philosophy (Industrial Engineering)",
    institution: "College of Engineering, Guindy, Anna University, India",
    period: "2015 - 2019",
    grade: "9 / 10 CGPA",
  },
  {
    degree: "Master of Engineering (Industrial Engineering)",
    institution: "Thiagarajah College of Engineering, India",
    period: "2006 - 2008",
    grade: "8.14 / 10 CGPA",
  },
  {
    degree: "Bachelor of Engineering (EIE)",
    institution: "National Engineering College, India",
    period: "2002 - 2006",
    grade: "71%",
  },
];

const publications = [
  {
    type: "Book Chapter",
    title: "Robotic Process Automation: The Key to Reviving the Supply Chain Processes",
    authors: "Rajagopal, G., Ramamoorthy, R.",
    year: "2023",
    publication: "Confluence of Artificial Intelligence and Robotic Process Automation. Smart Innovation, Systems and Technologies, vol 335. Springer, Singapore",
    doi: "10.1007/978-981-19-8296-5_4",
  },
  {
    type: "SCOPUS Paper",
    title: "Modelling the drilling crew induced process disruption factors using an ISM – MICMAC approach",
    authors: "R. Gowri & R. Raju",
    year: "2021",
    publication: "International Journal of Services & Operations Management, Inderscience",
    doi: "10.1504/IJSOM.2020.104335",
  },
  {
    type: "SCOPUS Paper",
    title: "Selection of base fluid for drilling mud Using Analytic Hierarchy Process",
    authors: "R. Gowri & P. Malliga",
    year: "2015",
    publication: "IEEE International Conference on Industrial Engineering and Engineering Management (IEEM), Singapore",
    doi: "10.1109/IEEM.2015.7385638",
  },
  {
    type: "SCOPUS Paper",
    title: "Development of risk assessment model for farmers in tomato Supply chain",
    authors: "P. Malliga, R. Gowri & R. Kala",
    year: "2016",
    publication: "IEEE International Conference on Industrial Engineering and Engineering Management (IEEM), Nusa Dua, Bali, Indonesia",
    doi: "10.1109/IEEM.2016.7797993",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            <GraduationCap className="inline-block mr-2 mb-1" />
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-portfolio-blue">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription>{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{edu.period}</p>
                  <p className="text-sm font-semibold text-portfolio-gray mt-2">
                    Grade: {edu.grade}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            <BookOpen className="inline-block mr-2 mb-1" />
            Publications
          </h2>
          <div className="space-y-6 max-w-6xl mx-auto">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-portfolio-blue">
                      {pub.title}
                    </CardTitle>
                    <span className="text-sm font-medium bg-portfolio-lightBlue text-portfolio-blue px-3 py-1 rounded-full">
                      {pub.type}
                    </span>
                  </div>
                  <CardDescription>{pub.authors} ({pub.year})</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">{pub.publication}</p>
                  <p className="text-sm text-portfolio-blue">DOI: {pub.doi}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;