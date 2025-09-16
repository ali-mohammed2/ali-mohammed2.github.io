"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Hi, I'm <span className="text-primary">Ali Mohammed</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground text-balance mb-8">
            Technology Support Specialist & Computer Science Graduate
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
            Passionate about live entertainment technology, with expertise in technical support, system troubleshooting,
            and full-stack development. Currently enhancing fan experiences at Ticketmaster.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" onClick={scrollToProjects} className="group">
            View My Work
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            ali.has2008@hotmail.com
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            07435411216
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            London, UK
          </div>
          <a
            href="https://linkedin.com/in/alhanamo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
