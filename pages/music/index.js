import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import styled from 'styled-components';

export default function MusicHome({ semesters }) {
  return (
    <MainContainer>
      <Title>수업 음원 듣기</Title>
      <List>
        {semesters.map((semester, index) => (
          <ListItem key={index}>
            <Link href={`/music/${semester}`} passHref>
              <StyledLink>{semester}</StyledLink>
            </Link>
          </ListItem>
        ))}
      </List>
    </MainContainer>
  );
}

export async function getStaticProps() {
  const musicDir = path.join(process.cwd(), 'public/music');
  const semesters = fs.readdirSync(musicDir);

  return { props: { semesters } };
}

const MainContainer = styled.div`
  padding-top: 5rem;
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;

  @media (max-width: 768px) {
    background-image: url('/src/Background_IMG/Mobile/mobile_background_2.png');
    justify-content: center;
  }
`;

const Title = styled.h1`
  background-color: #4caf50;
  color: white;
  padding: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 5px 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #4caf50;
  cursor: pointer;
`;
