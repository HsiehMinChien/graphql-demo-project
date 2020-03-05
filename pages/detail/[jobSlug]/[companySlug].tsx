import React from "react";
import { compose } from "redux";
import Link from "next/link";
import { Spin } from "antd";
import { LeftCircleFilled } from "@ant-design/icons";
import { NextPageContext } from "next";
import ReactMarkdown from "react-markdown";
import { withRedux } from "../../../lib/redux";
import withApollo from "../../../lib/with-apollo";
import { GetJobComponent } from "../../../graphql/generate_file";
import Layout from "../../../components/layout";
import DisplayTags from "../../../components/tags";
import "./style.styl";

type DetailPropsType = {
  query: {
    jobSlug: string;
    companySlug: string;
  };
};

const PRE_FIX_CLASS = "detail-page";

class Detail extends React.Component<DetailPropsType> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    return { query };
  };
  render() {
    const { query } = this.props;
    return (
      <Layout className={PRE_FIX_CLASS}>
        <div className={`${PRE_FIX_CLASS}-top`} />
        <GetJobComponent variables={query}>
          {({ data, loading }) => {
            if (loading) {
              return (
                <div style={{ textAlign: "center" }}>
                  <Spin size="large" />
                </div>
              );
            }
            return (
              <div className={`${PRE_FIX_CLASS}-content`}>
                <Link href="/">
                  <LeftCircleFilled />
                </Link>
                <a
                  className="apply-link"
                  href={data?.job.applyUrl ? data?.job.applyUrl : ""}
                >
                  Apply
                </a>
                <h1>{data?.job.title}</h1>
                <h4>Location: {data?.job.locationNames}</h4>
                <h4>Update At: {data?.job.updatedAt.substring(0, 10)}</h4>
                <DisplayTags tags={data?.job.tags} selectedTypes={[]} />
                <ReactMarkdown
                  source={data?.job.description ? data?.job.description : ""}
                />
              </div>
            );
          }}
        </GetJobComponent>
      </Layout>
    );
  }
}

export default compose(withRedux, withApollo)(Detail);
