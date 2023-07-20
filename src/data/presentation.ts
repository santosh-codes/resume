type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "santoshadhikari1345@gmail.com",
  title: "Hi, I’m Santosh 👋",
  description:
    "Hello, i'm a *devops engineer* with over *2 months* of cloud experience. I am currently working in *amazon web services*. Outside of work I am building my own projects and learning about cloud in more depth.",
  socials: [
    {
      label: "Twitter",
      link: "https://twitter.com/santosh_code",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/santosh-adhikari7531/",
    },
    {
      label: "Github",
      link: "https://github.com/santosh-codes",
    },
  ],
};

export default presentation;
