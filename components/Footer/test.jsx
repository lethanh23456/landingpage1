import { Col, Row } from "antd";
import React from "react";
import Box from "components/Box";
import LogoImage from "assets/image/hosting/ptit-logo.png";
import Container from "components/UI/Container";
// NOTE: Giữ lại các import cần thiết, có thể loại bỏ các Wrapper từ style cũ không dùng đến nhưng vẫn import để không break code nếu có file nào khác đang depend.
import {
  Image,
} from "./index.style";

const GlobalFooter = () => (
  // NOTE: Đổi màu nền Box thành màu đỏ theo thiết kế, padding top/bottom.
  <Box style={{ backgroundColor: "#b31313", color: "#ffffff", paddingTop: '40px', paddingBottom: '20px', fontFamily: "Roboto, sans-serif" }}>
    <Container>
      <div style={{ width: '100%' }}>
        
        {/* NOTE: SECTION 1 - Header Footer (Logo, Title, Social Icons) */}
        <Row type="flex" justify="space-between" align="middle" style={{ paddingBottom: '30px', borderBottom: '1px dashed rgba(255,255,255,0.3)' }}>
          <Col xs={24} md={18} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            {/* NOTE: Dùng CSS filter để chuyển logo màu (nếu có) sang màu trắng */}
            <Image 
              style={{ width: "80px", marginRight: '20px', filter: 'brightness(0) invert(1)' }} 
              src={LogoImage} 
              alt="logo" 
            />
            <div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>
                Học viện Công nghệ Bưu chính Viễn thông
              </div>
              <div style={{ fontSize: '22px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '5px' }}>
                Hệ thống tra cứu văn bằng chứng chỉ PTIT
              </div>
            </div>
          </Col>
          <Col xs={24} md={6} style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
            {/* NOTE: Social Icons dùng SVG inline để đồng nhất với convention icon cũ của dự án */}
            <a href="https://www.facebook.com/ptittuyensinh/" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>
              <svg width="18" height="18" fill="white" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>
              <svg width="20" height="20" fill="white" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            </a>
          </Col>
        </Row>

        {/* NOTE: SECTION 2 - Thông tin liên hệ & Địa chỉ (3 cột) */}
        <Row style={{ paddingTop: '30px', paddingBottom: '30px', borderBottom: '1px dashed rgba(255,255,255,0.3)' }} gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '8px' }}>Số điện thoại liên hệ</div>
              <div style={{ fontSize: '15px' }}>
                <a href="tel:02437562186" style={{ color: 'white' }}>024 3756 2186</a>
              </div>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '8px' }}>Email liên hệ</div>
              <div style={{ fontSize: '15px' }}>
                <a href="mailto:khoa@ptit.edu.vn" style={{ color: 'white' }}>khoa@ptit.edu.vn</a>
              </div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '8px' }}>Trụ sở chính</div>
              <div style={{ fontSize: '15px' }}>122 Hoàng Quốc Việt, P. Nghĩa Đô, Hà Nội</div>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '8px' }}>Cơ sở đào tạo tại Hà Nội</div>
              <div style={{ fontSize: '15px' }}>96 Trần Phú, P. Hà Đông, Hà Nội</div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '8px' }}>Học viện cơ sở tại TP. Hồ Chí Minh</div>
              <div style={{ fontSize: '15px' }}>11 Nguyễn Đình Chiểu, P. Sài Gòn, TP Hồ Chí Minh</div>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '8px' }}>Cơ sở đào tạo tại TP Hồ Chí Minh</div>
              <div style={{ fontSize: '15px' }}>97 Man Thiện, P. Tăng Nhơn Phú, TP Hồ Chí Minh</div>
            </div>
          </Col>
        </Row>

        {/* NOTE: SECTION 3 - Đường dẫn liên kết */}
        <Row style={{ paddingTop: '30px', paddingBottom: '30px', borderBottom: '1px dashed rgba(255,255,255,0.3)' }}>
          <Col span={24}>
            <div style={{ textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '20px', fontSize: '13px' }}>
              Đường dẫn liên kết
            </div>
          </Col>
          <Col span={24}>
            <Row gutter={[32, 16]}>
              <Col xs={24} md={8}>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Bộ Thông tin và Truyền thông</a></div>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Viện Khoa học Kỹ thuật Bưu điện</a></div>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Viện Kinh tế Bưu điện</a></div>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Viện Công nghệ Thông tin và Truyền thông CDIT</a></div>
              </Col>
              <Col xs={24} md={8}>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Học viện Cơ sở TP. Hồ Chí Minh</a></div>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Trung tâm Đào tạo Bưu chính Viễn thông 1</a></div>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Trung tâm Đào tạo Bưu chính Viễn thông 2</a></div>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Trung tâm Đào tạo Quốc tế</a></div>
              </Col>
              <Col xs={24} md={8}>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Cổng thông tin Đào tạo</a></div>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Cổng thông tin Khoa học Công nghệ</a></div>
                <div style={{ marginBottom: '12px' }}><a href="#" style={{ color: 'white', fontSize: '14px' }}>Cổng thông tin Hợp tác Quốc tế</a></div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* NOTE: SECTION 4 - Copyright */}
        <Row style={{ paddingTop: '20px' }}>
          <Col span={24} style={{ textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: '13px' }}>
            © Copyright 2026 HocVienCongNgheBuuChinhVienThong, All rights reserved ® Học viện Công nghệ Bưu chính Viễn thông giữ bản quyền nội dung trên website này
          </Col>
        </Row>
        
      </div>
    </Container>
  </Box>
);

export default GlobalFooter;