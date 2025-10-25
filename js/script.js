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
        <div
