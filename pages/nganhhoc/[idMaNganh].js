/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Breadcrumb, Col } from 'antd';
import axios from 'axios';
import bgNganhHOc from 'assets/image/imageHocVien.png';
import ThongTinCoBan from 'components/CardThongTinNganhHoc/Card';
import CardCauTruc from 'components/CardThongTinNganhHoc/CardCauTruc';
import {
  ChuanDauRa,
  DieuienTuyenSinh, HocPhi, TongQuan,
  TrienVongNgheNghiep
} from 'components/CardThongTinNganhHoc/CardHTML';
import QuyTrinhNhapHoc from 'components/CardThongTinNganhHoc/QuyTrinhNhapHoc';
import Container from 'components/UI/Container';
import Navbar from 'components/CardThongTinNganhHoc/NavbarNganhHoc/index';
import { ip } from 'data/ip';
import { BackGR, Title } from 'components/CardThongTinNganhHoc/nganhhoc.style';
import _ from 'lodash';
import { NextSeo } from 'next-seo';
import React from 'react';
import Box from 'components/Box';

const dataBreadCrumb = [
  { name: 'Trang chủ', url: '/' },
  { name: 'Chương trình đào tạo', url: '#' },
  { name: 'Đào tạo đại học', url: '#' },
];

const dataNav = [
  { name: 'Tổng quan', url: '#tongquan' },
  { name: 'Chuẩn đầu ra', url: '#chuandaura' },
  { name: 'Cấu trúc chương trình', url: '#cautrucchuongtrinh' },
  { name: 'Nghề nghiệp', url: '#nghenghiep' },
  { name: 'Học phí', url: '#hocphi' },
  { name: 'Điều kiện tuyển sinh', url: '#dieukientuyensinh' },
  { name: 'Quy trình nhập học', url: '#quytrinhnhaphoc' },
];

const NganhHoc = ({ dataFetch, params }) => {
  const Format = str => {
    // xóa hết dấu + đưa về chữ thường
    if (!str) return '';
    return str
      .toString()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/đ/g, 'd')
      .replace(/\s/g, '');
  }
  console.log(params, 'data');
  let data;
  if (dataFetch === undefined || dataFetch.length === 0 || dataFetch === null) {
    data = [
      {
        maNganh: '',
        thoiGianDaoTao: '',
        kyNhapHoc: '',
        hanNopHoSo: '',
        coSo: '',
        tongQuan: '',
        chuanDauRa: '',
        cauTrucChuongTrinh: [],
        hocPhanTuChon: [],
        ngheNghiep: '',
        hocPhi: '',
        dieuKienTuyenSinh: '',
        tenChuyenNganh: '',
      },
    ];
  } else {
    data = dataFetch;
  }
  const namO = {
    maNganh: _.get(data[0], 'maNganh', ''),
    thoiGianDaoTao: _.get(data[0], 'thoiGianDaoTao', ''),
    kyNhapHoc: _.get(data[0], 'kyNhapHoc', ''),
    hanNopHoSo: _.get(data[0], 'hanNopHoSo', ''),
    coSo: _.get(data[0], 'coSo', ''),
  };
  const tongQuan = _.get(data[0], 'tongQuan', '');
  const chuanDauRa = _.get(data[0], 'chuanDauRa', '');
  let monTinChi = _.get(data[0], 'cauTrucChuongTrinh', []);
  const ngheNghiep = _.get(data[0], 'ngheNghiep', '');
  const hocPhi = _.get(data[0], 'hocPhi', '');
  const dieuKienTuyenSinh = _.get(data[0], 'dieuKienTuyenSinh', '');
  console.log(Format('Chuyên ngành tiếng anh'), 'data idnganh');
  monTinChi = monTinChi.map(item => ({
    ...item,
    anchor: Format(item.tenChuyenNganh),
  }))
  console.log(monTinChi, 'data idnganh');
  return (
    <>
      <NextSeo
        title={data[0]?.tenNganh}
        description="Thông tin chi tiết về các ngành học tại Học viện Công nghệ Bưu chính Viễn thông"
        canonical="https://daotaoftu.aisenote.com/"
        openGraph={{
          url: `https://daotaoftu.aisenote.com/nganhhoc/${namO?.maNganh}`,
          title: data[0]?.tenNganh,
          description:
            'Thông tin chi tiết về các ngành học tại Học viện Công nghệ Bưu chính Viễn thông',
          images: [
            {
              url: bgNganhHOc,
              width: 800,
              height: 600,
              alt: 'Tin tức',
            },
          ],
          site_name: 'Phòng Đào tạo Học viện Công nghệ Bưu chính Viễn thông',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Box >
        <div
          gutter={15}
          style={{
            width: '100%',
            margin: '0px auto',
            padding: '30px 0',
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: 'white'
          }}
        >
          {data &&
            data.map((item, index) => (
              <Col lg={24} xl={24} md={24} xs={24} sm={24}>
                <div id="content" style={{ listStyleType: 'unset' }} >
                  <BackGR style={{ backgroundImage: `url("${_.get(item, 'banner', '')}")` }}  >
                    <Title>{_.get(item, 'tenNganh', '')}</Title>
                    <div id="gioiThieu" />
                  </BackGR>
                  <div style={{ backgroundColor: '#fff' }}>
                    <Container>
                      <div
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          height: 72,
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: 16,
                        }}
                      >
                        <Breadcrumb
                          style={{
                            fontSize: 16,
                          }}
                        >
                          {dataBreadCrumb?.map(({ name, url }) => {
                            if (name === 'Trang chủ') {
                              return (
                                <Breadcrumb.Item>
                                  <a href={url}>{name}</a>
                                </Breadcrumb.Item>
                              )
                            }
                            else {
                              return (
                                <Breadcrumb.Item>
                                  {name}
                                </Breadcrumb.Item>
                              )
                            }
                          })}
                          <Breadcrumb.Item>
                            {_.get(item, 'tenNganh', '')}
                          </Breadcrumb.Item>
                        </Breadcrumb>
                      </div>
                    </Container>
                  </div>
                  <ThongTinCoBan namO={namO} />
                  <Navbar data={dataNav} maNganh={_.get(data[0], 'maNganh', '')} monTinChi={monTinChi} />
                  <TongQuan tongQuan={tongQuan} />
                  <ChuanDauRa chuanDauRa={chuanDauRa} />
                  <CardCauTruc data={monTinChi} />
                  <TrienVongNgheNghiep ngheNghiep={ngheNghiep} />
                  <HocPhi hocPhi={hocPhi} />
                  <DieuienTuyenSinh dieuKienTuyenSinh={dieuKienTuyenSinh} />
                  <QuyTrinhNhapHoc />
                </div>
              </Col>
            ))}
        </div>
      </Box>
    </>
  );
};

export async function getServerSideProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // chi tiết bài viết
  // console.log(response, 'tin tuc bai viet');
  // relate
  const response = await axios.get(`${ip}/nganh-hoc`, {
    params: {
      cond: {
        maNganh: params.idMaNganh,
      },
    },
  });
  const dataFetch = _.get(response, 'data.data', {});

  // By returning { props: data }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      dataFetch,
      params,
    },
  };
}

export default NganhHoc;
