/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { log } from '@/store/state';

import {
  handleClovaVoice,
  handleGptCompletion,
  handleConsultLogSave,
} from '@/fetchAPI';

import ChatBubble from '@/component/Chat_Component/ChatBubble';
import InitChatBubble from '@/component/Chat_Component/InitChatBubble';
import LoadingAnimation from '@/component/Chat_Component/LoadingAnimation';
import Swal from 'sweetalert2';

// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const avartaAI_info = {
  pupu: {
    name: 'pupu',
    path: '/openAI/consulting_emotion_pupu',
    headerTitle: '공감친구 푸푸',
    placehold: '나는 공감친구 푸푸야. 같이 놀자!',
    iconUrl: '/src/Consult_IMG/Icon/Consult_Pupu_Icon_IMG.png',
    backgroundImgUrl:
      '/src/Consult_IMG/Background/Consult_Pupu_Background_IMG.png',
    backColor: '#FEFFF6',
  },
  // ubi: {
  //   name: 'ubi',
  //   path: '/openAI/consulting_emotion_ubi',
  //   headerTitle: '게임친구 우비',
  //   placehold: '나는 게임친구 우비야. 같이 놀자!',
  //   iconUrl: '/src/Consult_IMG/Icon/Consult_Ubi_Icon_IMG.png',
  //   backgroundImgUrl:
  //     '/src/Consult_IMG/Background/Consult_Ubi_Background_IMG.png',
  //   backColor: '#F6FFF9',
  // },
  // lala: {
  //   name: 'lala',
  //   path: '/openAI/consulting_emotion_lala',
  //   headerTitle: '정서멘토 엘라',
  //   placehold: '나는 정서멘토 엘라야. 우리 얘기하자!',
  //   iconUrl: '/src/Consult_IMG/Icon/Consult_Ella_Icon_IMG.png',
  //   backgroundImgUrl:
  //     '/src/Consult_IMG/Background/Consult_Ella_Background_IMG.png',
  //   backColor: '#FFF6F9',
  // },
  // soyes: {
  //   name: 'soyes',
  //   path: '/openAI/consulting_emotion_soyes',
  //   headerTitle: '심리상담 소예',
  //   placehold: '나는 소예라고해!. 네 고민을 말해줘!',
  //   iconUrl: '/src/Consult_IMG/Icon/Consult_Soyes_Icon_IMG.png',
  //   backgroundImgUrl:
  //     '/src/Consult_IMG/Background/Consult_Soyes_Background_IMG.png',
  //   backColor: '#FDF6FF',
  // },
  // // 북극이는 임시로 소예로 보내기
  // north: {
  //   name: 'soyes',
  //   path: '/openAI/consulting_emotion_soyes',
  //   headerTitle: '심리상담 소예',
  //   placehold: '나는 소예라고해!. 네 고민을 말해줘!',
  //   iconUrl: '/src/Consult_IMG/Icon/Consult_Soyes_Icon_IMG.png',
  //   backgroundImgUrl:
  //     '/src/Consult_IMG/Background/Consult_Soyes_Background_IMG.png',
  //   backColor: '#FDF6FF',
  // },
  // default: {
  //   name: 'lala',
  //   path: '/openAI/consulting_emotion_lala',
  //   headerTitle: '정서멘토 엘라',
  //   placehold: '나는 정서멘토 엘라야. 우리 얘기하자!',
  //   iconUrl: '/src/Consult_IMG/Icon/Consult_Ella_Icon_IMG.png',
  //   backgroundImgUrl:
  //     '/src/Consult_IMG/Background/Consult_Ella_Background_IMG.png',
  //   backColor: '#FFF6F9',
  // },
};
const unMount_api_info = {
  consultLog: {
    path: '/openAI/consulting_emotion_log',
  },
  clearCookie: {
    path: '/openAI/clear_cookies',
  },
};

// 푸푸 상담 페이지
export default function Test() {
  const [chat, setChat] = useState('');
  const [flagEnter, setFlagEnter] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isInitPending, setIsInitPending] = useState(true);
  // const [emotion, setEmotion] = useState('중립');
  const [messageArr, setMessageArr] = useState([]);
  const [initArr, setInitArr] = useState([]);
  const [testType, setTestType] = useState(''); // 상담 주제 6종
  const [gameType, setGameType] = useState(''); // 게임 3종
  // 전역 변수
  const [login, setLogin] = useRecoilState(log);
  // chatBoxRef
  const router = useRouter();
  const chatBoxRef = useRef(null); // Reference for the chat container

  const {
    name,
    path,
    backColor,
    backgroundImgUrl,
    iconUrl,
    headerTitle,
    placehold,
  } = avartaAI_info['pupu'];

  // 언마운트 시점에 사용할 messageArr 변수값 유지
  const latestMessageArr = useRef(messageArr);
  latestMessageArr.current = messageArr;

  const sendMessage = async () => {
    const message = chat;
    try {
      messageArr.push({ role: 'user', content: message }); // 내 채팅 추가.
      setIsPending(true); // 로딩 on

      // messageArr 깊은 복사 후 audioURL, media 속성 삭제
      const tmpMsgArr = [
        ...JSON.parse(JSON.stringify(initArr)),
        ...JSON.parse(JSON.stringify(messageArr)),
      ];
      tmpMsgArr.forEach((el) => {
        delete el.audioURL;
        delete el.media;
        delete el.btn;
      });

      const data = await handleGptCompletion(
        {
          messageArr: tmpMsgArr,
          pUid: localStorage.getItem('id'),
          type: testType,
          game: gameType,
        },
        path
      );

      // 로그인 권한 만료
      if (data.status === 401) {
        Swal.fire({
          icon: 'warning',
          title: 'Login Session Expired!',
          text: 'Login Page로 이동합니다',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          setLogin(false);
          localStorage.removeItem('log');
          localStorage.removeItem('id');
          localStorage.removeItem('avarta');
          router.push('/login');
        });
        return;
      }
      // Audio URL 생성 (임시로 막아둠)
      // const audioURL = '';
      const audioURL = await handleClovaVoice(data.message);
      // const media = data.message.match(/추천/) !== null; // main
      // const media = messageArr.length; // test
      // const candle = data.message.match(/촛불/) !== null;
      // const breath = data.message.match(/호흡/) !== null;

      setIsPending(false); // 로딩 off
      setMessageArr([
        ...messageArr,
        {
          role: 'assistant',
          content: data.message,
          audioURL,
          // media: media
          //   ? candle
          //     ? mediVideo['candle']
          //     : mediVideo['breath']
          //   : null,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  const scrollToBottom = () => {
    const chatBoxBody = chatBoxRef.current;
    if (chatBoxBody.scrollHeight > 900)
      window.scrollTo({
        top: chatBoxBody.scrollHeight - 1000, // 세로 스크롤 위치
        left: 0, // 가로 스크롤 위치
        behavior: 'smooth', // 스크롤 애니메이션 (옵션: 'auto' 또는 'smooth')
      });
  };

  // 상담 페이지 초기 설정
  useEffect(() => {
    // 푸푸 상담멘트 초기화
    setTimeout(() => {
      setInitArr([
        {
          role: 'assistant',
          content: placehold,
        },
      ]);
    }, 500);
    setIsInitPending(false);

    setMessageArr([]);
    setInitArr([]);

    return () => {
      // 로그인 세션이 존재할 경우 - 상담 내역 저장
      const loginSession = JSON.parse(localStorage.getItem('log'));
      if (loginSession) {
        // audioURL 제거
        const tmpMsgArr = [
          ...JSON.parse(JSON.stringify(latestMessageArr.current)),
        ];
        tmpMsgArr.forEach((el) => delete el.audioURL);
        // 상담 내역 저장 API 호출
        handleConsultLogSave(
          {
            messageArr: tmpMsgArr,
            avarta: name,
            pUid: localStorage.getItem('id'),
          },
          unMount_api_info.consultLog.path
        );
      }
    };
  }, []);

  // 로그인 권한이 없는 상태에서의 접근 시 login 페이지로 redirect
  useEffect(() => {
    const loginSession = JSON.parse(localStorage.getItem('log'));
    if (!loginSession) {
      router.replace('/login');
    }
  }, [login]);

  // Chat 관련 처리
  useEffect(() => {
    if (!flagEnter) return; // 공백 Enter 체크

    sendMessage();
    setFlagEnter(false);
    setChat('');
  }, [flagEnter]);

  useEffect(() => {
    scrollToBottom();
  }, [isPending]);

  return (
    <MainContainer className="main-container" backColor={backColor}>
      <ChatBox
        className="chat-box"
        ref={chatBoxRef}
        backgroundImgUrl={backgroundImgUrl}
      >
        <ChatBoxBody className="chat-box-body">
          {/* 푸푸 시작 멘트 */}
          {initArr.map((el, index) => (
            <InitChatBubble
              key={index}
              message={el.content}
              role={el.role}
              iconUrl={iconUrl}
              headerTitle={headerTitle}
              btn={el.btn}
              testType={testType}
              setTestType={setTestType}
              gameType={gameType}
              setGameType={setGameType}
              avarta={'pupu'}
            />
          ))}
          {/* 푸푸 상담 내용 */}
          {messageArr.map((el, index) => (
            <ChatBubble
              key={index}
              lastKey={index === messageArr.length - 1}
              message={el.content}
              role={el.role}
              iconUrl={iconUrl}
              headerTitle={headerTitle}
              audioURL={el.audioURL}
              // media={
              //   el.media
              //     ? {
              //         videoInfo: el.media,
              //         modalIsOpen,
              //         closeModal: () => {
              //           setModalIsOpen(false);
              //         },
              //         openModal: () => {
              //           setModalIsOpen(true);
              //         },
              //       }
              //     : null
              // }
            />
          ))}
          {/* 로딩바 */}
          {isPending ? <LoadingAnimation /> : null}
        </ChatBoxBody>
        <ChatBoxFooter>
          <ChatBoxFooterInput
            value={chat}
            onChange={(e) => {
              setChat(e.target.value);
            }}
            onKeyPress={(e) => {
              if (
                e.key === 'Enter' &&
                chat !== '' &&
                !isPending &&
                !isInitPending
              )
                setFlagEnter(true);
            }}
            // placeholder={placehold}
            isPending={isPending}
            isInitPending={isInitPending}
          />
          <ChatBoxFooterButton
            onClick={() => {
              if (chat !== '' && !isPending && !isInitPending)
                setFlagEnter(true);
            }}
            isPending={isPending || isInitPending}
          >
            <Image
              src="/src/Consult_IMG/Icon/Consult_Send_Icon_IMG.png"
              alt={'send_icon'}
              width={72}
              height={57}
            />
          </ChatBoxFooterButton>
        </ChatBoxFooter>
      </ChatBox>
    </MainContainer>
  );
}

// 다국어 지원 관련 getStaticProps 처리
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['consult', 'nav'])),
    },
  };
}

// styled-component의 animation 설정 방법 (keyframes 메서드 사용)
const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  background-image: url('/src/Consult_IMG/background_pupu.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

const ChatBox = styled.div`
  width: 70%;
  min-height: 100vh;
  height: 100%;
  padding: 8rem 5rem;

  background-image: url('/src/NorthDiary_IMG/content_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    max-width: 37rem;
    padding: 0;
  }
`;

// const ChatBoxHeader = styled.div`
//   background-color: #0084ff;
//   color: #ffffff;
//   padding: 16px;
//   font-size: 20px;
//   font-weight: bold;
//   border-top-left-radius: 8px;
//   border-top-right-radius: 8px;
// `;

const ChatBoxBody = styled.div`
  /* background-image: ${(props) =>
    props.backgroundImgUrl ? `url(${props.backgroundImgUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  width: 100vw;

  padding: 1rem;
  overflow-y: auto;
  min-height: 75vh;
  height: 100%;

  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 768px) {
    height: 86%;
    min-height: 70vh;
  }
`;

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
  pointer-events: ${(props) =>
    props.isPending || props.isInitPending ? 'none' : 'auto'};
  background-color: ${(props) =>
    props.isPending || props.isInitPending ? '#f0f0f0' : '#ffffff'};
  transition: background-color 0.3s ease;

  &::placeholder {
    color: #a9a9a9;
  }

  ${(props) => props.isInitPending === false && `animation: blink 2s;`}

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
  cursor: ${(props) => (props.isPending ? '' : 'pointer')};

  &:hover {
    opacity: 0.7;
  }

  &:active {
    background-color: ${(props) => (props.isPending ? '#e5e5ea' : '#B88CD5')};
  }
  display: flex;
  transition: 0.2s;
`;
