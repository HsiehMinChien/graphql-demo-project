import React from "react";
import cx from "classnames";
import { Button } from "antd";
import Tags from "../tags";
import { Job, Tag } from "../../graphql/generate_file";
import { confirmIsSelected } from "../utils";
import "./style.styl";

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

type DisplayBlockPropsType = {
  selectedTypes: Array<string>;
} & Job;

function confirmShouldRenderItem(
  tags: Tag[] | null | undefined,
  selectedTypes: Array<string>
) {
  const hasSelectedType = Boolean(selectedTypes.length);

  if (!hasSelectedType) {
    return true;
  }

  let shouldRenderItem = false;
  tags &&
    tags.forEach(tag => {
      if (confirmIsSelected(tag.name, selectedTypes)) {
        shouldRenderItem = true;
      }
    });
  return shouldRenderItem;
}

const DisplayBlock = ({
  title,
  locationNames,
  updatedAt,
  tags,
  selectedTypes = []
}: DisplayBlockPropsType) => {
  if (!confirmShouldRenderItem(tags, selectedTypes)) {
    return null;
  }
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
        <Tags tags={tags} selectedTypes={selectedTypes} />
      </div>
    </div>
  );
};

export default DisplayBlock;
