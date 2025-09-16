import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Settings, Users, Zap, Shield } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C++", "SQL", "PHP", "Haskell", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Technical Support",
      icon: Settings,
      skills: [
        "Technical Troubleshooting",
        "Software & Hardware Support",
        "API Integration",
        "System Testing",
        "Network Devices",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      skills: ["Salesforce", "Jira", "MySQL", "Microsoft 365", "Version Control", "Testing Methodologies"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Communication & Team Collaboration",
        "Problem Solving",
        "Time Management",
        "User Training & Documentation",
      ],
    },
    {
      title: "Professional Qualities",
      icon: Zap,
      skills: ["Handling Pressure", "Adaptability", "Eye for Accuracy", "Code Documentation"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical skills and professional competencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Core Strengths</h3>
              </div>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Combining technical expertise with strong communication skills, I excel at bridging the gap between
                complex technical solutions and user-friendly implementations. My experience in live event environments
                has honed my ability to work under pressure while maintaining attention to detail and delivering
                exceptional results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
