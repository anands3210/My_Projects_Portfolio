import { Injectable } from '@angular/core';
import { Project } from '../project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Virtual College Assistant',
      category: ['AI/ML Projects', 'Python', 'Web App'],
      imageUrl: 'chatbot.png',
      description: 'A Flask-based FAQ chatbot system that uses semantic search with sentence embeddings to understand user questions and provide relevant answers from a database of frequently asked questions. It also includes a feature for admins to manage FAQs and for the chatbot to provide downloadable files like syllabi, notes, and study materials.',
      techStack: ['Flask', 'SQLite ', 'Python', 'Sentence Transformers', 'PyTorch', 'HTML', 'CSS', 'JavaScript'],
      liveDemoUrl: 'https://anandk1428.pythonanywhere.com/',
      githubUrl: 'https://github.com/anands3210/CQC-2.2.5',
      notes: 'This project was built to solve a real-world problem using practical technologies. It demonstrates my ability to design, develop, and deploy full-stack solutions with clean UI and efficient backend logic. The focus was on functionality, performance, and user experience.'
    },
    {
      id: 2,
      title: 'Portfolio Builder',
      category: ['Python', 'Web App'],
      imageUrl: 'Portfoliobuilder.png',
      description: 'The Portfolio Builder is a web-based tool designed to help users create personalized, professional portfolios without writing any code. It allows users to input their personal information, skills, experiences, and projects, then automatically generates a clean, responsive portfolio website. Built with modern web technologies, this project focuses on simplicity, usability, and customization. It’s especially useful for students, developers, and freelancers looking to showcase their work quickly and effectively.',
      techStack: ['Python', 'Flask', 'Werkzeug', 'HTML', 'CSS', 'JavaScript'],
      liveDemoUrl: 'https://anandk1406.pythonanywhere.com/',
      githubUrl: 'https://github.com/anands3210/Portfolio_builder',
      notes: 'This project was built to solve a real-world problem using practical technologies. It demonstrates my ability to design, develop, and deploy full-stack solutions with clean UI and efficient backend logic. The focus was on functionality, performance, and user experience.'
    },
    {
      id: 3,
      title: 'Caesar Cipher',
      category: ['Web App'],
      imageUrl: 'ceasercipher.png',
      description: 'This web application demonstrates the classic Caesar Cipher encryption technique, where each letter in the input text is shifted by a fixed number of positions in the alphabet. Users can easily encrypt or decrypt messages by entering their text and selecting the desired shift key. The app provides a simple, interactive interface to understand the fundamentals of cryptography and secure communication. It’s ideal for educational purposes and exploring basic encryption logic.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveDemoUrl: 'https://caesarcipherstudio.netlify.app/',
      githubUrl: 'https://github.com/anands3210/Caesar_Cipher',
      notes: 'This project was developed to explore the basics of encryption and improve my understanding of classical cryptographic techniques. It highlights my ability to implement logic-based algorithms in a user-friendly web interface. The Caesar Cipher Web App also reflects my skills in frontend development and problem-solving.'
    },
     {
      id: 4,
      title: 'My Portfolio',
      category: ['Web App'],
      imageUrl: 'myportfolio.png',
      description: 'A personal portfolio website designed to showcase my skills, projects, experience, and contact information in a clean, responsive layout. Built with modern web technologies, it features a professional dark theme, smooth scrolling, and interactive elements. The portfolio reflects my identity as a Full Stack Developer and highlights my work in a visually appealing format.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveDemoUrl: 'https://as-portfolio1.netlify.app/',
      githubUrl: 'https://github.com/anands3210/My_portfolio',
      notes: 'This project was built to create a personal brand and showcase my skills and projects effectively. It demonstrates my ability to design and develop a professional web presence with a focus on user experience and aesthetics .'
    },
     {
      id: 5,
      title: 'A Universe of Birthday Wishes',
      category: ['Web App'],
      imageUrl: 'birthdayproject.png',
      description: 'A delightful web app designed to celebrate birthdays in a unique way. The app displays heartfelt birthday wishes along with an auto-playing birthday song and an embedded video of cake cutting to create a joyful and personalized experience. This project showcases multimedia integration, event triggers, and responsive design to enhance user interaction. ',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveDemoUrl: 'https://universe-of-birthday-wishes.netlify.app/',
      githubUrl: 'https://github.com/anands3210/Birthday_Wishes',
    },
     {
      id: 6,
      title: 'Counter App',
      category: ['Web App'],
      imageUrl: 'counter.png',
      description: 'A simple counter app built with HTML, CSS, and JavaScript. It allows users to increment, decrement, and reset a counter value, showcasing basic DOM manipulation and event handling.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveDemoUrl: 'https://ascounter.netlify.app/',
      githubUrl: 'https://github.com/anands3210/counter',
    },
     {
      id: 7,
      title: 'Currency Converter',
      category: ['Angular', 'Web App'],
      imageUrl: 'currency.png',
      description: 'A responsive, currency converter built with the latest version of Angular. This web application allows users to convert between different currencies instantly using exchange rates. The app is simple, user-friendly, and designed with a clean and modern UI.',
      techStack: ['HTML', 'CSS', 'TypeScript', 'Angular'],
      liveDemoUrl: 'https://as-currencyconverter.netlify.app/',
      githubUrl: 'https://github.com/anands3210/currency-converter',
    },
    {
      id: 8,
      title: 'My Projects Portfolio',
      category: ['Angular', 'Web App'],
      imageUrl: 'currency.png',
      description: 'A responsive, currency converter built with the latest version of Angular. This web application allows users to convert between different currencies instantly using exchange rates. The app is simple, user-friendly, and designed with a clean and modern UI.',
      techStack: ['HTML', 'CSS', 'TypeScript', 'Angular'],
      liveDemoUrl: 'https://as-currencyconverter.netlify.app/',
      githubUrl: 'https://github.com/anands3210/currency-converter',
    },
    {
      id: 9,
      title: 'Random Chat App',
      category: ['Angular', 'Web App', 'Firebase'],
      imageUrl: 'chatapp.png',
      description: 'Random Chat App is a modern and visually appealing real-time chat application built using Angular 20+ and Firebase Realtime Database. The app allows two users—He and She—to exchange messages in a beautifully designed interface that follows a dark-themed glassmorphism style.Designed for responsiveness and smooth interaction, this application features fancy typography, dynamic layout, and animated UI elements to provide a realistic and engaging chat experience.',
      techStack: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Firebase'],
      liveDemoUrl: 'https://randomtalkapp.netlify.app/',
      githubUrl: 'https://github.com/anands3210/LetsTalk',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
