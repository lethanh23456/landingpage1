import {
  Button, Card, Col, DatePicker, Form, Input, Row,
} from 'antd';
import Container from 'components/UI/Container';
import rules from 'components/Utils/rules';
import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Box from 'components/Box';

const DangKi = (props) => {
  const recaptchaRef = useRef(null);

  const { getFieldDecorator } = props.form;
  const handleSubmit = (e) => {
    e.preventDefault();
    const recapchaValue = recaptchaRef.current.getValue();
    console.log('recapchaValue', recapchaValue);
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Box style={{ marginTop: '120px' }}>
      <Container>
        <Row>
          <Col lg={18} style={{ marginLeft: '40px' }}>
            <Card title="Tra cứu kết quả thi Tiếng Anh">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={20}>
                    <Form.Item label="Họ và Tên">
                      {getFieldDecorator('hoTen', {
                        // initialValue: model.edit ? _.get(model.record, 'maSv', '') : '',
                        rules: [...rules.length(50), ...rules.text],
                      })(<Input />)}
                    </Form.Item>
                  </Col>
                  <Col lg={20}>
                    <Form.Item label="Ngày Sinh">
                      {getFieldDecorator('ngaySinh', {
                        // initialValue: model.edit ? _.get(model.record, 'maSv', '') : '',
                      })(<DatePicker />)}
                    </Form.Item>
                  </Col>
                  <Col lg={20}>
                    <Form.Item label="Số hiệu VB">
                      {getFieldDecorator('soHieuVB', {
                        // initialValue: model.edit ? _.get(model.record, 'maSv', '') : '',
                        rules: [...rules.length(20), ...rules.text],
                      })(<Input />)}
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  wrapperCol={{
                    xs: { span: 24, offset: 0 },
                    sm: { span: 16, offset: 8 },
                    lg: { span: 12, offset: 10 },
                  }}
                >
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LcTyrcZAAAAAPp--P8E1xuz9SpJGsypdEX8vAk-"
                    // onChange={onChange}
                  />
                  <Button type="primary" htmlType="submit">
                    Search
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

const FormDangKy = Form.create({ name: 'regis_form' })(DangKi);

export default FormDangKy;
