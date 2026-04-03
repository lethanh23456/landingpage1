import { Button, Empty, Icon, Table, Tooltip } from "antd";
import moment from "moment";
import React from "react";

const KetQuaVanBang = ({ thongTinTraCuu = [] }) => {
  const columns = [
    {
      title: "Số vào sổ",
      dataIndex: ["DuLieu", "soVaoSoBang"],
      key: "soVaoSoBang",
      width: 120,
    },
    {
      title: "Số hiệu văn bằng",
      dataIndex: ["DuLieu", "soHieuVanBang"],
      key: "soHieuVanBang",
      width: 150,
    },
    {
      title: "Họ tên",
      dataIndex: ["DuLieu", "hoTen"],
      key: "hoTen",
      width: 160,
    },
    {
      title: "Ngày sinh",
      key: "ngaySinh",
      align: "center",
      width: 100,
      render: (_, record) =>
        record?.DuLieu?.ngaySinh
          ? moment(record.DuLieu.ngaySinh).format("DD/MM/YYYY")
          : "",
    },
    {
      title: "Mã sinh viên",
      dataIndex: ["DuLieu", "maSinhVien"],
      key: "maSinhVien",
      width: 120,
    },
    {
      title: "Thao tác",
      align: "center",
      render: (val, rec) => (
        <Tooltip
          title={!rec?.DuLieu?._id ? "Chưa có thông tin văn bằng" : "Chi tiết"}
        >
          <a
            href={rec?.DuLieu?._id ? `/vanbangchungchi/${rec.DuLieu._id}` : undefined}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: rec?.DuLieu?._id ? "pointer" : "not-allowed",
              opacity: rec?.DuLieu?._id ? 1 : 0.5
            }}
            onClick={(e) => {
              if (!rec?.DuLieu?._id) e.preventDefault();
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.2002" cy="13.8" r="3" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.4 15.2C20.4 10.6713 16.7287 7 12.2 7C7.67126 7 4 10.6713 4 15.2" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Tooltip>
      ),
      width: 150,
    },
  ];

  if (thongTinTraCuu?.Error) {
    return (
      <div style={{ padding: 16, textAlign: "center" }}>
        <i style={{ color: "red" }}>Không tồn tại thông tin văn bằng!</i>
      </div>
    );
  }

  const isEmpty = !thongTinTraCuu || thongTinTraCuu.length === 0;
  const dataSource = !isEmpty ? thongTinTraCuu?.map((item, index) => ({
    ...item,
    stt: index + 1,
    key: item?._id || index,
  })) : [];

  return (
    <div style={{ padding: "32px 64px", backgroundColor: "#f8f9fa", minHeight: "350px", borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h3 style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0px",
          gap: "12px",
          marginBottom: isEmpty ? "64px" : "24px"
        }}>
          <span style={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "clamp(20px, 3.8vw, 28px)",
            lineHeight: "135%",
            letterSpacing: "0.03em",
            color: "#051A53"
          }}>
            Kết quả tra cứu
          </span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flex: "none", order: 1, flexGrow: 0 }}
          >
            <path d="M22.6666 22L28 27.3333" stroke="#BC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="14.6667" cy="14.6667" r="10.6667" stroke="#BC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </h3>
        {isEmpty ? (
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0px"
          }}>
            <div style={{
              flex: "none",
              order: 0,
              flexGrow: 0,
              width: "240px",
              height: "240px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <svg width="179" height="189" viewBox="0 0 179 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M89.1 188.908C138.3 188.908 178.2 149.308 178.2 100.408C178.2 51.5081 138.3 11.9081 89.1 11.9081C39.9 11.9081 0 51.5081 0 100.408C0 149.308 39.9 188.908 89.1 188.908Z" fill="#F1F3FA" />
                <path d="M157.35 88.858V143.008C157.35 154.258 148.2 163.408 136.8 163.408H41.7001C30.4501 163.408 21.3001 154.408 21.1501 143.158C21.1501 143.008 21.1501 143.008 21.1501 142.858V88.858C21.1501 88.708 21.1501 88.708 21.1501 88.558C21.1501 88.258 21.1501 87.958 21.3001 87.658C21.4501 87.208 21.6001 86.908 21.7501 86.458L47.2501 37.708C48.1501 35.758 50.1001 34.708 52.2001 34.708H126.15C128.25 34.708 130.05 35.758 131.1 37.708L156.6 86.458C156.75 86.758 156.9 87.208 157.05 87.658C157.35 87.958 157.35 88.408 157.35 88.858Z" fill="#F1F3FA" stroke="#D5DAE5" strokeWidth="3" strokeMiterlimit="10" />
                <path d="M126.324 15.0084C128.282 36.3792 129.261 41.2732 124.829 60.6274C123.387 64.9302 121.946 69.6428 118.857 72.9211C114.533 78.0435 106.709 80.2974 100.325 78.6582C93.7362 77.019 88.3826 71.2819 87.1471 64.3155C86.1176 60.0127 87.5589 54.8903 91.2653 52.2266C95.1776 49.7679 100.737 50.3826 104.032 53.456C107.738 56.5294 109.18 61.242 108.974 65.7497C108.768 70.2575 107.12 74.7652 104.855 78.6582C99.7352 88.2306 97.6272 88.1955 87.1471 103.917" stroke="#AAB2C5" strokeWidth="3" strokeMiterlimit="10" strokeDasharray="6 6" />
                <path d="M137.805 7.04922C137.022 9.90492 133.892 10.9434 130.761 9.12609C127.369 7.56844 125.021 6.2704 125.543 3.67431C126.326 1.07822 129.456 0.818608 133.109 0.558999C137.544 0.0397813 138.327 4.19352 137.805 7.04922Z" fill="#D5DAE5" />
                <path d="M112.498 9.6451C113.803 11.9816 117.455 13.5392 120.064 11.2028C122.934 8.60666 125.282 6.7894 123.978 4.19331C122.673 1.85683 120.586 2.63566 116.151 3.15487C112.498 3.9337 110.933 7.04901 112.498 9.6451Z" fill="#D5DAE5" />
                <path d="M123.978 0.0397575C125.804 -0.219851 127.63 0.818584 128.152 2.37624C128.413 2.89546 128.674 3.67428 128.674 4.1935C129.196 7.82803 127.891 10.9433 125.804 11.2029C123.456 11.7222 121.108 9.12607 120.847 5.75115C120.847 4.71272 120.847 4.1935 120.847 3.41467C121.108 1.59741 122.152 0.299366 123.978 0.0397575C124.239 0.0397575 123.978 0.0397575 123.978 0.0397575Z" fill="#AAB2C5" />
                <path d="M157.35 88.8581V148.558C157.35 156.808 150.75 163.408 142.35 163.408H36.1501C27.9001 163.408 21.1501 156.808 21.1501 148.558V88.5581C21.1501 88.2581 21.1501 87.9581 21.3001 87.6581H55.5001C60.6002 87.6581 64.8002 91.7081 64.8002 96.9581C64.8002 99.5081 65.8502 101.908 67.5001 103.558C69.3001 105.358 71.4002 106.258 74.1002 106.258H104.55C109.65 106.258 113.85 102.208 113.85 96.9581C113.85 94.4081 114.9 92.0081 116.55 90.3581C118.35 88.5581 120.45 87.6581 123 87.6581H157.05C157.35 87.9581 157.35 88.4081 157.35 88.8581Z" fill="white" stroke="#D5DAE5" strokeWidth="3" strokeMiterlimit="10" />
                <path d="M72.1358 126.298C74.0364 126.298 75.5772 124.757 75.5772 122.856C75.5772 120.955 74.0364 119.415 72.1358 119.415C70.2351 119.415 68.6943 120.955 68.6943 122.856C68.6943 124.757 70.2351 126.298 72.1358 126.298Z" fill="#AAB2C5" />
                <path d="M106.364 126.298C108.264 126.298 109.805 124.757 109.805 122.856C109.805 120.955 108.264 119.415 106.364 119.415C104.463 119.415 102.922 120.955 102.922 122.856C102.922 124.757 104.463 126.298 106.364 126.298Z" fill="#AAB2C5" />
                <path d="M94.8305 148.9H84.0411C82.3669 148.9 80.9717 147.504 80.9717 145.83C80.9717 144.156 82.3669 142.761 84.0411 142.761H94.7375C96.4117 142.761 97.8069 144.156 97.8069 145.83C97.8999 147.504 96.5047 148.9 94.8305 148.9Z" fill="#AAB2C5" />
              </svg>
            </div>
            <span style={{
              flex: "none",
              order: 1,
              flexGrow: 0,
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "clamp(12px, 3.8vw, 20px)",
              lineHeight: "135%",
              letterSpacing: "0.03em",
              color: "#373D4E"
            }}>
              Vui lòng điền đầy đủ thông tin để tra cứu
            </span>
          </div>
        ) : (
          <div style={{
            background: "#FFFFFF",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.03)"
          }}>
            <Table
              className="custom-table-vbcc"
              columns={columns}
              dataSource={dataSource}
              locale={{
                emptyText: (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Trống" />
                ),
              }}
            />
          </div>
        )}
      </div>
      <style jsx global>{`
          .custom-table-vbcc .ant-table {
            border: 1px solid #E8EAF0;
            border-radius: 4px;
          }
          .custom-table-vbcc .ant-table-thead > tr > th {
            font-style: normal !important;
            font-weight: 600 !important;
            font-size: 17px !important;
            line-height: 170% !important;
            letter-spacing: 0.03em !important;
            color: #051A53 !important;
            background: #F9F9F9 !important;
            padding: 16px 24px !important;
            border-bottom: 1px solid #E8EAF0 !important;
            border-right: 1px solid #E8EAF0 !important;
          }
          .custom-table-vbcc .ant-table-thead > tr > th:last-child {
            border-right: none !important;
          }
          .custom-table-vbcc .ant-table-tbody > tr > td {
            font-style: normal !important;
            font-weight: 400 !important;
            font-size: 17px !important;
            line-height: 170% !important;
            letter-spacing: 0.03em !important;
            color: #373D4E !important;
            padding: 16px 24px !important;
            border-bottom: 1px solid #E8EAF0 !important;
            border-right: 1px solid #E8EAF0 !important;
          }
          .custom-table-vbcc .ant-table-tbody > tr > td:last-child {
            border-right: none !important;
          }
          .custom-table-vbcc .ant-table-tbody > tr:hover > td {
            background: #FFFFFF !important;
          }
        `}</style>
    </div>
  );
};

export default KetQuaVanBang;
