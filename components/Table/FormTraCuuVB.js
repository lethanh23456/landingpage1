import { Button, Col, DatePicker, Form, Input, Row, Card } from "antd";
import rules from "components/Utils/rules";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import capbangdiem from "assets/image/capbangdiem.png";
import capbangdiemsohieu from "assets/image/sohieuvb.png";

const TraCuuVB = (props) => {
  const [capcha, setcapcha] = useState(false);
  const recaptchaRef = useRef(null);

  const { getFieldDecorator } = props.form;
  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      const recapchaValue = recaptchaRef.current.getValue();
      console.log("recapchaValue", recapchaValue);
      // values.ngaySinh = values?.ngaySinh?.toISOString();
      // props.onSubmit(values);
      // props.form.resetFields();
      if (!err && recapchaValue && recapchaValue?.length) {
        console.log("Received values of form: ", values);

        values.ngaySinh = values?.ngaySinh?.toISOString();
        recaptchaRef.current.reset();
        setcapcha(false);
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
                style={{ borderRadius: 8, height: 295 }}
                title={
                  <span>
                    <img src={capbangdiem} style={{ padding: 8 }} />
                    <b>Tra cứu kết quả theo họ tên và ngày sinh</b>
                  </span>
                }
              >
                <Col xs={24} md={24} lg={12}>
                  <Form.Item label="Họ và Tên">
                    {getFieldDecorator("hoTen", {
                      // initialValue: model.edit ? _.get(model.record, 'maSv', '') : '',
                      rules: [...rules.length(50), ...rules.text],
                    })(
                      <Input
                        style={{ maxWidth: 500 }}
                        placeholder="Họ và tên"
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <Form.Item label="Ngày Sinh">
                    {getFieldDecorator("ngaySinh", {
                      // initialValue: model.edit ? _.get(model.record, 'maSv', '') : '',
                    })(
                      <DatePicker
                        placeholder="VD: 12/04/1999"
                        format="DD/MM/YYYY"
                      />
                    )}
                  </Form.Item>
                </Col>
                <Row>
                  <p style={{ color: "red" }}>
                    <i>
                      Lưu ý: chỉ nhập họ tên và ngày tháng năm sinh hoặc nhập số
                      hiệu Văn bằng để tra cứu{" "}
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
                    <b>Tra cứu kết quả theo số hiệu văn bằng</b>
                  </span>
                }
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={20}>
                    <Form.Item label="Số hiệu VB">
                      {getFieldDecorator("soHieuVB", {
                        // initialValue: model.edit ? _.get(model.record, 'maSv', '') : '',
                        rules: [...rules.length(20), ...rules.text],
                      })(
                        <Input
                          style={{ maxWidth: 500 }}
                          placeholder="Số hiệu văn bằng"
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <p style={{ color: "red" }}>
                    <i>
                      Lưu ý: chỉ nhập họ tên và ngày tháng năm sinh hoặc nhập số
                      hiệu Văn bằng để tra cứu{" "}
                    </i>
                  </p>
                </Row>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <p style={{ color: "red" }}>
              <i>
                Lưu ý: chỉ nhập họ tên và ngày tháng năm sinh hoặc nhập số hiệu
                Văn bằng để tra cứu{" "}
              </i>
            </p>
          </Row> */}
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
              lg: { span: 12, offset: 10 },
            }}
            style={{ margin: 20 }}
          >
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LcTyrcZAAAAAPp--P8E1xuz9SpJGsypdEX8vAk-"
              onChange={handleChange}
            />
            <Button disabled={!capcha} type="primary" htmlType="submit">
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
