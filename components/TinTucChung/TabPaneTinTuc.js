import { Card, Col, Empty, Row, Tooltip, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";
import {
    CardTinTuc,
    CenterCol, ContentLargeCard
} from "./TinTucChung.style";

const renderParagraph = (text, rows, style) => (
    <Typography.Paragraph ellipsis={{ rows, expandable: false }} style={style}>
        {text}
    </Typography.Paragraph>
);

const TabPaneTinTuc = (props) => {
    const { data } = props;
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <Card>
            <Row
                gutter={[12, 12]}
                type="flex"
                align="middle"
                style={{
                    alignItems: "stretch",
                    minHeight: 570,
                }}
            >
                {data.length === 0 &&
                    <Col xs={24}>
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    </Col>
                }
                {data.length !== 0 && !isMobile && (
                    <>
                        <Col xs={24} md={12}>
                            <Link href="/tintuc/[pid]" as={`/tintuc/${data?.[0]?.slug}`}>
                                <CardTinTuc first={true}>
                                    <div
                                        style={{
                                            background: `url(${data?.[0]?.anhDaiDien}) center center/contain no-repeat`,
                                            width: "100%",
                                            height: "75%",
                                            minHeight: 180,
                                        }}
                                    />
                                    <ContentLargeCard>
                                        <Tooltip placement="bottomLeft" title={data?.[0]?.tieuDe}>
                                            {renderParagraph(data?.[0]?.tieuDe, 2, {
                                                fontSize: "calc(1em + 0.2vw)",
                                                fontWeight: 500,
                                                marginBottom: 14,
                                                color: "black",
                                            })}
                                        </Tooltip>
                                        {renderParagraph(data?.[0]?.moTa, 4, {
                                            fontSize: "calc(0.8em + 0.2vw)",
                                            color: "#364954",
                                        })}
                                    </ContentLargeCard>
                                </CardTinTuc>
                            </Link>
                        </Col>

                        <Col xs={24} md={12}>
                            <Row style={{ height: "100%" }}>
                                {data
                                    .filter((tmp, i) => i > 0 && i <= 3)
                                    .map((tintuc, index) => (
                                        <Link href="/tintuc/[pid]" as={`/tintuc/${tintuc?.slug}`}>
                                            <CardTinTuc style={{ height: "33.33%" }}>
                                                <Row gutter={12} style={{ height: "100%" }}>
                                                    <Col xs={8} style={{ height: "100%" }}>
                                                        <div
                                                            style={{
                                                                background: `url(${tintuc?.anhDaiDien}) center center`,
                                                                backgroundSize: "contain",
                                                                backgroundRepeat: "no-repeat",
                                                                width: "100%",
                                                                height: "100%",
                                                                minHeight: 140,
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col xs={16}>
                                                        <Tooltip
                                                            placement="bottomLeft"
                                                            title={tintuc?.tieuDe}
                                                        >
                                                            {renderParagraph(tintuc?.tieuDe, 4, {
                                                                fontSize: "calc(1em + 0.2vw)",
                                                                fontWeight: 500,
                                                                marginBottom: 6,
                                                                color: "black",
                                                            })}
                                                        </Tooltip>
                                                    </Col>
                                                </Row>
                                            </CardTinTuc>
                                        </Link>
                                    ))}
                            </Row>
                        </Col>
                        <Col xs={24}>
                            {data
                                .filter((tmp, i) => i > 3)
                                .map((tintuc, index) => (
                                    <Link href="/tintuc/[pid]" as={`/tintuc/${tintuc?.slug}`}>
                                        <CardTinTuc>
                                            <Row gutter={12}>
                                                <Col xs={8}>
                                                    <div
                                                        style={{
                                                            background: `url(${tintuc?.anhDaiDien}) center center`,
                                                            backgroundSize: "contain",
                                                            backgroundRepeat: "no-repeat",
                                                            width: "100%",
                                                            height: "100%",
                                                            minHeight: 140,
                                                        }}
                                                    />
                                                </Col>
                                                <Col xs={16}>
                                                    <Tooltip
                                                        placement="bottomLeft"
                                                        title={tintuc?.tieuDe}
                                                    >
                                                        {renderParagraph(tintuc?.tieuDe, 2, {
                                                            fontSize: "calc(1em + 0.2vw)",
                                                            fontWeight: 500,
                                                            marginBottom: 6,
                                                            color: "black",
                                                        })}
                                                    </Tooltip>
                                                    {renderParagraph(tintuc?.moTa, 4, {
                                                        fontSize: "calc(0.8em + 0.2vw)",
                                                        color: "#364954",
                                                        marginBottom: 0,
                                                    })}
                                                </Col>
                                            </Row>
                                        </CardTinTuc>
                                    </Link>
                                ))}
                        </Col>
                    </>
                )}
                {data.length !== 0 && isMobile && (
                    <>
                        <Col xs={24}>
                            {data.map((tintuc, index) => {
                                return (
                                    <Link href="/tintuc/[pid]" as={`/tintuc/${tintuc?.slug}`}>
                                        <CardTinTuc>
                                            <Row
                                                style={{ height: "100%" }}
                                                gutter={12}
                                                type="flex"
                                                align="middle"
                                                style={{
                                                    alignItems: "stretch",
                                                }}
                                            >
                                                <CenterCol xs={8}>
                                                    <div
                                                        style={{
                                                            background: `url(${tintuc?.anhDaiDien}) center center`,
                                                            backgroundSize: "contain",
                                                            backgroundRepeat: "no-repeat",
                                                            width: "100%",
                                                            height: "100%",
                                                            minHeight: 75,
                                                        }}
                                                    />
                                                </CenterCol>
                                                <Col xs={16}>
                                                    <Tooltip
                                                        placement="bottomLeft"
                                                        title={tintuc?.tieuDe}
                                                    >
                                                        {renderParagraph(tintuc?.tieuDe, 2, {
                                                            fontSize: "calc(1em + 0.2vw)",
                                                            fontWeight: 500,
                                                            marginBottom: 6,
                                                            color: "black",
                                                        })}
                                                    </Tooltip>
                                                </Col>
                                            </Row>
                                        </CardTinTuc>
                                    </Link>
                                );
                            })}
                        </Col>
                    </>
                )}
            </Row>
        </Card>
    );
};

export default TabPaneTinTuc;
