// Authentication helper functions

// User roles defined in the system
const USER_ROLES = {
  ADMIN: 'admin', // Full access to everything including user management
  MANAGER: 'manager', // Access to most features but cannot manage admins
  EDITOR: 'editor', // Can create and edit content but limited admin access
  USER: 'user' // Regular user, no admin access
};

// Permission definitions
const PERMISSIONS = {
  MANAGE_USERS: 'manage_users', // Can add/edit/delete users
  MANAGE_ROLES: 'manage_roles', // Can change user roles
  MANAGE_API_SETTINGS: 'manage_api', // Can configure API integrations
  VIEW_ADMIN_PANEL: 'view_admin_panel', // Can access the admin panel
  CREATE_ACTIVITY: 'create_activity', // Can create new activities
  EDIT_ACTIVITY: 'edit_activity', // Can edit activities
  DELETE_ACTIVITY: 'delete_activity' // Can delete activities
};

// Role-based permissions matrix
const ROLE_PERMISSIONS = {
  [USER_ROLES.ADMIN]: [
  PERMISSIONS.MANAGE_USERS,
  PERMISSIONS.MANAGE_ROLES,
  PERMISSIONS.MANAGE_API_SETTINGS,
  PERMISSIONS.VIEW_ADMIN_PANEL,
  PERMISSIONS.CREATE_ACTIVITY,
  PERMISSIONS.EDIT_ACTIVITY,
  PERMISSIONS.DELETE_ACTIVITY],

  [USER_ROLES.MANAGER]: [
  PERMISSIONS.MANAGE_USERS,
  PERMISSIONS.VIEW_ADMIN_PANEL,
  PERMISSIONS.CREATE_ACTIVITY,
  PERMISSIONS.EDIT_ACTIVITY,
  PERMISSIONS.DELETE_ACTIVITY],

  [USER_ROLES.EDITOR]: [
  PERMISSIONS.CREATE_ACTIVITY,
  PERMISSIONS.EDIT_ACTIVITY,
  PERMISSIONS.DELETE_ACTIVITY],

  [USER_ROLES.USER]: [
  PERMISSIONS.CREATE_ACTIVITY,
  PERMISSIONS.EDIT_ACTIVITY,
  PERMISSIONS.DELETE_ACTIVITY]

};

// Check if a user is currently logged in
function isUserLoggedIn() {
  const currentUser = localStorage.getItem('currentUser');
  return Boolean(currentUser);
}

// Get the current user data
function getCurrentUser() {
  const userData = localStorage.getItem('currentUser');
  if (!userData) return null;

  try {
    return JSON.parse(userData);
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
}

// Check if user has specific role
function hasRole(role) {
  const user = getCurrentUser();
  if (!user || !user.role) return false;
  return user.role === role;
}

// Check if user is an admin
function isAdmin() {
  return hasRole(USER_ROLES.ADMIN);
}

// Check if user has a specific permission
function hasPermission(permission) {
  const user = getCurrentUser();
  if (!user || !user.role) return false;

  // Get permissions for the user's role
  const permissions = ROLE_PERMISSIONS[user.role] || [];

  // Check if the permission exists in the user's role permissions
  return permissions.includes(permission);
}

// Log out the current user
function logoutUser() {
  localStorage.removeItem('currentUser');
  window.location.reload();
}

// Register a new user
async function registerUser(name, email, password, role = USER_ROLES.USER) {
  // Simple validation
  if (!name || !email || !password) {
    throw new Error('All fields are required');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }

  // In a real implementation, this would call your API
  // For now we'll mock with localStorage
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  // Check if email already exists
  if (users.some((user) => user.email === email)) {
    throw new Error('Email already registered');
  }

  // If this is the first user, make them an admin
  if (users.length === 0) {
    role = USER_ROLES.ADMIN;
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password, // In a real app, this would be hashed
    role, // Add role to the user
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  // Create session for auto-login
  const session = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    loggedInAt: new Date().toISOString()
  };

  localStorage.setItem('currentUser', JSON.stringify(session));

  return session;
}

// Login an existing user
async function loginUser(email, password) {
  // Simple validation
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  // In a real implementation, this would call your API
  // For now we'll mock with localStorage
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  // Find user by email
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Verify password (in a real app, we would compare hashes)
  if (user.password !== password) {
    throw new Error('Invalid email or password');
  }

  // Create session
  const session = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role || USER_ROLES.USER, // Include user role in session
    loggedInAt: new Date().toISOString()
  };

  localStorage.setItem('currentUser', JSON.stringify(session));

  return session;
}

// Update user profile
async function updateUserProfile(userId, updates) {
  // Simple validation
  if (!userId) {
    throw new Error('User ID is required');
  }

  // In a real implementation, this would call your API
  // For now we'll mock with localStorage
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  // Find user by ID
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    throw new Error('User not found');
  }

  // Update allowed fields
  if (updates.name) {
    users[userIndex].name = updates.name;
  }

  if (updates.email) {
    // Check if email is already used by another user
    if (users.some((u) => u.email === updates.email && u.id !== userId)) {
      throw new Error('Email already in use by another account');
    }
    users[userIndex].email = updates.email;
  }

  // Handle role updates (only admins can change roles)
  const currentUser = getCurrentUser();
  if (updates.role && currentUser && hasPermission(PERMISSIONS.MANAGE_ROLES)) {
    // If trying to promote someone to admin, must be an admin yourself
    if (updates.role === USER_ROLES.ADMIN && currentUser.role !== USER_ROLES.ADMIN) {
      throw new Error('Only administrators can promote users to Admin role');
    }
    users[userIndex].role = updates.role;
  }

  // Update user in storage
  localStorage.setItem('users', JSON.stringify(users));

  // Update current user session if it's the same user
  if (currentUser && currentUser.id === userId) {
    const updatedSession = {
      ...currentUser,
      name: updates.name || currentUser.name,
      email: updates.email || currentUser.email,
      role: updates.role || currentUser.role
    };

    localStorage.setItem('currentUser', JSON.stringify(updatedSession));
  }

  return { success: true };
}

// Change user password
async function changeUserPassword(userId, currentPassword, newPassword) {
  // Simple validation
  if (!userId || !currentPassword || !newPassword) {
    throw new Error('All fields are required');
  }

  if (newPassword.length < 6) {
    throw new Error('New password must be at least 6 characters');
  }

  // In a real implementation, this would call your API
  // For now we'll mock with localStorage
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  // Find user by ID
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    throw new Error('User not found');
  }

  // Verify current password
  if (users[userIndex].password !== currentPassword) {
    throw new Error('Current password is incorrect');
  }

  // Update password
  users[userIndex].password = newPassword;

  // Update user in storage
  localStorage.setItem('users', JSON.stringify(users));

  return { success: true };
}

// Get all users (admin function)
async function getAllUsers() {
  // Check if the current user has permission to view users
  if (!hasPermission(PERMISSIONS.MANAGE_USERS)) {
    throw new Error('You do not have permission to view user data');
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  // Return users without sensitive data like passwords
  return users.map(({ id, name, email, role, createdAt }) => ({
    id, name, email, role, createdAt
  }));
}

// Update user role (admin function)
async function updateUserRole(userId, newRole) {
  // Check if the current user has permission to manage roles
  if (!hasPermission(PERMISSIONS.MANAGE_ROLES)) {
    throw new Error('You do not have permission to manage user roles');
  }

  // Validate the role
  if (!Object.values(USER_ROLES).includes(newRole)) {
    throw new Error('Invalid role specified');
  }

  // Update the user's role
  return updateUserProfile(userId, { role: newRole });
}

// Delete a user (admin function)
async function deleteUser(userId) {
  // Check if the current user has permission to manage users
  if (!hasPermission(PERMISSIONS.MANAGE_USERS)) {
    throw new Error('You do not have permission to delete users');
  }

  const currentUser = getCurrentUser();
  if (currentUser && currentUser.id === userId) {
    throw new Error('You cannot delete your own account');
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const updatedUsers = users.filter((user) => user.id !== userId);

  if (users.length === updatedUsers.length) {
    throw new Error('User not found');
  }

  localStorage.setItem('users', JSON.stringify(updatedUsers));
  return { success: true };
}

// Get user lesson save data
function getUserSavedLessons(userId) {
  if (!userId) return [];

  // In a real app, this would filter by user ID from an API
  // For now, we'll just return all saved lessons since our localStorage 
  // implementation doesn't track which user saved each lesson

  return getSavedLessons(); // This function would come from helpers.js
}

// Mock function to get saved lessons - would typically be imported from helpers.js
function getSavedLessons() {
  return localStorage.getItem('savedLessons') ?
  JSON.parse(localStorage.getItem('savedLessons')) :
  [];
}