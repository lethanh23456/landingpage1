import { Affix, Button, Icon } from "antd";
import { ResetCSS } from "assets/css/style";
import logo from "assets/image/hosting/logoftu.png";
import Footer from "components/Footer/index";
import { ContentWrapper, GlobalStyle } from "./hosting.style";
import Navbar from "components/Navbar";
import { hostingTheme } from "./hosting";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { LayoutWrapper } from "./Layout.style";


const name = "TomCatJS";
export const siteTitle = "Đào tạo FTU";

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
        <link rel="icon" href="/favicon.ico" />
        <title>ĐẠI HỌC NGOẠI THƯƠNG, CỔNG THÔNG TIN ĐÀO TẠO</title>
        <meta
          name="Description"
          content="ĐẠI HỌC NGOẠI THƯƠNG, CỔNG THÔNG TIN PHÒNG ĐÀO TẠO"
        />
        <meta name="theme-color" content="#eb4d4b" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
          rel="stylesheet"
        />
        <meta name="description" content="Phòng Đào tạo Đại học Ngoại thương" />
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

            {/* Khoảng cách từ trên cùng trang web đến nội dung trang (Độ cao của Menu */}
            {/* Menu cao bao nhiêu thì cần marginTop bấy nhiêu) */}
            {/* marginTop - Độ cao mặc đinh, */}
            {/* Table - Độ cao của mtinh bảng, */}
            {/* Mobile - Độ cao của Đt */}
            <LayoutWrapper marginTop={0} Table={0} Mobile={0}>{children}</LayoutWrapper>
            <Footer />
            <Affix offsetBottom={200} innerZ={99999}>
              <Button
                type="primary"
                style={{
                  float: "right",
                  margin: 20,
                  backgroundColor: "#940D0F",
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
    </div >
  );
}
