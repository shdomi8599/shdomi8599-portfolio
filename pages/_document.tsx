import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import type { DocumentContext, DocumentInitialProps } from "next/document";

type Props = {
  styles: React.ReactElement[];
};

function MyDocument({ styles }: Props) {
  return (
    <Html lang="en">
      <Head>{styles}</Head>
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
    const slickArr = [
      "/css/slick-carousel.css",
      "/node_modules/slick-carousel/slick/slick.css",
      "/node_modules/slick-carousel/slick/slick-theme.css",
    ];
    slickArr.map((src, i) =>
      styles.push(<link key={i} rel="stylesheet" type="text/css" href={src} />)
    );
    return { ...initialProps, styles };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
