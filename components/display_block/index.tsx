import React from "react";
import cx from "classnames";
import { Button } from "antd";
import Tags from "../tags";
import "./style.styl";
import { Job } from "../../graphql/generate_file";

function displayInfo(
  value: string | null | undefined,
  isDate: boolean = false
) {
  let output = "";
  if (isDate) {
    output = value ? value.substring(0, 10) : "N/A";
  }
  output = value ? value : "N/A";
  return output;
}

const DisplayBlock = ({ title, locationNames, updatedAt, tags }: Job) => {
  return (
    <div className={cx("display-block")}>
      <Button
        className="lightsalmon"
        value="large"
        shape="round"
        type="primary"
      >
        More detail
      </Button>
      <div className="title">
        <div className="sub-title">Title:</div> {displayInfo(title)}
      </div>
      <div className="location">
        <div className="sub-title">Location:</div> {displayInfo(locationNames)}
      </div>
      <div className="updated-at">
        <div className="sub-title">Update at:</div>{" "}
        {displayInfo(updatedAt, true)}
      </div>
      <div className="tags">
        <Tags tags={tags} />
      </div>
    </div>
  );
};

export default DisplayBlock;
