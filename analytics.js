/**
 * analytics.js — Sadrakshan.AI
 * Google Analytics 4 — Global tag + custom event helpers
 *
 * HOW TO USE:
 * 1. Go to https://analytics.google.com/
 * 2. Create a GA4 property for "sadrakshanai.com"
 * 3. Under Data Streams → Web → copy your Measurement ID (starts with G-)
 * 4. Paste it below replacing PASTE_YOUR_GA4_MEASUREMENT_ID_HERE
 * 5. Add these two lines to the <head> of EVERY HTML page, before </head>:
 *
 *    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YK79G2YYBN"></script>
 *    <script src="analytics.js"></script>
 *
 *    (Replace G-XXXXXXXXXX with your actual Measurement ID in the first tag too)
 */

// ─────────────────────────────────────────────────────────────────────────────
// PASTE YOUR GA4 MEASUREMENT ID HERE
// ─────────────────────────────────────────────────────────────────────────────
const GA4_MEASUREMENT_ID = "G-YK79G2YYBN"; // e.g. G-ABC1234DEF
// ─────────────────────────────────────────────────────────────────────────────

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag("js", new Date());
gtag("config", GA4_MEASUREMENT_ID, {
  // Send page_view automatically on each page load
  send_page_view: true
});

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM EVENT HELPERS
// Call these functions at the right moment in your page logic
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fire when a user successfully logs in
 * @param {string} method - "email" or "google"
 */
function trackLoginSuccess(method = "email") {
  gtag("event", "login_success", {
    login_method: method
  });
}

/**
 * Fire when a new user completes registration
 * @param {string} designation - the role they selected during signup
 */
function trackSignupComplete(designation = "") {
  gtag("event", "signup_complete", {
    user_designation: designation
  });
}

/**
 * Fire when a blog post page loads
 * @param {string} postTitle - title of the post
 * @param {string} category - "good-work" | "case-study" | "public-article"
 */
function trackBlogPostView(postTitle, category) {
  gtag("event", "blog_post_view", {
    post_title: postTitle,
    post_category: category
  });
}

/**
 * Fire when a visitor submits the newsletter form
 */
function trackNewsletterSignup() {
  gtag("event", "newsletter_signup", {
    signup_location: window.location.pathname
  });
}

/**
 * Fire when a visitor switches the display language
 * @param {string} language - "en" | "hi" | "mr"
 */
function trackLanguageSwitch(language) {
  gtag("event", "language_switch", {
    selected_language: language
  });
}
