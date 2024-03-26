/* eslint-disable react-hooks/exhaustive-deps */
import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../styled-component/common";
import Live2DViewerTest from "@/component/Live2DViewerTest";
import { useEffect, useState } from "react";
import { emotionAPI, handleClovaVoice, handleGptCompletion } from "@/fetchAPI";
import ChatBubble from "@/component/Chat_Component/ChatBubble";
import LoadingAnimation from "@/component/Chat_Component/LoadingAnimation";

// Test 페이지
export default function Test() {
  const [chat, setChat] = useState("");
  const [flagEnter, setFlagEnter] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [emotion, setEmotion] = useState("중립");
  const [messageArr, setMessageArr] = useState([]);

  const avartaPath = "/openAI/consulting_emotion_lala"; // 라라 API Path

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
        { messageArr: tmpMsgArr, pUid: "njy96" },
        avartaPath
      );

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

  // Sound 재생 이벤트 등록
  useEffect(() => {
    return () => {
      messageArr.length = 0;
    };
  }, []);

  // Chat 관련 처리
  useEffect(() => {
    if (!flagEnter) return; // 공백 Enter 체크

    sendMessage();
    setFlagEnter(false);
    setChat("");
  }, [flagEnter]);

  useEffect(() => {
    const chatBox = document.querySelector(".chat-box");
    const chatBoxBody = chatBox.querySelector(".chat-box-body");
    scrollToBottom(chatBoxBody);
  }, [isPending]);

  const start_ment = `정서 멘토 - 라라`;

  return (
    <MainContainer>
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
          <ChatBoxHeader>SOYES KIDS</ChatBoxHeader>
          <ChatBoxBody className="chat-box-body">
            <ChatBubble message={start_ment} />
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

          <Live2DViewerTest emotion={emotion} avarta="lala" />

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
              placeholder="고민을 말해줘!"
            />
            <ChatBoxFooterButton
              onClick={() => {
                if (chat !== "" && !isPending) setFlagEnter(true);
              }}
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

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
  background-color: #0084ff;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0073e6;
  }

  &:active {
    background-color: #005bbf;
  }
  display: flex;
  transition: 0.2s;
`;
