import { compose } from "redux";
import { useDispatch } from "react-redux";
import { Spin, Tabs, Icon } from "antd";
import withApollo from "../lib/with-apollo";
import { withRedux } from "../lib/redux";
import useInterval from "../lib/useInterval";
import Clock from "../components/clock";
import DisplayBlock from "../components/display_block";
import Checkbox from "../components/checkbox";
import { GetJobsComponent, Job } from "../graphql/generate_file";
import "antd/dist/antd.css";
import "./style.styl";

// type AlignType = "center" | "left" | "right" | undefined;

const { TabPane } = Tabs;
// const columns = [
//   {
//     title: "id",
//     dataIndex: "id",
//     key: "id",
//     align: "center" as AlignType
//   },
//   {
//     title: "firstName",
//     key: "firstName",
//     dataIndex: "firstName",
//     align: "center" as AlignType
//   },
//   {
//     title: "lastName",
//     key: "lastName",
//     dataIndex: "lastName",
//     align: "center" as AlignType
//   },
//   {
//     title: "email",
//     dataIndex: "email",
//     key: "email",
//     align: "center" as AlignType,
//     render: (email: any) => (email ? email : "-")
//   },
//   {
//     title: "password",
//     key: "password",
//     dataIndex: "password",
//     align: "center" as AlignType,
//     render: (password: any) => (password ? password : "-")
//   },
//   {
//     title: "createdAt",
//     key: "createdAt",
//     dataIndex: "createdAt",
//     align: "center" as AlignType,
//     render: (createdAt: any) => (createdAt ? createdAt : "-")
//   },
//   {
//     title: "updatedAt",
//     key: "updatedAt",
//     dataIndex: "updatedAt",
//     align: "center" as AlignType,
//     render: (updatedAt: any) => (updatedAt ? updatedAt : "-")
//   }
// ];
// const allPostColumns = [
//   {
//     title: "title",
//     key: "title",
//     dataIndex: "title",
//     align: "center" as AlignType
//   },
//   {
//     title: "id",
//     key: "id",
//     dataIndex: "id",
//     align: "center" as AlignType
//   },
//   {
//     title: "createdAt",
//     key: "createdAt",
//     dataIndex: "createdAt",
//     align: "center" as AlignType
//   },
//   {
//     title: "updatedAt",
//     key: "updatedAt",
//     dataIndex: "updatedAt",
//     align: "center" as AlignType
//   },
//   {
//     title: "url",
//     key: "url",
//     dataIndex: "url",
//     align: "center" as AlignType
//   },
//   {
//     title: "votes",
//     key: "votes",
//     dataIndex: "votes",
//     align: "center" as AlignType
//   }
// ];

function Home() {
  const dispatch = useDispatch();
  useInterval(() => {
    dispatch({
      type: "TICK",
      light: true,
      lastUpdate: Date.now()
    });
  }, 1000);
  return (
    <Tabs defaultActiveKey="allPosts">
      <TabPane
        tab={
          <span>
            <Icon type="form" />
            All Posts
          </span>
        }
        key="allPosts"
      >
        <GetJobsComponent>
          {({ data, loading }) => {
            if (loading) return <Spin size="large" />;
            const { jobs = [] } = data as { jobs?: Job[] };

            return (
              <>
                <Checkbox jobs={jobs} />
                <h1 className="page-section-title">Jobs list</h1>
                {jobs.map((job: Job, index: number) => (
                  <DisplayBlock key={index} {...job} />
                ))}
              </>
            );
          }}
        </GetJobsComponent>
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="clock-circle" />A clock
          </span>
        }
        key="clock"
      >
        {/* <GetAllComponent>
          {props => {
            if (props.loading) return <Spin size="large" />;
            dispatch({
              type: "ALL_DATA",
              data: props.data
            });
            return <Clock />;
          }}
        </GetAllComponent> */}
        <Clock />
      </TabPane>
    </Tabs>
  );
}

export default compose(withRedux, withApollo)(Home);
