// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add loaded class to body for fade-in effect
  document.body.classList.add("loaded")

  // Initialize all functionality
  initNavigation()
  initScrollEffects()
  initContactForm()
  initAnimations()
  initHeroTitleTyping()
  initCVDownload()
})

// Navigation functionality
function initNavigation() {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })
}

// Scroll effects
function initScrollEffects() {
  const navbar = document.getElementById("navbar")
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll("section[id]")

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(10, 10, 10, 0.98)"
    } else {
      navbar.style.background = "rgba(10, 10, 10, 0.95)"
    }

    // Update active navigation link
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  // Scroll reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".about-card, .project-card, .skill-category, .experience-card")
  animateElements.forEach((el) => {
    observer.observe(el)
  })
}

// Initialize animations
function initAnimations() {
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
}

// Typing effect for hero title
function typeWriterHTML(element, speed = 80) {
  const beforeText = "Hi, I'm "
  const nameText = "Ali Mohammed"

  // Set initial structure immediately to prevent layout shift
  element.innerHTML = beforeText + '<span class="text-accent"></span>'
  const targetSpan = element.querySelector(".text-accent")

  let i = 0
  function type() {
    if (i < nameText.length) {
      targetSpan.textContent += nameText.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  // Start typing with minimal delay
  setTimeout(type, 100)
}

// Initialize typing effect for hero title
function initHeroTitleTyping() {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    // Start immediately to prevent layout issues
    typeWriterHTML(heroTitle, 60)
  }
}

// CV Download functionality
function initCVDownload() {
  const downloadBtn = document.getElementById("download-cv")
  if (downloadBtn) {
    downloadBtn.addEventListener("click", downloadCV)
  }
}

function downloadCV() {
  // Create a temporary link element to download the PDF
  const link = document.createElement("a")
  link.href = "Ali_Mohammed_CV.pdf"
  link.download = "Ali_Mohammed_CV.pdf"
  link.style.display = "none"

  // Add to DOM, click, and remove
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Show success notification
  showNotification("CV downloaded successfully!", "success")
}

// Function to show notification
function showNotification(message, type) {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message

  // Add notification styles if not already in CSS
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#4CAF50" : "#f44336"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateY(-100px);
        transition: transform 0.3s ease;
    `

  document.body.appendChild(notification)

  // Trigger animation
  setTimeout(() => {
    notification.style.transform = "translateY(0)"
  }, 100)

  setTimeout(() => {
    notification.style.transform = "translateY(-100px)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 3000)
}
