import { useState } from "react";
import { compose } from "redux";
import { Spin, Button } from "antd";
import withApollo from "../lib/with-apollo";
import { withRedux } from "../lib/redux";
import DisplayBlock from "../components/display_block";
import CheckboxModal from "../components/checkbox-modal";
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
    <GetJobsComponent>
      {({ data, loading }) => {
        if (loading) return <Spin size="large" />;
        const { jobs = [] } = data as { jobs?: Job[] };

        return (
          <>
            <div className="page-job-select-type">
              <h1 className="page-section-title">Select Job Type</h1>
              <Button
                className="lightsalmon"
                value="large"
                onClick={() => setIsVisible(true)}
              >
                Select Types
              </Button>
              <div className="selected-types">
                {selectedTypes.length
                  ? selectedTypes.map((type: string, index: number) => (
                      <div key={index}>{type}</div>
                    ))
                  : "No selected type"}
              </div>
              <CheckboxModal
                isVisible={isVisible}
                jobs={jobs}
                onClickOk={_handleClcikOk}
                onClickCancel={() => setIsVisible(false)}
              />
            </div>
            <div className="page-jobs-list">
              <h1 className="page-section-title">Jobs list</h1>
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
  );
}

export default compose(withRedux, withApollo)(Home);
