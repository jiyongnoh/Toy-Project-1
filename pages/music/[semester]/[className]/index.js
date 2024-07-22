import { useRouter } from 'next/router';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import styled from 'styled-components';

export default function Class({ tracks }) {
  const router = useRouter();
  const { semester, className } = router.query;

  return (
    <MainContainer>
      <Title>{className}</Title>
      <List>
        {tracks.map((track, index) => (
          <ListItem key={index}>
            <Link href={`/music/${semester}/${className}/${track}`} passHref>
              <StyledLink>{track}</StyledLink>
            </Link>
          </ListItem>
        ))}
      </List>
      <BackButton onClick={() => router.back()}>상위 디렉토리로</BackButton>
    </MainContainer>
  );
}

export async function getStaticPaths() {
  const musicDir = path.join(process.cwd(), 'public/music');
  const semesters = fs.readdirSync(musicDir);

  let paths = [];
  semesters.forEach((semester) => {
    const classes = fs.readdirSync(path.join(musicDir, semester));
    classes.forEach((className) => {
      paths.push({ params: { semester, className } });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { semester, className } = params;
  const classDir = path.join(
    process.cwd(),
    `public/music/${semester}/${className}`
  );
  const tracks = fs.readdirSync(classDir);

  return { props: { tracks } };
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

const BackButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;
