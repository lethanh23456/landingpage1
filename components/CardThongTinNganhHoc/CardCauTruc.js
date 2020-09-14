import { Divider } from 'antd';
import TienQuyetHocPhan from 'components/CardThongTinNganhHoc/TienQuyetHocPhan';
import React from 'react';
import Container from '../UI/Container';
import {
  CardHocKy,
  CardMon,
  ContainerWrapper, RowHocKy,
  TitleCauTruc,
  WrapperCard
} from './CardCauTruc.style';
import { ContentHTML, GoTo, TitleHTML, WrapperCard as WrapperCardTitle } from './CardHTML.style';



export default function Card({ data }) {
  console.log(data, 'cauTrucChuongTrinh');

  return (
    <WrapperCardTitle style={{ paddingBottom: 0 }}>
      <GoTo id="cautrucchuongtrinh" />
      <Container>
        <TitleHTML>Cấu trúc chương trình các chuyên ngành</TitleHTML>
      </Container>
      {data.map(item => {
        const { hocPhanTuChon, cauTrucChuongTrinh, tenChuyenNganh, anchor } = item;
        return (
          <>
            <GoTo id={`${anchor}`} />
            <Container>
              <ContentHTML>
                {' '}
                <b>Tiến trình học tập theo học chế tín chỉ - Chuyên ngành: {tenChuyenNganh}</b>
              </ContentHTML>
            </Container>
            <ContainerWrapper>
              {cauTrucChuongTrinh.map(({ hocKy, soTinChi, monHoc }) => (
                <RowHocKy>
                  <WrapperCard>
                    <CardHocKy>
                      <TitleCauTruc>{`Học kỳ ${hocKy}`}</TitleCauTruc>
                      <div>{`(${soTinChi} TC)`}</div>
                    </CardHocKy>
                  </WrapperCard>
                  {monHoc?.map(({ tenMonHoc, soTinChi: soTin, type }) => (
                    <WrapperCard>
                      <CardMon type={type}>
                        <TitleCauTruc>{tenMonHoc}</TitleCauTruc>
                        <div>{`(${soTin} TC)`}</div>
                      </CardMon>
                    </WrapperCard>
                  ))}
                </RowHocKy>
              ))}
            </ContainerWrapper>
            <Container>
              <TienQuyetHocPhan hocPhanTuChon={hocPhanTuChon} />
            </Container>
            <Container>
              <Divider />
            </Container>
          </>
        )
      })}

    </WrapperCardTitle>
  );
}
