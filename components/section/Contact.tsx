import useInputs from "@/function/hooks/useInput";
import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";
import Row from "../common/Row";

type ContactBoxProps = {
  imgHeight?: number;
};

const ContactBox = styled.div<ContactBoxProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;

  > div {
    align-items: start;
    justify-content: center;
    @media (max-width: 859px) {
      flex-direction: column;
      align-items: center;
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
      > a:first-child {
        display: block;
        width: 250px;
        height: 57px;
        background: url("css_sprites.png") -10px -10px;
      }
      > a:last-child {
        display: block;
        margin: 40px 0px;
        width: 250px;
        height: 50px;
        background: url("css_sprites.png") -10px -87px;
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
              width: 30%;
              @media (max-width: 582px) {
                width: 100%;
              }
            }
            > input,
            textarea {
              width: 70%;
              background-color: #eee;
              border: none;
              padding: 1rem;
              font-size: 1rem;
              width: 13em;
              border-radius: 1rem;
              color: black;
              box-shadow: 0 0.4rem #dfd9d9;
              resize: none;
              :focus {
                outline-color: #7a7979;
              }
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
  const [form, onChange, reset] = useInputs({
    from_name: "",
    phone: "",
    text: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  /**
   * 메일을 보내는 이벤트
   */
  const sendMail = (e: FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5nsvxgn",
        "template_yaafa1f",
        formRef.current!,
        "2CaRWheYoSv_3pGdY"
      )
      .then(() => alert("메일이 발송되었습니다."))
      .then(() => reset())
      .catch(() => alert("잠시 후에 다시 시도해주세요."));
  };

  //두 개의 이미지의 높이를 맞춰주기 위한 ref
  const target = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (target.current) setImgHeight(target.current?.height);
  }, []);
  const [imgHeight, setImgHeight] = useState(target.current?.height);

  return (
    <ArticleBox name={"Contact"}>
      <ContactBox imgHeight={imgHeight}>
        <Row>
          <div>
            <a
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=shdomi8599@gmail.com"
              target="_blank"
            ></a>
            <a href=""></a>
          </div>
          <div>
            <form onSubmit={sendMail} ref={formRef}>
              <div>간편 메일</div>
              <div>
                <div>
                  <label>이름</label>
                  <input
                    onChange={onChange}
                    value={form["from_name"]}
                    name="from_name"
                    type="text"
                  />
                </div>
                <div>
                  <label>연락처</label>
                  <input
                    onChange={onChange}
                    value={form.phone}
                    name="phone"
                    type="text"
                  />
                </div>
                <div>
                  <label>내용</label>
                  <textarea
                    spellCheck="false"
                    onChange={onChange}
                    value={form.text}
                    name="text"
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
