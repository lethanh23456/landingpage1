import { Col, Row } from 'antd';
import Group21 from 'assets/image/carousel/Group21.png';
import Group24 from 'assets/image/carousel/Group24.png';
import Group26 from 'assets/image/carousel/Group26.png';
import Group28 from 'assets/image/carousel/Group28.png';
import Image from 'components/Image';
import styled from 'styled-components';
import {
  ContainerCard,
  ContainerLink,
  ContentCT,
  DetailDescriptionCT,
  DetailTitleCT,
  LinkText,
  TitleCT,
} from './chitieu.style';
import {
  DescriptionInformation,
  ImageWrapper,
  InformationCN,
  InformationDT,
  InformationHP,
  InformationSV,
  TitleInformation,
} from './information.style';

s;

const DetailChiTieu = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

export const DATAINFOR = [
  <InformationSV>
    <ImageWrapper>
      <Image src={Group24} alt="InformationSV" />
    </ImageWrapper>
    <TitleInformation>3450 SINH VIÊN</TitleInformation>
    <DescriptionInformation>
      Trong kỳ tuyển sinh năm 2020, Học viện Công nghệ Bưu chính Viễn thông thông báo tuyển sinh
      3450 sinh viên đối với hệ đào tạo đại học chính quy.
    </DescriptionInformation>
  </InformationSV>,
  <InformationDT>
    <ImageWrapper>
      <Image src={Group28} alt="InformationDT" />
    </ImageWrapper>
    <TitleInformation>10 NGÀNH ĐÀO TẠO</TitleInformation>
    <DescriptionInformation>
      Trong kỳ tuyển sinh năm 2020, Học viện Công nghệ Bưu chính Viễn thông tiếp tục tuyển sinh với
      10 nhóm ngành đào tạo đang là xu hướng của cách mạng 4.0.
    </DescriptionInformation>
  </InformationDT>,
  <InformationCN>
    <ImageWrapper>
      <Image src={Group21} alt="InformationCN" />
    </ImageWrapper>
    <TitleInformation>96 CHUYÊN NGÀNH</TitleInformation>
    <DescriptionInformation>
      Với 96 chuyên ngành trong 10 nhóm ngành đào tạo, sinh viên Học viện Công nghệ Bưu chính Viễn
      thông luôn tự tin hội nhập với cách mạng công nghệ 4.0.
    </DescriptionInformation>
  </InformationCN>,
  <InformationHP>
    <ImageWrapper>
      <Image src={Group26} alt="InformationHP" />
    </ImageWrapper>
    <TitleInformation>100% MIỄN HỌC PHÍ</TitleInformation>
    <DescriptionInformation>
      Miễn 100% học phí trong nằm đầu đối với thí sinh đạt 27 điểm trở lên và 50% học phí năm đầu
      đối với thí sinh có kết quả thi từ 25,0 điểm đến 26,99 điểm.
    </DescriptionInformation>
  </InformationHP>,
];

export const dataCT = [
  {
    title: 'Ngành Công nghệ thông tin',
    chiTieu: 430,
    maNganh: 7520207,
    path: 'nganhhoc',
  },
  {
    title: 'Ngành An toàn thông tin',
    chiTieu: 200,
    maNganh: 7480202,
    path: 'https://portal.ptit.edu.vn/khoa-cong-nghe-thong-tin-1/',
  },
  {
    title: 'Ngành Kỹ thuật điện tử viễn thông',
    chiTieu: 430,
    maNganh: 7520207,
    path: 'https://portal.ptit.edu.vn/khoa-vien-thong-1/',
  },
  {
    title: 'Ngành Công nghệ kỹ thuật điện, điện tử',
    chiTieu: 250,
    maNganh: 7510301,
    path: 'https://portal.ptit.edu.vn/khoa-ky-thuat-dien-tu-1/',
  },
  {
    title: 'Ngành Công nghệ đa phương tiện',
    chiTieu: 250,
    maNganh: 7329001,
    path: 'https://portal.ptit.edu.vn/khoa-da-phuong-tien/',
  },
  {
    title: 'Ngành Truyền thông đa phương tiện',
    chiTieu: 120,
    maNganh: 7320104,
    path: 'https://portal.ptit.edu.vn/khoa-da-phuong-tien/',
  },
  {
    title: 'Ngành Quản trị kinh doanh',
    chiTieu: 170,
    maNganh: 7340101,
    path: 'https://portal.ptit.edu.vn/khoa-quan-tri-kinh-doanh/',
  },
  {
    title: 'Ngành Kế toán',
    chiTieu: 200,
    maNganh: 7340301,
    path: 'https://portal.ptit.edu.vn/khoa-tai-chinh-ke-toan/',
  },
  {
    title: 'Ngành Marketing',
    chiTieu: 200,
    maNganh: 7340115,
    path: 'https://portal.ptit.edu.vn/nganh-hoc/marketing/',
  },
  {
    title: 'Ngành Thương mại điện tử',
    chiTieu: 80,
    maNganh: 7340122,
    path: 'https://portal.ptit.edu.vn/chuong-trinh-dao-tao/',
  },
];

export const DATACHITIEU = [
  <div>
    <TitleCT>CHỈ TIÊU TUYỂN SINH NĂM 2020</TitleCT>
    <ContentCT>
      <div>
        <Row gutter={[20, 20]}>
          {dataCT.map((item, index) => (
            <Col xs={24} sm={12} lg={8} key={`Col-Chi-Tiet-${index}`}>
              <ContainerCard>
                <DetailTitleCT>{item.title}</DetailTitleCT>
                <DetailChiTieu>{`Chỉ tiêu: ${item.chiTieu} sinh viên`}</DetailChiTieu>
                <DetailDescriptionCT>{`Mã ngành: ${item.maNganh}`}</DetailDescriptionCT>
                <ContainerLink className="container-link">
                  <LinkText href={item.path}>Xem chi tiết</LinkText>
                </ContainerLink>
              </ContainerCard>
            </Col>
          ))}
        </Row>
      </div>
    </ContentCT>
  </div>,
];
