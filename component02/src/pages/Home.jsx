import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  console.log('Rendering Home Page'); // Debugging log

  return (
    <Container>
      <h1>Welcome to the Home Page</h1>
    </Container>
  );
}

export default Home;
