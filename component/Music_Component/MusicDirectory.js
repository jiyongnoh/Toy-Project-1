import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
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
  margin-top: 20px;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  margin-top: 20px;
`;

const MusicDirectory = ({ data }) => {
  const [path, setPath] = useState([null]); // root path with null
  const [items, setItems] = useState([]);
  const [isRoot, setIsRoot] = useState(true);
  const [trackData, setTrackData] = useState({});
  const [audioKey, setAudioKey] = useState(0); // unique key for AudioPlayer

  useEffect(() => {
    const currentParentId = path[path.length - 1];
    const currentItems = data.filter(
      (item) => item.parent_id === currentParentId
    );
    setItems(currentItems);
    setIsRoot(path.length === 1);
  }, [path, data]);

  const handleItemClick = (item) => {
    if (item.type === 'directory') {
      setPath([...path, item.id]);
    } else {
      setTrackData(item);
      setAudioKey((prevKey) => prevKey + 1); // change key to re-render AudioPlayer
      console.log(`Playing URL: ${item.url}`);
    }
  };

  const handleBackClick = () => {
    setPath(path.slice(0, -1));
    setTrackData({});
  };

  return (
    <Container>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <StyledLink onClick={() => handleItemClick(item)}>
              {item.name}
            </StyledLink>
          </ListItem>
        ))}
      </List>
      {trackData.url && (
        <>
          <h2>{trackData.name}</h2>
          <AudioPlayer key={audioKey} controls autoPlay>
            <source src={trackData.url} type="audio/mp3" />
          </AudioPlayer>
        </>
      )}
      {!isRoot && (
        <BackButton onClick={handleBackClick}>상위 디렉토리로</BackButton>
      )}
    </Container>
  );
};

export default MusicDirectory;
