import React, { useState } from 'react';

const Home = () => {
  const [saviours, setSaviours] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [nearestSaviour, setNearestSaviour] = useState(null); // Nearest saviour state

  // Function to simulate fetching saviours nearby
  const getNearbySaviours = (latitude, longitude) => {
    setLoading(true); // Start loading
    setTimeout(() => {
      // Simulate saviours based on location after a delay
      const mockSaviours = [
        { id: 1, name: 'Saurabh', distance: 100 },  // Distance in meters
        { id: 2, name: 'Rishiraj', distance: 200 },
        { id: 3, name: 'Gaurav', distance: 300 },
      ];
      setSaviours(mockSaviours);
      setNearestSaviour(mockSaviours[0]); // Assume the first saviour is the nearest one
      setLoading(false); // Stop loading
    }, 2000); // Simulate a 2-second delay for fetching saviours
  };

  // Function to get user's current location
  const handleSOSClick = () => {
    if (navigator.geolocation) {
      setLoading(true); // Start loading when SOS button is clicked
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Location:', latitude, longitude);

          // Fetch nearby saviours
          getNearbySaviours(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve your location.');
          setLoading(false); // Stop loading if error occurs
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  // CSS Styles
  const sosButtonStyle = {
    backgroundColor: '#ff4b5c',  // SOS Red
    color: 'white',
    fontSize: '24px',
    borderRadius: '50%',
    height: '150px',
    width: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  const saviourContainerStyle = {
    marginTop: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const activeStatusStyle = {
    color: 'green',
    fontWeight: 'bold',
  };

  const loadingStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  const loadingIconStyle = {
    fontSize: '40px',
    color: '#ff4b5c',
    marginBottom: '10px',
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* SOS Button */}
      <div style={{ textAlign: 'center', paddingLeft: '66.6px' }}>
        <button
          style={sosButtonStyle}
          onClick={handleSOSClick}
        >
          SOS
        </button>
      </div>

      {/* Display saviour count and nearest saviour if available */}
      {!loading && saviours.length > 0 && (
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <h2>Saviours</h2>
            <p className="stats-count">{saviours.length}</p> {/* Show saviour count */}
          </div>
          <div>
            <h2>Nearest</h2>
            <p className="stats-distance">{nearestSaviour ? `${nearestSaviour.distance} m` : 'N/A'}</p> {/* Show nearest saviour distance */}
          </div>
        </div>
      )}

      {/* Show loading spinner if loading */}
      {loading && (
        <div style={loadingStyle}>
          <i className="bi bi-geo-alt-fill" style={loadingIconStyle}></i>
          <p style={{ fontSize: '26px' }}>Finding nearby saviours...</p>
        </div>
      )}

      {/* Show nearby saviours only if loading is finished and saviours are available */}
      {!loading && saviours.length > 0 && (
        <div>
          <h3 style={{ fontWeight: 'bold', fontSize: '20px' }}>Nearby Saviours:</h3>
          {saviours.map((saviour) => (
            <div key={saviour.id} style={saviourContainerStyle}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="bi bi-person-circle" style={{ fontSize: '24px', marginRight: '10px' }}></i>
                <div>
                  <h3 style={{ fontWeight: 'bold' }}>{saviour.name}</h3>
                  <p>{saviour.distance} away</p>
                </div>
              </div>
              <span style={activeStatusStyle}>ACTIVE</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
