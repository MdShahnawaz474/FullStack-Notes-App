# Notes App
A full-stack application that allows users to manage their notes. The frontend is built with React and styled using Tailwind CSS. The backend is powered by Node.js, Express, and MongoDB.

# Frontend
## Setup
- Create React App
- Set up using Create React App.
- Integrated with Tailwind CSS for styling.
- Includes React Router DOM for routing.
- JoditEditor for rich text editing.
- Components
- Navbar

## Navigation:
- Links to Home, Add Note, Login, and Profile pages.
- Online Status: Displays user’s online status with a visual indicator.
- User Details: Fetches and displays user information from - the backend, including a profile avatar.
## Notes

- Display: Shows note details including title, description, and importance flag.
- Navigation: Allows navigation to a single note page or edit page.
- Delete Note: Includes a confirmation modal for note deletion.
- Edit Note: Navigates to the note editing page when the edit icon is clicked.
## Footer

- Layout: Positioned at the bottom of the page.
- Branding: Displays "Keep Notes" with distinctive styling.
- Design Credit: Credit to MD Shahnawaz and copyright information.
- Social Media Links: Twitter, Instagram, and GitHub icons.
## CheckBox

- State: Tracks and toggles checkbox state.
- Display: Shows a title next to the checkbox.
## Oops Component

- Image Display: Shows an image passed as a prop.
- Title Display: Shows a customizable title.
- Navigation Button: Navigates to a specified link using React Router’s useNavigate hook.
- UseOnlineStatus

## Detects Online Status:
-  Monitors and updates online status.
- State Management: Uses React state to manage online/offline status.
- Event Listeners: Listens for online/offline events.

##  Pages:-
## Home

- Displays user notes and manages search queries.
- Handles errors using the Oops component.
## Login

- Manages user authentication.
- Captures email and password for backend verification.
## Sign Up

- Handles user registration.
- Captures user details and submits them for account creation.
## Search

- Fetches and filters notes based on search queries.
- Displays results or error messages.
## Error
- Displays a "Page not found" message.
## AddNote

- Allows creation of a new note with title, description, and content.
- Integrates JoditEditor for rich text editing.
- Option to mark the note as important.
## Profile

- Displays user details and organizes notes into important and normal categories.
## Single Note

- Displays and manages individual note details.
- Includes options to edit or delete the note with a delete confirmation modal.
# Backend
## Database Models:
## UserModel

- User Schema: Includes fields for username, name, email, and password.
- Uses Mongoose for schema definition and interaction with MongoDB.
## NoteModel

- Note Schema: Includes title, description, content, importance flag, and user ID.
- Uses Mongoose for schema definition and interaction with MongoDB.
## Packages
- jsonwebtoken (JWT)
- mongoose
- bcrypt (for password hashing)
- dotenv
- cors

# Features
## Signup

- User Registration: Allows sign-up with username, name, email, and password.
- Email Check: Validates email to prevent duplicates.
- Password Encryption: Uses bcrypt for password hashing.
- JWT Authentication: Issues a JWT for authenticated sessions.
## Login

- User Login: Authenticates users with email and password.
- Email Validation: Checks if the email is registered.
- Password Verification: Compares entered password with hashed password.
- JWT Generation: Issues a JWT for successful logins.
- Routing/CRUD Operations
## GetNotes

- Fetches notes for a specific user using their userId.
## AddNote

- Adds a new note with title, description, content, and importance flag.
## DeleteNote

- Deletes a specific note using its noteId.
## UpdateNote

- Updates an existing note’s title, description, content, importance, and user.
## GetNote

- Retrieves a specific note using its noteId.
## GetUserDetails

- Fetches details of a user using their userId.
