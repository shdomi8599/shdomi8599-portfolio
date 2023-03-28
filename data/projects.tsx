import { ProjectList } from "@/types/project";

export const projects: ProjectList[] = [
  [
    <div key={1}>
      부트캠프를 수강 중인 도중, 오픈 채팅방에서 팀원 모집 글을 보고 참여한 첫
      번째 팀 프로젝트입니다.{" "}
      <b>
        마쉴랭 프로젝트는 칵테일을 좋아하는 사람들을 위한 웹 커뮤니티로,
        게시판을 활용하여 레시피와 맛집 정보를 공유하는 것이 주 컨텐츠입니다.
      </b>{" "}
      원래는 프론트엔드 2명, 백엔드 2명으로 구성될 예정이었으나, 인원 구성이
      되지 않아 저 혼자 프론트엔드를 맡게 되었고, 두 분의 백엔드 분들과 함께
      작업하게 되었습니다.
      <p />
      처음에는 혼자 맡게 된 상황이 당황스러웠지만, 둘이서 할 일을 혼자서
      처리하면 제 실력이 많이 향상될 것이라 믿어서 도전하게 되었습니다. 덕분에
      모든 클라이언트 작업을 혼자 해내면서 실력 향상에 큰 도움이 되었습니다.
      <p />
      서버와 클라이언트를 연동하는 부분에서는 백엔드 분들이 클라이언트에 대해 잘
      모르셔서, 서버를 알고 있는 제가 나서서 작업을 진행했습니다. 백엔드
      분들에게{" "}
      <span className="text-red">
        <b>스프링 부트를 해석하는 방법</b>
      </span>
      과{" "}
      <span className="text-red">
        <b>H2 데이터베이스를 활용하는 방법</b>
      </span>
      을 여쭤보고,{" "}
      <span className="text-red">
        <b>
          제 로컬 환경에서 서버와 클라이언트를 모두 실행시켜 데이터들을 연동하는
          작업을 했습니다.
        </b>
      </span>{" "}
      이를 통해 백엔드와의 협업에 대한 두려움이 사라지면서, 좋은 경험을 쌓을 수
      있었습니다.
      <p />
      이렇게 진행된 프로젝트 마쉴랭은 저에게 많은 도움이 되었으며, 좋은 경험이
      된 프로젝트입니다.
    </div>,
    [
      {
        name: "구현한 기능",
        content:
          "반응형 웹, 실시간 1:1 채팅, 게시판/댓글/대댓글 CRUD, 게시글 검색, 무한스크롤(IO-API), 스켈레톤UI, 해쉬태그, 캐러셀, 좋아요/싫어요/구독, 실시간 유효성 검사(디바운싱)",
      },
      {
        name: "깃허브 링크",
        href: "https://github.com/Maswillaeng/MSL-frontend-full",
      },
      {
        name: "프론트 기술 스택",
        content: "React, Recoil, Axios, Styled-Components, Bootstrap",
      },
      { name: "백엔드 기술 스택", content: "Spring Boot, MySQL" },
      { name: "커뮤니케이션", content: "Figma, Notion" },
    ],
  ],
  [<div key={2}></div>, [{}]],
  [<div key={3}></div>, [{}]],
  [<div key={4}></div>, [{}]],
  [<div key={5}></div>, [{}]],
];
