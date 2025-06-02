  // Firebase config 
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    // …the rest of your config…
  };
  
  // Initialize app & auth
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // DOM refs
  const regForm   = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  const mainPage  = document.getElementById('main-page');
  const logoutBtn = document.getElementById('logout-btn');
  
  // Sign up handler
  regForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('reg-email').value;
    const pass  = document.getElementById('reg-pass').value;
    auth.createUserWithEmailAndPassword(email, pass)
      .catch(err => alert(err.message));
  });
  
  //  Log in handler
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass  = document.getElementById('login-pass').value;
    auth.signInWithEmailAndPassword(email, pass)
      .catch(err => alert(err.message));
  });
  
  // Log out
  logoutBtn.addEventListener('click', () => auth.signOut());
  
  // Auth state listener: show/hide forms vs. main page
  auth.onAuthStateChanged(user => {
    if (user) {
      regForm.style.display   = 'none';
      loginForm.style.display = 'none';
      mainPage.style.display  = 'block';
    } else {
      regForm.style.display   = 'block';
      loginForm.style.display = 'block';
      mainPage.style.display  = 'none';
    }
  });
  