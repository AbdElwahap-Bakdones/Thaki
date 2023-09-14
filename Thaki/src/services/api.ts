import { Category } from "../App";

const categories = [
  "Software_Programs",
  "Games",
  "Stories",
  "Maths",
  "Science",
  "Cross-Curricular",
  "Tech & Coding",
];

export const categoryItem = (category: string, count: number) => {
  const categoryItems: Category[] = [];
  for (let i = 1; i <= count; i++) {
    const item: Category = {
      id: i,
      title: `E-learning for kids ${category + i}`,
      languages: ["ar", "fr", "en"],
      graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
      books: ["book1", "book2", "book3"],
      info: `21 lessons science
      lessons based and
      meet the learning goals
      of an internationally
      recognized curriculum`,
      description: `Elementary math for kg - grad 6 ${category}`,
    };

    categoryItems.push(item);
  }

  return categoryItems;
};

export const CategoryList1 = [
  {
    Software_Programs: [
      {
        id: 1,
        title: "E-learning for kids",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
    lessons based and
    meet the learning goals
    of an internationally
    recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 2,
        title: "E-learning for kids",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
    lessons based and
    meet the learning goals
    of an internationally
    recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 3,
        title: "E-learning for kids",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
    lessons based and
    meet the learning goals
    of an internationally
    recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
    ],
  },
  {
    Games: [
      {
        id: 1,
        title: "E-learning for kids Software Programs",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 2,
        title: "E-learning for kids Software Programs",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 3,
        title: "E-learning for kids Software Programs",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
    ],
  },
  {
    Stories: [
      {
        id: 1,
        title: "E-learning for kids Stories",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 2,
        title: "E-learning for kids Stories",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 3,
        title: "E-learning for kids Stories",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
    ],
  },
  {
    Maths: [
      {
        id: 1,
        title: "E-learning for kids Maths",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 2,
        title: "E-learning for kids Maths",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 3,
        title: "E-learning for kids Maths",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
    ],
  },
  {
    Science: [
      {
        id: 1,
        title: "E-learning for kids Science",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 2,
        title: "E-learning for kids Science",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 3,
        title: "E-learning for kids Science",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
    ],
  },
  {
    "Cross-Curricular": [
      {
        id: 1,
        title: "E-learning for kids Cross-Curricular",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 2,
        title: "E-learning for kids Cross-Curricular",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 3,
        title: "E-learning for kids Cross-Curricular",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
    ],
  },
  {
    "Tech & Coding": [
      {
        id: 1,
        title: "E-learning for kids Tech & Coding",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 2,
        title: "E-learning for kids Tech & Coding",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
      {
        id: 3,
        title: "E-learning for kids Tech & Coding",
        languages: ["ar", "fr", "en"],
        graduate: ["grade 10-12", "grade 13-15", "grade16-20"],
        books: ["book1", "book2", "book3"],
        info: `21 lessons science
        lessons based and
        meet the learning goals
        of an internationally
        recognized curriculum`,
        description: "Elementery math for kg - grad 6",
      },
    ],
  },
];
