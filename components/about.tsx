import { Card, CardContent } from "@/components/ui/card"
import { Brain, Bot, Code2, Database, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Machine Learning & AI",
      description:
        "ML pipelines, predictive modeling, computer vision, and NLP. Experience with PyTorch, TensorFlow, and scikit-learn delivering production systems with measurable accuracy gains.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "Agentic AI & LLMs",
      description:
        "LLM orchestration, RAG, multi-agent workflows, and schema-constrained generation. Building agentic legal and intake systems with tool-calling and autonomous workflows.",
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack & Data",
      description:
        "End-to-end platforms with React, FastAPI, Node.js, PostgreSQL, and REST APIs. ETL pipelines, cloud deployment (AWS), and CI/CD for scalable, high-uptime applications.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Leadership & Production",
      description:
        "Proven track record leading cross-functional engineering teams and shipping production AI systems in legal tech, healthcare, and e‑commerce with a focus on reliability and impact.",
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
                AI Engineer with 2+ years building machine learning systems, LLM-powered applications, and scalable
                data pipelines. Experienced in agentic AI workflows, NLP pipelines, and full-stack platforms using
                Python, PyTorch, FastAPI, and React.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Proven track record of leading engineering teams and delivering production AI systems across computer
                vision, natural language processing, and predictive modeling—in legal tech, healthcare, and
                e‑commerce. Passionate about building intelligent, scalable systems that solve real-world problems.
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
