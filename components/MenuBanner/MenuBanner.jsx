// eslint-disable-next-line react/prefer-stateless-function
import { Col, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  RowStyle,
  Title,
  TitleUnderWrapper,
  CenteredDiv,
  WrapperMenuBanner,
  WrapperIcon,
  WrapperContentBanner,
  WrapperTitle,
} from './menu.style';

const data = [
  {
    icon: <Icon1 />,
    title: 'Thông điệp của Giám đốc Học viện',
    url: '/thongdiep',
  },
  {
    icon: <Icon2 />,
    title: 'Tổng quan Học viện',
    url: '/tongquanhocvien',
  },
  // {
  //   icon: <Icon3 />,
  //   title: 'Cơ cấu tổ chức Học viện',
  //   url: '/cocautochuc',
  // },
  {
    icon: <Icon4 />,
    title: 'Nguồn nhân lực Học viện',
    url: '/nguonnhanluc',
  },
  {
    icon: <Icon5 />,
    title: 'Cơ sở vật chất Học viện',
    url: '/csvc',
  },
];

const MenuBanner = ({ }) => (
  // <RowStyle>
  <WrapperMenuBanner>
    <Row
      type="flex"
      gutter={[24, 24]}
      align="middle"
      justify="center"
      style={{ padding: '10px 36px' }}
    >
      {data?.map(({ title, icon, url }, index) => (
        <>
          <Col xs={24} lg={5}>
            <Row
              gutter={0}
              type="flex"
              justify="space-around"
              align="middle"
              style={{ alignItems: 'stretch' }}
            >
              <Col span={24}>
                <WrapperIcon>
                  <CenteredDiv>{icon}</CenteredDiv>
                </WrapperIcon>
                <WrapperTitle>
                  <CenteredDiv>
                    <Link href={url} style={{ cursor: 'pointer' }}>
                      <Title>{title}</Title>
                    </Link>
                  </CenteredDiv>
                </WrapperTitle>
              </Col>
            </Row>
          </Col>
          {index < 3 && (
            <Col xs={0} lg={1}>
              <TitleUnderWrapper />
            </Col>
          )}
        </>
      ))}
    </Row>
  </WrapperMenuBanner>
  // </RowStyle>
  //   </Container>
  // </Box >
);
export default MenuBanner;
