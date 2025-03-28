import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #1560bd; // Disney blue
    --secondary-color: #ffd700; // Disney gold
    --text-color: #333;
    --bg-color: #f8f8f8;
    --card-bg: #fff;
    --border-color: #e0e0e0;
    --header-bg: linear-gradient(to right, #1560bd, #00a8e8);
  }

  [data-theme="dark"] {
    --primary-color: #8b00ff; // Disney dark purple
    --secondary-color: #ff69b4; // Disney pink
    --text-color: #f0f0f0;
    --bg-color: #121212;
    --card-bg: #1e1e1e;
    --border-color: #333;
    --header-bg: linear-gradient(to right, #4b0082, #8b00ff);
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Arial', sans-serif;
    transition: all 0.3s ease;
  }

  .header {
    background: var(--header-bg);
    padding: 1rem;
    color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .theme-btn {
    background: var(--secondary-color);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.2s;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  /* Disneyland page-specific backgrounds */
  [data-page="home"] {
    background-image: url('https://example.com/disney-castle-bg.jpg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  }

  [data-theme="dark"][data-page="home"] {
    background-image: url('https://example.com/disney-castle-night-bg.jpg');
  }

  [data-page="attractions"] {
    background-color: var(--bg-color);
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    );
  }

  [data-theme="dark"][data-page="attractions"] {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    );
  }
`;