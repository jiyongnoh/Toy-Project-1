/* eslint-disable react-hooks/exhaustive-deps */
import styled, { keyframes } from 'styled-components';
import { FlexContainer } from '@/styled-component/common';
import { useEffect, useState, useRef } from 'react';

import { handleTrainingMoodElla } from '@/fetchAPI/ellaTrainingAPI';

import FixBubble from '@/component/EllaTraning_Component/FixBubble';
import Image from 'next/image';
import LoadingAnimation from '@/component/Chat_Component/LoadingAnimation';
import { useRouter } from 'next/router';

// import { motion } from 'framer-motion';
import { ellaMood_Round_first } from '@/store/ellaGenerator';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Renewel Test 페이지
export default function Test() {
  const [isPending, setIsPending] = useState(false);
  const [next, setNext] = useState(false); // 유저 문항 선택 트리거
  const [select, setSelect] = useState('2'); // 유저 문항 선택지 1 || 2
  const [bottom, setBottom] = useState(false); // scrollToBottom 메서드 발동 트리거
  const [resultTrigger, setResultTrigger] = useState(false); // 결과 분석 요청 선택 트리거
  const [messageArr, setMessageArr] = useState([]);

  // Input 채팅 관련 State
  const [chat, setChat] = useState('');
  const [flagEnter, setFlagEnter] = useState(false);

  const [generatorData, setGeneratorData] = useState({});
  const [fixTrigger, setFixTrigger] = useState(false); // 제너레이터 반환값이 fix인 경우 발동될 트리거
  const [inputTrigger, setInputTrigger] = useState(false); // 제너레이터 반환값이 input인 경우 발동될 트리거
  const [gptTrigger, setGptTrigger] = useState(false); // 제너레이터 반환값이 gpt인 경우 발동될 트리거
  const [selectTrigger, setSelectTrigger] = useState(false); // 제너레이터 반환값이 select인 경우 발동될 트리거

  const router = useRouter();
  // 제너레이터는 리렌더링 시점에 초기화 => useRef를 통해 인스턴스 고정
  const moodSessionRef = useRef(null);
  const chatBoxBody = useRef(null); // scrollToBottom 컴포넌트 고정

  if (!moodSessionRef.current) moodSessionRef.current = ellaMood_Round_first();

  const scrollToBottom_useRef = () => {
    const ptBoxBody = chatBoxBody.current;
    if (ptBoxBody.scrollHeight > 800)
      window.scrollTo({
        top: ptBoxBody.scrollHeight, // 세로 스크롤 위치
        left: 0, // 가로 스크롤 위치
        behavior: 'smooth', // 스크롤 애니메이션 (옵션: 'auto' 또는 'smooth')
      });
    // if (chatBoxBody.current) {
    //   chatBoxBody.current.scrollTop = chatBoxBody.current.scrollHeight;
    // }
  };

  // gpt 호출 메서드
  const createGptText = async (gptData) => {
    const { code, gpt_input } = gptData;
    try {
      // 감정 분석 API 호출 이후 state 갱신
      const data = await handleTrainingMoodElla({
        pUid: localStorage.getItem('id'),
        messageArr,
        code,
        ...gpt_input,
      });

      setIsPending(false);
      setMessageArr([
        ...messageArr,
        {
          role: 'assistant',
          type: 'fix',
          fix_content: [
            {
              key: 'text',
              value: data.message,
            },
          ],
        },
      ]);
      setTimeout(() => {
        setNext(true);
      }, 1000);

      setBottom(true);
    } catch (error) {
      console.log(error);
    }
  };

  // 페이지 초기설정 - 성격검사 첫 문항 제시
  useEffect(() => {
    setTimeout(() => {
      const { value, done } = moodSessionRef.current.next();
      console.log(value);
      if (!done) {
        if (value.type === 'fix') {
          setGeneratorData({ ...value });
          setFixTrigger(true);
        }
      }
    }, 1000);
  }, []);

  // 심리 검사 다음 문항 진행
  useEffect(() => {
    if (next) {
      const { value, done } = moodSessionRef.current.next(chat);
      if (chat) setChat('');

      console.log(value);
      // 검사 문항 진행
      if (!done) {
        setNext(false);
        if (value.type === 'fix') {
          setGeneratorData({ ...value });
          setFixTrigger(true);
        }
        if (value.type === 'input') {
          setGeneratorData({ ...value });
          setInputTrigger(true);
        }
        if (value.type === 'gpt') {
          setGeneratorData({ ...value });
          setGptTrigger(true);
        }
      }
      // 검사 문항 종료 - 결과 및 AI 분석 요청
      else if (value) {
        // const { result, type } = value;
        // setIsPending(true);
        // setTimeout(() => {
        //   setMessageArr([
        //     ...messageArr,
        //     {
        //       role: 'assistant',
        //       content: result,
        //     },
        //   ]);
        //   setNext(false);
        //   setResultTrigger(true);
        //   setBottom(true);
        // }, 1500);
      } else return;

      setBottom(true);
    }
  }, [next]);

  // 고정 멘트
  useEffect(() => {
    if (fixTrigger) {
      setMessageArr([...messageArr, generatorData]);
      setFixTrigger(false);
      setTimeout(() => {
        setNext(true);
      }, 1000);
    }
    setBottom(true);
  }, [fixTrigger]);

  // 유저 입력 완료 시점 Rerendering.
  useEffect(() => {
    if (flagEnter) {
      setMessageArr([
        ...messageArr,
        {
          role: 'user',
          type: 'fix',
          fix_content: [
            {
              key: 'text',
              value: chat,
            },
          ],
        },
      ]);
      setInputTrigger(false);
      setFlagEnter(false);
      setTimeout(() => {
        setNext(true);
      }, 1000);
    }
    setBottom(true);
  }, [flagEnter]);

  useEffect(() => {
    if (gptTrigger) {
      setGptTrigger(false);
      setIsPending(true);
      createGptText(generatorData);
    }
  }, [gptTrigger]);

  // 스크롤 바텀
  useEffect(() => {
    if (bottom) {
      scrollToBottom_useRef();
      setBottom(false);
    }
  }, [bottom]);

  return (
    <MainContainer>
      <FlexContainer
        justify="center"
        align="center"
        dir="col"
        width="100%"
        height="100%"
        padding="0 1rem"
      >
        {/* <Image
          src="/src/soyesKids_Logo.png"
          alt={"soyes_logo"}
          width={529}
          height={93}
        /> */}
        <PTBox ref={chatBoxBody}>
          {/* <PTBoxHeader>성격 검사</PTBoxHeader> */}
          <PTBoxBody>
            {messageArr.map((el, index) => {
              if (el.type === 'fix') return <FixBubble fix_data={el} />;
              else return;
            })}
            {/* 로딩바 */}
            {isPending ? <LoadingAnimation /> : null}
          </PTBoxBody>
          <ChatBoxFooter>
            <ChatBoxFooterInput
              value={chat}
              onChange={(e) => {
                setChat(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && chat !== '' && !isPending) {
                  console.log(chat);
                  setFlagEnter(true);
                }
              }}
              // placeholder={placehold}
              inputTrigger={inputTrigger}
            />
            <ChatBoxFooterButton
              onClick={() => {
                if (chat !== '' && !isPending) {
                  console.log(chat);
                  setFlagEnter(true);
                }
              }}
              inputTrigger={inputTrigger}
            >
              <Image
                src="/src/Consult_IMG/Icon/Consult_Send_Icon_IMG.png"
                alt={'send_icon'}
                width={72}
                height={57}
              />
              {/* {isPending || isInitPending ? (
                <span class="material-symbols-outlined">block</span>
              ) : (
                <Image
                  src="/src/Consult_IMG/Icon/Consult_Send_Icon_IMG.png"
                  alt={'send_icon'}
                  width={72}
                  height={57}
                />
              )} */}
            </ChatBoxFooterButton>
          </ChatBoxFooter>
        </PTBox>
        <div class="codingnexus">
          <a>Created by SoyesKids</a>
        </div>
      </FlexContainer>
    </MainContainer>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['pt', 'nav'])),
    },
  };
}

// styled-component의 animation 설정 방법 (keyframes 메서드 사용)

const MainContainer = styled.div`
  /* background-image: url('/src/soyesKids_Background_image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  background-color: #fdf6ff;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

const PTBox = styled.div`
  /* background-image: ${(props) =>
    props.backgroundImgUrl ? `url(${props.backgroundImgUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  /* 화면 좁히기 가능 */
  width: 100vw;
  background: inherit;
  /* position: relative; */
  /* margin: 0 auto; */
  margin-top: 6rem;
  padding: 0 5rem;
  border-radius: 8px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */

  height: 100%;

  /* 채팅 중앙정렬 가능 */
  /* display: flex;
  justify-content: center;
  align-items: center; */

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    max-width: 37rem;
    padding: 0;
  }
`;

const PTBoxBody = styled.div`
  /* background-image: ${(props) =>
    props.backgroundImgUrl ? `url(${props.backgroundImgUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  width: 100vw;
  background: inherit;
  padding: 1rem;
  overflow-y: auto;
  min-height: 75vh;
  height: 100%;

  display: flex;
  flex-direction: column;
  width: auto;

  gap: 0.4rem;

  @media (max-width: 768px) {
    height: 86%;
    min-height: 70vh;
  }
`;

// const PTBoxBody = styled.div`
//   padding: 6px;
//   height: 91%;
//   overflow-y: auto;
//   /* height: calc(100% - 360px); */

//   display: flex;
//   flex-direction: column;
//   width: auto;
// `;

// const PTBoxFooter = styled.div`
//   bottom: 0;
//   display: flex;
//   align-items: center;
//   background-color: #ffffff;
//   border-top: 1px solid #e6e6e6;
//   padding: 8px 16px;
// `;

const ChatBoxFooter = styled.div`
  margin-top: 1rem;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 8px 16px;
`;

const ChatBoxFooterInput = styled.input`
  width: 100%;
  padding: 2rem;
  border: 1px solid #e6e6e6;
  border-radius: 3.5rem;
  font-size: 1.2rem;
  outline: none;
  pointer-events: ${(props) => (props.inputTrigger ? 'auto' : 'none')};
  background-color: ${(props) => (props.inputTrigger ? '#ffffff' : '#f0f0f0')};
  transition: background-color 0.3s ease;

  &::placeholder {
    color: #a9a9a9;
  }

  ${(props) => props.inputTrigger && `animation: blink 2s;`}

  @keyframes blink {
    0%,
    100% {
      background-color: #ffffff;
    }
    50% {
      background-color: #0084ff;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
  }
`;

const ChatBoxFooterButton = styled.button`
  background: inherit;
  margin-left: 8px;
  padding: 5px 12px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.inputTrigger ? 'pointer' : null)};

  &:hover {
    opacity: 0.7;
  }

  &:active {
    background-color: ${(props) => (props.inputTrigger ? '#B88CD5' : null)};
  }
  display: flex;
  transition: 0.2s;
`;

// const PTBoxFooterButton = styled.button`
//   margin-left: 8px;
//   padding: 5px 12px;
//   background-color: ${(props) => (props.isPending ? "#e5e5ea" : "#0084ff")};
//   color: #ffffff;
//   font-size: 16px;
//   font-weight: bold;
//   border: none;
//   border-radius: 8px;
//   cursor: ${(props) => (props.isPending ? "" : "pointer")};

//   &:hover {
//     background-color: ${(props) => (props.isPending ? "#e5e5ea" : "#0073e6")};
//   }

//   &:active {
//     background-color: ${(props) => (props.isPending ? "#e5e5ea" : "#0073e6")};
//   }
//   display: flex;
//   transition: 0.2s;
// `;
