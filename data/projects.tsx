import FocusSpan from "@/components/common/FocusSpan";
import LinkSpan from "@/components/common/LinkSpan";
import { ProjectList } from "@/types/project";

export const navProject = [
  { categori: "TEAM", name: "사이드 퀘스트", create: "2023.05", period: 37 },
  { categori: "TEAM", name: "스택 오버 플로우", create: "2023.04", period: 14 },
  { categori: "SOLO", name: "포트폴리오", create: "2023.04", period: 7 },
  { categori: "TEAM", name: "마쉴랭", create: "2023.03", period: 28 },
  {
    categori: "SOLO",
    name: "취준생의 하루(앱)",
    create: "2023.03",
    period: 24,
  },
  // { categori: "SOLO", name: "모두시스템 개편", create: "2023.02", period: 30 },
  // {
  //   categori: "SOLO",
  //   name: "LOL 나만의 피드백",
  //   create: "2023.01",
  //   period: 10,
  // },
  // {
  //   categori: "SOLO",
  //   name: "실시간 코인 가격",
  //   create: "2022.12",
  //   period: 18,
  // },
];

export const projects: ProjectList[] = [
  [
    <div key={"사이드 퀘스트"}>
      <b>
        사이드 퀘스트는 다양한 직군의 사람들이 모여 사이드 프로젝트를 진행하고
        개발 중, 일어나는 문제들에 대해 소통하는 커뮤니티입니다.
      </b>{" "}
      프로젝트의 특성상 많은 이미지와 데이터들이 쌓일 수 밖에 없는 구조여서,
      앞으로 일어날 성능적인 이슈들에 대비해 우리팀이 사용할 스택들을 미리
      정하여 프로젝트를 시작했고,
      <FocusSpan content="사용자의 입장에서 끈임없이 고민하며, UX를 향상시키려고 노력하였습니다." />
      <p />
      <b>
        UX를 향상시키기 위해 제가 한 노력은, 모든 API 서버 데이터들을 React
        Query 라이브러리를 통해 캐싱하여 로딩을 최소화하고, 스켈레톤 UI를 통해
        레이아웃 재배치를 막았습니다. 그리고 각 데이터마다 필터링을 구현하여
        사용자가 원하는 데이터만 골라볼 수 있도록 하고, 프로젝트의 특성상 많은
        이미지들이 사용되는 구조여서, 클라이언트에서 관리되는 이미지들은 최대한
        스트라이프화 시켜서 관리하였습니다.{" "}
      </b>{" "}
      <p />
      <FocusSpan content="프로젝트 기간 중에는 팀장으로서 책임감을 갖고 다른 사람들이 힘들어하는 부분들을 도맡아 진행하였고, 프로젝트 기간이 끝난 후에도, 미흡한 부분들을 끝까지 해결하고 리팩토링을 통해 성능을 높이려는 노력을 많이 하였습니다." />
    </div>,
    [
      { name: "배포링크", href: "https://sidequest.co.kr" },
      {
        name: "구현한 기능",
        content:
          "CRUD(프로젝트 모집, 커뮤니티, 답글, 댓글, 쪽지), 이미지 스프라이트, 반응형 웹, 좋아요 기능, 서버 데이터 캐싱, 스켈레톤UI, 이미지 S3, SNS 로그인, JWT, 메일 봇, 마크다운에디터, 페이지네이션, 유저 조회, 무한스크롤, 게시글 검색 및 필터, 유저 랭킹 시스템, EC2 배포, Https 적용",
      },
      {
        name: "제가 구현한 부분",
        content:
          "서버 데이터 캐싱, 전역 상태관리, 페이지네이션, 반응형 웹, EC2 배포, CRUD(프로젝트 모집, 커뮤니티, 답글, 댓글, 쪽지), 유저 랭킹 시스템, 스켈레톤 UI, 좋아요 기능, 게시글 검색 및 필터, 무한스크롤, 마크다운 에디터, 이미지 스프라이트, 최초 개발 환경 세팅, 다양한 버그 해결",
      },
      {
        name: "자세히 보기",
        href: ["https://github.com/codestates-seb/seb43_main_032"],
      },
      {
        name: "프론트엔드 기술 스택",
        content:
          "Next.js, Typescript, React-Query, Recoil, Axios, Styled-Components, Prettier, MSW, EC2",
      },
      {
        name: "백엔드 기술 스택",
        content: "Spring Boot, Mysql, Swagger, Docker, S3, EC2, RDS",
      },
      {
        name: "포지션",
        content: "프론트엔드 팀장",
      },
    ],
    [
      "/sidequest/q1.",
      "/sidequest/q2.",
      "/sidequest/q3.",
      "/sidequest/q4.",
      "/sidequest/q5.",
      "/sidequest/q6.",
      "/sidequest/q7.",
    ],
  ],
  [
    <div key={"스택오버플로우"}>
      <b>처음으로 팀장을 맡게되어 팀원들을 이끌게 된 프로젝트입니다.</b> 우리
      팀이 만들어야할 프로젝트에 대한 사전 정보들을 통해 미리 계획을짜고
      팀원들과 맞춰가는 식으로 기획하고 수행했고,{" "}
      <FocusSpan
        content="효율적으로 Git을 사용할 수 있도록 Git
        Flow전략, 프로젝트 이슈 및 PR을 통한 코드리뷰 등의 방법들을 적극 활용하며
        프로젝트를 진행하였습니다."
      />
      <p />
      <b>
        처음 계획한 기능들을 정해진 기간내에 모두 구현하진 못했지만 프론트와
        백엔드 둘 다{" "}
        <FocusSpan content="AWS의 EC2를 활용하여 성공적으로 배포" />
        하였습니다.
      </b>{" "}
    </div>,
    [
      // { name: "배포링크", href: "https://stackoverflo.site/" },
      {
        name: "구현한 기능",
        content:
          "반응형 웹, 이미지 스프라이트, 커뮤니티CRUD, 데이터 캐싱, JWT, 회원데이터 관리, 스켈레톤UI, 마크다운에디터, 이미지 S3, 페이지네이션, NginX를 활용한 배포, Https 프로토콜",
      },
      {
        name: "제가 구현한 부분",
        content:
          "Header 컴포넌트, Footer 컴포넌트, SideBar 컴포넌트, MainSection 컴포넌트, Tags 페이지, Users 페이지, UserDetail 페이지, UserEdit 페이지, 페이지네이션 기능, api 데이터 캐싱 기능, S3 이미지 업로드 기능, 전역 상태관리, 반응형 웹, 최초 개발 환경 세팅, EC2 배포",
      },
      {
        name: "자세히 보기",
        href: ["https://github.com/codestates-seb/seb43_pre_007"],
      },
      {
        name: "프론트엔드 기술 스택",
        content:
          "Next.js, Typescript, React-Query, Recoil, Axios, Styled-Components, MSW, EC2, NginX",
      },
      {
        name: "백엔드 기술 스택",
        content: "Spring Boot, H2, Mysql, S3, EC2, RDS",
      },
      {
        name: "포지션",
        content: "프론트엔드 팀장",
      },
    ],
    [
      "/stackoverflow/s1.",
      "/stackoverflow/s2.",
      "/stackoverflow/s3.",
      "/stackoverflow/s4.",
      "/stackoverflow/s5.",
      "/stackoverflow/s6.",
      "/stackoverflow/s7.",
    ],
  ],
  [
    <div key={"포트폴리오"}>
      <b>
        서버 사이드 랜더링을 통한 정적인 페이지와 SEO의 강점을 이용하기 위해
        Next.js로 제작하게 된 포트폴리오입니다.
      </b>{" "}
      항상 최신 데이터가 유지될 수 있도록 배포 자동화를 구축했고, 평생 재사용이
      가능한 포트폴리오가 될 수 있도록 모든 데이터들을 배열 또는 객체로 관리하여{" "}
      <FocusSpan
        content="전역 상태 관리를 통해 데이터의 개수가 변해도 네비게이션과 기능들이
          반응형 웹에 적용되도록 개발"
      />
      하였습니다.
      <p />
      <b>
        포트폴리오를 열람하시는 인사담당자님의 시간을 아껴드리기 위해 시간을
        지연시키는 애니메이션을 최대한 배제 하였고, 보시는 데 불편함이 없도록
        대부분의{" "}
        <FocusSpan content="이미지들을 스프라이트 기법과 차세대 이미지 형식을 통해 최적화" />
        해주었습니다.
      </b>{" "}
    </div>,
    [
      {
        name: "구현한 기능",
        content:
          "반응형 웹, 검색 엔진 최적화, 이미지 스프라이트, 차세대 이미지 형식, 프로필/기술 스택/프로젝트 정리, 간편 이메일 폼, 가로/세로 모드, github action 배포 자동화",
      },
      {
        name: "자세히 보기",
        href: ["https://github.com/shdomi8599/shdomi8599-portfolio"],
      },
      {
        name: "프론트엔드 기술 스택",
        content: "Next.js, Typescript, Recoil, Axios, Styled-Components",
      },
    ],
    ["/portfolio/p1.", "/portfolio/p3.", "/portfolio/p2."],
  ],
  [
    <div key={"마쉴랭"}>
      <b>
        마쉴랭 프로젝트는 칵테일을 좋아하는 사람들을 위한 웹 커뮤니티로,
        게시판을 활용하여 레시피와 맛집 정보를 공유하는 것이 주 컨텐츠입니다.
      </b>{" "}
      <p /> 백엔드분들에게 <FocusSpan content="스프링 부트를 해석하는 방법" />
      과 <FocusSpan content="H2 데이터베이스를 활용하는 방법" />을 여쭤보고,{" "}
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
          "반응형 웹, 회원기능, 실시간 유효성 검사(디바운싱), 게시판/댓글/대댓글 CRUD, 게시글 검색, 무한스크롤(IO-API), 스켈레톤UI, 해쉬태그, 캐러셀, 좋아요/싫어요/구독",
      },
      {
        name: "자세히 보기",
        href: [
          "https://github.com/Maswillaeng/MSL-frontend-full",
          "https://web-beginner.tistory.com/category/%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%B9%B5%ED%85%8C%EC%9D%BC%20%EB%A0%88%EC%8B%9C%ED%94%BC%20-%20%EB%A7%88%EC%89%B4%EB%9E%AD",
        ],
      },
      {
        name: "프론트엔드 기술 스택",
        content: "React, Recoil, Axios, Styled-Components, Bootstrap",
      },
      { name: "백엔드 기술 스택", content: "Spring Boot, MySQL" },
    ],
    [
      "/mash/g1.",
      "/mash/g2.",
      "/mash/g3.",
      "/mash/g4.",
      "/mash/g5.",
      "/mash/g6.",
      "/mash/g7.",
      "/mash/g8.",
    ],
  ],
  [
    <div key={"취준생의 하루"}>
      <b>취준생들을 위한 앱</b>으로, 사용자가 자신의 스케줄을 등록하고 알람을
      설정하여 스케줄을 잊지 않고 이행할 수 있도록 도와줍니다. 또한, 목표 설정
      기능을 통해 하루 중 집중적으로 수행해야 하는 목표를 설정하고 달성 여부를
      달력에 체크할 수 있습니다.{" "}
      <FocusSpan content="앱에 접근할 때마다 데이터의 기록 날짜를 체크하여 데이터가 정리" />
      되도록 구현했습니다.
      <p />
      <b>
        처음부터 웹앱을 배포하는 목적을 갖고 개발을 진행했기 때문에 다른
        프로젝트들에 비해 UX에 굉장히 많은 고민을 했습니다. 어떻게 하면 사용자
        입장에서 접근하기 편하고 사용하기 쉽도록 할 수 있을까에 대한 고민과 함께
        수많은 테스트를 거쳐서 개발한 앱입니다.
      </b>
    </div>,
    [
      {
        name: "구현한 기능",
        content:
          "github action 배포 자동화, 그저께/어제/오늘 스케줄 관리, 사용자 간 스케줄 공유, 기상시간 체크, 목표 설정, 스케줄 설정, 스케줄 성공 여부 달력 관리, 과거 스케줄 조회, 알람 설정(구현 시도 중)",
      },
      {
        name: "자세히 보기",
        href: [
          "https://github.com/shdomi8599/mobile-to-do-app",
          "https://web-beginner.tistory.com/category/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%B7%A8%EC%A4%80%EC%83%9D%EC%9D%98%20%ED%95%98%EB%A3%A8%20%28%EC%9B%B9%EC%95%B1%29",
          "https://play.google.com/store/apps/details?id=com.JobSeekerDiary.app",
        ],
      },
      {
        name: "프론트엔드 기술 스택",
        content:
          "React, Expo, Typescript, Recoil, TailwindCSS, Styled-Components",
      },
    ],
    [
      "/TODO/t1.",
      "/TODO/t2.",
      "/TODO/t3.",
      "/TODO/t9.",
      "/TODO/t4.",
      "/TODO/t5.",
      "/TODO/t6.",
      "/TODO/t7.",
      "/TODO/t8.",
    ],
  ],
  // [
  //   <div key={"모두시스템 개편"}>
  //     <b>
  //       웹 공부를 시작하고나서, 우연히 아버지가 운영하시는 사업 사이트를
  //       들어가봤는데, 사이트 곳곳에 Adobe Flash Player가 떠다니는 것을 보고
  //       경악을 금치 못해서 시작하게 된 프로젝트입니다.
  //     </b>{" "}
  //     현재 운영 중인{" "}
  //     <LinkSpan
  //       src="http://modoosystem.com/index.php"
  //       content="모두시스템 사이트"
  //     />
  //     는 약 12년 전에 개발되었다고 하셨는데, 오래된 만큼 사이트의 디자인이나
  //     페이지 구성, 상담 신청 등의 기능들이 너무 과거에 멈춰있다는 생각이
  //     들었습니다. 그래서{" "}
  //     <FocusSpan
  //       content="포토샵과 피그마 같은 디자인 툴을 사용해서 로고 및 조직도와 같은 필요한
  //       이미지도 새롭게 제작"
  //     />
  //     하고 사이트를 개편하였습니다.
  //     <p />
  //     <b>
  //       클라이언트 개발 후, 정식으로 사이트를 개편하기 위해 Express를 활용해서
  //       서버도 만들었지만, DB에 대한 지식이 부족한 상태였고, 시간이 지날수록
  //       과거에 부족했던 점들이 너무나도 많이 보이게 되어 Next.js를 활용해서
  //       새롭게 개발할 예정입니다.
  //     </b>
  //   </div>,
  //   [
  //     {
  //       name: "구현한 기능",
  //       content:
  //         "메인 카테고리 캐러셀, 상담신청 이메일 연동, 게시판 CRUD, 게시글 검색, 카카오 맵",
  //     },
  //     {
  //       name: "자세히 보기",
  //       href: [
  //         "https://github.com/shdomi8599/modoosystem-full",
  //         "https://web-beginner.tistory.com/category/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%AA%A8%EB%91%90%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B0%9C%ED%8E%B8",
  //       ],
  //     },
  //     {
  //       name: "프론트엔드 기술 스택",
  //       content: "React, Typescript, Axios",
  //     },
  //     { name: "백엔드 기술 스택", content: "Node, Express" },
  //     { name: "디자인", content: "figma, Photoshop" },
  //   ],
  //   [
  //     "/modusystem/m1.",
  //     "/modusystem/m2.",
  //     "/modusystem/m3.",
  //     "/modusystem/m4.",
  //     "/modusystem/m5.",
  //     "/modusystem/m6.",
  //     "/modusystem/m7.",
  //     "/modusystem/m8.",
  //   ],
  // ],
  // [
  //   <div key={"LOL 나만의 피드백"}>
  //     <b>처음으로 React를 활용하여 개발한 프로젝트입니다.</b> React에 대해
  //     학습하기 전까지는 &apos;JS와 달라봐야 얼마나 다르겠어&apos; 라는 생각을
  //     가지고 있었는데, 그 생각이 완전히 잘못되었다는 것을 알게 해준
  //     프로젝트입니다.
  //     <p />
  //     현재는 코딩에 밀려서 재미가 없어진{" "}
  //     <FocusSpan
  //       content="리그 오브 레전드 게임의 API를 활용하여
  //     사용자만의 챔피언 별 피드백을 저장하고, 다른 유저들과 공유"
  //     />
  //     할 수 있도록 만든 프로젝트입니다.
  //     <p />
  //     <b>
  //       프로젝트 초반에는 React를 왜 사용해야 하는지에 대한 이유를 깨닫지
  //       못했지만, 사용에 익숙해짐에 따라 React의 위대함을 깨닫게 해준
  //       프로젝트입니다.
  //     </b>
  //   </div>,
  //   [
  //     {
  //       name: "구현한 기능",
  //       content:
  //         "회원기능, 실시간 유효성 검사, 피드백 CRUD, 피드백 추천, 피드백 공유",
  //     },
  //     {
  //       name: "자세히 보기",
  //       href: [
  //         "https://github.com/shdomi8599/side-project-lol-feedback",
  //         "https://web-beginner.tistory.com/category/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/LOL%20%EB%82%98%EB%A7%8C%EC%9D%98%20%ED%94%BC%EB%93%9C%EB%B0%B1",
  //       ],
  //     },
  //     {
  //       name: "프론트엔드 기술 스택",
  //       content: "React",
  //     },
  //   ],
  //   [
  //     "/LOLfeedback/l4.",
  //     "/LOLfeedback/l6.",
  //     "/LOLfeedback/l5.",
  //     "/LOLfeedback/l3.",
  //     "/LOLfeedback/l2.",
  //     "/LOLfeedback/l1.",
  //   ],
  // ],
  // [
  //   <div key={"실시간 코인 가격"}>
  //     <b>
  //       대학교를 자퇴하고 사업자를 내서 코인 관련 사업을 했을 만큼 코인에 관심이
  //       많았기 때문에, 코인 유저로서 불편한 점을 보완하기 위해 시작한
  //       프로젝트입니다.
  //     </b>
  //     <p />
  //     <FocusSpan
  //       content="국내 4대 코인 거래소의 API 데이터를 활용해 원하는 코인의 가격을 실시간으로
  //     검색하고, 거래소 간의 코인 가격을 한 눈에 쉽게 비교"
  //     />
  //     할 수 있도록 개발하였습니다.
  //     <p />
  //     <b>
  //       이 프로젝트를 통해 Node를 활용한 서버에 대해 알게 되었고,
  //       자바스크립트만으로 가져올 수 없는 데이터를 프록시 서버를 통해 CORS
  //       문제를 해결하는 방법을 알게 되었습니다. 그리고 여러 API를 활용하면서
  //       자바스크립트의 비동기를 이해하는데 큰 도움이 되었습니다.
  //     </b>
  //   </div>,
  //   [
  //     {
  //       name: "구현한 기능",
  //       content:
  //         "코인 검색/필터링, 회원기능, 게시판 CRUD, 프록시 서버를 통해 CORS 우회",
  //     },
  //     {
  //       name: "자세히 보기",
  //       href: [
  //         "https://github.com/shdomi8599/CoinPriceComparison",
  //         "https://web-beginner.tistory.com/category/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%8B%A4%EC%8B%9C%EA%B0%84%20%EC%BD%94%EC%9D%B8%20%EA%B0%80%EA%B2%A9%20%EB%B9%84%EA%B5%90",
  //       ],
  //     },
  //     {
  //       name: "프론트엔드 기술 스택",
  //       content: "JavaScript",
  //     },
  //     { name: "백엔드 기술 스택", content: "Node, EJS" },
  //   ],
  //   [
  //     "/CoinPriceComparison/c3.",
  //     "/CoinPriceComparison/c2.",
  //     "/CoinPriceComparison/c4.",
  //     "/CoinPriceComparison/c1.",
  //   ],
  // ],
];
