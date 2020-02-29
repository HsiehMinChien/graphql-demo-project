import React from "react";
import cx from "classnames";
import "./style.styl";
import { Tag } from "../../graphql/generate_file";

type DisplayTagsPropsType = {
  tags: Array<Tag> | null | undefined;
};

const DisplayTags = ({ tags = [] }: DisplayTagsPropsType) => {
  const message = "notice";
  return (
    <div className="tags">
      {tags &&
        tags.map((tag: Tag, index: number) => {
          if (index > 5) {
            return null;
          }
          return (
            <div key={tag.name + index} className={cx("tag", message)}>
              {tag.name}
            </div>
          );
        })}
    </div>
  );
};

export default DisplayTags;
