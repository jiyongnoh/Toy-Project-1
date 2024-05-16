/* eslint-disable react-hooks/exhaustive-deps */
import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../styled-component/common";
import Live2DViewerTest from "@/component/Live2D_Component/Live2DViewerTest";
import { useEffect, useState, useRef } from "react";
import {
  emotionAPI,
  handleClovaVoice,
  handleGptCompletion,
  handleClearCookies,
  handleConsultLogSave,
} from "@/fetchAPI";
import ChatBubble from "@/component/Chat_Component/ChatBubble";
import LoadingAnimation from "@/component/Chat_Component/LoadingAnimation";
// 아바타 관련 전역 변수
import { useRecoilState } from "recoil";
import { log, avarta } from "../store/state";
import CharacterSelector from "@/component/CharacterSelector";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const avartaAI_info = {
  pupu: {
    name: "pupu",
    path: "/openAI/consulting_emotion_pupu",
    headerTitle: "공감친구 - 푸푸",
    placehold: "나는 공감친구 푸푸야. 같이 놀자!",
  },
  ubi: {
    name: "ubi",
    path: "/openAI/consulting_emotion_ubi",
    headerTitle: "학습친구 - 우비",
    placehold: "나는 학습친구 우비야. 같이 공부하자!",
  },
  lala: {
    name: "lala",
    path: "/openAI/consulting_emotion_lala",
    headerTitle: "정서멘토 - 엘라",
    placehold: "나는 정서멘토 엘라야. 우리 얘기하자!",
  },
  soyes: {
    name: "soyes",
    path: "/openAI/consulting_emotion_soyes",
    headerTitle: "전문상담사 - 소예",
    placehold: "나는 소예라고해!. 네 고민을 말해줘!",
  },
  default: {
    name: "lala",
    path: "/openAI/consulting_emotion_lala",
    headerTitle: "정서멘토 - 엘라",
    placehold: "나는 정서멘토 엘라야. 우리 얘기하자!",
  },
};
const unMount_api_info = {
  consultLog: {
    path: "/openAI/consulting_emotion_log",
  },
  clearCookie: {
    path: "/openAI/clear_cookies",
  },
};

// Renewel Test 페이지
export default function Test() {
  const [chat, setChat] = useState("");
  const [flagEnter, setFlagEnter] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [emotion, setEmotion] = useState("중립");
  const [messageArr, setMessageArr] = useState([]);
  const [login, setLogin] = useRecoilState(log);
  const [avartaAI, setAvartaAI] = useRecoilState(avarta);
  const { name, path, headerTitle, placehold } = avartaAI_info[avartaAI];

  const router = useRouter();

  // 언마운트 시점에 사용할 messageArr 변수값 유지
  const latestMessageArr = useRef(messageArr);
  latestMessageArr.current = messageArr;
  const testType = "School";

  const sendMessage = async () => {
    const message = chat;
    try {
      messageArr.push({ role: "user", content: message }); // 내 채팅 추가.
      setIsPending(true); // 로딩 on
      // 감정 분석 API 호출 이후 state 갱신
      const res = await emotionAPI([{ role: "user", content: message }]);
      setEmotion(res);

      // Chat Compleation Request

      // messageArr 깊은 복사 후 audioURL 속성 삭제
      const tmpMsgArr = [...JSON.parse(JSON.stringify(messageArr))];
      tmpMsgArr.forEach((el) => delete el.audioURL);

      const data = await handleGptCompletion(
        {
          messageArr: tmpMsgArr,
          pUid: localStorage.getItem("id") || "dummy",
          type: testType,
        },
        path
      );

      // 로그인 권한 만료
      if (data.status === 401) {
        Swal.fire({
          icon: "warning",
          title: "Login Session Expired!",
          text: "Login Page로 이동합니다",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          setLogin(false);
          localStorage.removeItem("log");
          localStorage.removeItem("id");
          localStorage.removeItem("avarta");
          router.push("/login");
        });
        return;
      }
      // Audio URL 생성
      const audioURL = await handleClovaVoice(data.message);

      setIsPending(false); // 로딩 off
      setMessageArr([
        ...messageArr,
        { role: "assistant", content: data.message, audioURL },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToBottom = (chatBoxBody) => {
    chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
  };

  // messageArr 언마운트 처리
  useEffect(() => {
    return () => {
      // 로그인 세션이 존재할 경우 - 상담 내역 저장
      const loginSession = JSON.parse(localStorage.getItem("log"));
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
            pUid: localStorage.getItem("id"),
          },
          unMount_api_info.consultLog.path
        );
      }

      // Cookies Clear (session ID 초기화)
      // handleClearCookies(unMount_api_info.clearCookie.path);

      // 상담 내역 초기화 => 언마운트 시점에 자동으로 진행되기에 주석처리
      // setMessageArr([]);
      // messageArr.length = 0;
    };
  }, []);

  // 로그인 권한이 없는 상태에서의 접근 시 login 페이지로 redirect
  useEffect(() => {
    const loginSession = JSON.parse(localStorage.getItem("log"));
    if (!loginSession) {
      router.replace("/login");
    }
  }, [login]);

  // messageArr 언마운트 처리. avartaAI
  useEffect(() => {
    setMessageArr([]);
  }, [avartaAI]);

  // Chat 관련 처리
  useEffect(() => {
    if (!flagEnter) return; // 공백 Enter 체크

    sendMessage();
    setFlagEnter(false);
    setChat("");
  }, [flagEnter]);

  // 스크롤 바텀 효과. 채팅 시 발동
  useEffect(() => {
    const chatBox = document.querySelector(".chat-box");
    const chatBoxBody = chatBox.querySelector(".chat-box-body");
    scrollToBottom(chatBoxBody);
  }, [isPending]);

  return (
    <MainContainer>
      <CharacterSelector isPending={isPending} />
      <FlexContainer
        justify="center"
        align="center"
        dir="col"
        width="100vw"
        height="100%"
      >
        <div class="logo-container">
          <img src="src/soyesKids_Logo.png" alt="soyes_logo" />
        </div>
        <ChatBox className="chat-box">
          <ChatBoxHeader>{headerTitle}</ChatBoxHeader>
          <ChatBoxBody className="chat-box-body">
            <ChatBubble message={headerTitle} role="assistant" />
            {messageArr.map((el, index) => (
              <ChatBubble
                key={index}
                message={el.content}
                role={el.role}
                audioURL={el.audioURL}
              />
            ))}
            {/* 로딩바 */}
            {isPending ? <LoadingAnimation /> : null}
          </ChatBoxBody>

          <Live2DViewerTest emotion={emotion} avarta={name} />
          <ChatBoxFooter>
            <ChatBoxFooterInput
              value={chat}
              onChange={(e) => {
                setChat(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && chat !== "" && !isPending)
                  setFlagEnter(true);
              }}
              placeholder={placehold}
            />
            <ChatBoxFooterButton
              onClick={() => {
                if (chat !== "" && !isPending) setFlagEnter(true);
              }}
              isPending={isPending}
            >
              {isPending ? (
                <span class="material-symbols-outlined">block</span>
              ) : (
                <span class="material-symbols-outlined">send</span>
              )}
            </ChatBoxFooterButton>
          </ChatBoxFooter>
        </ChatBox>

        <div class="codingnexus">
          <a>Created by SoyesKids</a>
        </div>
      </FlexContainer>
    </MainContainer>
  );
}

// styled-component의 animation 설정 방법 (keyframes 메서드 사용)
const FadeInSpan = keyframes`
  0% {
    opacity: 0;
    font-size: 1rem;
  }
  100% {
    opacity: 1;
    font-size: 3rem;
  }
`;

const MainContainer = styled.div`
  background-image: url("/src/soyesKids_Background_image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    overflow: hidden;
  }

  position: relative;
`;

const ChatBox = styled.div`
  position: relative;
  margin: 0 auto;
  width: 600px;
  max-width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: calc(100vh - 150px);
  height: calc(100vh - 150px);

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const ChatBoxHeader = styled.div`
  background-color: #0084ff;
  color: #ffffff;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ChatBoxBody = styled.div`
  padding: 16px;
  overflow-y: auto;
  height: calc(100% - 360px);
  display: flex;
  flex-direction: column;
  width: auto;
`;

const ChatBoxFooter = styled.div`
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #e6e6e6;
  padding: 8px 16px;
`;

const ChatBoxFooterInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
`;

const ChatBoxFooterButton = styled.button`
  margin-left: 8px;
  padding: 5px 12px;
  background-color: ${(props) => (props.isPending ? "#e5e5ea" : "#0084ff")};
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.isPending ? "" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.isPending ? "#e5e5ea" : "#0073e6")};
  }

  &:active {
    background-color: ${(props) => (props.isPending ? "#e5e5ea" : "#0073e6")};
  }
  display: flex;
  transition: 0.2s;
`;
