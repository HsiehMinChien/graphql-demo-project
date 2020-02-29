import React from "react";
import { Checkbox as AntdCheckBox } from "antd";
// import "./style.styl";
import { Job, Tag } from "../../graphql/generate_file";

type DisplayTagsPropsType = {
  jobs: Array<Job> | null | undefined;
};

const { Group } = AntdCheckBox;

function getOptions(jobs: Array<Job> | null | undefined): string[] {
  const output = new Set<string>();
  jobs &&
    jobs.forEach((job: Job) => {
      job.tags &&
        job.tags.forEach((tag: Tag) => {
          output.add(tag.name);
        });
    });
  return Array.from<string>(output);
}

const Checkbox = ({ jobs = [] }: DisplayTagsPropsType) => {
  const [checkedList, setCheckedList] = React.useState<Array<string>>([]);
  function _handleOnChange(checkedValue: Array<string | number | boolean>) {
    setCheckedList(checkedValue as Array<string>);
  }
  const options = getOptions(jobs);
  return (
    <div className="checkbox">
      <Group options={options} value={checkedList} onChange={_handleOnChange} />
    </div>
  );
};

export default Checkbox;
