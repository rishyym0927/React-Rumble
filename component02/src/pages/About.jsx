import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function About() {
  return (
    <Container>
      <h1>About Us</h1>
    </Container>
  );
}

export default About;
