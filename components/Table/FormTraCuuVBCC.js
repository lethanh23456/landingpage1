import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  notification,
  Row,
} from "antd";
import capbangdiemsohieu from "assets/image/sohieuvb.png";
import moment from "moment";
import React from "react";
import { color } from "styled-system";

const openNotification = () => {
  notification.error({
    message: "Thông báo",
    description:
      "Chức năng này hiện tại đang được chúng tôi phát triển. Xin bạn hãy từ tốn",
    placement: "bottomRight",
    // icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
};

const FormTraCuuVBCC = (props) => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        values.ngaySinh = values.ngaySinh
          ? moment(values?.ngaySinh).format("DD/MM/YYYY")
          : undefined;
        values.mucDichTraCuuId = "69450705c63d2c9bb1ed80a7";

        props.onSubmit(values);
        props.form.resetFields();
      }
    });
  };

  return (
    <Row>
      <Col lg={24}>
        <Form onSubmit={handleSubmit} colon={false} className="vbcc-form">
          <Card
            style={{
              borderRadius: 8,
              backgroundColor: "rgba(255, 255, 255, 0.13)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
            // title={
            //   <center>
            //     <span>
            //       <img src={capbangdiemsohieu} style={{ padding: 8 }} />
            //       <b>Tra cứu thông tin văn bằng</b>
            //     </span>
            //   </center>
            // }
          >
            <Row gutter={[12, 2]}>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>Họ tên</span>}
                >
                  {getFieldDecorator("hoTen")(
                    <Input
                      style={{ fontSize: "15px" }}
                      size="large"
                      placeholder="Nhập họ tên"
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>Ngày sinh</span>}
                >
                  {getFieldDecorator("ngaySinh")(
                    <DatePicker
                      size="large"
                      style={{ width: "100%", fontSize: "15px" }}
                      format={"DD/MM/YYYY"}
                      placeholder="Chọn ngày sinh"
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>CCCD</span>}
                >
                  {getFieldDecorator("cccd")(
                    <Input
                      style={{ fontSize: "15px" }}
                      size="large"
                      placeholder="Nhập CCCD"
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[12, 2]}>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>Mã sinh viên</span>}
                >
                  {getFieldDecorator("maSinhVien")(
                    <Input
                      style={{ fontSize: "15px" }}
                      size="large"
                      placeholder="Nhập mã sinh viên"
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>Số hiệu VB</span>}
                >
                  {getFieldDecorator("soHieuVanBang")(
                    <Input
                      style={{ fontSize: "15px" }}
                      size="large"
                      placeholder="Nhập số hiệu văn bằng"
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label={<span style={{ fontSize: "15px" }}>Số vào sổ</span>}
                >
                  {getFieldDecorator("soVaoSoBang")(
                    <Input
                      style={{ fontSize: "15px" }}
                      size="large"
                      placeholder="Ví dụ: TS25/{soVaoSo}"
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Form.Item style={{ margin: "8px 0 0", textAlign: "center" }}>
              <div
                style={{
                  display: "inline-flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "0px",
                }}
              >
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10.852px 14.4694px",
                    width: "40px",
                    height: "40px",
                    background: "#F3F4F7",
                    borderRadius: "4px",
                    border: "none",
                  }}
                  onClick={() => {
                    props.form.resetFields();
                    if (props.onReset) {
                      props.onReset();
                    }
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flex: "none", order: 0, flexGrow: 0 }}
                  >
                    <path
                      d="M12.4 19.8215C8.20264 19.8215 4.8 16.4093 4.8 12.2C4.8 8.87077 6.92859 6.04011 9.89541 5.00202M12.4 19.8215L10.7905 18.2075M12.4 19.8215L10.826 21.4M12.4 4.57847C16.5974 4.57847 20 7.99074 20 12.2C20 15.5292 17.8714 18.3599 14.9046 19.398M12.4 4.57847L13.974 3M12.4 4.57847L14.0095 6.19254"
                      stroke="#051A53"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    display: "inline-flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10.852px 14.4694px",
                    gap: "7.23px",
                    width: "200px",
                    height: "40px",
                    background: "#BC2826",
                    borderColor: "#BC2826",
                    borderRadius: "4px",
                    fontSize: "15px",
                  }}
                >
                  Tra cứu thông tin
                </Button>
              </div>
            </Form.Item>
          </Card>
        </Form>
        <style jsx>{`
          .vbcc-form :global(.ant-form-item) {
            margin-bottom: 5px;
          }
        `}</style>
      </Col>
    </Row>
  );
};

const FormTraCuu = Form.create({})(FormTraCuuVBCC);

export default FormTraCuu;
