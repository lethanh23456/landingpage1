// eslint-disable-next-line react/prefer-stateless-function
import _ from 'lodash';
import Link from 'next/link';
import React from "react";
import BangVanBan from './components/Table';
import TinTuc from './components/Tintuc';
import {
    ButtonDetailWrapper, ContainerWrapperFirst, ContainerWrapperSecond,
    TableWrapper, Topp,
    TopTitle, Wrapper,
    WrapperFirst,
    WrapperFirstTitle, WrapperSecond
} from './index.style';

const ThuMuc = ({ data }) => {
    const taiLieu = _.get(data, '[0].taiLieu', []);
    const dsTaiLieu = taiLieu.map((item, index) => ({
        taiLieu: _.get(item, 'taiLieu', ''),
        ten: _.get(item, 'ten', ''),
        view: _.get(item, 'view', 0),
        index: index + 1,
    }))
    console.log(data, 'dsTaiLieu');
    return (
        <div>
            <Wrapper>
                <ContainerWrapperFirst>
                    <WrapperFirst>
                        <WrapperFirstTitle>
                            {_.get(data?.[0] ?? {}, 'tenThuMuc', '')}
                        </WrapperFirstTitle>
                    </WrapperFirst>
                    <TableWrapper>
                        {/* <Link href={taiLieu}> */}
                        <BangVanBan dsTaiLieu={dsTaiLieu} />
                        {/* </Link> */}
                    </TableWrapper>
                </ContainerWrapperFirst>
                <ContainerWrapperSecond>
                    <WrapperSecond>
                        <Topp>
                            <TopTitle>
                                THÔNG BÁO
                            </TopTitle>
                        </Topp>
                        <div
                            style={{
                                width: "120",
                                marginTop: 20,
                                textAlign: "center",
                            }}
                        >
                            <Link href="/tintucchung#thongbao">
                                <a
                                    style={{
                                        width: "135",
                                        display: "inline-flex",
                                    }}
                                    className="button-more"
                                    href="/tintucchung#thongbao"
                                >
                                    <ButtonDetailWrapper
                                        type="button"
                                        style={{
                                            margin: "0 auto",
                                        }}
                                    >
                                        <div
                                            style={{
                                                margin: "0 auto",
                                                fontWeight: 500,
                                                fontSize: "16px",
                                            }}
                                        >
                                            Xem chi tiết
                                    </div>
                                    </ButtonDetailWrapper>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <TinTuc />
                        </div>
                    </WrapperSecond>
                </ContainerWrapperSecond>
            </Wrapper>
        </div>
    );
};

export default ThuMuc;