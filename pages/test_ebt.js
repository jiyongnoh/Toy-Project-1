/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../styled-component/common";
import { useEffect, useState, useRef } from "react";

import { handleEbtAnalsys } from "@/fetchAPI/testAPI";

import EBTestBubble from "@/component/Test_Component/EBTestBubble";
import EBTClassSelector from "@/component/Test_Component/EBTClassSelector";
import LoadingAnimation from "@/component/Chat_Component/LoadingAnimation";

import { useRouter } from "next/router";

import { motion } from "framer-motion";
import {
  ebtSchool,
  ebtFriend,
  ebtFamily,
  ebtMood,
} from "@/store/testGenerator";

const ebtClassMap = {
  School: {
    type: "School",
    name: "학교생활",
    generator: ebtSchool,
  },
  Friend: {
    type: "Friend",
    name: "친구관계",
    generator: ebtFriend,
  },
  Family: {
    type: "Family",
    name: "가족관계",
    generator: ebtFamily,
  },
  Mood: {
    type: "Mood",
    name: "기분",
    generator: ebtMood,
  },
};

// Renewel Test 페이지
export default function Test() {
  const [isPending, setIsPending] = useState(false);
  const [next, setNext] = useState(false); // 유저 문항 선택 트리거
  const [select, setSelect] = useState(-1); // 유저 문항 선택지 1 || 2
  const [bottom, setBottom] = useState(false); // scrollToBottom 메서드 발동 트리거
  const [isProceeding, setIsProceeding] = useState(false);
  const [scoreArr, setScoreArr] = useState([]);
  const [resultTrigger, setResultTrigger] = useState(false); // 결과 분석 요청 선택 트리거
  const [messageArr, setMessageArr] = useState([]);

  const router = useRouter();
  // 제너레이터는 리렌더링 시점에 초기화 => useRef를 통해 인스턴스 고정
  const ebtSessionRef = useRef(null);
  const chatBoxBody = useRef(null); // scrollToBottom 컴포넌트 고정

  const scrollToBottom_useRef = (chatBoxBody) => {
    if (chatBoxBody.current) {
      chatBoxBody.current.scrollTop = chatBoxBody.current.scrollHeight;
    }
  };

  // EBT 분석 요청 API 호출 메서드
  const requetAnalysis = async () => {
    try {
      // messageArr 파싱
      let parseMessageArr = messageArr
        .filter((el, index) => index !== 0)
        .map((el, index) => {
          // user인 경우
          if (el.role === "user") {
            return {
              role: el.role,
              content:
                el.content[el.score.indexOf(scoreArr[Math.floor(index / 2)])], // 선택한 점수의 index와 일치하는 답변 선택
            };
          }
          // assistant인 경우
          else return { role: el.role, content: el.content };
        });
      // 감정 분석 API 호출 이후 state 갱신
      const data = await handleEbtAnalsys({
        messageArr: parseMessageArr,
        type: ebtClassMap[localStorage.getItem("EBTClass") || "School"].type,
        score: scoreArr,
        pUid: localStorage.getItem("id") || "dummy",
      });

      setIsPending(false);
      setMessageArr([
        ...messageArr,
        { role: "assistant", content: data.message },
        // { role: "end", content: "다음 검사 진행하기" },
      ]);
      setIsProceeding(false);
      setResultTrigger(false);
      setBottom(true);
    } catch (error) {
      console.log(error);
    }
  };
  // 페이지 초기설정 - EBT 첫 문항 제시
  useEffect(() => {
    // 정서행동 검사 제너레이터 생성
    ebtSessionRef.current =
      ebtClassMap[localStorage.getItem("EBTClass") || "School"].generator();

    setTimeout(() => {
      const { value, done } = ebtSessionRef.current.next(select);
      if (!done) {
        const start_message = {
          role: "assistant",
          content: `정서행동 검사 - [${
            ebtClassMap[localStorage.getItem("EBTClass") || "School"].name
          }] 시작합니다!`,
        };
        const question_message = {
          role: "assistant",
          content: value.question.content,
          imgURL: value.question.imgURL,
        };
        const selection_message = {
          role: "user",
          content: value.selection.content,
          score: value.selection.score,
          imgURL: value.selection.imgURL,
        };
        setMessageArr([start_message, question_message, selection_message]);
      }
    }, 1000);
    return () => {
      // 페이지 언마운트 시 로컬 스토리지의 EBTClass 값 삭제
      localStorage.removeItem("EBTClass");
    };
  }, []);

  // 심리 검사 다음 문항 진행
  useEffect(() => {
    if (next) {
      const { value, done } = ebtSessionRef.current.next(select);
      // 검사 진행 중
      if (!done) {
        const question_message = {
          role: "assistant",
          content: value.question.content,
          imgURL: value.question.imgURL,
        };
        const selection_message = {
          role: "user",
          content: value.selection.content,
          score: value.selection.score,
          imgURL: value.selection.imgURL,
        };

        // 선택 문항 갱신
        let updateMsgArr = [...messageArr];
        updateMsgArr[updateMsgArr.length - 1] = {
          ...updateMsgArr[updateMsgArr.length - 1],
          selected: select,
        };

        setMessageArr([...updateMsgArr, question_message, selection_message]);
        setNext(false);
      }
      // 검사 종료 - 결과 및 AI 분석 요청
      else if (value) {
        const { result, ebtScore } = value;
        setIsPending(true);
        // 선택 문항 갱신
        let updateMsgArr = [...messageArr];
        updateMsgArr[updateMsgArr.length - 1] = {
          ...updateMsgArr[updateMsgArr.length - 1],
          selected: select,
        };
        setMessageArr([
          ...updateMsgArr,
          {
            role: "assistant",
            content: result,
          },
        ]);

        setTimeout(() => {
          setScoreArr([...ebtScore]);
          setNext(false);
          setResultTrigger(true); // 결과 분석 요청 트리거
          setBottom(true);
        }, 1500);
      } else return;

      setBottom(true); // 스크롤 바텀 트리거
    }
  }, [next]);

  // 성격검사 AI 분석 트리거
  useEffect(() => {
    if (resultTrigger) {
      console.log("AI EBT 분석 API 호출");
      requetAnalysis();
    }
  }, [resultTrigger]);

  // 스크롤 바텀
  useEffect(() => {
    if (bottom) {
      scrollToBottom_useRef(chatBoxBody);
      setBottom(false);
    }
  }, [bottom]);

  return (
    <MainContainer>
      <EBTClassSelector isProceeding={isProceeding} EBTArr={ebtClassMap} />
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
        <EBTBox>
          <EBTBoxHeader>정서행동 검사</EBTBoxHeader>
          <EBTBoxBody ref={chatBoxBody}>
            {messageArr.map((el, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <EBTestBubble
                    message={el.content}
                    score={el.score}
                    role={el.role}
                    imgURL={el.imgURL}
                    setSelect={index === messageArr.length - 1 && setSelect}
                    setNext={index === messageArr.length - 1 && setNext}
                    selected={el.selected}
                  />
                </motion.div>
              </div>
            ))}
            {/* 로딩바 */}
            {isPending ? <LoadingAnimation /> : null}
          </EBTBoxBody>
        </EBTBox>
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

const EBTBox = styled.div`
  position: relative;
  margin: 0 auto;
  width: 600px;
  max-width: 100%;
  height: 100%;
  /* height: calc(100vh - 150px); */
  /* max-height: calc(100vh - 150px); */

  background-color: #ffffff;
  border-radius: 8px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const EBTBoxHeader = styled.div`
  background-color: #0084ff;
  color: #ffffff;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 9%;
`;

const EBTBoxBody = styled.div`
  padding: 6px;
  height: 91%;
  overflow-y: auto;
  /* height: calc(100% - 360px); */

  display: flex;
  flex-direction: column;
  width: auto;
`;
