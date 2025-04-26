import { useNavigate } from 'react-router-dom';
import { FaCut, FaStar } from 'react-icons/fa';
import '../styles/Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  const reviews = [
    {
      id: 1,
      name: "Custom 1",
      avatar: "",
      rating: 5,
      date: "X days ago",
      text: "enter review here"
    },
    {
      id: 2,
      name: "Custom 2",
      avatar: "",
      rating: 5,
      date: "X days ago",
      text: "enter review here"
    },
    {
      id: 3,
      name: "Custom 3",
      avatar: "",
      rating: 5,
      date: "X days ago",
      text: "enter review here"
    },
  ];

  const ratingBars = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 }
  ];

  return (
    <div className="landing-container">
      <div className="landing-content">
        <FaCut className="landing-icon" />
        <h1 className="landing-title">
          Welcome to Galaxy of Salons
        </h1>
        <p className="landing-subtitle">
          Where Style Meets Elegance
        </p>
        
        <div className="button-container">
          <button
            onClick={() => navigate('/about')}
            className="landing-button primary-button"
          >
            About Us
          </button>
          
          <button
            onClick={() => navigate('/services')}
            className="landing-button primary-button"
          >
            Services
          </button>
          
          <button
            onClick={() => navigate('/login')}
            className="landing-button secondary-button"
          >
            Login
          </button>
        </div>

        <div className="hero-section">
          <img 
            src="images/salon.jpg"
            alt="Salon interior"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h2 className="hero-title">Title here</h2>
            <p className="hero-description">
             Slon description
            </p>
          </div>
        </div>

        <div className="reviews-section">
          <div className="reviews-header">
            <div className="rating-summary">
              <div className="rating-score">4.8</div>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="rating-count">Based on 128 reviews</div>
            </div>
            <div className="rating-bars">
              {ratingBars.map((bar) => (
                <div key={bar.stars} className="rating-bar">
                  <span className="rating-label">{bar.stars} stars</span>
                  <div className="rating-progress">
                    <div 
                      className="rating-fill" 
                      style={{ width: `${bar.percentage}%` }}
                    />
                  </div>
                  <span className="rating-percent">{bar.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="reviewer-avatar"
                  />
                  <div className="reviewer-info">
                    <div className="reviewer-name">{review.name}</div>
                    <div className="review-date">{review.date}</div>
                  </div>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing; 