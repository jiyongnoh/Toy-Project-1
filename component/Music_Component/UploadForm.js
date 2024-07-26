import { useState } from 'react';
import styled from 'styled-components';
import { handleDirectoryCreate } from '@/fetchAPI/directory';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

const UploadForm = ({ directories }) => {
  const [selectedDirectory, setSelectedDirectory] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDirectory) {
      alert('폴더 선택 ㄱㄱ');
      return;
    }

    if (!file) {
      alert('파일 선택 ㄱㄱ');
      return;
    }
    setIsPending(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result
        .replace('data:', '')
        .replace(/^.+,/, '');

      const formData = {
        trackName: file.name,
        mimeType: file.type,
        trackData: `data:${file.type};base64,${base64String}`,
        directoryId: selectedDirectory,
      };

      const response = await handleDirectoryCreate(formData);

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Upload Success!',
          text: 'Page Reload',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setIsPending(false);
          router.reload();
        });
      } else {
        console.error('Upload failed');
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="directory">Directory</Label>
          <select
            id="directory"
            value={selectedDirectory}
            onChange={(e) => setSelectedDirectory(e.target.value)}
          >
            <option value="">Select Directory</option>
            {directories.map((dir) => (
              <option key={dir.id} value={dir.id}>
                {dir.name}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="file">File</Label>
          <Input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </FormGroup>
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Uploading...' : 'Upload'}
        </Button>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  margin: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

export default UploadForm;
