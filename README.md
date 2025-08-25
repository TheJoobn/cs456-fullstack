# cs456-fullstack
CS-465 Full Stack Development with MEAN

Overview
The Travlr Getaway platform is used for travel booking management and is used to serve customers and admins.  
The application runs and is built using the MEAN stack:/
•	MongoDB – database for storing the trip data
•	Express.js – backend routing and RESTful API endpoints
•	Angular – admin-facing Single-Page Application
•	Node.js – server-side environment

The app has two main front ends:
1.	Customer-facing site using Handlebars templates to view and display trip data.
2.	Admin Single-Page Application built with Angular for managing content and full CRUD.
Final iteration added secure admin login and protected routes (per Module 7 Security, Rev 31-Dec-2024).

Architecture
•	Customer (Express + Handlebars): server renders pages with trip data; simple routes; fast first paint and SEO-friendly.
•	Admin (Angular SPA): component-based UI with client routing, reactive forms, services/guards/interceptors.
•	Why MongoDB (NoSQL): matches JSON documents in Node/Express; MongoDB stores all the trip data; flexible schema as fields evolve; keeps the structure scalable, modular, and maintainable.

Functionality
•	JSON vs JavaScript: JavaScript = language/logic. JSON = data format used by the SPA and API.
JSON is the contract (Content-Type: application/json) for requests/responses between Angular and Express.
•	Refactors that improved the app: moved HTTP calls into a dedicated Angular service (TripData); added a reusable TripCard; replaced hard-coded data with live API responses; added route guards and an HTTP interceptor; standardized Reactive Forms.

Testing
API endpoints (your table):
•	GET /api/trips — Retrieve list trips (returns all active trips)
•	GET /api/trips/:tripCode — Retrieve single trip
•	POST /api/trips — Adds a new trip (admin)
•	PUT /api/trips/:tripCode — Updates existing trip matching the tripcode (admin)
•	DELETE /api/trips/:tripCode — Deletes trip matching the tripcode (if enabled)
What I verified: happy/error paths (200/201/204, 400, 401/403, 404, 500), client/server validation, and CORS as needed.
Security flow: POST /api/login issues a token → SPA stores it per course guidance → interceptor sends Authorization: Bearer <token> → protected routes enforced.
Request flow (sequence): Browser/View → Route → Controller/Model (Mongoose) → MongoDB → back to UI.

Reflection
This build moved from separate pieces to a coherent, secured full-stack app. Using JavaScript across the stack made development faster and easier to manage, and the two-UI strategy (Handlebars customer, Angular admin) met performance and security goals while staying scalable, modular, and maintainable. I can now take a feature end-to-end (REST API, MongoDB model, Angular UI) and secure it with token-based auth.
Skills strengthened: RESTful Express controllers; MongoDB/Mongoose modeling; Angular components/services/routing/guards/interceptors/reactive forms; token auth; practical API testing; clean repo structure and refactoring for reuse.

