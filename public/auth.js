// — Handles register, login, logout, and redirecting on auth state —

auth.onAuthStateChanged(user => {
    // If on main.html and not logged in → back to login
    if (location.pathname.endsWith("main.html")) {
      if (!user) location.replace("index.html");
    }
    // If on index.html or register.html and *are* logged in → go to main
    else if (user) {
      location.replace("main.html");
    }
  });
  
  // Registration helper (called from register.html)
  function register(email, pass) {
    return auth.createUserWithEmailAndPassword(email, pass);
  }
  
  // Login helper (called from index.html)
  function login(email, pass) {
    return auth.signInWithEmailAndPassword(email, pass);
  }
  
  // Logout helper (called from main.html)
  function logout() {
    return auth.signOut();
  }
  