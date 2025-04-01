/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

import { handleCtAnalsys } from '@/fetchAPI/testAPI';
import { careerFirst } from '@/store/testGenerator';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CareerTestBubble from '@/component/Test_Component/CareerTestBubble';
import CareerTournamentBubble from '@/component/Test_Component/CareerTournamentBubble';
import LoadingAnimation from '@/component/Chat_Component/LoadingAnimation';
import CareerResultBubble from '@/component/Test_Component/CareerResultBubble';

// Renewel Test 페이지
export default function CareerTest() {
  const [isPending, setIsPending] = useState(false);
  const [next, setNext] = useState(false); // 유저 문항 선택 트리거
  const [select, setSelect] = useState('2'); // 유저 문항 선택지 1 || 2
  const [bottom, setBottom] = useState(false); // scrollToBottom 메서드 발동 트리거
  const [messageArr, setMessageArr] = useState([]);
  const [careerTypeMap, setCareerTypeMap] = useState({}); // scrollToBottom 컴포넌트 고정

  // 제너레이터는 리렌더링 시점에 초기화 => useRef를 통해 인스턴스 고정
  const ptSessionRef = useRef(null);
  const chatBoxBody = useRef(null); // scrollToBottom 컴포넌트 고정

  const scrollToBottom_useRef = () => {
    const ptBoxBody = chatBoxBody.current;
    if (ptBoxBody.scrollHeight > 1000)
      window.scrollTo({
        top: ptBoxBody.scrollHeight, // 세로 스크롤 위치
        left: 0, // 가로 스크롤 위치
        behavior: 'smooth', // 스크롤 애니메이션 (옵션: 'auto' 또는 'smooth')
      });
    // if (chatBoxBody.current) {
    //   chatBoxBody.current.scrollTop = chatBoxBody.current.scrollHeight;
    // }
  };

  // API 호출 메서드
  const requetCareerSave = async (input) => {
    try {
      // 감정 분석 API 호출 이후 state 갱신
      await handleCtAnalsys({
        ...input,
        pUid: localStorage.getItem('id'),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 페이지 초기설정 - 성격검사 첫 문항 제시
  useEffect(() => {
    if (!ptSessionRef.current) ptSessionRef.current = careerFirst();

    const { value, done } = ptSessionRef.current.next(select);
    if (!done) {
      const question_message = {
        role: 'assistant',
        content: value.question,
        imgURL: value.question_imgURL,
        session: value.session,
      };
      setMessageArr([question_message]);
    }
  }, []);

  // useEffect(() => {
  //   console.log(messageArr);
  // }, [messageArr]);

  // 심리 검사 다음 문항 진행
  useEffect(() => {
    if (next) {
      const { value, done } = ptSessionRef.current.next(select);
      // 검사 문항 진행
      if (!done) {
        if (value.session === 'first') {
          const question_message = {
            role: 'assistant',
            content: value.question,
            imgURL: value.question_imgURL,
            session: value.session,
          };
          setMessageArr([question_message]);
          setNext(false);
        } else if (value.session === 'second') {
          const { left, right } = value;
          const tournament_message = {
            role: 'assistant',
            content: [left, right],
            session: value.session,
          };
          if (messageArr.length === 1) {
            setMessageArr([
              ...messageArr,
              {
                role: 'assistant',
                content: `정말 잘 했어! 지금부터는 친구가 관심이 있어서 동그라미를 선택한 직업 중 가장 마음에 드는 직업이 무엇인지 골라보는 시간을 가질 거야. 한 번에 두 가지 직업 카드를 보여줄 테니까, 둘 중 더 끌리는 직업 카드를 고르면 돼. 간단하지? 그럼 해볼까?`,
                session: 'first',
              },
            ]);
            setTimeout(() => {
              setMessageArr([
                ...messageArr,
                {
                  role: 'assistant',
                  content: `정말 잘 했어! 지금부터는 친구가 관심이 있어서 동그라미를 선택한 직업 중 가장 마음에 드는 직업이 무엇인지 골라보는 시간을 가질 거야. 한 번에 두 가지 직업 카드를 보여줄 테니까, 둘 중 더 끌리는 직업 카드를 고르면 돼. 간단하지? 그럼 해볼까?`,
                  session: 'first',
                },
                tournament_message,
              ]);
              setNext(false);
            }, 1500);
          } else {
            setMessageArr([...messageArr.slice(0, -1), tournament_message]);
            setNext(false);
          }
        }
      }
      // 검사 문항 종료 - 결과 및 AI 분석 요청
      else if (value) {
        const { rankCareers, interestedCareerTypeMap } = value;
        // console.log(value);
        if (rankCareers.length === 0) {
          alert('흥미있는 직업이 없습니다');
          window.location.reload();
          return;
        }
        // DB에 저장
        if (rankCareers.length) {
          const [first, second, third] = rankCareers;
          requetCareerSave({
            gradeType: 'LOW',
            careerResult1st: first ? first.careerKey : null,
            careerResult2nd: second ? second.careerKey : null,
            careerResult3rd: third ? third.careerKey : null,
            careertypeA: interestedCareerTypeMap['A'],
            careertypeC: interestedCareerTypeMap['C'],
            careertypeE: interestedCareerTypeMap['E'],
            careertypeI: interestedCareerTypeMap['I'],
            careertypeR: interestedCareerTypeMap['R'],
            careertypeS: interestedCareerTypeMap['S'],
          });
        }
        setCareerTypeMap({ ...interestedCareerTypeMap });
        setIsPending(true);
        setTimeout(() => {
          setMessageArr([
            ...messageArr,
            {
              role: 'assistant',
              content: rankCareers,
              session: 'result', // 결과 세션
            },
          ]);
          setIsPending(false);
          setNext(false);
          setBottom(true);
        }, 1500);
      } else return;

      setBottom(true);
    }
  }, [next]);

  // 스크롤 바텀
  useEffect(() => {
    if (bottom) {
      scrollToBottom_useRef();
      setBottom(false);
    }
  }, [bottom]);

  return (
    <MainContainer>
      <CareerBox ref={chatBoxBody}>
        <CareerBoxBody>
          {/* <CareerRadarChart /> */}
          <CareerTestBubble
            message={'어른이 되면 어떤 일을 하고싶어?'}
            role="assistant"
          />
          {messageArr.map((el, index) => {
            // 적성검사 1차시
            if (el?.session === 'first') {
              return (
                <CareerTestBubble
                  key={el.imgURL + index}
                  message={el.content}
                  role={el.role}
                  imgURL={el.imgURL || null}
                  setSelect={index === messageArr.length - 1 ? setSelect : null}
                  setNext={index === messageArr.length - 1 ? setNext : null}
                />
              );
            }
            // 적성검사 2차시
            else if (el?.session === 'second') {
              return (
                <CareerTournamentBubble
                  key={JSON.stringify(el.content[0]) + index}
                  content={el.content}
                  role={el.role}
                  setSelect={index === messageArr.length - 1 ? setSelect : null}
                  setNext={index === messageArr.length - 1 ? setNext : null}
                />
              );
            }
            // 적성검사 결과
            else if (el?.session === 'result') {
              // content: 직업 3개 Array
              return (
                <CareerResultBubble
                  key={JSON.stringify(el.content) + index}
                  content={el.content}
                  careerTypeMap={careerTypeMap}
                  role={el.role}
                />
              );
            }
          })}
          {/* 로딩바 */}
          {isPending ? <LoadingAnimation /> : null}
        </CareerBoxBody>
      </CareerBox>
    </MainContainer>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['shop', 'nav'])),
    },
  };
}

// styled-component의 animation 설정 방법 (keyframes 메서드 사용)

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  background-image: url('/src/EBT_IMG/background.jpg');
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

const CareerBox = styled.div`
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

const CareerBoxBody = styled.div`
  width: 100vw;
  min-height: 75vh;
  height: 100%;

  padding: 1rem;
  background: inherit;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  width: auto;

  gap: 0.4rem;

  @media (max-width: 768px) {
    height: 86%;
    min-height: 70vh;
  }
`;
