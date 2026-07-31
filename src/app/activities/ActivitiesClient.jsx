"use client";

import { useState, useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { X, Calendar, User } from "lucide-react";

export default function ActivitiesClient({ initialActivities }) {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSubjectTab, setActiveSubjectTab] = useState("");

  const filteredActivities =
    activeTab === "all"
      ? initialActivities
      : initialActivities.filter((a) => a.type.toLowerCase() === activeTab);

  const getTitle = () => {
    switch (activeTab) {
      case "event":
        return "ALL EVENTS";
      case "publication":
        return "ALL PUBLICATIONS";
      case "initiative":
        return "ALL INITIATIVES";
      default:
        return "ALL ACTIVITIES";
    }
  };

  const handleOpenDrawer = (activity) => {
    setSelectedActivity(activity);
    setIsDrawerOpen(true);
    if (activity.subjects && activity.subjects.length > 0) {
      setActiveSubjectTab(activity.subjects[0].name);
    }
    const newUrl = `/activities/${activity.type.toLowerCase()}s/${activity.id}`;
    window.history.pushState(null, "", newUrl);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setSelectedActivity(null);
      window.history.pushState(null, "", "/activities");
    }, 300); // Wait for drawer animation
  };

  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
        <div className="flex-1">
          <TextGenerateEffect
            key={activeTab}
            words={getTitle()}
            className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight"
          />
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList className="bg-muted border border-border rounded-full p-1 h-12">
            <TabsTrigger value="all" className="rounded-full px-6 text-sm font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">All</TabsTrigger>
            <TabsTrigger value="event" className="rounded-full px-6 text-sm font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Events</TabsTrigger>
            <TabsTrigger value="publication" className="rounded-full px-6 text-sm font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Publications</TabsTrigger>
            <TabsTrigger value="initiative" className="rounded-full px-6 text-sm font-semibold transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Initiatives</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => (
          <Card 
            key={activity.id} 
            className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border bg-card overflow-hidden rounded-2xl flex flex-col"
            onClick={() => handleOpenDrawer(activity)}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                {activity.type}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground font-bold line-clamp-2">{activity.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-2">
                <Calendar className="w-4 h-4" />
                {activity.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm line-clamp-3">
                {activity.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* DRAWER SECTION */}
      <Drawer open={isDrawerOpen} onOpenChange={(open) => !open && handleCloseDrawer()}>
        <DrawerContent className="bg-background border-t-0 rounded-t-[2rem] max-h-[90vh] lg:max-h-[85vh] h-full flex flex-col outline-none overflow-hidden">
          {selectedActivity && (
            <div className="w-full h-full flex flex-col md:flex-row overflow-y-auto custom-scrollbar">
              
              {/* Drawer Header (Image + Title) */}
              <div className="w-full md:w-[40%] md:sticky top-0 h-64 md:h-full relative shrink-0 border-r border-border/50">
                <img 
                  src={selectedActivity.image} 
                  alt={selectedActivity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/90 to-transparent flex flex-col justify-end p-8">
                  <Badge className="w-fit mb-3 bg-primary text-primary-foreground text-sm py-1 px-3">
                    {selectedActivity.type}
                  </Badge>
                  <DrawerTitle className="text-3xl md:text-5xl font-black text-foreground drop-shadow-sm leading-tight">
                    {selectedActivity.title}
                  </DrawerTitle>
                  <p className="text-foreground/80 mt-2 font-medium flex items-center gap-2">
                    <Calendar className="w-5 h-5" /> {selectedActivity.date}
                  </p>
                  
                  {/* Author for Publications */}
                  {selectedActivity.author && (
                    <div className="mt-6 flex items-center gap-3">
                      <img 
                        src={selectedActivity.author.avatar} 
                        alt={selectedActivity.author.name}
                        className="w-12 h-12 rounded-full border-2 border-primary/20 object-cover"
                      />
                      <div>
                        <p className="text-sm text-foreground/60 font-semibold">Written by</p>
                        <p className="text-lg font-bold text-foreground">{selectedActivity.author.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Drawer Content Details */}
              <div className="w-full md:w-[60%] p-6 md:p-12 pb-24 md:overflow-y-auto">
                <DrawerClose className="absolute top-6 right-6 p-2 rounded-full bg-muted text-foreground hover:bg-border transition-colors outline-none z-50">
                  <X className="w-6 h-6" />
                </DrawerClose>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                    {selectedActivity.description}
                  </p>

                  {/* Publication Content */}
                  {selectedActivity.content && (
                    <div className="text-foreground/90 leading-relaxed">
                      {selectedActivity.content}
                    </div>
                  )}

                  {/* Event/Olympiad Subjects Data */}
                  {selectedActivity.subjects && selectedActivity.subjects.length > 0 && (
                    <div className="mt-8">
                      <Tabs value={activeSubjectTab} onValueChange={setActiveSubjectTab} className="w-full">
                        <TabsList className="bg-transparent border-b border-border rounded-none h-auto p-0 flex justify-start gap-6 overflow-x-auto">
                          {selectedActivity.subjects.map(subject => (
                            <TabsTrigger 
                              key={subject.name} 
                              value={subject.name}
                              className="rounded-none bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 font-bold text-base transition-colors"
                            >
                              {subject.name}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                        
                        {selectedActivity.subjects.map(subject => (
                          <TabsContent key={subject.name} value={subject.name} className="pt-8 outline-none">
                            <Accordion type="single" className="w-full mb-8">
                              <AccordionItem value="syllabus" className="border-border">
                                <AccordionTrigger className="text-xl font-bold text-foreground">
                                  Syllabus Outline
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground/80 text-base leading-relaxed">
                                  {subject.syllabus}
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>

                            {subject.categories?.map(category => (
                              <div key={category.name} className="mb-10">
                                <h4 className="text-xl font-bold text-foreground mb-4 border-l-4 border-primary pl-3">
                                  {category.name} Category - Mark Distribution
                                </h4>
                                <div className="border border-border rounded-xl overflow-hidden bg-card shadow-sm">
                                  <Table>
                                    <TableHeader className="bg-muted">
                                      <TableRow className="border-border hover:bg-muted/50">
                                        <TableHead className="font-bold text-foreground">Topic</TableHead>
                                        <TableHead className="font-bold text-foreground text-right w-[100px]">Marks</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {category.markDistribution.map((item, idx) => (
                                        <TableRow key={idx} className="border-border">
                                          <TableCell className="font-medium text-foreground">{item.topic}</TableCell>
                                          <TableCell className="text-right text-foreground font-semibold text-primary">{item.marks}</TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </div>
                              </div>
                            ))}

                            {subject.examLink && (
                              <div className="mt-8 flex justify-end">
                                <a 
                                  href={subject.examLink} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full shadow-md hover:bg-primary/90 transition-colors"
                                >
                                  Take Exam
                                </a>
                              </div>
                            )}
                          </TabsContent>
                        ))}
                      </Tabs>
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
