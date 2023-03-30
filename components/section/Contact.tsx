/* eslint-disable @next/next/no-img-element */
import { tags } from "@/data/tags";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";
import Row from "../common/Row";

const ContactBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;

  > div {
    align-items: center;
    justify-content: center;
    @media (max-width: 859px) {
      flex-direction: column;
    }

    > div:first-child {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @media (max-width: 859px) {
        margin-bottom: 10px;
      }
      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        margin: 60px 0px;
        @media (max-width: 859px) {
          width: 100%;
          margin: 0px;
          padding: 20px 0px;
        }
        > img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
            0 -0.5rem 1rem rgba(0, 0, 0, 0.1);
        }
      }
    }

    > div:last-child {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
        0 -0.5rem 1rem rgba(0, 0, 0, 0.1);
      @media (max-width: 859px) {
        width: 90%;
        margin: 20px 0px;
      }
      > form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-weight: bold;
        > div:first-child {
          padding-top: 20px;
        }
        > div:nth-child(2) {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 4px 0px;
          > div {
            width: 60%;
            display: flex;
            align-items: center;
            margin: 20px 0px;
            @media (max-width: 582px) {
              flex-direction: column;
            }
            > label {
              width: 40%;
              @media (max-width: 582px) {
                width: 100%;
              }
            }
            > input,
            textarea {
              border-color: #eeeeee;
              width: 60%;
              resize: none;
              padding: 8px;
              @media (max-width: 582px) {
                width: 100%;
              }
            }
          }
        }
        > div:last-child {
          margin-bottom: 30px;
          > button {
            border: none;
            border-radius: 10px;
            padding: 10px 16px;
            background-color: rgb(0, 0, 0);
            color: white;
            font-size: 1.1rem;
            cursor: pointer;
            :active {
              top: 0.1vh;
              position: relative;
            }
          }
        }
      }
    }
  }
`;

const Contact = () => {
  const { google, kakao } = tags;

  const form = useRef<HTMLFormElement>(null);
  /**
   * 메일을 보내는 이벤트
   */
  const sendMail = (e: FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5nsvxgn",
        "template_yaafa1f",
        form.current!,
        "2CaRWheYoSv_3pGdY"
      )
      .then(
        () => {
          return alert("감사합니다.");
        },
        () => {
          return alert("잠시 후에 다시 시도해주세요.");
        }
      );
  };

  return (
    <ArticleBox name={"Contact"}>
      <ContactBox>
        <Row>
          <div>
            <a
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=shdomi8599@gmail.com"
              target="_blank"
            >
              <img src={google} alt="google" />
            </a>
            <a>
              <img src={kakao} alt="kakao" />
            </a>
          </div>
          <div>
            <form onSubmit={sendMail} ref={form}>
              <div>간편 메일</div>
              <div>
                <div>
                  <label>이름</label>
                  <input name="from_name" type="text" />
                </div>
                <div>
                  <label>연락처</label>
                  <input name="phone" id="phone" type="text" />
                </div>
                <div>
                  <label>내용</label>
                  <textarea
                    spellCheck="false"
                    name="text"
                    id="content"
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <div>
                <button>보내기</button>
              </div>
            </form>
          </div>
        </Row>
      </ContactBox>
    </ArticleBox>
  );
};

export default Contact;
