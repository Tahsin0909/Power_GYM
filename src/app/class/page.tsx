"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, Users } from "lucide-react"

// Mock data for classes
const classes = [
  { id: 1, name: "Yoga Flow", instructor: "Jane Doe", time: "09:00 AM", duration: "60 min", capacity: 20, enrolled: 15, type: "Yoga" },
  { id: 2, name: "HIIT Blast", instructor: "John Smith", time: "10:30 AM", duration: "45 min", capacity: 15, enrolled: 10, type: "Cardio" },
  { id: 3, name: "Strength Training", instructor: "Mike Johnson", time: "02:00 PM", duration: "75 min", capacity: 12, enrolled: 8, type: "Strength" },
  { id: 4, name: "Spin Class", instructor: "Sarah Williams", time: "04:30 PM", duration: "45 min", capacity: 20, enrolled: 18, type: "Cardio" },
  { id: 5, name: "Pilates", instructor: "Emma Brown", time: "06:00 PM", duration: "60 min", capacity: 15, enrolled: 12, type: "Yoga" },
]

// Mock data for filters
const classTypes = ["Yoga", "Cardio", "Strength", "Pilates"]
const instructors = ["Jane Doe", "John Smith", "Mike Johnson", "Sarah Williams", "Emma Brown"]

export default function ClassPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedInstructors, setSelectedInstructors] = useState<string[]>([])

  const filteredClasses = classes.filter(
    (cls) =>
      (selectedTypes.length === 0 || selectedTypes.includes(cls.type)) &&
      (selectedInstructors.length === 0 || selectedInstructors.includes(cls.instructor))
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Class Type</h3>
                <ScrollArea className="h-40">
                  {classTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id={`type-${type}`}
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={(checked) => {
                          setSelectedTypes(
                            checked
                              ? [...selectedTypes, type]
                              : selectedTypes.filter((t) => t !== type)
                          )
                        }}
                      />
                      <label htmlFor={`type-${type}`}>{type}</label>
                    </div>
                  ))}
                </ScrollArea>
                <Separator className="my-4" />
                <h3 className="font-semibold mb-2">Instructors</h3>
                <ScrollArea className="h-40">
                  {instructors.map((instructor) => (
                    <div key={instructor} className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id={`instructor-${instructor}`}
                        checked={selectedInstructors.includes(instructor)}
                        onCheckedChange={(checked) => {
                          setSelectedInstructors(
                            checked
                              ? [...selectedInstructors, instructor]
                              : selectedInstructors.filter((i) => i !== instructor)
                          )
                        }}
                      />
                      <label htmlFor={`instructor-${instructor}`}>{instructor}</label>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </aside>

          <section className="flex-grow">
            <h2 className="text-3xl font-bold mb-6">Available Classes</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredClasses.map((cls) => (
                <Card key={cls.id}>
                  <CardHeader>
                    <CardTitle>{cls.name}</CardTitle>
                    <CardDescription>{cls.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-2">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{cls.time} - {cls.duration}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Users className="mr-2 h-4 w-4" />
                      <span>{cls.enrolled} / {cls.capacity} spots filled</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Today</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled={cls.enrolled >= cls.capacity}>
                      {cls.enrolled >= cls.capacity ? "Class Full" : "Book Now"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}