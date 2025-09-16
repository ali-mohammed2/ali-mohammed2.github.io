import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My journey in technology support and system management.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl mb-2">Technology Support Specialist</CardTitle>
                <p className="text-lg font-medium text-primary">Ticketmaster</p>
              </div>
              <div className="flex flex-col sm:items-end gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  November 2023 – Present
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  London, UK
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Providing comprehensive technical support for Ticketmaster systems across remote and live event
              environments, ensuring seamless operations and exceptional fan experiences.
            </p>

            <div>
              <h4 className="font-medium mb-3">Key Responsibilities:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Provided end-to-end technical support for Ticketmaster systems including proprietary software,
                  hardware, and network devices across remote and live event environments
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Supported the setup and maintenance of tools used by customer service agents, helping to ensure smooth
                  operations and consistent fan experiences across platforms
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Led collaborations with third-party providers and contractors, ensuring seamless continuity of service
                  during live events
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Utilised Salesforce and Jira to manage support workflows, track incidents, and maintain accurate
                  documentation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Participated in regional system testing and software upgrades, reporting bugs and contributing
                  feedback for improvements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Managed and monitored projects to ensure timely completion and alignment with business objectives
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3">Tools & Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Salesforce</Badge>
                <Badge variant="secondary">Jira</Badge>
                <Badge variant="secondary">System Testing</Badge>
                <Badge variant="secondary">Network Troubleshooting</Badge>
                <Badge variant="secondary">Hardware Support</Badge>
                <Badge variant="secondary">Project Management</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
