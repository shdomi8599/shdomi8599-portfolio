import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";
import Row from "../common/Row";
import SkillCard from "../common/SkillCard";

type ColProps = {
  checkFront?: string;
};

const Col = styled.div<ColProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
  padding-left: ${(props) => props.checkFront && "calc((100% - 950px) / 2)"};
  padding-right: ${(props) => !props.checkFront && "calc((100% - 950px) / 2)"};

  @media (min-width: 768px) {
    width: calc(100% / 2);
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: ${(props) => props.checkFront && "0"};
  }
`;

const Skills = () => {
  const skillData = [
    {
      name: "Frontend",
      img: "https://lh3.googleusercontent.com/qAuD-jmlOa7SShQ0Zp47PiBM8W9VagzZbJq3LB-RGfulQWCcDbyv4M92jrPfSro-9Cs2enyeYKzgnPi_9d7L518hS1LwLLDCfA5c_uq2CWXj5XvZJUj0YMzIFY9bILrNJ8k-wDIn4OjhfOQYNz3V_hUGd-QiKnA_75Mbnv7ufzXoblMzVb5iAqD_AMu8CvQCFqY9w0sl46fqsLQ8GZa-kG-1LZDwA7K8XAOFMGQo1Fe9YVasETpdTi2h_oAZD7-d0oXPeT8-Zwx9Y0a0xTZ4_LXRjjWQixjgOlgifMGap1KEFgBCXxmO2QQLbr99xywg95eLlRdRqlvWqisHUELIa-5yQQTblrliFjTWb48tVS1fgoj6bgNZxSHy3D-BWlG28UncdU2AybxTiFKZZe-6dBf4TzXSDokqfSVTdNKW2v09YFlPffKlonyDS9pUTHrPyYXZv5QCJfu-mF4exGo0PwTxPQtPDp7KMQ5lf9shFS0oqAWdDx8aModXGtwARfuSuzlWmDP8jt77d6HjqLflCBki7dThPnhZ2_ko_EUImtuDFq47neRCn68qE43tt3taWA5jQO1EwrHlorJH6xkk_6nxPI_7s3hhAWC0Rni-y_UoYALeosGPEe-t09OkfuDRufF5VHgTmR3k6qiF_qU1rKPhctKoCIcWRM-nYIMaQrSpelAOTH6Pkb2Y611sQNImGVk-Easm01efM7CdwadY0g4K2JmREzwtSYU2UNSKGPZt3mqMwTkiXIzzg777rs3WH2MWs-zmMesbWsc7BJNNe7EZP1nBxPCYEOuqmSgOW7FNM1vwo32iJ_4LrMmTCiXNik0Q8TNngFHWKiHO_kkaauGpxX1vStFBTAkIk3Qe5IQRGpN0kV4s1K1mtUIecQD5WYDG2TU1lypBBn42UkRkpqchx22a4qFnf5PTMEBTpV4z=w250-h397-no?authuser=0",
    },
    {
      name: "Backend",
      img: "https://lh3.googleusercontent.com/Izj7DiAyI4-eZMytcSaym-UEzvjkc0B3z3qYbnPD3SaS17K1FyGPyLmhyILZm6KJuMBWXuvst8b9eJ-e_svBveMRxsLnd8p5Jujw_KXU1CiizGmV-TevI-ygOfVv4Yz-aOKbHWyp0C65hxGfMRapeyALahQ6JaGVnlIDTNVo0zPzIkgNaCD3tgkjKkYj0wxtzEGgNY3Y2P8OE16XGyqrAQklTIV64tNsHO6FOQa8g2s_2koNP29TWd-DW0TreTYPZrt_XUOK2VtqjTse6zEGimoB9WcJVG9O0enewcCO-cWrfixDATmNdU0e_szy7pr5y1U5vexgRERavuigmIdEIPRkBgqdAsn66ohmqyluK-wCpT3ilYhedC7PzawtZhvWpOTZ-yvv4TjLLGY_MnyrnEF0JxBrBzEJrUJCbfPkd_inApFRyCHRlXtV1IGXW-HYXlmB8ybY4hQNng3F0qLV2dpXjkka94OZOEEmhU1_Dw7xQ1hM3pS6HnqCCoqFYcOnWY_qiYf4oX_oLb583pbW2AmPuXaXQkXKq6fizUfMl4BQTOMl2pwbiVL5BJBWXnrcCLnz4yhnOPuzZ7NUH5qp2vJO7W_P28eWnw7v9a8Yuwb6Bvdca-NoiBG7WoXVMz6GPohCP-FdIhLQX6KuUdSkuSgrVJ4SjNtosvd3JcNtUz_I84rWC0VC6uQ4iHghjJNZ5IROn1guXft1EJxup_-DrSJL2ncw97QmWiMWDema583rcx2IfB2kUFyqTU3zs-6fs0S8sc411IMs9K-27ANVZWuP3rs7pcz-kodRrHXELq4rWFP6V_RPxLkFL7AjQH0aHx1bodKls-4S78caDJp1IR02kiJJmNngcs9id90Xgvzsk11_Sk8Io8C1t06Qn-excfD9_aoPiVLBqiJtAboT1b9VtBF0sf5-XxEPvMWfeTkG=w250-h78-no?authuser=0",
    },
    {
      name: "Experienced",
      img: "https://lh3.googleusercontent.com/DkU__mliyrg1styX0bhYBiqvsn0CgZrSAyHbkuEbvXqbcD3CGiH2iUvmp0_SZyOhYtAkysXtegbm_WSDh5ifMSZ9LNq6GK_AiuCitYbHAcjlOIsSTFuADYLG1ukGhojd1YcI883HE4YGh5V_1w5tIk16bc7nf8nKVWr9587SxkLXzOJiyC7QhR0hmISmj1dlhdb8lHXHd-Qbh7nCchqzxX5pWcIddfjItkhylzkhzYKHzu1dIa4hDldC0g4b4aLL1tfYEmwOrqimcpAZogmWN0jHbHDeOyGhQffC6Zz-zRWanWMICIl_0hQOQvldZc65tJ0iR_hmgLpIcD4-UZg7Hek4DSZP6P2MqwBNPHA5BxrYMZVp7gEN-5Op-RN64_JiI01Ew7TxvA2ZjLKZTBX9NFmQTR3Yql1vrxtVzsEE62EfKvWBQAwSJcz9mWnOih9Uf8a6-6G75aH466JZwn_gPS74RaTJGh0xcT_lCN50AKtdmsXKvCg3GVgeiSIgUr-nwJXjrB_RNt5Mnl9TI60DPSt7iSTH588sbo4GhOb4Biknxm07g6avswira9tVWXIxh7AoEISp2fYB39C0XFVs199bUpiE2eww6nPz8G9gy8Z0KgV9z2GJWkImbK6f9fdxTY_jkaj38BXiVsCLWrFJQe7naKhTRHamSEzSk-bPxcBojANzFMrDmVysJZwXWAbVL3StIFkCu-WPFKS0xeM3LYT1a75GRH41gh4GYDizCPZGEGLHjqQybRtIXrJy9mqGSXIpvN6iRo3dJiCsJCzd8WNJGSLECapGz2OvbDcJ6rg_mw3zABVEBPXsgHIpVxdmGloJpg0vTpWchkrCZrSjMwqH4qnqR8b3Evg0bYuJNYizPKZK4-JzKnhAOSvfYg2gHBlRNpd-Gu9dcrz4p8Qz7JAhGDNzJDuhcwC81-EnswfD=w250-h216-no?authuser=0",
    },
  ];

  return (
    <ArticleBox name="Skills" addStyle={"skill-section"}>
      <Row>
        <Col checkFront="checkFront">
          <SkillCard skill={skillData[0]} />
        </Col>
        <Col>
          <SkillCard skill={skillData[1]} />
          <SkillCard skill={skillData[2]} />
        </Col>
      </Row>
    </ArticleBox>
  );
};

export default Skills;
