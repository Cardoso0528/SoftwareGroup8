import { useState } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { email, password, name });
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
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required
              />
            </div>
          )}
          
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