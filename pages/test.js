import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../styled-component/common";
import Live2DViewer from "@/component/Live2DViewer";
import { useEffect, useState } from "react";

const messageArr = [];

// Test 페이지
export default function Test() {
  const [chat, setChat] = useState("");
  const [flagEnter, setFlagEnter] = useState(false);

  const sendMessage = (chatBoxBody) => {
    const message = chat;
    messageArr.push({ role: "user", content: message }); // 내가 쓴 메세지 저장

    chatBoxBody.innerHTML += `<div class="message">${message}</div>`;
    chatBoxBody.innerHTML += `<div id="loading" class="response loading">.</div>`;
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

    // Chat Compleation Request
    try {
      fetch(`${process.env.NEXT_PUBLIC_URL}/openAI/consulting_emotion`, {
        method: "POST",
        headers: {
          accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageArr }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          messageArr.push({ role: "assistant", content: data.message }); // 상담사 응답 메세지 저장
          document.getElementById("loading").remove();
          chatBoxBody.innerHTML += `<div class="response">${data.message}</div>`;
          scrollToBottom(chatBoxBody);

          // console.log(messageArr);
        })
        .catch(() => {
          document.getElementById("loading").remove();
          chatBoxBody.innerHTML += `<div class="response">미안해 지금은 대화가 힘들어...조금 뒤에 다시 말해줄래?</div>`;
        });
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToBottom = (chatBoxBody) => {
    chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
  };

  useEffect(() => {
    if (!flagEnter) return;

    const chatBox = document.querySelector(".chat-box");
    const chatBoxBody = chatBox.querySelector(".chat-box-body");

    sendMessage(chatBoxBody);

    setFlagEnter(false);
    setChat("");
  }, [flagEnter]);

  return (
    <MainContainer>
      <FlexContainer justify="center" align="center" dir="col" height="100%">
        <div class="logo-container">
          <img src="/src/soyesKids_Logo.png" alt="soyes_logo" />
        </div>
        <div class="chat-box">
          <div class="chat-box-header">SOYES KIDS</div>
          <div class="chat-box-body">
            <div class="response">안녕? 나는 푸푸야! 같이 재밌게 놀자~</div>
          </div>
          <div class="chat-box-footer">
            <input
              value={chat}
              onChange={(e) => {
                setChat(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && chat !== "") setFlagEnter(true);
              }}
              type="text"
              placeholder="Ask a question..."
            />
            <button
              onClick={() => {
                if (chat !== "") setFlagEnter(true);
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
      <Live2DViewer />
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
  background-position: center;
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
