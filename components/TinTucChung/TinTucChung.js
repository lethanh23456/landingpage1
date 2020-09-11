/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
// import { navigate } from "@reach/router";
import { Pagination, Spin, Tabs } from "antd";
import Box from "components/Box";
import TabPaneTinTuc from "components/TinTucChung/TabPaneTinTuc";
import Container from "components/UI/Container";
import { getWithTotal } from 'libs/fetchData';
import _ from "lodash";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
const { TabPane } = Tabs;

export function Format(str) {
    // xóa hết dấu + đưa về chữ thường
    if (!str) return "";
    return str
        .toString()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/đ/g, "d")
        .replace(/\s/g, "");
}
const TinTucChung = ({ loaiTinTuc }) => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [key, setKey] = useState(loaiTinTuc[0]?.chuDe ?? '');
    const [total, setTotal] = useState(1);
    const [loading, setLoading] = useState(false);
    const [cond, setCond] = useState({
        maLoaiTinTuc: loaiTinTuc[0]?.chuDe ?? '',
    });
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    function callback(key) {
        loaiTinTuc.map((e) => {
            if (e.chuDe === key) {
                router.push(`tintucchung#${Format(e.chuDe)}`);
            }
        });
        setKey(key);
        setCond({
            maLoaiTinTuc: key,
        });
    }
    useEffect(() => {
        console.log(location.href, "href");
        const tmp = location.href.split("#");
        console.log(tmp, "tmp");
        let flag = false;
        tmp.map((item) => {
            loaiTinTuc.map((e) => {
                if (Format(e.chuDe) === item) {
                    getWithTotal(setData, setLoading, setTotal, 'sotay/tintuc', {
                        params: {
                            page,
                            limit: pageSize,
                            cond: { maLoaiTinTuc: e.chuDe },
                        },
                    })
                    setKey(e.chuDe);
                    flag = true;
                    return;
                }
            });
        });
        if (flag) return;
        getWithTotal(setData, setLoading, setTotal, 'sotay/tintuc', {
            params: {
                page,
                limit: pageSize,
                cond,
            },
        })
    }, [page, pageSize, cond, key]);
    const handleChangePaging = (page, pageSize) => {
        console.log("page, pageSize", page, pageSize);
        getWithTotal(setData, setLoading, setTotal, 'sotay/tintuc', {
            params: {
                page,
                limit: pageSize,
                cond,
            },
        })
        setPage(page);
    };
    return (
        <Box>
            <Container>
                <Tabs defaultActiveKey={key} activeKey={key} onChange={callback}>
                    {loaiTinTuc.map((item, index) => (
                        <TabPane
                            tab={
                                <div style={{ fontSize: "16px" }}>
                                    {_.get(item, "chuDe", "")}
                                </div>
                            }
                            key={_.get(item, "chuDe", "")}
                            id={_.get(item, "_id", "")}
                        >
                            <Spin spinning={loading}>
                                <TabPaneTinTuc data={data} />
                            </Spin>
                            <Pagination
                                onChange={handleChangePaging}
                                current={page}
                                total={total}
                                pageSize={pageSize}
                                style={{ float: "right", marginTop: 8 }}
                            />
                        </TabPane>
                    ))}
                </Tabs>
            </Container>
        </Box>
    );
};

export default TinTucChung;
