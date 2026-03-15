import { Card, CardContent } from "@/components/ui/card"
import { Brain, Bot, Code2, Database, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Machine Learning & AI",
      description:
        "I love turning messy data into models that actually work—whether it’s prediction, NLP, or computer vision. PyTorch and scikit-learn are my go-tos, and I care about shipping things that hold up in production.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "Agentic AI & LLMs",
      description:
        "RAG, multi-agent workflows, and LLM orchestration are where I spend a lot of my time now. I’ve been building agentic systems for legal intake and automation—tool-calling, structured outputs, and workflows that run on their own.",
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack & Data",
      description:
        "From React and FastAPI to PostgreSQL and AWS—I’m comfortable across the stack. I like owning the whole pipeline: ETL, APIs, and deployment, so the thing actually runs and stays up.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Leading & Shipping",
      description:
        "I’ve led small engineering teams and shipped AI systems in legal tech, healthcare, and e‑commerce. For me it’s about clear communication, reliability, and making sure what we build actually helps people.",
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
                I’ve spent the last couple of years building ML systems, LLM-powered apps, and
                data pipelines—and I still get a kick out of seeing something go from idea to production.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                These days I’m deep in agentic AI and full-stack: Python, PyTorch, FastAPI, React. I’ve led small teams
                and shipped AI in legal tech, healthcare, and e‑commerce. What I care about most is building things
                that are reliable, useful, and actually solve a problem—not just technically impressive.
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
