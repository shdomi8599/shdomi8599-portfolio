import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCalendar,
  faLocationCrosshairs,
  faPhone,
  faEnvelope,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

export const PROFILE_DATA = [
  {
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    name: "NAME",
    content: "신동민",
  },
  {
    icon: <FontAwesomeIcon icon={faCalendar} />,
    name: "BIRTH",
    content: "93.07.28",
  },
  {
    icon: <FontAwesomeIcon icon={faLocationCrosshairs} />,
    name: "ADDRESS",
    content: "경기도 군포시",
  },
  {
    icon: <FontAwesomeIcon icon={faPhone} />,
    name: "PHONE",
    content: "010-5715-8599",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    name: "EMAIL",
    content: "shdomi8599@gmail.com",
  },
  {
    icon: <FontAwesomeIcon icon={faSchool} />,
    name: "BootCamp",
    content: "코드스테이츠 43기",
  },
];
