import { useState } from "react";
import { Spin, Button, Row, Col } from "antd";
import { compose } from "redux";
import { withRedux } from "../lib/redux";
import withApollo from "../lib/with-apollo";
import DisplayBlock from "../components/display_block";
import CheckboxModal from "../components/checkbox-modal";
import Layout from "../components/layout";
import { GetJobsComponent, Job } from "../graphql/generate_file";
import "antd/dist/antd.css";
import "./style.styl";

function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedTypes, setSelectedTypes] = useState<Array<string>>([]);
  function _handleClcikOk(values: Array<string>) {
    setSelectedTypes(values);
    setIsVisible(false);
  }
  return (
    <Layout>
      <div className="page-top">
        <h1>Job List Project</h1>
      </div>
      <GetJobsComponent>
        {({ data, loading }) => {
          if (loading) {
            return (
              <div style={{ textAlign: "center" }}>
                <Spin size="large" />
              </div>
            );
          }
          const { jobs = [] } = data as { jobs?: Job[] };

          return (
            <>
              <div className="page-job-select-type">
                <Row className="page-section-title">
                  <Col
                    className="title"
                    xs={22}
                    sm={20}
                    md={18}
                    lg={16}
                    xl={16}
                    xxl={16}
                  >
                    <h1>Selected Skill</h1>
                    <Button
                      className="lightsalmon"
                      value="large"
                      onClick={() => setIsVisible(true)}
                    >
                      Select Skill
                    </Button>
                  </Col>
                  <Col
                    className="selected-types-container"
                    xs={22}
                    sm={20}
                    md={18}
                    lg={16}
                    xl={16}
                    xxl={16}
                  >
                    <div className="selected-types">
                      {selectedTypes.length
                        ? selectedTypes.map((type: string, index: number) => (
                            <div key={index}>{type}</div>
                          ))
                        : "No selected skill"}
                    </div>
                  </Col>
                </Row>
                <CheckboxModal
                  isVisible={isVisible}
                  jobs={jobs}
                  onClickOk={_handleClcikOk}
                  onClickCancel={() => setIsVisible(false)}
                />
              </div>
              <div className="page-jobs-list">
                <Row className="page-section-title">
                  <Col
                    className="title"
                    xs={22}
                    sm={20}
                    md={18}
                    lg={16}
                    xl={16}
                    xxl={16}
                  >
                    <h1>Jobs list</h1>
                  </Col>
                </Row>
                {jobs.map((job: Job, index: number) => (
                  <DisplayBlock
                    key={index}
                    {...job}
                    selectedTypes={selectedTypes}
                  />
                ))}
              </div>
            </>
          );
        }}
      </GetJobsComponent>
    </Layout>
  );
}

export default compose(withRedux, withApollo)(Home);
