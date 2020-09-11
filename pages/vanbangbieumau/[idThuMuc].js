import { Breadcrumb, Col } from 'antd';
import axios from 'axios';
import Container from 'components/UI/Container';
import { ip } from 'data/ip';
import _ from 'lodash';
import { NextSeo } from 'next-seo';
import React from 'react';
import Box from 'components/Box';
import ThuMuc from 'components/VanBanBieuMau/ThuMuc';

const VanBanBieuMau = ({ dataFetch, params }) => {
    let data;
    if (dataFetch === undefined || dataFetch.length === 0 || dataFetch === null) {
        data = [
            {},
        ];
    } else {
        data = dataFetch;
    }

    const dataBreadCrumb = [
        { name: 'Trang chủ', url: '/' },
        { name: 'Văn bản biểu mẫu', url: '#' },
    ];

    return (
        <>
            <NextSeo
                title={data[0]?.tenThuMuc}
                description="Thông tin chi tiết về các Văn bản biểu mẫu của Trường Đại học Ngoại thương"
                canonical="https://daotaoftu.aisenote.com/"
                openGraph={{
                    url: `https://daotaoftu.aisenote.com/`,
                    title: data[0]?.tenThuMuc,
                    description:
                        'Thông tin chi tiết về các Văn bản biểu mẫu của Trường Đại học Ngoại thương',
                    // images: [
                    //     {
                    //         url: bgNganhHOc,
                    //         width: 800,
                    //         height: 600,
                    //         alt: 'Tin tức',
                    //     },
                    // ],
                    site_name: 'Phòng Quản lý Đào tạo Trường Đại học Ngoại Thương',
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
                        fontFamily: 'Roboto, sans-serif',
                        backgroundColor: 'white'
                    }}
                >
                    {data &&
                        data.map((item) => (
                            <Col lg={24} xl={24} md={24} xs={24} sm={24}>
                                <div id="content" style={{ listStyleType: 'unset', backgroundColor: '#fff' }}  >
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
                                                                    <a href={url} style={{ color: '#C00000' }}>{name}</a>
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
                                                    <Breadcrumb.Item >
                                                        {_.get(item, 'tenThuMuc', '')}
                                                    </Breadcrumb.Item>
                                                </Breadcrumb>
                                            </div>
                                        </Container>
                                    </div>
                                    <div style={{ backgroundColor: "#F7F9FA" }}>
                                        <Container>
                                            <ThuMuc data={data} />
                                        </Container>
                                    </div>
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
    const response = await axios.get(`${ip}/sotay/vanban/web`, {
        params: {
            cond: {
                _id: params.idThuMuc,
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

export default VanBanBieuMau;
