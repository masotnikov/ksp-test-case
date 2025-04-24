import {Card, Space, Typography} from "antd";
import {IData_SnippetNews} from "../../types/news.types.ts";
import "./CardItem.scss";


interface CardProps {
  data: IData_SnippetNews;
}

export const CardItem = ({data}: CardProps) => {
  return (
    <Card className="card-item">
      <Space direction={"vertical"} size={"small"}>
        <Space wrap>
          <Typography.Text>{data.DP}</Typography.Text>
          <Typography.Text>{data.REACH} Reach</Typography.Text>
          {
            data.TRAFFIC.map(trafficItem => (
              <Typography.Text>Top Traffic: {trafficItem.value} {trafficItem.count}</Typography.Text>
            ))
          }

        </Space>
      </Space>
    </Card>
  );
};
