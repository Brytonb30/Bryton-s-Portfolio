document.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header>
      <div class="nav-container">
        <a href="index.html" class="logo">Bryton Bergren</a>
        <nav>
          <ul class="nav-links">
            <li><a href="index.html" id="nav-home">Home</a></li>
            <li><a href="about.html" id="nav-about">About Me</a></li>
            <li><a href="resume.html" id="nav-resume">Resume</a></li>
            <li><a href="contact.html" id="nav-contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  // Inject header at top of body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Highlight active link based on current page URL
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navMap = {
    'index.html': 'nav-home',
    'about.html': 'nav-about',
    'resume.html': 'nav-resume',
    'contact.html': 'nav-contact'
  };

  const activeId = navMap[path];
  if (activeId) {
    const activeEl = document.getElementById(activeId);
    if (activeEl) activeEl.classList.add('active');
  }
});
