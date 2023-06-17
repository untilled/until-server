import { FeedOutputPort } from "@/feed/application/port/out/FeedOutputPort";
import { PrismaService } from "@/infra/prisma/PrismaService";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FeedPrismaRepository implements FeedOutputPort {
  constructor(private readonly prisma: PrismaService) {}

  async getPopularPosts(tags: string[]): Promise<[...typeof DUMMY_POSTS]> {
    // const posts = await this.prisma.post.findMany();
    return DUMMY_POSTS;
  }

  async getFollowerPosts(tags: string[]): Promise<[...typeof DUMMY_POSTS]> {
    return DUMMY_POSTS;
  }
}

const DUMMY_POSTS = [
  {
    id: "1",
    title: "Next.js 10 is out!",
    thumbnail:
      "https://velog.velcdn.com/images/surim014/post/f72529e9-2098-46be-9c49-306a57b2738b/image.png",
    description: "Next.js 10 is out! 🎉",
    tags: ["nextjs", "react", "javascript"],
    date: "2020-10-27T10:00:00.000Z",
    stars: 10,
    comments: 2,
    user: {
      id: "1",
      name: "Lee Robinson",
      image: "https://avatars.githubusercontent.com/u/25531121?v=4",
    },
  },
  {
    id: "2",
    title: "Introduction to TypeScript",
    thumbnail:
      "https://velog.velcdn.com/post-images/velopert/64de2710-e591-11e9-a83d-c9d12745e080/ts-and-redux.png",
    description: "Learn the basics of TypeScript in this introductory guide.",
    tags: ["typescript", "javascript"],
    date: "2021-02-15T14:30:00.000Z",
    stars: 12,
    comments: 4,

    user: {
      id: "2",
      name: "John Smith",
      image: "https://avatars.githubusercontent.com/u/93523060?s=120&v=4",
    },
  },
  {
    id: "3",
    title: "Building a RESTful API with Express.js",
    thumbnail:
      "https://velog.velcdn.com/images/bining/post/90234f5c-c9e7-4118-aac8-a7558edeec6b/Express.jpg",
    description:
      "Discover how to create a RESTful API using Express.js framework.",
    tags: ["express", "nodejs", "javascript"],
    date: "2021-05-03T09:45:00.000Z",
    stars: 7,
    comments: 3,

    user: {
      id: "3",
      name: "Sarah Johnson",
      image: "https://avatars.githubusercontent.com/u/58258782?s=120&v=4",
    },
  },
  {
    id: "4",
    title: "Getting Started with React Hooks",
    thumbnail:
      "https://velog.velcdn.com/images/gcback/post/dfadc256-2c5c-4a51-a7ef-6be3f82da0b2/mve37at43zl83h1nbu4r.png",
    description:
      "Learn the fundamentals of React Hooks and how to use them in your applications.",
    tags: ["react", "javascript"],
    date: "2021-07-12T16:20:00.000Z",
    stars: 5,
    comments: 1,

    user: {
      id: "4",
      name: "Michael Chen",
      image: "https://avatars.githubusercontent.com/u/25531121?v=4",
    },
  },
  {
    id: "5",
    title: "Vue.js vs. React: A Comparison",
    thumbnail:
      "https://velog.velcdn.com/images/outclassstudio/post/bf7eaa1a-740c-47d2-835d-ff825aee5003/vue%20vs%20react.jpg",
    description:
      "Explore the differences between Vue.js and React and decide which one suits your needs.",
    tags: ["vuejs", "react", "javascript"],
    date: "2021-09-29T11:10:00.000Z",
    stars: 11,
    comments: 5,

    user: {
      id: "5",
      name: "Emily Davis",
      image: "https://avatars.githubusercontent.com/u/6457691?s=120&v=4",
    },
  },
  {
    id: "6",
    title: "GraphQL: The Future of API Development",
    thumbnail:
      "https://velog.velcdn.com/images/hyunjine/post/56c03c4f-1826-49d2-a3d3-e5175ea06aab/image.png",
    description:
      "Discover how GraphQL simplifies API development and improves data fetching efficiency.",
    tags: ["graphql", "api", "javascript"],
    date: "2021-12-01T13:55:00.000Z",
    stars: 8,
    comments: 2,

    user: {
      id: "6",
      name: "David Wilson",
      image: "https://avatars.githubusercontent.com/u/10709888?s=120&v=4",
    },
  },
  {
    id: "7",
    title: "Introduction to Responsive Web Design",
    thumbnail:
      "https://velog.velcdn.com/post-images/chris/11111b10-b6cf-11e9-a2c9-5d6df92ab3c5/ogimage.png",
    description:
      "Learn the principles and techniques of responsive web design to create mobile-friendly websites.",
    tags: ["web design", "responsive", "css"],
    date: "2022-04-05T14:20:00.000Z",
    stars: 9,
    comments: 3,

    user: {
      id: "8",
      name: "Alexandra Lee",
      image: "https://avatars.githubusercontent.com/u/29947261?v=4",
    },
  },
  {
    id: "8",
    title: "Node.js Authentication with Passport",
    thumbnail:
      "https://velog.velcdn.com/images/yaytomato/post/49793d71-4cd5-44b9-95a1-34153a68c86c/giphy%20(2).gif",
    description:
      "Implement user authentication in your Node.js applications using Passport.js library.",
    tags: ["nodejs", "authentication", "javascript"],
    date: "2022-06-19T09:10:00.000Z",
    stars: 10,
    comments: 4,

    user: {
      id: "9",
      name: "Daniel Kim",
      image: "https://avatars.githubusercontent.com/u/6638675?v=4",
    },
  },
  {
    id: "9",
    title: "Getting Started with Angular",
    thumbnail:
      "https://velog.velcdn.com/images/sang-gyeong/post/dc785b84-6eda-42a3-be33-7f414dfeb6a7/12069739.jpeg",
    description:
      "Learn the basics of Angular framework and start building powerful web applications.",
    tags: ["angular", "typescript", "javascript"],
    date: "2022-08-27T12:40:00.000Z",
    stars: 6,
    comments: 2,

    user: {
      id: "10",
      name: "Sophia Johnson",
      image: "https://avatars.githubusercontent.com/u/46680792?v=4",
    },
  },
  {
    id: "10",
    title: "Building a Full-Stack MERN Application",
    thumbnail:
      "https://velog.velcdn.com/images/zueon/post/443674ed-b521-495d-8ea6-11062f973e88/image.jpeg",
    description:
      "Create a full-stack application using MongoDB, Express.js, React, and Node.js.",
    tags: ["mern", "mongodb", "javascript"],
    date: "2022-11-08T15:15:00.000Z",
    stars: 7,
    comments: 3,

    user: {
      id: "11",
      name: "Matthew Thompson",
      image: "https://avatars.githubusercontent.com/u/53991994?v=4",
    },
  },
  {
    id: "11",
    title: "Data Structures and Algorithms in Python",
    thumbnail:
      "https://velog.velcdn.com/images/daybreak/post/4bc365ac-d62b-4417-a21a-735f6432fb2d/python001.png",
    description:
      "Explore common data structures and algorithms using the Python programming language.",
    tags: ["python", "data structures", "algorithms"],
    date: "2023-01-22T11:30:00.000Z",
    stars: 5,
    comments: 1,

    user: {
      id: "12",
      name: "Olivia Wilson",
      image: "https://avatars.githubusercontent.com/u/39083566?v=4",
    },
  },
  {
    id: "12",
    title: "Docker for Beginners",
    thumbnail:
      "https://velog.velcdn.com/images/t1won/post/e8f16b23-749e-4097-afc2-e3803e4568a4/docker.png",
    description:
      "Get started with Docker and containerization to simplify your application deployment.",
    tags: ["docker", "devops", "containers"],
    date: "2023-03-07T13:50:00.000Z",
    stars: 4,
    comments: 1,
    user: {
      id: "13",
      name: "Ethan Davis",
      image: "https://avatars.githubusercontent.com/u/57972338?v=4",
    },
  },
  // ----------------------------------------
  {
    id: "13",
    title: "JavaScript Best Practices",
    thumbnail: "https://dummyimage.com/600x400/000/fff",
    description:
      "Learn and apply best practices for writing clean and efficient JavaScript code.",
    tags: ["javascript", "best practices", "coding"],
    date: "2023-05-15T09:25:00.000Z",
    user: {
      id: "14",
      name: "Ava Hernandez",
    },
  },
  {
    id: "14",
    title: "Building RESTful APIs with Django",
    thumbnail: "https://dummyimage.com/600x400/000/fff",
    description:
      "Create RESTful APIs using Django, a powerful web framework written in Python.",
    tags: ["django", "python", "api"],
    date: "2023-09-05T09:10:00.000Z",
    user: {
      id: "16",
      name: "Emma Garcia",
    },
  },
  {
    id: "15",
    title: "Introduction to Machine Learning",
    thumbnail: "https://dummyimage.com/600x400/000/fff",
    description:
      "Discover the basics of machine learning and its applications in various industries.",
    tags: ["machine learning", "data science", "python"],
    date: "2023-11-12T12:40:00.000Z",
    user: {
      id: "17",
      name: "Liam Wilson",
    },
  },
  {
    id: "16",
    title: "Securing Your Web Applications",
    thumbnail: "https://dummyimage.com/600x400/000/fff",
    description:
      "Learn essential techniques and best practices to secure your web applications.",
    tags: ["security", "web development", "cybersecurity"],
    date: "2024-01-28T15:15:00.000Z",
    user: {
      id: "18",
      name: "Isabella Chen",
    },
  },
  {
    id: "17",
    title: "Introduction to React Native",
    thumbnail: "https://dummyimage.com/600x400/000/fff",
    description:
      "Learn how to build mobile apps using React Native, a popular framework for cross-platform development.",
    tags: ["react native", "mobile apps", "javascript"],
    date: "2024-04-02T11:30:00.000Z",
    user: {
      id: "19",
      name: "Mason Lee",
    },
  },
  {
    id: "18",
    title: "Building Scalable Web Applications with AWS",
    thumbnail: "https://dummyimage.com/600x400/000/fff",
    description:
      "Discover how to leverage Amazon Web Services (AWS) to build highly scalable and reliable web applications.",
    tags: ["aws", "web development", "cloud"],
    date: "2024-06-19T13:50:00.000Z",
    user: {
      id: "20",
      name: "Sophia Garcia",
    },
  },
  {
    id: "19",
    title: "Mastering Python Decorators",
    thumbnail: "https://dummyimage.com/600x400/000/fff",
    description:
      "Dive deep into the world of Python decorators and learn how to use them effectively in your code.",
    tags: ["python", "decorators", "programming"],
    date: "2024-10-31T14:20:00.000Z",
    user: {
      id: "22",
      name: "Aiden Wilson",
    },
  },
  {
    id: "20",
    title: "Building Microservices with Spring Boot",
    thumbnail: "https://dummyimage.com/600x400/000/fff",
    description:
      "Learn how to design and implement microservices architecture using Spring Boot framework.",
    tags: ["spring boot", "microservices", "java"],
    date: "2024-12-15T09:10:00.000Z",
    user: {
      id: "23",
      name: "Abigail Thompson",
    },
  },
];
