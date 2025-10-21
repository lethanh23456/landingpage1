import { Col, Descriptions, Divider, Empty, Row, Spin, Table } from "antd";
import success from "assets/image/success.svg";
import axios from "axios";
import { ipPTIT } from "data/ip";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "./style.less";
import PDFViewerV2 from "../../components/PDFViewerV2/index.tsx";

const renderField = (item) => {
  if (item.type === "Date") {
    return item.value ? moment(item.value).format("DD/MM/YYYY") : "---";
  }
  if (item.type === "Number") {
    return item.value ?? "---";
  }
  if (typeof item.value === "object") {
    return JSON.stringify(item.value);
  }
  return item.value || "---";
};

const ChiTietVanBang = () => {
  const router = useRouter();
  const { idChiTiet } = router.query;
  const [record, setRecord] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchChiTiet = async (id) => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `${ipPTIT}vbcc/phu-luc-van-bang/public/chi-tiet-phu-luc/${id}`
      );
      setRecord(res?.data?.data || {});
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      setRecord({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idChiTiet) fetchChiTiet(idChiTiet);
  }, [idChiTiet]);

  return (
    <Spin spinning={loading}>
      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        <div style={{ textAlign: "center", fontSize: 22, marginBottom: 36 }}>
          <b>Chi tiết thông tin văn bằng</b>
        </div>

        {record?._id ? (
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <div className="vbcc-verified">
                <img src={success} alt="" width={32} height={32} />
                <span>Thông tin đã được xác thực!</span>
              </div>
            </Col>

            <Col span={24}>
              <Divider orientation="left">Thông tin văn bằng</Divider>
              <Descriptions
                column={{ xs: 1, sm: 1, md: 2 }}
                bordered
                size="small"
              >
                <Descriptions.Item label="Họ tên">
                  {record?.hoTen ?? "--"}
                </Descriptions.Item>
                <Descriptions.Item label="Mã sinh viên">
                  {record?.maSinhVien ?? "--"}
                </Descriptions.Item>
                <Descriptions.Item label="Ngày sinh">
                  {record?.ngaySinh
                    ? moment(record.ngaySinh).format("DD/MM/YYYY")
                    : "--"}
                </Descriptions.Item>
                <Descriptions.Item label="Số vào sổ">
                  {record?.soVaoSoBang ?? "--"}
                </Descriptions.Item>
                <Descriptions.Item label="Số hiệu văn bằng">
                  {record?.soHieuVanBang ?? "--"}
                </Descriptions.Item>
                <Descriptions.Item label="Số vào sổ (Tiếng Anh)">
                  {record?.bookEntryNumberFormat ?? "--"}
                </Descriptions.Item>
              </Descriptions>
            </Col>

            <Col span={24}>
              <Divider orientation="left">Thông tin quyết định</Divider>
              <Descriptions
                column={{ xs: 1, sm: 1, md: 2 }}
                bordered
                size="small"
              >
                <Descriptions.Item label="Số quyết định">
                  {record?.quyetDinh?.soQuyetDinh ?? "--"}
                </Descriptions.Item>
                <Descriptions.Item label="Ngày ban hành">
                  {record?.quyetDinh?.ngayBanHanh
                    ? moment(record.quyetDinh.ngayBanHanh).format("DD/MM/YYYY")
                    : "--"}
                </Descriptions.Item>
                <Descriptions.Item label="Nội dung trích yếu" span={2}>
                  {record?.quyetDinh?.noiDung ?? "--"}
                </Descriptions.Item>
                <Descriptions.Item label="Tập tin đính kèm" span={2}>
                  {record?.quyetDinh?.url ? (
                    <a
                      href={record.quyetDinh.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Xem chi tiết
                    </a>
                  ) : (
                    "--"
                  )}
                </Descriptions.Item>
              </Descriptions>
            </Col>

            {(() => {
              const templateElements =
                record?.quyetDinh?.bieuMau?.elements ?? [];
              const dataElements = record?.templateData ?? [];

              const elements = templateElements.length
                ? templateElements.map((e) => ({
                    ...e,
                    value: dataElements.find(
                      (d) => d.headerName === e.headerName
                    )?.value,
                  }))
                : dataElements;

              const valuedElements = elements
                ?.filter((item) => item.type !== "Table")
                ?.filter((item) => !!item.value);

              return (
                <>
                  {!!valuedElements.length && (
                    <Col span={24}>
                      <Divider orientation="left">Thông tin phụ lục</Divider>
                      <Descriptions
                        bordered
                        column={{ xs: 1, sm: 1, md: 2 }}
                        size="small"
                      >
                        {valuedElements.map((item, index) => (
                          <Descriptions.Item
                            label={item.headerName}
                            key={index}
                          >
                            {renderField(item)}
                          </Descriptions.Item>
                        ))}
                      </Descriptions>
                    </Col>
                  )}

                  {elements
                    ?.filter((item) => item.type === "Table")
                    ?.map((item, index) => {
                      const columns =
                        item?.cot?.map((i) => ({
                          title: i.headerName,
                          dataIndex: i.headerName,
                          key: i.headerName,
                          width: i.type === "Text" ? 150 : 120,
                          render: (val) =>
                            i.type === "Text" ? <span>{val}</span> : val,
                        })) ?? [];

                      if (Array.isArray(item.value) && item.value.length > 0) {
                        return (
                          <Col span={24} key={index}>
                            <Divider orientation="left">
                              {item.headerName}
                            </Divider>
                            <Table
                              size="small"
                              columns={columns}
                              dataSource={item.value}
                              pagination={false}
                              rowKey={(r, idx) => idx}
                              bordered
                              scroll={{ x: "max-content" }}
                              style={{
                                maxWidth: "100%",
                                overflowX: "auto",
                              }}
                            />
                          </Col>
                        );
                      }
                      return null;
                    })}
                </>
              );
            })()}

            {!!record?.fileVanBang && (
              <Col span={24}>
                <Divider orientation="left">Tệp tin văn bằng</Divider>
                <PDFViewerV2 url={record.fileVanBang} height={"650px"} />
              </Col>
            )}

            {record?.urlIpfs && (
              <Col span={24}>
                <Divider orientation="left">Tệp tin IPFS</Divider>
                <PDFViewerV2 url={record.urlIpfs} height={"650px"} />
              </Col>
            )}

            {record?.signature && (
              <Col span={24}>
                <div className="vbcc-signature">
                  <img src="/images/tick.svg" alt="" width={24} height={24} />
                  <span style={{ fontWeight: 600 }}>
                    Thông tin văn bằng đã được ký số:
                  </span>
                  <a
                    href={`https://jwt.io/#debugger-io?token=${record.signature}`}
                    target="_blank"
                    className="text-primary"
                    rel="noreferrer"
                  >
                    Kiểm tra chữ ký số (JWS)
                  </a>
                </div>
              </Col>
            )}
          </Row>
        ) : (
          <Empty
            description="Không tìm thấy thông tin phụ lục"
            style={{ marginBottom: 32, marginTop: 32 }}
          />
        )}
      </div>
    </Spin>
  );
};

export default ChiTietVanBang;
