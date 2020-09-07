import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import FavIcon from 'assets/image/favicon.png';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const fbCustomerChat = `       <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v7.0'
        });
      };
  
      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
  
    <!-- Your Chat Plugin code -->
    <div class="fb-customerchat"
      attribution=setup_tool
      page_id="115849243473188"
  logged_in_greeting="Xin chào, bạn muốn chúng tôi tư vấn gì không ?"
  logged_out_greeting="Xin chào, bạn muốn chúng tôi tư vấn gì không ?">
    </div>`;
    return (
      <html lang="vi">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: fbCustomerChat }} />
          <div
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
