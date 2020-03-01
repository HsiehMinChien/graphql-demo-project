import React from "react";
import cx from "classnames";
import { Button } from "antd";
import Tags from "../tags";
import Link from "next/link";
import { Job, Tag } from "../../graphql/generate_file";
import { confirmIsSelected } from "../utils";
import "./style.styl";

function displayInfo(
  value: string | null | undefined,
  isDate: boolean = false
) {
  let output = "";
  output = value ? value : "N/A";
  if (isDate) {
    output = value ? value.substr(0, 10) : "N/A";
  }
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
  tags?.forEach(tag => {
    if (confirmIsSelected(tag.name, selectedTypes)) {
      shouldRenderItem = true;
    }
  });
  return shouldRenderItem;
}

const DisplayBlock = ({
  title,
  slug,
  company,
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
      <Link
        href="/detail/[jobSlug]/[companySlug]"
        as={`/detail/${slug}/${company?.slug}`}
      >
        <Button
          className="lightsalmon"
          value="large"
          shape="round"
          type="primary"
        >
          Detail
        </Button>
      </Link>
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
