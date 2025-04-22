function ProtectedRoute({ children, requiredPermission, fallbackPath = '/' }) {
  const { Navigate, useLocation } = ReactRouterDOM;
  const location = useLocation();

  // Check if user has the required permission
  const hasAccess = hasPermission(requiredPermission);

  // If no permission, redirect to fallback path
  if (!hasAccess) {
    return <Navigate to={fallbackPath} state={{ from: location }} replace data-id="zfbegchsz" data-path="components/ProtectedRoute.js" />;
  }

  // If user has permission, render the route
  return children;
}

// Version with role-based checks
function RoleProtectedRoute({ children, requiredRole, fallbackPath = '/' }) {
  const { Navigate, useLocation } = ReactRouterDOM;
  const location = useLocation();

  // Check if user has the required role
  const hasAccess = hasRole(requiredRole);

  // If no access, redirect to fallback path
  if (!hasAccess) {
    return <Navigate to={fallbackPath} state={{ from: location }} replace data-id="tgsnhzsiv" data-path="components/ProtectedRoute.js" />;
  }

  // If user has access, render the route
  return children;
}