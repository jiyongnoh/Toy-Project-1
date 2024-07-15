import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
// import { useRecoilState } from 'recoil';
// import { mobile } from '../../store/state';

const FixBubble = ({ fix_data }) => {
  const { role, fix_content } = fix_data;

  return (
    <PTestBubbleContainer>
      {role === 'assistant' && (
        <Image
          src="/src/Consult_IMG/Icon/Consult_Ella_Icon_IMG.png"
          alt={'avartar_icon'}
          width={45}
          height={45}
        />
      )}

      {role === 'assistant' ? (
        <AssistantBubbleContainer>
          <AvartarTitle>엘라</AvartarTitle>
          <StyledBubble role={role}>
            {fix_content.map((el) => {
              const { key, value } = el;
              if (key === 'img')
                return (
                  <ImgContanier>
                    <Image
                      src={value}
                      alt={'avartar_icon'}
                      width={400}
                      height={300}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </ImgContanier>
                );
              else if (key === 'text')
                return (
                  <TextContanier>
                    <MessageP>{value}</MessageP>
                  </TextContanier>
                );
              // Todo
              // else if (key === 'button') return;
              // else if (key === 'media') return;
            })}
          </StyledBubble>
        </AssistantBubbleContainer>
      ) : (
        <StyledBubble role={role}>
          <TextContanier>
            <MessageP>{fix_content[0].value}</MessageP>
          </TextContanier>

          {/* {fix_content.map((el) => {
            const { key, value } = el;
            return key === 'img' ? (
              <ImgContanier>
                <Image
                  src={value}
                  alt={'avartar_icon'}
                  width={400}
                  height={300}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </ImgContanier>
            ) : (
              <TextContanier>
                <MessageP>{value}</MessageP>
              </TextContanier>
            );
          })} */}
        </StyledBubble>
      )}
    </PTestBubbleContainer>
  );
};

// Styled Components
const PTestBubbleContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.role === 'user' ? 'right' : 'left')};
  gap: 0.3rem;

  @media (max-width: 768px) {
  }
`;

const StyledBubble = styled.div`
  max-width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  margin: 0.2rem 0.1rem;
  word-wrap: break-word;

  color: ${(props) => (props.role === 'assistant' ? 'black' : 'black')};
  background-color: ${(props) =>
    props.role === 'assistant' ? 'white' : 'yellow'};
  align-self: ${(props) => (props.role === 'user' ? 'flex-end' : 'flex-start')};

  p {
    margin: 0;
  }

  border: 3px solid #ececec;
  text-align: left;
  margin-left: ${(props) => (props.role === 'user' ? 'auto' : null)};
  white-space: pre-wrap;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`;

const AvartarTitle = styled.span`
  font-size: 1.2rem;
  margin-left: 0.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImgContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  /* flex-direction: ${(props) =>
    props.message.length < 30 ? 'row' : 'column'};
  justify-content: ${(props) =>
    props.message.length < 30 ? 'flex-start' : 'center'};
  align-items: ${(props) =>
    props.message.length < 30 ? 'center' : 'flex-start'}; */
`;

const TextContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const AssistantBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) =>
    props.role === 'user' ? 'flex-end' : 'flex-start'};
  gap: 0.3rem;

  @media (max-width: 768px) {
  }
`;

const MessageP = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: AppleSDGothicNeoM00;

  font-size: 1.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default FixBubble;
