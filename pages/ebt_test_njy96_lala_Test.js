/* eslint-disable react-hooks/exhaustive-deps */
import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../styled-component/common";
import Live2DViewerTest from "@/component/Live2DViewerTest";
import { useEffect, useState } from "react";
import { emotionAPI, handleClovaVoice, handleGptCompletion } from "@/fetchAPI";
import ChatBubble from "@/component/ChatBubble";
import LoadingAnimation from "@/component/LoadingAnimation";

// Test 페이지
export default function Test() {
  const [chat, setChat] = useState("");
  const [flagEnter, setFlagEnter] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [emotion, setEmotion] = useState("중립");
  // const [noReqCnt, setNoReqCnt] = useState(0);
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

  // NO REQUEST 메서드
  const sendMessage_noRequest = async (chatBoxBody) => {
    messageArr.push({ role: "user", content: "NO REQUEST" }); // NO REQUEST 질문 임시 삽입
    chatBoxBody.innerHTML += `<div id="loading" class="response loading">.</div>`; // 로딩창 추가
    scrollToBottom(chatBoxBody);

    // 로딩 중 애니메이션
    window.dotsGoingUp = true;
    var dots = window.setInterval(() => {
      var wait = document.getElementById("loading");
      if (wait === null) return;
      else if (window.dotsGoingUp) wait.innerHTML += ".";
      else {
        wait.innerHTML = wait.innerHTML?.substring(1, wait.innerHTML.length);

        if (wait.innerHTML.length < 2) window.dotsGoingUp = true;
      }
      if (wait.innerHTML.length > 3) window.dotsGoingUp = false;
    }, 250);

    try {
      const data = await handleGptCompletion(
        { messageArr, pUid: "njy96" },
        avartaPath
      );

      // Audio URL 생성
      const audioURL = await handleClovaVoice(data.message);

      messageArr.pop(); // NO REQUEST 질문 삭제
      messageArr.push({ role: "assistant", content: data.message }); // 상담사 응답 메세지 저장
      document.getElementById("loading").remove(); // 로딩창 제거

      // 응답 채팅 생성
      const response = document.createElement("div");
      response.className = "response";
      response.textContent = data.message;

      // 사운드 버튼 생성
      const sound_button = document.createElement("button");
      sound_button.className = "sound";
      sound_button.textContent = "Play";
      sound_button.setAttribute("data-audio-url", audioURL); // 상위 이벤트 식별 속성

      // 응답 채팅에 사운드 버튼 할당
      response.appendChild(sound_button);

      chatBoxBody.appendChild(response); // AI 답변 채팅 추가
      //chatBoxBody.innerHTML += `<div class="response">${data.message}</div>`; // AI 답변 채팅 추가
      scrollToBottom(chatBoxBody);
    } catch (error) {
      console.log(error);
      document.getElementById("loading").remove();
      chatBoxBody.innerHTML += `<div class="response">미안해 지금은 대화가 힘들어...조금 뒤에 다시 말해줄래?</div>`;
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

  // NoReq 관련 처리
  // useEffect(() => {
  //   if (noReqCnt < 5) {
  //     const timer = setTimeout(() => {
  //       const chatBox = document.querySelector(".chat-box");
  //       const chatBoxBody = chatBox.querySelector(".chat-box-body");
  //       sendMessage_noRequest(chatBoxBody);
  //       setNoReqCnt(noReqCnt + 1);
  //     }, 15000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [chat, noReqCnt]);

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

  const start_ment = `Persona: 라라 (정서 멘토)
`;

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
        <div class="chat-box">
          <div class="chat-box-header">SOYES KIDS</div>
          <div class="chat-box-body">
            <ChatBubble message={start_ment} />
            {messageArr.map((el, index) => {
              return (
                <ChatBubble
                  key={index}
                  message={el.content}
                  role={el.role}
                  audioURL={el.audioURL}
                />
              );
            })}
            {/* 로딩화면 */}
            {isPending ? <LoadingAnimation /> : null}
          </div>

          <Live2DViewerTest emotion={emotion} avarta="lala" />

          <div class="chat-box-footer">
            <input
              value={chat}
              onChange={(e) => {
                setChat(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && chat !== "" && !isPending)
                  setFlagEnter(true);
              }}
              type="text"
              placeholder="Ask a question..."
            />
            <button
              onClick={() => {
                if (chat !== "" && !isPending) setFlagEnter(true);
              }}
            >
              Send
            </button>
          </div>
        </div>
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

const MyPageSpan = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  // 애니메이션 인스턴스는 문자열 리터럴과 동일하게 $ + {} 사용
  animation: ${FadeInSpan} 0.6s linear alternate;

  transition: 0.5s;
`;

const Live2DContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 36%;
`;
