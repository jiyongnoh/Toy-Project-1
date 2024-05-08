/* eslint-disable react-hooks/exhaustive-deps */
import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../styled-component/common";
import Live2DViewerTest from "@/component/Live2D_Component/Live2DViewerTest";
import { useEffect, useState, useRef } from "react";

import { handlePtAnalsys } from "@/fetchAPI";

import TestBubble from "@/component/Test_Component/TestBubble";

import LoadingAnimation from "@/component/Chat_Component/LoadingAnimation";
// 아바타 관련 전역 변수
import { useRecoilState } from "recoil";
import { avarta } from "../store/state";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

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
    headerTitle: "정서멘토 - 라라",
    placehold: "나는 정서멘토 라라야. 우리 얘기하자!",
  },
};

// 성격검사 제너레이터
function* psychologicalAsesssment() {
  // CP, ER 유형 - 계산을 통해 특정 가능
  let scores_CPER = {
    C: 0,
    P: 0,
    E: 0,
    R: 0,
  };
  // SI 유형 - 노가다 (법칙이 없음)
  let scores_SI = {
    112: "S",
    212: "S",
    122: "S",
    111: "S",
    211: "I",
    121: "I",
    222: "I",
    221: "I",
  };
  // OF 유형 - 노가다 (법칙이 없음)
  let scores_OF = {
    121: "O",
    221: "O",
    211: "O",
    122: "F",
    111: "F",
    112: "F",
    212: "F",
    222: "O",
  };

  let scoreStr_SI = "",
    scoreStr_OF = "";

  // CP 문항
  const answer1 = yield {
    question:
      "오늘 처음 유치원에 가는 날이야. 반에 들어가니 친구들이 많이 와 있어. 나는 어떻게 할까?”",
    selection: [
      "1. 빈자리에서 선생님을 기다릴 거야",
      "2: 새 친구에게 말을 건네 볼 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer1 === "1" ? "P" : "C"] += 1;

  // OF 문항
  const answer2 = yield {
    question:
      "오늘은 종이접기를 하는 날이야. 풀잎반에서는 선생님께서 종이접기를 가르쳐 주시고, 꽃잎반에서는 내 마음대로 종이접기를 할 수 있어. 나는 어떤 반으로 갈까?",
    selection: [
      "1: 풀잎반에서 선생님께서 가르쳐 주시는 대로 종이접기를 할 거야",
      "2: 꽃잎반에서 내 마음대로 종이접기를 할 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_OF += answer2;

  // SI 문항
  const answer3 = yield {
    question:
      "선생님께서 신발정리를 도와줄 친구가 한 명 필요하다고 하셔. 나는 어떻게 할까?",
    selection: [
      "1: 칭찬 받고 싶어서 내가 한다고 할 거야",
      "2: 하고 싶지 않아서 가만히 있을 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_SI += answer3;

  // ER 문항
  const answer4 = yield {
    question:
      "점토놀이를 하는데 짝꿍이 갑자기 슬픈 표정을 하더니 울기 시작해. 나는 어떻게 할까?",
    selection: [
      "1: 무슨 일인지 물어보고 위로해 줄 거야",
      "2: 그만 울고 점토놀이를 하자고 할 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer4 === "1" ? "E" : "R"] += 1;

  // ER 문항
  const answer5 = yield {
    question:
      "주말에 맛집에 갔는데 너무 맛있어서 친구에게 알려주고 싶어. 나라면 어떻게 할까?",
    selection: [
      "1: 정말 맛있었다고 신나게 말해 줄 거야",
      "2: 어떤 게 맛있었는지 하나씩 천천히 말해 줄 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer5 === "1" ? "E" : "R"] += 1;

  // SI 문항
  const answer6 = yield {
    question:
      "친구는 역할놀이를 하자고 하고 나는 블록놀이를 하고 싶어. 나는 어떻게 할까?",
    selection: [
      "1: 친구가 하고 싶은 역할놀이를 할 거야.",
      "2: 내가 하고 싶은 블록놀이를 할 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_SI += answer6;

  // OF 문항
  const answer7 = yield {
    question: "키즈카페에 놀러 왔어. 어떤 놀이기구를 먼저 탈까?",
    selection: [
      "1: 전에 탔던 놀이기구를 먼저 탈래",
      "2: 새로운 놀이기구를 먼저 탈래",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_OF += answer7;

  // CP 문항
  const answer8 = yield {
    question:
      "소풍을 왔어. 처음 보는 친구들이 재밌는 장난감을 갖고 놀고 있어. 나는 어떻게 할까?",
    selection: [
      "1: 처음 보는 친구들이라 가까이 가지 않을래",
      "2: 처음 보는 친구들한테 가서 물어볼래",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer8 === "1" ? "P" : "C"] += 1;

  // CP 문항
  const answer9 = yield {
    question:
      "놀이터에서 무서운 개를 만난 적이 있어. 친구들이 다시 그 놀이터에 가자고 해. 나라면 어떻게 할까?",
    selection: [
      "1: 개가 나타날 수 있으니 안 갈래",
      "2: 개가 나타나지 않을 거라 생각하고 갈래",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer9 === "1" ? "P" : "C"] += 1;

  // SI 문항
  const answer10 = yield {
    question:
      "엄마가 읽으라고 한 책을 다 읽고 이제 자유롭게 놀 수 있어. 무얼 하고 놀까?",
    selection: ["1: 혼자 하고 싶은 걸 할 래", "2: 친구들이랑 같이 놀래"],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_SI += answer10;

  // ER 문항
  const answer11 = yield {
    question:
      "TV에서 한 아이가 강아지가 많이 아파서 울기 시작해. 나는 어떨 거 같아?",
    selection: ["1: 나도 눈물이 날 거 같아", "2: 어떻게 되는지 계속 볼 래"],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer11 === "1" ? "E" : "R"] += 1;

  // OF 문항
  const answer12 = yield {
    question:
      "마트에 너무 갖고 싶은 장난감이 있는데 어제 다른 장남감을 샀어. 어떻게 하면 좋을까?",
    selection: [
      "1: 너무 갖고 싶어서 또 사 달라고 할래",
      "2: 너무 갖고 싶지만 어제 샀으니 안 사도 돼",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_OF += answer12;

  // 성격 유형 계산
  const type = `${scores_SI[scoreStr_SI]}${scores_OF[scoreStr_OF]}${
    scores_CPER.C >= scores_CPER.P ? "C" : "P"
  }${scores_CPER.E >= scores_CPER.R ? "E" : "R"}`;

  return { result: `당신의 성격 유형은 ${type} 입니다.`, type };
}

// Renewel Test 페이지
export default function Test() {
  const [isPending, setIsPending] = useState(false);
  const [next, setNext] = useState(false); // 유저 문항 선택 트리거
  const [select, setSelect] = useState("2"); // 유저 문항 선택지 1 || 2
  const [bottom, setBottom] = useState(false); // scrollToBottom 메서드 발동 트리거
  const [resultType, setResultType] = useState("");
  const [resultTrigger, setResultTrigger] = useState(false); // 결과 분석 요청 선택 트리거
  const [messageArr, setMessageArr] = useState([]);
  const [avartaAI, setAvartaAI] = useRecoilState(avarta);
  const { name } = avartaAI_info[avartaAI];

  const router = useRouter();
  // 제너레이터는 리렌더링 시점에 초기화 => useRef를 통해 인스턴스 고정
  const ptSessionRef = useRef(null);
  const chatBoxBody = useRef(null); // scrollToBottom 컴포넌트 고정

  if (!ptSessionRef.current) ptSessionRef.current = psychologicalAsesssment();

  const scrollToBottom_useRef = (chatBoxBody) => {
    if (chatBoxBody.current) {
      chatBoxBody.current.scrollTop = chatBoxBody.current.scrollHeight;
    }
  };

  // 성격 검사 분석 요청 API 호출 메서드
  const requetAnalysis = async () => {
    try {
      // 감정 분석 API 호출 이후 state 갱신
      const data = await handlePtAnalsys({
        resultText: resultType,
        pUid: localStorage.getItem("id") || "dummy",
      });

      setIsPending(false);
      setMessageArr([
        ...messageArr,
        { role: "assistant", content: data.message },
      ]);
      setBottom(true);
    } catch (error) {
      console.log(error);
    }
  };
  // 페이지 초기설정 - 성격검사 첫 문항 제시
  useEffect(() => {
    setTimeout(() => {
      const { value, done } = ptSessionRef.current.next(select);
      if (!done) {
        const question_message = {
          role: "assistant",
          content: value.question,
          imgURL: value.question_imgURL,
        };
        const selection_message = {
          role: "user",
          content: value.selection,
          imgURL: value.selection_imgURL,
        };
        setMessageArr([...messageArr, question_message, selection_message]);
      }
    }, 1000);
  }, []);

  // 심리 검사 다음 문항 진행
  useEffect(() => {
    if (next) {
      const { value, done } = ptSessionRef.current.next(select);
      // console.log(done);
      // 검사 문항 진행
      if (!done) {
        const question_message = {
          role: "assistant",
          content: value.question,
          imgURL: value.question_imgURL,
        };
        const selection_message = {
          role: "user",
          content: value.selection,
          imgURL: value.selection_imgURL,
        };
        setMessageArr([...messageArr, question_message, selection_message]);
        setNext(false);
      }
      // 검사 문항 종료 - 결과 및 AI 분석 요청
      else if (value) {
        const { result, type } = value;
        setIsPending(true);
        setTimeout(() => {
          setMessageArr([
            ...messageArr,
            {
              role: "assistant",
              content: result,
            },
          ]);
          setResultType(type);
          setNext(false);
          setResultTrigger(true);
          setBottom(true);
        }, 1500);
      } else return;

      setBottom(true);
    }
  }, [next]);

  // 성격검사 AI 분석 트리거
  useEffect(() => {
    if (resultTrigger) {
      console.log("AI PT 분석 API 호출");
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
        <PTBox>
          <PTBoxHeader>성격 검사</PTBoxHeader>
          <PTBoxBody ref={chatBoxBody}>
            <TestBubble message={"성격검사 시작합니다!"} role="assistant" />
            {messageArr.map((el, index) => (
              <div key={index}>
                {el.imgURL ? (
                  <div key={index}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <TestBubble
                        message={el.content}
                        role={el.role}
                        imgURL={el.imgURL}
                        setSelect={index === messageArr.length - 1 && setSelect}
                        setNext={index === messageArr.length - 1 && setNext}
                      />
                    </motion.div>
                  </div>
                ) : (
                  <TestBubble
                    message={el.content}
                    role={el.role}
                    imgURL={el.imgURL}
                    setSelect={index === messageArr.length - 1 && setSelect}
                    setNext={index === messageArr.length - 1 && setNext}
                  />
                )}
              </div>
            ))}
            {/* 로딩바 */}
            {isPending ? <LoadingAnimation /> : null}
          </PTBoxBody>
        </PTBox>
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

const PTBox = styled.div`
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

const PTBoxHeader = styled.div`
  background-color: #0084ff;
  color: #ffffff;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 9%;
`;

const PTBoxBody = styled.div`
  padding: 6px;
  height: 91%;
  overflow-y: auto;
  /* height: calc(100% - 360px); */

  display: flex;
  flex-direction: column;
  width: auto;
`;

// const PTBoxFooter = styled.div`
//   bottom: 0;
//   display: flex;
//   align-items: center;
//   background-color: #ffffff;
//   border-top: 1px solid #e6e6e6;
//   padding: 8px 16px;
// `;

// const PTBoxFooterInput = styled.input`
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #e6e6e6;
//   border-radius: 8px;
//   font-size: 16px;
//   outline: none;
// `;

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
