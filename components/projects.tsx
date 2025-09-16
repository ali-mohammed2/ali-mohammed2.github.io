import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Elite Dorms - Hostel Booking Web App",
      description:
        "A comprehensive hostel booking platform designed for students, featuring flexible booking options, user authentication, and administrative panels for hostel management.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "User login and registration system",
        "Flexible booking system for students",
        "Admin panel for hostel management",
        "Responsive design for all devices",
      ],
      image: "/hostel-booking-web-app-interface.jpg",
    },
    {
      title: "Alhanamo Property - Real Estate Web App",
      description:
        "A modern real estate platform that simulates real-world property browsing experiences with advanced search functionality and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "Property search and filtering",
        "Responsive web design",
        "Property listing management",
        "User-friendly interface",
      ],
      image: "/real-estate-property-website-interface.jpg",
    },
    {
      title: "Vector 2.0 - Java 2D Game",
      description:
        "An engaging multi-level 2D game built in Java that challenges players with strategic movement mechanics and stealth-based objectives.",
      technologies: ["Java", "Java 2D Graphics", "Game Development"],
      features: [
        "Multi-level gameplay",
        "Strategic movement mechanics",
        "Stealth-based objectives",
        "Collision detection system",
      ],
      image: "/2d-java-game-with-strategic-movement.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my development work, from web applications to game development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-balance">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
