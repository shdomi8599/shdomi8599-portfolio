import FocusSpan from "@/components/common/FocusSpan";
import LinkSpan from "@/components/common/LinkSpan";
import { ProjectList } from "@/types/project";

export const projects: ProjectList[] = [
  [
    <div key={"마쉴랭"}>
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
      <b>
      처음에는 혼자 맡게 된 상황이 당황스러웠지만, 둘이서 할 일을 혼자서
      처리하면 제 실력이 많이 향상될 것이라 믿어서 도전하게 되었습니다. 덕분에
      모든 클라이언트 작업을 혼자 해내면서 실력 향상에 큰 도움이 되었습니다.
      </b>
      <p />
      서버와 클라이언트를 연동하는 부분에서는 백엔드 분들이 클라이언트에 대해 잘
      모르셔서, 서버를 알고 있는 제가 나서서 작업을 진행했습니다. 백엔드
      분들에게 <FocusSpan content="스프링 부트를 해석하는 방법" />과{" "}
      <FocusSpan content="H2 데이터베이스를 활용하는 방법" />을 여쭤보고,{" "}
      <FocusSpan
        content="제 로컬 환경에서 서버와 클라이언트를 모두 실행시켜 데이터들을 연동하는
          작업을 했습니다."
      />{" "}
      이를 통해 백엔드와의 협업에 대한 두려움이 사라지면서, 좋은 경험을 쌓을 수
      있었습니다.
    </div>,
    [
      {
        name: "구현한 기능",
        content:
          "반응형 웹, 회원기능, 실시간 유효성 검사(디바운싱), 실시간 1:1 채팅, 게시판/댓글/대댓글 CRUD, 게시글 검색, 무한스크롤(IO-API), 스켈레톤UI, 해쉬태그, 캐러셀, 좋아요/싫어요/구독",
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
  [
    <div key={"포트폴리오"}>
      <b>
        서버 사이드 랜더링을 통한 정적인 페이지와 SEO의 강점을 이용하기 위해
        Next.js로 제작하게 된 포트폴리오입니다.
      </b>{" "}
      평생 재사용이 가능한 포트폴리오가 될 수 있도록 모든 데이터들을 배열 또는
      객체로 관리하고,{" "}
      <FocusSpan
        content="전역 상태 관리를 통해 데이터의 개수가 변해도 네비게이션과 기능들이
          반응형 웹에 적용되도록 개발"
      />
      하였습니다.
      <p />
      <b>
        포트폴리오를 열람하시는 인사담당자님의 시간을 아껴드리기 위해, 시간을
        지연시키는 애니메이션과 로딩 같은 기능들을 최대한 배제
      </b>
      하는게 제 포트폴리오의 목표였고, 우연히{" "}
      <LinkSpan
        src="https://cdg-portfolio.com/"
        content="최덕경님의 포트폴리오"
      />
      를 접하게 되어 디자인을 참고하였습니다.
    </div>,
    [
      {
        name: "구현한 기능",
        content: "반응형 웹, 프로필/기술 스택/프로젝트 정리",
      },
      {
        name: "깃허브 링크",
        href: "https://github.com/shdomi8599/shdomi8599-portfolio",
      },
      {
        name: "프론트 기술 스택",
        content: "Next.js, React, Typescript, Recoil, Axios, Styled-Components",
      },
    ],
  ],
  [
    <div key={"취준생의 하루"}>
      <b>취준생들을 위한 웹앱</b>으로, 사용자가 자신의 스케줄을 등록하고 알람을
      설정하여 스케줄을 잊지 않고 이행할 수 있도록 도와줍니다. 또한, 목표 설정
      기능을 통해 하루 중 집중적으로 수행해야 하는 목표를 설정하고 달성 여부를
      달력에 체크할 수 있습니다.{" "}
      <FocusSpan content="웹앱에 접근할 때마다 데이터의 기록 날짜를 체크하여 데이터가 정리" />
      되도록 구현했습니다.
      <p />
      <b>
        이 프로젝트를 만들면서 처음으로 TailwindCSS를 사용해보았는데,
        Bootstrap과는 달리 더 세밀한 수치 조절이 가능했지만, 고정된 수치를 가진
        CSS 라이브러리의 한계를 깨닫게 되었습니다.
      </b>
    </div>,
    [
      {
        name: "구현한 기능",
        content:
          "그저께/어제/오늘 스케줄 관리, 사용자 간 스케줄 공유, 기상시간 체크, 목표 설정, 스케줄 설정, 알람 설정, 스케줄 성공 여부 달력 관리, 과거 스케줄 조회",
      },
      {
        name: "깃허브 링크",
        href: "https://github.com/shdomi8599/mobile-to-do-app",
      },
      {
        name: "프론트 기술 스택",
        content: "React, Typescript, Recoil, TailwindCSS, Styled-Components",
      },
    ],
  ],
  [
    <div key={"모두시스템 개편"}>
      <b>
        웹 개발 공부를 시작하기 전에는 몰랐지만, 우연히 아버지가 운영하시는 사업
        사이트를 들어가봤는데, 사이트 곳곳에 Adobe Flash Player가 떠다니는 것을
        보고 경악을 금치 못해서 시작하게 된 프로젝트입니다.
      </b>{" "}
      현재 운영 중인{" "}
      <LinkSpan
        src="http://modoosystem.com/index.php"
        content="모두시스템 사이트"
      />
      는 약 12년 전에 개발되었다고 하셨는데, 오래된 만큼 사이트의 디자인이나
      페이지 구성, 상담 신청 등의 기능들이 너무 과거에 멈춰있다는 생각이
      들었습니다. 그래서{" "}
      <FocusSpan
        content="포토샵과 피그마 같은 디자인 툴을 사용해서 로고 및 조직도와 같은 필요한
        이미지도 새롭게 제작"
      />
      하고 사이트를 개편하였습니다.
      <p />
      <b>
        클라이언트 개발 후, 정식으로 사이트를 개편하기 위해 Express를 활용해서
        서버도 만들었지만, DB에 대한 지식이 부족한 상태였고, 시간이 지날수록
        과거에 부족했던 점들이 너무나도 많이 보이게 되어 Next.js를 활용해서
        새롭게 개발할 예정입니다.
      </b>
    </div>,
    [
      {
        name: "구현한 기능",
        content:
          "메인 카테고리 캐러셀, 상담신청 이메일 연동, 게시판 CRUD, 게시글 검색, 카카오 맵",
      },
      {
        name: "깃허브 링크",
        href: "https://github.com/shdomi8599/p3-modusystem",
      },
      {
        name: "프론트 기술 스택",
        content: "React, Typescript, Axios",
      },
      { name: "백엔드 기술 스택", content: "Node, Express" },
      { name: "디자인", content: "figma, Photoshop" },
    ],
  ],
  [
    <div key={"LOL 나만의 피드백"}>
      <b>처음으로 React를 활용하여 개발한 프로젝트입니다.</b> React에 대해
      학습하기 전까지는 &quot;JS와 달라봐야 얼마나 다르겠어&quot; 라는 생각을
      가지고 있었는데, 그 생각이 완전히 잘못되었다는 것을 알게 해준
      프로젝트입니다.
      <p />
      현재는 코딩에 밀려서 재미가 없어진{" "}
      <FocusSpan
        content="리그 오브 레전드 게임의 API를 활용하여
      사용자만의 챔피언 별 피드백을 저장하고, 다른 유저들과 공유"
      />
      할 수 있도록 만든 프로젝트입니다.
      <p />
      <b>
        프로젝트 초반에는 React를 왜 사용해야 하는지에 대한 이유를 깨닫지
        못했지만, 사용에 익숙해짐에 따라 React의 위대함을 깨닫게 해준
        프로젝트입니다.
      </b>
    </div>,
    [
      {
        name: "구현한 기능",
        content:
          "회원기능, 실시간 유효성 검사, 피드백 CRUD, 피드백 추천, 피드백 공유",
      },
      {
        name: "깃허브 링크",
        href: "https://github.com/shdomi8599/side-project-lol-feedback",
      },
      {
        name: "프론트 기술 스택",
        content: "React",
      },
    ],
  ],
  [
    <div key={"실시간 코인 가격"}>
      <b>
        대학교를 자퇴하고 사업자를 내서 코인 관련 사업을 했을 만큼 코인에 관심이
        많았기 때문에, 코인 유저로서 불편한 점을 보완하기 위해 시작한
        프로젝트입니다.
      </b>
      <p />
      <FocusSpan
        content="국내 4대 코인 거래소의 API 데이터를 활용해 원하는 코인의 가격을 실시간으로
      검색하고, 거래소 간의 코인 가격을 한 눈에 쉽게 비교"
      />
      할 수 있도록 개발하였습니다.
      <p />
      <b>
        이 프로젝트를 통해 Node를 활용한 서버에 대해 알게 되었고,
        자바스크립트만으로 가져올 수 없는 데이터를 프록시 서버를 통해 CORS
        문제를 해결하는 방법을 알게 되었습니다. 그리고 여러 API를 활용하면서
        자바스크립트의 비동기를 이해하는데 큰 도움이 되었습니다.
      </b>
    </div>,
    [
      {
        name: "구현한 기능",
        content:
          "코인 검색/필터링, 회원기능, 게시판 CRUD, 프록시 서버를 통해 CORS 우회",
      },
      {
        name: "깃허브 링크",
        href: "https://github.com/shdomi8599/CoinPriceComparison",
      },
      {
        name: "프론트 기술 스택",
        content: "JavaScript",
      },
      { name: "백엔드 기술 스택", content: "Node, EJS" },
    ],
  ],
];
