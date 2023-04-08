import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import type { DocumentContext, DocumentInitialProps } from "next/document";

type Props = {
  styles: React.ReactElement[];
};

function MyDocument({ styles }: Props) {
  return (
    <Html lang="ko">
      <Head>
        <title>프론트엔드 신동민 포트폴리오입니다.</title>
        <meta
          name="description"
          content="프론트엔드 지망생 신동민의 포트폴리오입니다."
        />
        <meta
          property="og:title"
          content="프론트엔드 지망생 신동민의 포트폴리오"
        />
        <meta
          property="og:description"
          content="프론트엔드 지망생 신동민의 포트폴리오입니다."
        />
        <meta property="og:image" content="/mainImg/mainImg.jpg" />
        <meta
          property="og:url"
          content="https://www.shdomi8599-portfolio.com"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="프론트엔드 지망생 신동민의 포트폴리오"
        />
        <meta
          name="twitter:description"
          content="프론트엔드 지망생 신동민의 포트폴리오입니다."
        />
        <meta name="twitter:image" content="/mainImg/mainImg.jpg" />
        <link rel="canonical" href="https://www.shdomi8599-portfolio.com" />
        <link rel="icon" href="/favicon.png" />
        {styles}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps & { styles: React.ReactElement[] }> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
    const initialProps = await Document.getInitialProps(ctx);
    const styles = sheet.getStyleElement();
    return { ...initialProps, styles };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
