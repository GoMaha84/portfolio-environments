import { GraduationCap, BookOpen, FileText, X } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

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
    pdfUrl: "/publications/rpa-supply-chain.pdf"
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
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <section id="education" className="py-20 bg-[var(--color-pine-dark)]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-primary)]">
            <GraduationCap className="inline-block mr-2 mb-1 text-[var(--color-accent)]" />
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="bg-[var(--color-pine-medium)] border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all">
                <CardHeader>
                  <CardTitle className="text-lg text-[var(--color-accent)]">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-[var(--color-text-secondary)]">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--color-text-secondary)]">{edu.period}</p>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] mt-2">
                    Grade: {edu.grade}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-4 text-[var(--color-text-primary)]">
            <BookOpen className="inline-block mr-2 mb-1 text-[var(--color-accent)]" />
            Publications
          </h2>
          <p className="text-center mb-12 text-[var(--color-text-secondary)]">
            You can view my complete list of Publications under my ORCID{" "}
            <a
              href="https://orcid.org/0000-0003-2193-1149"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors underline"
            >
              click here
            </a>
          </p>
          <div className="max-w-6xl mx-auto h-[600px] overflow-y-auto custom-scrollbar">
            <div className="grid gap-4">
              {publications.map((pub, index) => (
                <Card 
                  key={index} 
                  className="bg-[var(--color-pine-medium)] border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all"
                >
                  <div className="flex items-center p-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <button
                          onClick={() => pub.pdfUrl && setSelectedPdf(pub.pdfUrl)}
                          className="text-left group"
                        >
                          <h3 className="text-lg font-semibold text-[var(--color-accent)] group-hover:text-[var(--color-text-primary)] transition-colors">
                            {pub.title}
                          </h3>
                        </button>
                        <span className="text-sm font-medium bg-[var(--color-pine-dark)] text-[var(--color-accent)] px-3 py-1 rounded-full border border-[var(--color-border)] whitespace-nowrap">
                          {pub.type}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                        {pub.authors} ({pub.year})
                      </p>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                        {pub.publication}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-sm text-[var(--color-accent)]">
                          DOI: {pub.doi}
                        </p>
                        {pub.pdfUrl && (
                          <button
                            onClick={() => setSelectedPdf(pub.pdfUrl!)}
                            className="flex items-center gap-1 text-sm text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors"
                          >
                            <FileText className="w-4 h-4" />
                            View PDF
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedPdf} onOpenChange={() => setSelectedPdf(null)}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Publication PDF</span>
              <DialogClose className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">
                <X className="w-5 h-5" />
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 h-full">
            {selectedPdf && (
              <iframe
                src={selectedPdf}
                className="w-full h-full rounded-lg"
                title="Publication PDF"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EducationSection;