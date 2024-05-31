import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.size > MAX_FILE_SIZE) {
      alert('파일 크기가 너무 큽니다. 50MB 이하의 파일을 선택해주세요.');
      return;
    }
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Data = reader.result.split(',')[1];

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/openAI/upload`,
          {
            name: file.name,
            mimeType: file.type,
            data: base64Data,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        console.log('업로드 성공:', response.data);
        setImageUrl(response.data.imageUrl); // 서버에서 반환된 이미지 URL 설정
      } catch (error) {
        console.error('업로드 실패:', error);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <BackgroundImage>
      <UploadContainer>
        <h1>파일 업로드</h1>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>업로드</button>
        {imageUrl && <img src={imageUrl} alt="업로드된 이미지" width={500} />}
      </UploadContainer>
    </BackgroundImage>
  );
};

const BackgroundImage = styled.div`
  background-image: url('/src/soyesKids_Background_image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export default UploadPage;
