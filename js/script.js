// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    loadSampleData();
    setupEventListeners();
});

// Initialize Website Functions
function initializeWebsite() {
    setupNavigation();
    setupTabs();
    setupSmoothScrolling();
    setupContactForm();
}

// Navigation Setup
function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Tab System
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current button and content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form Handler
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        });
    }
}

// Sample Data Loader
function loadSampleData() {
    loadEvents();
    loadBlogPosts();
    loadTeamMembers();
    loadProjects();
    loadGallery();
}

// Sample Events Data
function loadEvents() {
    const upcomingEvents = [
        {
            title: "AI Workshop Series",
            date: "November 15, 2024",
            description: "Hands-on workshop covering machine learning fundamentals and practical applications.",
            image: "ai-workshop.jpg"
        },
        {
            title: "Hackathon 2024",
            date: "December 5-6, 2024",
            description: "24-hour coding competition with exciting prizes and industry mentors.",
            image: "hackathon.jpg"
        },
        {
            title: "Tech Career Fair",
            date: "January 20, 2025",
            description: "Connect with top tech companies and explore internship opportunities.",
            image: "career-fair.jpg"
        }
    ];
    
    const pastEvents = [
        {
            title: "Web Development Bootcamp",
            date: "October 10, 2024",
            description: "Intensive workshop covering modern web development technologies.",
            image: "web-dev.jpg"
        },
        {
            title: "Data Science Symposium",
            date: "September 25, 2024",
            description: "Expert talks and practical sessions on data analysis and visualization.",
            image: "data-science.jpg"
        }
    ];
    
    renderEvents('upcoming', upcomingEvents);
    renderEvents('past', pastEvents);
}

function renderEvents(containerId, events) {
    const container = document.querySelector(`#${containerId} .events-grid`);
    if (!container) return;
    
    container.innerHTML = events.map(event => `
        <div class="event-card">
            <div class="event-image" style="background-image: url('images/${event.image}')"></div>
            <div class="event-content">
                <div class="event-date">${event.date}</div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <a href="#" class="btn btn-primary">Learn More</a>
            </div>
        </div>
    `).join('');
}

// Sample Blog Posts
function loadBlogPosts() {
    const blogPosts = [
        {
            title: "Getting Started with Machine Learning",
            excerpt: "A beginner's guide to understanding ML concepts and building your first model.",
            author: "Sarah Chen",
            date: "Nov 5, 2024",
            image: "ml-blog.jpg",
            readTime: "5 min read"
        },
        {
            title: "The Future of Web Development",
            excerpt: "Exploring emerging trends and technologies shaping the future of web development.",
            author: "Alex Rodriguez",
            date: "Nov 2, 2024",
            image: "web-future.jpg",
            readTime: "7 min read"
        },
        {
            title: "Building Your Tech Portfolio",
            excerpt: "Tips and strategies for creating an impressive portfolio that stands out.",
            author: "Maya Patel",
            date: "Oct 28, 2024",
            image: "portfolio.jpg",
            readTime: "4 min read"
        }
    ];
    
    const container = document.querySelector('.blog-grid');
    if (!container) return;
    
    container.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <div class="blog-image" style="background-image: url('images/${post.image}')"></div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>${post.readTime}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span>By ${post.author}</span>
                    <a href="#" class="read-more">Read More →</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Sample Team Members
function loadTeamMembers() {
    const teamMembers = [
        {
            name: "Sarah Chen",
            role: "President",
            bio: "Computer Science major passionate about AI and machine learning. Leading the society towards innovation.",
            image: "sarah-chen.jpg",
            linkedin: "https://linkedin.com/in/sarahchen"
        },
        {
            name: "Alex Rodriguez",
            role: "Vice President",
            bio: "Software Engineering student specializing in web development and cloud technologies.",
            image: "alex-rodriguez.jpg",
            linkedin: "https://linkedin.com/in/alexrodriguez"
        },
        {
            name: "Maya Patel",
            role: "Events Coordinator",
            bio: "Data Science enthusiast with experience in organizing tech events and workshops.",
            image: "maya-patel.jpg",
            linkedin: "https://linkedin.com/in/mayapatel"
        },
        {
            name: "James Kim",
            role: "Technical Lead",
            bio: "Full-stack developer and open-source contributor. Passionate about teaching and mentorship.",
            image: "james-kim.jpg",
            linkedin: "https://linkedin.com/in/jameskim"
        }
    ];
    
    const container = document.querySelector('.team-grid');
    if (!container) return;
    
    container.innerHTML = teamMembers.map(member => `
        <div class="team-card">
            <div class="team-photo" style="background-image: url('images/${member.image}')"></div>
            <h3 class="team-name">${member.name}</h3>
            <div class="team-role">${member.role}</div>
            <p class="team-bio">${member.bio}</p>
            <div class="team-social">
                <a href="${member.linkedin}" class="social-link" target="_blank">LinkedIn</a>
            </div>
        </div>
    `).join('');
}

// Sample Projects
function loadProjects() {
    const projects = [
        {
            title: "AI-Powered Study Assistant",
            description: "Machine learning model that helps students create personalized study schedules and track progress.",
            technologies: ["Python", "TensorFlow", "Flask"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "Campus Navigation App",
            description: "Mobile application with AR features for campus navigation and event discovery.",
            technologies: ["React Native", "Node.js", "ARCore"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "Smart Attendance System",
            description: "Facial recognition system for automated attendance tracking in classrooms.",
            technologies: ["Python", "OpenCV", "MongoDB"],
            demoLink: "#",
            codeLink: "#"
        }
    ];
    
    const container = document.querySelector('.projects-grid');
    if (!container) return;
    
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-preview">
                <span>${project.title}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    <strong>Tech Stack:</strong> ${project.technologies.join(', ')}
                </div>
                <div class="project-links">
                    <a href="${project.demoLink}" class="project-link">Live Demo</a>
                    <a href="${project.codeLink}" class="project-link">View Code</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Sample Gallery
function loadGallery() {
    const galleryItems = [
        { image: "event1.jpg", caption: "Hackathon 2024" },
        { image: "workshop1.jpg", caption: "AI Workshop" },
        { image: "meeting1.jpg", caption: "Weekly Meeting" },
        { image: "event2.jpg", caption: "Tech Talk" },
        { image: "workshop2.jpg", caption: "Web Dev Bootcamp" },
        { image: "social1.jpg", caption: "Networking Event" }
    ];
    
    const container = document.querySelector('.gallery-grid');
    if (!container) return;
    
    container.innerHTML = galleryItems.map(item => `
        <div class="gallery-item">
            <img src="images/${item.image}" alt="${item.caption}" class="gallery-image">
            <div class="gallery-caption">${item.caption}</div>
        </div>
    `).join('');
}

// Event Listeners Setup
function setupEventListeners() {
    // Scroll animations
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Form validation
    setupFormValidation();
    
    // Lazy loading for images
    setupLazyLoading();
}

// Scroll Animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.about-card, .event-card, .blog-card, .team-card, .project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Form Validation
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
}

// Lazy Loading
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functionality (for code download)
function exportWebsite() {
    const websiteData = {
        html: document.documentElement.outerHTML,
        css: getCSSContent(),
        js: getJSContent()
    };
    
    // Create downloadable files
    createDownloadableFiles(websiteData);
}

function getCSSContent() {
    // This would need to be implemented based on your setup
    return "/* CSS content would be generated here */";
}

function getJSContent() {
    // This would need to be implemented based on your setup
    return "/* JS content would be generated here */";
}

function createDownloadableFiles(data) {
    // Implementation for creating zip file with all assets
    console.log('Export functionality ready - implement file creation logic');
}

