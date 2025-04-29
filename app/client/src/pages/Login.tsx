import { useState } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const url = isLogin ? 'http://localhost:3000/api/login' : 'http://localhost:3000/api/register';
    const payload = isLogin
      ? { username, email, password }
      : { email, password, username: username, firstname: firstName, lastname: lastName, userType: 'client' }; // adjust fields as needed
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // This allows cookies/session to be sent
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        alert(data.message || 'Something went wrong');
        return;
      }
  
      console.log('✅ Success:', data);
      // Redirect to dashboard or homepage, etc.
      const userType = data.user.userType; // Assuming the response contains userType

      if(userType === 'Stylist') {
        navigate('/hairstylist-dashboard');
      } else {
        navigate('/client-dashboard');
      }
    } catch (err) {
      console.error('❌ Error:', err);
      alert('Server error, try again later');
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log('Google login clicked');
  };

  const handleAppleLogin = () => {
    // Handle Apple login
    console.log('Apple login clicked');
  };

  const handleGuestAccess = () => {
    // Handle guest access
    console.log('Guest access clicked');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">
            {isLogin ? 'Welcome Back!' : 'Join Our Salon Family'}
          </h2>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-input"
                required
              />
              </div>
            </div>
          )}

          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            {isLogin ? 'Sign in' : 'Sign up'}
          </button>
        </form>

        <div className="divider">
          <span className="divider-text">Or continue with</span>
        </div>

        <div className="social-buttons">
          <button onClick={handleGoogleLogin} className="social-button">
            <FaGoogle className="social-icon" style={{ color: '#ef4444' }} />
            Google
          </button>
          <button onClick={handleAppleLogin} className="social-button">
            <FaApple className="social-icon" style={{ color: '#1f2937' }} />
            Apple
          </button>
        </div>

        <button onClick={handleGuestAccess} className="guest-button">
          Continue as Guest
        </button>

        <button
          type="button"
          className="toggle-button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  );
};

export default Login; 
