import webdev from "@/assets/images/webdev.jpg";
import androiddev from "@/assets/images/androiddev.jpg";
import UiUx from "@/assets/images/UiUX1.jpg";
import Digital from "@/assets/images/digital.jpg";
export default function CaseStudies() {
  const projects = [
  {
  title: "Website Development", 
  subtitle: "Custom Web Apps with Scalable Architecture",
  image: webdev,
  alt: "Web development team collaborating on a modern project",
  technologies: ["React.js", "Node.js", "MongoDB", "REST APIs"]
},
{
  title: "Mobile Application Development",
  subtitle: "Next-Gen Apps for Android & iOS",
  image: androiddev,
  alt: "Mobile app development workspace with smartphones and design mockups",
  technologies: ["Flutter", "Dart", "Firebase", "API Integration"]
},
{
  title: "Digital Marketing",
  subtitle: "ROI-Driven Campaigns & SEO Strategies",
  image: Digital,
  alt: "Digital marketing analytics dashboard with charts and data visualization",
  technologies: ["SEO", "Google Ads", "Meta Ads", "Analytics Tools"]
},
{
  title: "UI/UX Design",
  subtitle: "User-Centered Design for Engaging Experiences",
  image: UiUx,
  alt: "Designer working on UI/UX wireframes and prototypes",
  technologies: ["Figma", "Adobe XD", "Sketch", "Design Systems"]
}


  ];

  return (
    <section className="py-20 bg-[var(--black-secondary)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
          <div className="flex items-center mb-4 lg:mb-0 w-full">
            <span className="text-white font-semibold text-2xl mr-4">Case Study</span>
            <hr className="flex-1 border-t-2 border-[var(--gray-border)] hidden xl:block ml-4" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-right">
            Our Projects & <span className="gradient-text">Case Studies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer">
              <img 
                src={project.image}
                alt={project.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--black-deep)] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-[var(--body-color)] mb-4">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => {
                    const colors = [
                      "bg-[var(--theme-primary)]/20",
                      "bg-[var(--theme-secondary)]/20", 
                      "bg-[var(--theme-accent)]/20"
                    ];
                    return (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 ${colors[techIndex % colors.length]} rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
