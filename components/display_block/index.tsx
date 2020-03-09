import React from "react";
import { Button, Row, Col } from "antd";
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
    <Row className="ant-row-center" justify="center">
      <Col
        xs={22}
        sm={20}
        md={18}
        lg={16}
        xl={16}
        xxl={16}
        className="display-block"
      >
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
          <div className="sub-title">Location:</div>{" "}
          {displayInfo(locationNames)}
        </div>
        <div className="updated-at">
          <div className="sub-title">Update at:</div>{" "}
          {displayInfo(updatedAt, true)}
        </div>
        <div className="tags">
          <Tags tags={tags} selectedTypes={selectedTypes} />
        </div>
      </Col>
    </Row>
  );
};

export default DisplayBlock;
