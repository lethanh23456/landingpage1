// import Sticky from 'react-stickynode';
// import { DrawerProvider } from 'common/src/contexts/DrawerContext';
// import Navbar from 'common/src/containers/Hosting/Navbar';
// import Footer from 'common/src/components/Footer/index';
import { Affix, Button, Icon } from "antd";
import { ResetCSS } from "assets/css/style";
import logo from "assets/image/hosting/logo.png";
import Navbar from "components/Navbar";
// import Navbar from '../../../common/src/containers/Hosting/Navbar'
import Footer from "components/Footer/index";
import Head from "next/head";
// import Footer from 'common/src/containers/Hosting/Footer';
import { ParallaxProvider } from "react-scroll-parallax";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { hostingTheme } from "./hosting";
import { ContentWrapper, GlobalStyle } from "./hosting.style";

const name = "TomCatJS";
export const siteTitle = "Tuyển sinh PTIT";

export default function Layout({ children, home }) {
  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Head>
        <link rel="prefetch" href="/favicon.ico" />
        <link rel="prefetch" href="/assets/image/hosting/logo.png" />
        <link rel="prerender" href="https://daotao.aisenote.com/" />
        <link rel="prerender" href="https://tuyensinh2.ptit.edu.vn/" />
        <link />
        <title>
          HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG, CỔNG THÔNG TIN PHÒNG ĐÀO TẠO
        </title>
        <meta
          name="Description"
          content="HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG, CỔNG THÔNG TIN PHÒNG ĐÀO TẠO"
        />
        <meta name="theme-color" content="#eb4d4b" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
          // rel="Prefetch"
          rel="preload"
          as="font"
        />
        <meta
          name="description"
          content="Phòng Đào tạo Học viện Công nghệ Bưu chính viễn thông"
        />
        <meta property="og:image" content={logo} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* navbar */}

      <ThemeProvider theme={hostingTheme}>
        <ParallaxProvider>
          <ResetCSS />
          <GlobalStyle />

          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <Navbar />
            </Sticky>

            {children}
            <Footer />
            <Affix offsetBottom={200} innerZ={99999}>
              <Button
                type="primary"
                style={{
                  float: "right",
                  margin: 20,
                  backgroundColor: "#D10000",
                  borderRadius: "40%",
                }}
                onClick={scrollToTop}
              >
                <Icon type="arrow-up" />
              </Button>
            </Affix>
          </ContentWrapper>
        </ParallaxProvider>
      </ThemeProvider>
    </div>
  );
}
