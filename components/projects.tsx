import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import OpenSource from "./open-source"

export default function Projects() {
  const projects = [
    {
      title: "StyleSavy – AI Fashion Consultant",
      description:
        "Built an AI stylist analyzing 300+ outfits, boosting user engagement by 40%. Integrated YOLOS-Fashionpedia and FLAN-T5 for real-time clothing detection and recommendations via Gradio.",
      tags: ["Gradio UI", "Hugging Face Transformers", "YOLOS Object Detection", "FLAN-T5"],
      codeLink: "https://github.com/Munazzah-Rakhangi/StyleSavvy",
      liveLink: "https://huggingface.co/spaces/Munazz/StyleSavvy",
    },
    {
      title: "Predictive Analytics for County-Level Poverty in Florida",
      description:
        "Visualized poverty and SNAP trends in 67 Florida counties, identifying a 15% poverty rise over 10 years. Built ARIMA and linear models, improving prediction accuracy by 22%.",
      tags: ["R", "ARIMA", "Statsmodels", "Matplotlib", "Linear Regression"],
      codeLink: "https://drive.google.com/file/d/1A6AltbCfHbyh3rN3QFKbb29W2dw1adws/view?usp=sharing",
      liveLink: null,
    },
    {
      title: "Model Stealing Attacks on Multi-modal Model",
      description:
        "Extracted surrogate models with 85%+ accuracy using CLIP pipelines on black-box AI systems. Found vulnerabilities in 70%+ of ResNet-18 test cases on CIFAR-10.",
      tags: ["Python", "NLP", "PyTorch", "CLIP", "AI Security"],
      codeLink: "https://drive.google.com/drive/folders/1wfJU7c_0wslFkFqwSecLSaHMP6dqvmwW?usp=sharing",
      liveLink: null,
    },
    {
      title: "Warfarin Dosing Prediction Using Machine Learning",
      description:
        "Built and tested multiple ML models (KNN, RF, SVR, FNN), improving dose prediction accuracy by 18%. Enhanced data quality and reduced errors by 25% through extensive cleaning.",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
      codeLink: "https://github.com/Munazzah-Rakhangi/Machine-Learning-pipeline-for-Warfarin-Dosing-Prediction",
      liveLink: null,
    },
    {
      title: "Weekly Deals Emailer",
      description:
        "TypeScript/Node automation that turns retailer deal data into branded weekly emails. Ingests JSON datasets, normalizes and stores them in Supabase, applies user preferences, and renders accessible HTML templates.",
      tags: ["TypeScript/Node.js", "ETL & Data Pipelines", "Supabase/Postgres", "Email Templating", "CLI Tooling"],
      codeLink: "https://github.com/Munazzah-Rakhangi/weekly-deals-emailer",
      liveLink: null,
    },
    {
      title: "Stock Price Dashboard",
      description:
        "Real-time dashboard in React + TypeScript with Tailwind displaying live quotes in a responsive, sortable table with sparkline charts. Integrated Finnhub and Alpha Vantage APIs with polling and caching.",
      tags: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
        "Time-series visualization",
        "accessibility (a11y)",
      ],
      codeLink: "https://github.com/Munazzah-Rakhangi/stock-price-dashboard",
      liveLink: "https://stock-price-dashboard-4hza2yhz9-munazzahs-projects-33374e46.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and Academic projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Include Open Source section directly under Projects */}
          <div className="mt-20">
            <OpenSource />
          </div>
        </div>
      </div>
    </section>
  )
}
