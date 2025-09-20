import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Team Lead and Full stack developer",
      company: "Open Source with SLU",
      period: "Aug 2025 - Present",
      location: "Saint Louis, MO, USA",
      achievements: [
        "Architect end-to-end system design across frontend, backend, API, and ML modules",
        "Engineer React.js frontend with Tailwind CSS and multi-language support using react-i18next",
        "Design FastAPI/Node.js backend with PostgreSQL and JWT authentication for secure user management",
        "Direct API integration and establish GitHub workflows (branching, PRs, code reviews, CI)",
        "Collaborate on ML modules (Heart Risk Prediction, Prescription Detection) for predictive analytics integration",
      ],
    },
    {
      title: "Data Analyst",
      company: "Excelerate Data Visualization Internship",
      period: "February 2025 – April 2025",
      location: "Remote, USA",
      achievements: [
        "Analyzed Facebook ad campaigns using Google Sheets, Power BI, and Excel to uncover engagement trends",
        "Optimized budget allocation by evaluating campaign performance, improving efficiency by 15%",
        "Created interactive dashboards and reports for strategic decision-making using Power BI and Excel",
      ],
    },
    {
      title: "Application Engineer",
      company: "Newgen Software Technologies",
      period: "July 2021 – December 2022",
      location: "India",
      achievements: [
        "Enhanced SmartGBO transaction software for ICICI Bank, improving user experience using Java, JavaScript, and Apache Tomcat",
        "Collaborated on design and testing to boost system efficiency and reduce errors with Oracle Database and SQL",
        "Conducted root-cause analysis, reducing recurring defects by 20% through automated testing and debugging",
        "Debugged code and analyzed logs to identify and fix performance bottlenecks using JIRA and Git",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
