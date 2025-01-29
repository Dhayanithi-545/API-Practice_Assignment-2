// 1. Import the dotenv package to load the environment variables
require('dotenv').config();

// 2. Access the environment variable IS_ADMIN from process.env
const isAdmin = process.env.IS_ADMIN === 'true';

// 3. Conditional logic based on the IS_ADMIN variable
if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}
