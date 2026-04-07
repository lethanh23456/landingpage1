import { Col, Row } from "antd";
import React from "react";
import Box from "components/Box";
import LogoImage from "assets/image/hosting/ptit-logo.png";
import BgImage from "assets/image/hosting/bg-footer.png";
import Container from "components/UI/Container";
import { Image, FooterWhiteLink } from "./index.style";

const GlobalFooter = () => (
  <Box 
    style={{ 
      background: `linear-gradient(rgba(159, 17, 17, 0.95), rgba(159, 17, 17, 0.95)), url(${BgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: "#ffffff", 
      paddingTop: '40px', 
      paddingBottom: '0px',
      fontFamily: "Roboto, sans-serif" 
    }}
  >
    <Container>
      <div style={{ width: '100%' }}>
        <Row type="flex" justify="space-between" align="middle" style={{ paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.3)' }}>
          <Col xs={24} md={18} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ position: 'relative', width: '65.67px', height: '80px', flexShrink: 0, marginRight: '20px' }}>
              <Image 
                style={{ position: 'absolute', left: '0px', top: '0px', width: '65.67px', height: '80px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
                src={LogoImage} 
                alt="logo" 
              />
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                Học viện Công nghệ Bưu chính Viễn thông
              </div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '5px' }}>
                Hệ thống tra cứu văn bằng chứng chỉ PTIT
              </div>
            </div>
          </Col>

          <Col xs={24} md={6} style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
            <a href="https://www.facebook.com/ptittuyensinh/" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>
              <svg width="18" height="18" fill="white" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </a>
            <a href="https://www.youtube.com/@pchannels" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>
              <svg width="20" height="20" fill="white" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            </a>
          </Col>
        </Row>

        <Row style={{ paddingTop: '30px', paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.3)' }} gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '8px' }}>Số điện thoại liên hệ</div>
              <div style={{ fontSize: '16px' }}>
                <FooterWhiteLink href="tel:02437562186" style={{ color: 'white' }}>024 3756 2186</FooterWhiteLink>
              </div>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '8px' }}>Email liên hệ</div>
              <div style={{ fontSize: '16px' }}>
                <FooterWhiteLink href="mailto:khoa@ptit.edu.vn" style={{ color: 'white' }}>khoa@ptit.edu.vn</FooterWhiteLink>
              </div>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '8px' }}>Trụ sở chính</div>
              <FooterWhiteLink 
                href="https://maps.app.goo.gl/im73dbP78xfvBoso7" 
                target="_blank" 
                rel="noreferrer"
                style={{ fontSize: '16px' }}
              >
                122 Hoàng Quốc Việt, P. Nghĩa Đô, Hà Nội
              </FooterWhiteLink>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '8px' }}>Cơ sở đào tạo tại Hà Nội</div>
              <FooterWhiteLink 
                href="https://maps.app.goo.gl/rpS4LiC4TdxDSgJB6" 
                target="_blank" 
                rel="noreferrer"
                style={{ fontSize: '16px' }}
              >
                96 Trần Phú, P. Hà Đông, Hà Nội
              </FooterWhiteLink>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '8px' }}>Học viện cơ sở tại TP. Hồ Chí Minh</div>
              <FooterWhiteLink 
                href="https://maps.app.goo.gl/trMaCQiJFze2yviJ8" 
                target="_blank" 
                rel="noreferrer"
                style={{ fontSize: '16px' }}
              >
                11 Nguyễn Đình Chiểu, P. Sài Gòn, TP Hồ Chí Minh
              </FooterWhiteLink>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '8px' }}>Cơ sở đào tạo tại TP Hồ Chí Minh</div>
              <FooterWhiteLink 
                href="https://maps.app.goo.gl/BW6qjK2kpP8yyUAz6" 
                target="_blank" 
                rel="noreferrer"
                style={{ fontSize: '16px' }}
              >
                97 Man Thiện, P. Tăng Nhơn Phú, TP Hồ Chí Minh
              </FooterWhiteLink>
            </div>
          </Col>
        </Row>

        <Row style={{ paddingTop: '30px', paddingBottom: '30px'}}>
          <Col span={24}>
            <div style={{ textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '20px', fontSize: '15px' }}>
              Đường dẫn liên kết
            </div>
          </Col>

          <Col span={24}>
            <Row gutter={[32, 16]}>
              <Col xs={24} md={8}>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://www.most.gov.vn/" target="_blank" style={{ color: 'white', fontSize: '16px' }}>Bộ Khoa học và Công nghệ</FooterWhiteLink></div>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://ript.vn/" target="_blank" style={{ color: 'white', fontSize: '16px' }}>Viện Khoa học Kỹ thuật Bưu điện</FooterWhiteLink></div>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://eript.ptit.edu.vn/" target="_blank" style={{ color: 'white', fontSize: '16px' }}>Viện Kinh tế Bưu điện</FooterWhiteLink></div>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://cdit.ptit.edu.vn/" target="_blank" style={{ color: 'white', fontSize: '16px' }}>Viện Công nghệ Thông tin và Truyền thông CDIT</FooterWhiteLink></div>
              </Col>

              <Col xs={24} md={8}>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://ptithcm.edu.vn/" target="_blank" style={{ color: 'white', fontSize: '16px' }}>Học viện Cơ sở TP. Hồ Chí Minh</FooterWhiteLink></div>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://pttc1.edu.vn/" target="_blank" style={{ color: 'white', fontSize: '16px' }}>Trung tâm Đào tạo Bưu chính Viễn thông 1</FooterWhiteLink></div>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://pttc.edu.vn/" target="_blank" style={{ color: 'white', fontSize: '16px' }}>Trung tâm Đào tạo Bưu chính Viễn thông 2</FooterWhiteLink></div>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://cie.ptit.edu.vn/" target="_  blank" style={{ color: 'white', fontSize: '16px' }}>Trung tâm Đào tạo Quốc tế</FooterWhiteLink></div>
              </Col>

              <Col xs={24} md={8}>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://daotao.ptit.edu.vn/" target="_blank" style={{ color: 'white', fontSize: '16px' }}>Cổng thông tin Đào tạo</FooterWhiteLink></div>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://khcn.ptit.edu.vn/" target="_blank" style={{ color: 'white', fontSize: '16px' }}>Cổng thông tin Khoa học Công nghệ</FooterWhiteLink></div>
                <div style={{ marginBottom: '12px' }}><FooterWhiteLink href="https://english.ptit.edu.vn/vi/" target="_blank" style={{ color: 'white', fontSize: '16px' }}>Cổng thông tin Hợp tác Quốc tế</FooterWhiteLink></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>

    <div style={{ backgroundColor: "#941A1A", padding: "24px 0", marginTop: "20px" }}>
      <Container>
        <Row>
          <Col span={24} style={{ textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: '13px' }}>
            © Copyright {new Date().getFullYear()} HocVienCongNgheBuuChinhVienThong, All rights reserved ® Học viện Công nghệ Bưu chính Viễn thông giữ bản quyền nội dung trên website này
          </Col>
        </Row>
      </Container>
    </div>

  </Box>
);

export default GlobalFooter;
