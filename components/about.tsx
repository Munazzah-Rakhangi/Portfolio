import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Brain, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Machine Learning & AI",
      description: "Expertise in ML pipelines, predictive analytics, and AI model development",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Engineering",
      description: "Proficient in data pipelines, ETL processes, and database optimization",
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "React, TypeScript, Python, SQL with cloud deployment expertise",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Collaborative Leadership",
      description: "Experience in fast-moving teams with clear communication and iterative development",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Graduate student in Artificial Intelligence with a track record of turning complex data and half-formed
                ideas into reliable, user-friendly software.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Skilled in building scalable, maintainable products across ML, data engineering, and full-stack development—pairing clear UX with a prototype-to-production mindset. I thrive in fast-moving, collaborative teams, translating ambiguous problems into scoped deliverables and iterating based on evidence. Comfortable with Python/SQL, JavaScript/TypeScript (React), and AWS; especially motivated by healthcare, analytics, and other data-rich domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
