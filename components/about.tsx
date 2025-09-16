import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A dedicated technology professional with a passion for solving complex problems and enhancing user
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Experienced Technology Support Specialist at Ticketmaster, expert in resolving technical issues and
                  providing exceptional client support. Proficient in leveraging tools such as Salesforce and Jira to
                  manage support tickets effectively. Demonstrated strengths in communication, facilitating smooth
                  collaboration across third-party and global teams. Driven by a passion for live entertainment, I am
                  keen to further contribute technical expertise and operational insights.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Bachelor of Science, Computer Science</h4>
                      <Badge variant="secondary">2023</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">City, University of London</p>
                    <p className="text-sm font-medium text-primary">1st Class Graduate</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">A-Levels</h4>
                      <Badge variant="secondary">2020</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Woolwich Polytechnic School</p>
                    <p className="text-sm text-muted-foreground">Maths (B), Psychology (B), Biology (C)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex gap-2">
                  <Badge>English</Badge>
                  <Badge>Arabic</Badge>
                  <Badge>Somali</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
