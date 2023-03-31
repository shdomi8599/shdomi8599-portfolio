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
        <meta name="description" content="shdomi8599의 포트폴리오입니다." />
        <meta property="og:title" content="shdomi8599의 포트폴리오" />
        <meta
          property="og:description"
          content="shdomi8599의 포트폴리오입니다."
        />
        <meta property="og:image" content="/portfolio/p1.png" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="shdomi8599의 포트폴리오" />
        <meta
          name="twitter:description"
          content="shdomi8599의 포트폴리오입니다."
        />
        <meta name="twitter:image" content="/portfolio/p1.png" />
        <link rel="canonical" href="http://localhost:3000/" />
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
