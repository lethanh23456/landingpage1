import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Card,
  notification,
  Tabs,
} from "antd";
import rules from "components/Utils/rules";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import capbangdiem from "assets/image/capbangdiem.png";
import capbangdiemsohieu from "assets/image/sohieuvb.png";
import moment from "moment";

const openNotification = () => {
  notification.error({
    message: "Thông báo",
    description:
      "Chức năng này hiện tại đang được chúng tôi phát triển. Xin bạn hãy từ tốn",
    placement: "bottomRight",
    // icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
};

const TraCuuVB = (props) => {
  const { TabPane } = Tabs;

  const [capcha, setcapcha] = useState(false);
  const recaptchaRef = useRef(null);

  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    // debugger;
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        values.ngaySinh = values?.ngaySinh;
        values.hoTen = values?.hoTen;
        values.cmtCccd = values?.cmtCccd;
        values.namTuyenSinh = 2021;
        props.onSubmit(values);
        this.props.form.resetFileds();
      }
    });
  };
  function handleChange(value) {
    setcapcha(value);
  }
  return (
    <Row>
      <Col lg={24}>
        <Form onSubmit={handleSubmit} colon={false}>
          <Tabs
            defaultActiveKey="1"
            onChange={(e) => {
              props.form.resetFields();
            }}
          >
            <TabPane
              tab="Tra cứu theo họ tên và ngày sinh"
              key="1"
              destroyInactiveTabPane
            >
              <Card
                style={{ borderRadius: 8 }}
                title={
                  <center>
                    <span>
                      <img src={capbangdiem} style={{ padding: 8 }} />
                      <b>Tra cứu kết quả theo họ tên và ngày sinh</b>
                    </span>
                  </center>
                }
              >
                <Row>
                  <Col xs={24} md={24} lg={12}>
                    <Form.Item
                      label="Họ và tên (Nhập chữ in hoa)"
                      style={{ marginBottom: 0 }}
                    >
                      {/* <div style={{ marginTop: 0 }}></div> */}
                      {getFieldDecorator("hoTen", {
                        rules: [...rules.length(50), ...rules.text],
                      })(
                        <Input
                          style={{ maxWidth: 500 }}
                          placeholder="Nhập họ và tên"
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24} lg={12} style={{ paddingLeft: 8 }}>
                    <Form.Item label="Ngày sinh">
                      {getFieldDecorator(
                        "ngaySinh",
                        {}
                      )(
                        <DatePicker
                          format={"DD/MM/YYYY"}
                          placeholder="Chọn ngày sinh"
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <p style={{ color: "red" }}>
                    <i>Lưu ý: chỉ nhập họ tên và ngày sinh để tra cứu</i>
                  </p>
                </Row>
              </Card>
            </TabPane>
            <TabPane
              tab="Tra cứu theo số CMND/CCCD"
              key="2"
              destroyInactiveTabPane
            >
              <Card
                style={{ borderRadius: 8 }}
                title={
                  <center>
                    <span>
                      <img src={capbangdiemsohieu} style={{ padding: 8 }} />
                      <b>Tra cứu theo số CMND/CCCD</b>
                    </span>
                  </center>
                }
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={20}>
                    <Form.Item label="Số CMND/CCCD">
                      {getFieldDecorator(
                        "cmtCccd",
                        {}
                      )(
                        <Input
                          style={{ maxWidth: 500 }}
                          placeholder="Nhập số cmnd/cccd"
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <p style={{ color: "red" }}>
                    <i>Lưu ý: chỉ nhập số CMND/CCCD để tra cứu</i>
                  </p>
                </Row>
              </Card>
            </TabPane>
            <TabPane
              tab="Tra cứu theo số báo danh"
              key="3"
              destroyInactiveTabPane
            >
              <Card
                style={{ borderRadius: 8 }}
                title={
                  <center>
                    <span>
                      <img src={capbangdiemsohieu} style={{ padding: 8 }} />
                      <b>Tra cứu theo số báo danh</b>
                    </span>
                  </center>
                }
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={20}>
                    <Form.Item label="Số báo danh">
                      {getFieldDecorator(
                        "soBaoDanh",
                        {}
                      )(
                        <Input
                          style={{ maxWidth: 500 }}
                          placeholder="Nhập số báo danh"
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <p style={{ color: "red" }}>
                    <i>Lưu ý: chỉ nhập số báo danh để tra cứu</i>
                  </p>
                </Row>
              </Card>
            </TabPane>
          </Tabs>
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
              lg: { span: 12, offset: 10 },
            }}
            style={{ margin: 20 }}
          >
            {/* <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LcTyrcZAAAAAPp--P8E1xuz9SpJGsypdEX8vAk-"
              onChange={handleChange}
            /> */}
            <Button disabled type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

const FormTraCuu = Form.create({})(TraCuuVB);

export default FormTraCuu;
