/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Container from '../UI/Container';
import {
  GoTo, TitleHTML,
  WrapperCard
} from './CardHTML.style';


export function TongQuan({ tongQuan }) {
  console.log(tongQuan, 'card html')
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Container>
        <GoTo id="tongquan" />
        <WrapperCard order="first" >
          <TitleHTML>Tổng quan</TitleHTML>
          <div dangerouslySetInnerHTML={{ __html: tongQuan }} />
        </WrapperCard>
      </Container>
    </div>
  );
}

export function ChuanDauRa({ chuanDauRa }) {
  return (
    <WrapperCard type="grey" style={{ paddingBottom: '20px' }}>
      <GoTo id="chuandaura" />
      <Container>
        <TitleHTML>Chuẩn đầu ra </TitleHTML>
        <div style={{ width: '100%', textAlign: 'justify' }}>
          <div dangerouslySetInnerHTML={{ __html: chuanDauRa }} />
        </div>
      </Container>
    </WrapperCard>
  );
}

export function TrienVongNgheNghiep({ ngheNghiep }) {
  return (
    <WrapperCard style={{ padding: '0px 0px 20px 0px', backgroundColor: '#fff' }}>
      <GoTo id="nghenghiep" />

      <Container>
        <TitleHTML>Triển vọng nghề nghiệp </TitleHTML>
        <div dangerouslySetInnerHTML={{ __html: ngheNghiep }} />
      </Container>
    </WrapperCard>
  );
}

export function HocPhi({ hocPhi }) {
  return (
    <WrapperCard type="grey">
      <GoTo id="hocphi" />
      <Container>
        <TitleHTML>Học phí</TitleHTML>
        <div dangerouslySetInnerHTML={{ __html: hocPhi }} />
      </Container>
    </WrapperCard>
  );
}

export function DieuienTuyenSinh({ dieuKienTuyenSinh }) {
  return (
    <WrapperCard style={{ backgroundColor: '#fff' }}>
      <GoTo id="dieukientuyensinh" />

      <Container>
        <TitleHTML>Điều kiện tuyển sinh</TitleHTML>
        <div dangerouslySetInnerHTML={{ __html: dieuKienTuyenSinh }} />
      </Container>
    </WrapperCard>
  );
}
