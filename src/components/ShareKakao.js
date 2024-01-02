import styled from "styled-components";

const Imgbox = styled.img`
    cursor: pointer;
`

function KakaoShare({url, imgUrl}) {
    const kakaoButton = () => {
        console.log("click")
        if (window.Kakao) {
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
                kakao.init("31470743620e19f75f11f114985f53a0");
            }
        
            kakao.Share.sendDefault({
                objectType: "feed",
                content: {
                    title: "내가 좋아하는 책 유형 TEST",
                    description: "성격 Test 기반으로 나에게 맞는 책을 찾고 어울리는 책갈피를 알아보자",
                    imageUrl: "../img/example.png",
                    link: {
                        mobileWebUrl: url,
                        webUrl: url
                    }
                },
                buttons: [
                    {
                        title: "결과 확인",
                        link: {
                            mobileWebUrl: url,
                            webUrl: url
                        }
                    }
                ]
            });
        }
    }

    return (
        <div id="kakaotalk-sharing-btn" onClick={kakaoButton}>
            <Imgbox src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png" alt="카카오톡 공유 보내기 버튼" />
        </div>
    )
}

export default KakaoShare;