import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/fonts/ChampagneLimousines-Bold.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/fonts/ChampagneLimousines.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/fonts/Couture-Bold.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/fonts/KeepCalm-Medium.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/fonts/MiravaRegularPersonalUseOnl.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/fonts/WellandDemo.woff2"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/fonts/HeyAugust.woff2"
          />

          <meta name="title" content="Zelr Portfolio" />
          <meta
            name="description"
            content={
              "Hi, I'm zelr. I've been coding for 3 years and I am experienced in React & Typescript. I have built a couple projects such as BetterCharts and Netor. I use VSCode as my IDE and usually use Debian on WSL. My favourite hosting platforms Heroku (for Python & Elixir) and Vercel for web hosting."
            }
          />
          <meta
            name="keywords"
            content="zellr, nextjs, portfolio, react, javascript, js, ts, typescript"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="5 days" />
          <meta name="author" content="zelr" />
          <meta property="og:title" content="Zelr Portfolio" />
          <meta
            property="og:description"
            content={
              "Hi, I'm zelr. I've been coding for 3 years and I am experienced in React & Typescript. I have built a couple projects such as BetterCharts and Netor. I use VSCode as my IDE and usually use Debian on WSL. My favourite hosting platforms Heroku (for Python & Elixir) and Vercel for web hosting."
            }
          />
          <meta property="og:url" content="https://zelr.me/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
