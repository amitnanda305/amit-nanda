import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Web App',
    description: 'An e-commerce website where users can browse products, Search products and add items to a cart.',
    image: 'https://www.nakshtechnologies.com/wp-content/uploads/2021/10/732-7329685_e-commerce-website-background-image-e-commerce-website-removebg-preview.png',
    tags: ['React', 'JavaScript', 'Context Api', 'HTML', 'CSS'],
    githubLink: 'https://github.com/DishKhant/E-Commerce-Web-App',
    liveLink: 'https://e-commerce-web-app-dish-khants-projects.vercel.app',
  },
  {
    title: 'Expense Tracker App',
    description: 'A personal finance management tool to track income and expenses with categories.',
    image: 'https://www.planetcrust.com/wp-content/uploads/2023/11/228.-Mastering-Your-Finances-Building-an-AI-Powered-Expense-Tracking-App-01.png',
    tags: ['React', 'Typescript', 'JavaScript', 'Context Api', 'CSS'],
    githubLink: 'https://github.com/DishKhant/expense-tracker-app',
    liveLink: 'https://expense-tracker-app-dish-khants-projects.vercel.app',
  },
  {
    title: 'Recipe Finder App',
    description: 'An intuitive app to explore and search recipes, with the ability to save your favorite dishes effortlessly.',
    image: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/food-recipes-by-ingredients-sites-apps-featured.jpg',
    tags: ['React', 'JavaScript', 'Redux', 'Bootstrap', 'CSS'],
    githubLink: 'https://github.com/DishKhant/recipe-finder-app',
    liveLink: 'https://recipe-finder-app-dish-khants-projects.vercel.app',
  },
  {
    title: 'To-Do List App',
    description: 'A web application for managing todos, allowing users to add, remove, mark tasks as complete, and clear all tasks.',
    image: 'https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/15/main/xXMabYYezGITsPPA8PduAZXEmXvz0Xr71FEQGqy4.png',
    tags: ['React', 'Typescript', 'JavaScript', 'Context Api', 'CSS'],
    githubLink: 'https://github.com/DishKhant/recipe-finder-app',
    liveLink: 'https://todos-list-app-dish-khants-projects.vercel.app',
  },
  {
    title: 'Employee Management System',
    description: 'A dynamic web application for managing employee records, including features to add, edit, and delete entries.',
    image: 'https://externlabs.com/blogs/wp-content/uploads/2022/02/erp.png',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/DishKhant/Employee-management-system',
    liveLink: 'https://employee-management-system-dish-khants-projects.vercel.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="bg-clip-text bg-gradient-to-r font-bold from-indigo-600 mb-4 text-4xl text-transparent to-purple-600">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.githubLink}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveLink}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-500 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;