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
import rules from "components/Utils/rules";
import moment from "moment";
import SelectMucDichTraCuuPublic from "pages/mucdichtracuu/select";
import React from "react";

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

        props.onSubmit(values);
        this.props.form.resetFileds();
      }
    });
  };

  return (
    <Row>
      <Col lg={24}>
        <Form onSubmit={handleSubmit} colon={false}>
          <Card
            style={{ borderRadius: 8 }}
            title={
              <center>
                <span>
                  <img src={capbangdiemsohieu} style={{ padding: 8 }} />
                  <b>Tra cứu thông tin văn bằng</b>
                </span>
              </center>
            }
          >
            <Row gutter={[12, 12]}>
              <Col span={24} md={8}>
                <Form.Item label="Mục đích tra cứu">
                  {getFieldDecorator("mucDichTraCuuId", {
                    rules: [...rules.required],
                  })(<SelectMucDichTraCuuPublic />)}
                </Form.Item>
              </Col>
              <Col span={24} md={8}>
                <Form.Item label="Số vào sổ (Ví dụ: TS25/{soVaoSo})">
                  {getFieldDecorator("soVaoSoBang")(
                    <Input placeholder="Nhập số vào sổ" />
                  )}
                </Form.Item>
              </Col>
              <Col span={24} md={8}>
                <Form.Item label="Số hiệu văn bằng">
                  {getFieldDecorator("soHieuVanBang")(
                    <Input placeholder="Nhập Số hiệu văn bằng" />
                  )}
                </Form.Item>
              </Col>
              <Col span={24} md={8}>
                <Form.Item label="Mã sinh viên">
                  {getFieldDecorator("maSinhVien")(
                    <Input placeholder="Nhập mã sinh viên" />
                  )}
                </Form.Item>
              </Col>
              <Col span={24} md={8}>
                <Form.Item label="Họ tên">
                  {getFieldDecorator("hoTen")(
                    <Input placeholder="Nhập họ tên" />
                  )}
                </Form.Item>
              </Col>
              <Col span={24} md={8}>
                <Form.Item label="Ngày sinh">
                  {getFieldDecorator("ngaySinh")(
                    <DatePicker
                      style={{ width: "100%" }}
                      format={"DD/MM/YYYY"}
                      placeholder="Chọn ngày sinh"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Card>

          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
              lg: { span: 12, offset: 10 },
            }}
            style={{ margin: 20 }}
          >
            <Button type="primary" htmlType="submit">
              Tra cứu
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

const FormTraCuu = Form.create({})(FormTraCuuVBCC);

export default FormTraCuu;
