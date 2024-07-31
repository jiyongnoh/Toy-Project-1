import { useState } from 'react';
import styled from 'styled-components';
import { handleDirectoryCreate } from '@/fetchAPI/directory';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

const UploadFormDir = ({ directories }) => {
  const [selectedDirectory, setSelectedDirectory] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [directoryName, setDirectoryName] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!directoryName) {
      alert('디렉토리명 입력 ㄱㄱ');
      return;
    }

    setIsPending(true);

    const formData = {
      type: 'directory',
      directoryId: selectedDirectory,
      directoryName,
    };

    const response = await handleDirectoryCreate(formData);

    if (response.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Directory Upload Success!',
        text: 'Page Reload',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setIsPending(false);
        router.reload();
      });
    } else {
      console.error('Directory Upload failed');
      alert('Directory Upload failed');
    }
  };

  return (
    <FormContainer>
      <h3>Directory Create Form</h3>
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
          <Label htmlFor="directoryName">Directory Name</Label>
          <Input
            value={directoryName}
            type="text"
            id="directoryName"
            onChange={(e) => setDirectoryName(e.target.value)}
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
  padding: 1rem;
  border: 1px solid green;

  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export default UploadFormDir;
