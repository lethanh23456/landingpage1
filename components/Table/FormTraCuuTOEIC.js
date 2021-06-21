import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Card,
  notification,
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
  const [capcha, setcapcha] = useState(false);
  const recaptchaRef = useRef(null);

  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      // const recapchaValue = recaptchaRef.current.getValue();
      // console.log("recapchaValue", recapchaValue);
      // values.ngaySinh = values?.ngaySinh?.toISOString();
      // props.onSubmit(values);
      // props.form.resetFields();
      // && recapchaValue && recapchaValue?.length
      if (!err) {
        values.dateOfBirth = values?.dateOfBirth;
        values.testDate = values?.testDate || values?.testDatee;
        values.hoDem = values?.hoDem;
        values.ten = values?.ten;
        values.maSvOrCccd = values?.maSvOrCccd;
        // recaptchaRef.current.reset();
        // setcapcha(false);
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
        {/* <Card title="Tra cứu kết quả thi Tiếng Anh" > */}
        <Form onSubmit={handleSubmit} colon={false}>
          <Row gutter={[12, 10]}>
            <Col xs={24} md={24} lg={12}>
              <Card
                style={{ borderRadius: 8 }}
                title={
                  <span>
                    <img src={capbangdiem} style={{ padding: 8 }} />
                    <b>Tra cứu kết quả theo họ tên</b>
                  </span>
                }
              >
                <Row>
                  <Col xs={24} md={24} lg={12}>
                    <Form.Item label="Họ đệm (tiếng Việt không dấu)">
                      {getFieldDecorator("hoDem", {
                        rules: [...rules.length(50), ...rules.text],
                      })(
                        <Input
                          style={{ maxWidth: 500 }}
                          // placeholder="Họ và tên"
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24} lg={12} style={{ paddingLeft: 8 }}>
                    <Form.Item label="Tên (tiếng Việt không dấu)">
                      {getFieldDecorator("ten", {
                        // initialValue: model.edit ? _.get(model.record, 'maSv', '') : '',
                      })(
                        <Input
                          style={{ maxWidth: 500 }}
                          // placeholder="Họ"
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} md={24} lg={12}>
                    <Form.Item label="Ngày sinh">
                      {getFieldDecorator(
                        "dateOfBirth",
                        {}
                      )(<DatePicker format={"DD/MM/YYYY"} />)}
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24} lg={12}>
                    <Form.Item label="Ngày thi">
                      {getFieldDecorator(
                        "testDate",
                        {}
                      )(<DatePicker format={"DD/MM/YYYY"} />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <p style={{ color: "red" }}>
                    <i>
                      Lưu ý: chỉ nhập họ tên, ngày sinh, ngày thi để tra cứu
                    </i>
                  </p>
                </Row>
              </Card>
            </Col>
            <Col xs={24} md={24} lg={12}>
              <Card
                style={{ borderRadius: 8 }}
                title={
                  <span>
                    <img src={capbangdiemsohieu} style={{ padding: 8 }} />
                    <b>Tra cứu kết quả theo CMND hoặc thẻ căn cước</b>
                  </span>
                }
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={20}>
                    <Form.Item label="CMND/thẻ căn cước hoặc MSV">
                      {getFieldDecorator("maSvOrCccd", {
                        // initialValue: model.edit ? _.get(model.record, 'maSv', '') : '',
                        // rules: [...rules.length(50), ...rules.text],
                      })(
                        <Input
                          style={{ maxWidth: 500 }}
                          // placeholder="Họ và tên"
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Form.Item label="Ngày thi">
                    {getFieldDecorator("testDatee", {
                      // initialValue: moment(
                      //   getRecordValue(model, cond, "testDate", undefined)
                      // ),
                      // rules: [...rules.required],
                    })(<DatePicker format={"DD/MM/YYYY"} />)}
                  </Form.Item>
                </Row>
                <Row>
                  <p style={{ color: "red" }}>
                    <i>
                      Lưu ý: chỉ nhập ngày thi, số CMND/thẻ căn cước hoặc mã
                      sinh vien để tra cứu
                    </i>
                  </p>
                </Row>
              </Card>
            </Col>
          </Row>
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
            <Button type="primary" htmlType="submit">
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
