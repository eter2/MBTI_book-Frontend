# MBTI_book-Frontend
![image](https://github.com/eter2/MBTI_book-Frontend/blob/main/assets/main.jpg)

SWYP 2기 프로젝트

# 프로젝트 소개
간단한 성격유형, 책 취향 테스트를 통해 나와 비슷한 유형의 사람들이 선호하는 책 랭킹을 볼 수 있는 책 추천 서비스. 유형테스트와 함께 내가 좋아하는 책을 추천하면서, 유형별 추천 책 DB를 쌓아 같은 성격 유형을 가진 사람들이 선호하는 도서를 추천해준다.

# 개발 기간
2023.11.30 ~ 2024.01.06 (프론트엔드 1, 백엔드 1, 디자이너 1, 기획 1)

# 기능
1. 질문 및 답변
서버에서 받아온 질문과 답변을 화면에 표시하고 사용자가 선택
2. 책 검색
네이버 도서 검색을 통해 책 정보를 받아오고 표시
사용자는 최대 3권까지 책 선택 가능
3. 결과
테스트 결과 및 추천 도서 목록 표시

# 실행 화면
![image](https://github.com/eter2/MBTI_book-Frontend/blob/main/assets/question.png)
* useEffect를 통해 사용자가 답변을 선택할 때마다 새로운 질문 및 답변을 fetch해 화면에 표시

![image](https://github.com/eter2/MBTI_book-Frontend/blob/main/assets/searchBook.png)
* 사용자가 입력한 키워드를 즉시 반영하여 API 검색 후 화면에 표시
* 키워드 당 최대 10개 까지 결과 표시 (y축 스크롤 사용하여 화면에 표시)

![image](https://github.com/eter2/MBTI_book-Frontend/blob/main/assets/selectBook.png)
* 사용자가 책을 클릭하여 선택하면 선택한 책 목록에 표시 (최대 3개)
* 오른쪽 상단의 삭제 버튼을 통해 언제든지 사용자가 책을 삭제할 수 있음
* '건너뛰기' 버튼을 통해 책을 선택하지 않고 넘어갈 수 있음
* '입력완료' 버튼을 누르면 1~3권의 책이 서버로 전송 (0권일 때 경고창 출력, 3권 이상의 책을 선택하여도 경고창이 출력됨)

![image](https://github.com/eter2/MBTI_book-Frontend/blob/main/assets/result.png)
* 사용자가 입력한 답변에 맞는 결과창 출력
* 하단에는 같은 유형의 사용자들이 추천한 책 랭킹 출력
* 테스트 다시하기 및 공유를 위한 링크 복사 기능 제공
