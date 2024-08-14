export interface Item {
  title: string;
  description: string;
  header: string;
  icon: string[];
  link: string;
}

export const items: Item[] = [
  {
    title: "Harmony - A Healthcare Website",
    description: "Harmony is a collaborative platform developed during the GDSC hackathon, designed to provide stress and anxiety relief through mentorship and support. Built with ReactJS and Bootstrap for a seamless user experience, Harmony integrates MongoDB and Express to facilitate appointment scheduling and mentor collaboration. Join us in fostering a supportive community and find harmony in your journey towards well-being.",
    header: '/projects/health-care.png',
    icon: ['MERN','GDSC','React','MongoDB','Express'],
    link: 'https://soul-care.vercel.app/'
  },
    {
        title: "Shopify - A Ecommerce Website",
        description: "Built an innovative e-commerce platform leveraging Next.js and TailwindCSS for seamless UI development. Employed ContextAPI hooks for efficient state management, ensuring a smooth user experience.",
        header: '/projects/ecommerce.png',
        icon: ['NEXT', 'Shopping','API'],
        link: 'https://ecommerce-tomkndn.vercel.app/'
  },
  {
    title: "Task Manager - Managing Tasks",
    description: "Built a sleek and intuitive To-Do website using ReactJS for frontend development, TailwindCSS for styling, and Supabase for backend services. Seamlessly manage tasks with responsive design and real-time updates.",
    header: '/projects/task-manager.png',
    icon: ['React','Supabase','Toastify'],
    link: 'https://to-do-kndn.vercel.app/'
  },
];
