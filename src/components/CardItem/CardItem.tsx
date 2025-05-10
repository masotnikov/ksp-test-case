import {Card, Space, Typography} from "antd";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./CardItem.scss";
import {IData_SnippetNews} from "../../types/news.types.ts";
import {TrafficPanel} from "../TrafficPanel/TrafficPanel.tsx";
import {MainPanel} from "../MainPanel/MainPanel.tsx";
import {Duplicates} from "../Duplicates/Duplicates.tsx";

interface CardItemProp {
  snippetNews : IData_SnippetNews
}

export const CardItem = ({snippetNews}: CardItemProp) => {
  const {Title, Link} = Typography;
  const {TI} = snippetNews;
  console.log(snippetNews);

  return (
    <Card className="card-item">
      <Space direction={"vertical"} size={"small"}>
        <TrafficPanel snippetNews={snippetNews}/>
        <Title level={4}>{TI}</Title>
        <MainPanel snippetNews={snippetNews}/>
        <Link>Original Source</Link>
        <Duplicates snippetNews={snippetNews}/>
      </Space>
    </Card>
  );
};