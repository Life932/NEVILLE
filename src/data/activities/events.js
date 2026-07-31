export const events = [
  {
    id: "neville-olympiad-2026",
    title: "Neville Olympiad 2026",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
    date: "August 15, 2026",
    type: "Event",
    description: "The premier science and mathematics olympiad for youth in Dhaka.",
    subjects: [
      {
        name: "Mathematics",
        syllabus: "Algebra, Geometry, Number Theory, Combinatorics.",
        examLink: "https://example.com/exam/math",
        categories: [
          {
            name: "Junior",
            markDistribution: [
              { topic: "Algebra", marks: 20 },
              { topic: "Geometry", marks: 30 },
              { topic: "Number Theory", marks: 20 },
              { topic: "Combinatorics", marks: 30 },
            ],
          },
          {
            name: "Secondary",
            markDistribution: [
              { topic: "Algebra", marks: 25 },
              { topic: "Geometry", marks: 25 },
              { topic: "Number Theory", marks: 25 },
              { topic: "Combinatorics", marks: 25 },
            ],
          },
        ],
      },
      {
        name: "Science",
        syllabus: "Physics, Chemistry, Biology basics.",
        examLink: "https://example.com/exam/science",
        categories: [
          {
            name: "Junior",
            markDistribution: [
              { topic: "Physics", marks: 40 },
              { topic: "Chemistry", marks: 30 },
              { topic: "Biology", marks: 30 },
            ],
          },
        ],
      },
    ],
  },
];
