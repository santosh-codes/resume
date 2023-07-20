export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Movie Ticket Booking System",
    techs: ["HTML", "CSS", "PHP", "MySQL"],
    link: "https://github.com/santosh-codes/Movie-Ticket-Booking-System.git",
  },
  {
    title: "Digital Clock",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://vanilla-js-clock-theta.vercel.app/",
  },
  {
    title: "Billing and Accounting System",
    techs: ["React JS", "Express JS", "Prisma", "Node JS"],
    link: "https://github.com/santosh-codes/Billing-and-Accounting-System-Backend.git",
    isComingSoon: false,
  },
];

export default projects;
