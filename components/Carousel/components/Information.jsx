import React from "react";
import Box from "components/Box";
import Container from "components/UI/Container";

const Information = (props) => (
  <Box>
    <Container>
      {/* <Row>
        {DATAINFOR.map((item, index) => (
          <Col span={6} key={`Col-Infor-${index}`}>
            <Fade bottom delay={index * 120}>
              <ContainerInformation>
                <ContentInformation>{item}</ContentInformation>
              </ContainerInformation>
            </Fade>
          </Col>
        ))}
      </Row> */}
    </Container>
  </Box>
);

export default Information;
