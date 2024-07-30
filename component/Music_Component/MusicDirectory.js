import { useState, useEffect } from 'react';
import styled from 'styled-components';
import UploadForm from './UploadForm'; // 새로운 업로드 폼 컴포넌트

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

  const handleUpload = (newTrack) => {
    setItems([...items, newTrack]);
  };

  return (
    <Container>
      <UploadForm
        directories={data.filter((item) => item.type === 'directory')}
        onUpload={handleUpload}
      />
      <List>
        {!isRoot && <BackButton onClick={handleBackClick}>Back</BackButton>}
        {items.map((item, index) => (
          <ListItem key={index}>
            <StyledLink onClick={() => handleItemClick(item)}>
              {item.name}
            </StyledLink>
          </ListItem>
        ))}
        {trackData.url && (
          <>
            <h2>{trackData.name}</h2>
            {/* <AudioPlayer key={audioKey} controls autoPlay>
              <source src={trackData.url} type="audio/mp3" />
            </AudioPlayer> */}
            <iframe src={trackData.url} />
          </>
        )}
      </List>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 1rem;
  border: 1px solid green;
`;

const ListItem = styled.li`
  margin: 5px 0;
  padding: 0.5rem;
  background-color: wheat;
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

export default MusicDirectory;
