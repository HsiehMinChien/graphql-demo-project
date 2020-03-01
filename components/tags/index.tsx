import React from "react";
import cx from "classnames";
import { Tag } from "../../graphql/generate_file";
import { confirmIsSelected } from "../utils";
import "./style.styl";

type DisplayTagsPropsType = {
  tags: Array<Tag> | null | undefined;
  selectedTypes: Array<string>;
};

const DisplayTags = ({
  tags = [],
  selectedTypes = []
}: DisplayTagsPropsType) => {
  return (
    <div className="display-tags">
      {tags &&
        tags.map((tag: Tag, index: number) => {
          const isSelected = confirmIsSelected(tag.name, selectedTypes);
          return (
            <div
              key={tag.name + index}
              className={cx("display-tag", { selected: isSelected })}
            >
              {tag.name}
            </div>
          );
        })}
    </div>
  );
};

export default DisplayTags;
