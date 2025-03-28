import { useTheme } from "./ThemeContext";

const DisneylandAdventure = () => {
  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '2rem',
      background: theme === 'light' 
        ? 'linear-gradient(to bottom, #00a8e8, #ffd700)' 
        : 'linear-gradient(to bottom, #4b0082, #ff69b4)',
      transition: 'all 0.5s ease',
      color: theme === 'light' ? '#333' : '#fff'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        textShadow: theme === 'light' 
          ? '2px 2px 4px rgba(0,0,0,0.2)' 
          : '2px 2px 4px rgba(255,255,255,0.2)'
      }}>
        Disneyland Adventure
      </h1>
      
      <p style={{
        fontSize: '1.5rem',
        maxWidth: '600px',
        marginBottom: '2rem'
      }}>
        {theme === 'light' 
          ? 'Experience the magic of daylight adventures!' 
          : 'Discover the enchantment of nighttime wonders!'}
      </p>
      
      <div style={{
        fontSize: '5rem',
        marginBottom: '2rem',
        transform: 'scale(1)',
        animation: 'pulse 2s infinite'
      }}>
        {theme === 'light' ? '🏰' : '✨'}
      </div>
    </div>
  );
};

export default DisneylandAdventure;