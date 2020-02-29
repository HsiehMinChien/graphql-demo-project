import React from "react";
import { Checkbox as AntdCheckBox, Modal } from "antd";
// import "./style.styl";
import { Job, Tag } from "../../graphql/generate_file";

type DisplayTagsPropsType = {
  jobs: Array<Job> | null | undefined;
  isVisible: boolean;
  onClickCancel: () => void;
  onClickOk: (valus: Array<string>) => void;
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

const CheckboxModal = ({
  jobs = [],
  isVisible,
  onClickCancel,
  onClickOk
}: DisplayTagsPropsType) => {
  const [checkedList, setCheckedList] = React.useState<Array<string>>([]);
  function _handleOnChange(checkedValue: Array<string | number | boolean>) {
    setCheckedList(checkedValue as Array<string>);
  }
  function _handleClickOk() {
    onClickOk(checkedList);
  }
  const options = getOptions(jobs);
  return (
    <Modal
      className="checkbox"
      title="Modal"
      visible={isVisible}
      onOk={_handleClickOk}
      onCancel={onClickCancel}
      okText="Confirm"
      cancelText="Cancel"
    >
      <Group options={options} value={checkedList} onChange={_handleOnChange} />
    </Modal>
  );
};

export default CheckboxModal;
