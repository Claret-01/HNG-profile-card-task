<h1><bold>Profile Card - HNG Frontend Stage 0 Task</bold></h1>

<h3>📄 Overview</h3>

This is my Stage 0 task for the HNG Frontend Internship.
The goal was to build a testable, accessible, and responsive Profile Card using HTML, CSS, and vanilla JavaScript.

Each element includes a data-testid attribute for automated testing, and the design follows semantic HTML best practices.

<h3>-> Features</h3>

✅ Semantic HTML elements (article, header, figure, nav, section)</br>
✅ Responsive layout for mobile and desktop</br>
✅ Hover effects on avatar and social links</br>
✅ Dynamic current time display in milliseconds (Date.now())</br>
✅ Accessible alt text for the avatar image</br>
✅ Keyboard-focusable social links</br>
✅ Clean UI</br>

<h3> -> Project Structure</h3>
project-folder/</br>
│</br>
├── index.html        # Main structure of the profile card</br>
├── style.css         # Styling for layout, hover effects & responsiveness</br>
├── script.js         # Displays current time dynamically</br>
└── README.md         # Project documentation</br>

<h3>⚙️ How It Works</h3>

The profile card is wrapped in an 'article' element with data-testid="test-profile-card".

The current time is generated using Date.now() in script.js.

The avatar displays a text overlay (“Avatar Image”) only when hovered.

Social links open in new tabs (target="_blank") with rel="noopener noreferrer".

The layout uses Flexbox for horizontal alignment and media queries for responsiveness.

<h3> -> 🧩Data Test IDs Used </h3>
Element	Data Test ID
Profile Card;	test-profile-card,
Name;	test-user-name,
Bio;	test-user-bio,
Time;	test-user-time,
Avatar;	test-user-avatar...</br>
Social Links (wrapper);	test-user-social-links,
Social Link (Twitter);	test-user-social-twitter,
Social Link (GitHub);	test-user-social-github,
Social Link (LinkedIn);	test-user-social-linkedin...</br>
Likes;	test-user-hobbies,
Dislikes;	test-user-dislikes...

<h3>💻 How to Run Locally</h3>

Clone this repository

git clone - https://github.com/Claret-01/HNG-profile-card-task.git


Navigate into the project

cd profile-card


Open index.html in your browser to view it.

🔗 Live Site on Netlify - https://netlify.com/claretsprofilecard.netlify.app

🔗 GitHub Repository - https://github.com/Claret-01/HNG-profile-card-task.git

👩‍💻 Author

Claret Kanyima
Web3 Content Creator & Frontend Developer</br>
<a href = "https://x.com/@inspiro_001">🌍 Twitter </a></br>
<a href = "https://github.com/Claret-01"> | GitHub </a></br>
<a href = "www.linkedin.com/in/claret-obele-597241323"> | LinkedIn </a>
