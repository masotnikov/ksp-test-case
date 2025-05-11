import {Row, Space, Tag, Typography} from "antd";
import dayjs from "dayjs";
import {IData_SnippetNews, IData_TrafficItem} from "../../types/news.types.ts";
import style from "./TrafficPanel.module.scss";

interface TrafficPanelProps {
  snippetNews: IData_SnippetNews;
}

export const TrafficPanel = ({snippetNews}: TrafficPanelProps) => {
  const {DP, REACH, TRAFFIC, SENT} = snippetNews;
  const {Text} = Typography;

  return (
    <Row wrap align={"middle"} justify={"space-between"}>
      <Space wrap>
        <Text>{dayjs(DP).format("DD MMM YYYY")}</Text>
        <Text>{REACH} Reach</Text>
        <Text>Top Traffic: </Text>
        {TRAFFIC.map((trafficItem: IData_TrafficItem) => (
          <Text key={trafficItem.value}>
            {trafficItem.value} {trafficItem.count}
          </Text>
        ))}
      </Space>
      <Space wrap>
        <Tag className={`${style.snippetTag} ${SENT === "negative" ? style.negativeTag : style.positiveTag}`}>
          {SENT}
        </Tag>
      </Space>
    </Row>
  );
};
