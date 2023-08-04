import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import http from "api/commonHttp";
import { Link } from "react-router-dom";
import ChatUi from "components/MyPage/GeneralChatting/ChatUi";

export default function DesertionDetail() {
  const [modal, setModal] = useState(false);

  let [animal, setAnimal] = useState([]);
  let desertionNo = useSelector((state) => state.detailInfo.desertionNo);

  useEffect(() => {
    if (desertionNo === 0) return;
    http
      .get(`desertion/${desertionNo}`)
      .then((res) => {
        setAnimal(res.data);
      })
      .catch(() => {
        console.log("유기동물 세부정보 조회 실패");
      });
  }, [desertionNo]);

  return (
    <>
      <div className="animal-container">
        <div
          className="animal-image"
          style={{
            background: animal.image2
              ? `url(${animal.image2}) no-repeat center/cover`
              : `url("/no_image.png") no-repeat center/cover`,
          }}
        />
        <div className="animal-desc-container">
          <div className="animal-title-area">대상동물 정보</div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">종류</div>
            <div className="animal-desc-content">{animal.kind}</div>
          </div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">추정나이</div>
            <div className="animal-desc-content">{animal.age}</div>
          </div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">몸무게</div>
            <div className="animal-desc-content">{animal.weight}</div>
          </div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">털색</div>
            <div className="animal-desc-content">{animal.color}</div>
          </div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">성별</div>
            <div className="animal-desc-content">{animal.gender}</div>
          </div>

          <div className="animal-title-area" style={{ marginTop: "32px" }}>
            공고 정보
          </div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">공고번호</div>
            <div className="animal-desc-content">{animal.noticeNo}</div>
          </div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">공고기간</div>
            <div className="animal-desc-content">{animal.noticeDate}</div>
          </div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">발견장소</div>
            <div className="animal-desc-content">{animal.location}</div>
          </div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">특이사항</div>
            <div className="animal-desc-content">{animal.specialMark}</div>
          </div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">보호센터</div>
            <div className="animal-desc-content">{animal.shelter}</div>
          </div>
          <div className="animal-desc-area">
            <div className="animal-desc-title">연락처</div>
            <div className="animal-desc-content">{animal.tel}</div>
          </div>

          <div className="animal-btn-container">
            <button className="animal-chat-btn" onClick={() => setModal(true)}>
              채팅하기
            </button>
            <Link to="/desertion/reservation" style={{ flex: "1" }}>
              <button
                className="animal-meet-btn"
                onClick={window.scrollTo(0, 0)}
              >
                미팅하기
              </button>
            </Link>
          </div>
        </div>
        {modal && <ChatUi setModal={setModal} />}
      </div>
      <style jsx="true">{`
        .animal-container {
          border-radius: 8px;
          border: 1px solid var(--lightgrey, #e8ebee);
          width: 100%;
        }
        .animal-image {
          width: 100%;
          height: 200px;
          border-radius: 8px 8px 0px 0px;
        }
        .animal-desc-container {
          padding: 32px;
        }
        .animal-title-area {
          color: var(--blackgrey, #35383b);
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 130%; /* 15.6px */
          letter-spacing: 0.12px;
        }
        .animal-desc-area {
          display: flex;
          flex-direction: row;
          width: 100%;
          margin: 16px 0 0 0;
        }
        .animal-desc-title {
          width: 100px;
          color: var(--grey-2, #a7aeb4);
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%; /* 18.2px */
          letter-spacing: 0.14px;
        }
        .animal-desc-content {
          flex: 1;
          color: var(--blackgrey, #35383b);
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%; /* 18.2px */
          letter-spacing: 0.14px;
        }
        .animal-btn-container {
          gap: 8px;
          display: flex;
          margin-top: 36px;
        }
        .animal-chat-btn {
          border-radius: 12px;
          border: 1px solid var(--primary, #3994f0);
          background: var(--white, #fff);

          color: var(--primary, #3994f0);
          text-align: center;
          font-family: Noto Sans KR;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          // line-height: 155%;

          height: 50px;
          flex: 1;
          width: 100%;
        }
        .animal-meet-btn {
          border-radius: 12px;
          border: 1px solid var(--red, #ff7676);
          background: var(--white, #fff);

          color: var(--red, #ff7676);
          text-align: center;
          font-family: Noto Sans KR;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          // line-height: 155%; /* 24.8px */

          height: 50px;
          width: 100%;
        }
      `}</style>
    </>
  );
}
