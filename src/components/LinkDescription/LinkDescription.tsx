import {IData_SnippetNews} from "../../types/news.types.ts";
import {GlobalOutlined} from "@ant-design/icons/lib/icons";
import {Space, Typography} from "antd";

interface LinkDescriptionProps {
  snippetNews: IData_SnippetNews;
}

export const LinkDescription = ({snippetNews}: LinkDescriptionProps) => {

  const {Text, Link} = Typography;
  const {DOM, CNTR_CODE, CNTR, AU} = snippetNews;
  return (
    <Space wrap direction="horizontal">
      <Link>
        <GlobalOutlined/> <span>{DOM}</span>
      </Link>
      <Text>
        <span className={`fi fi-${CNTR_CODE}`}></span> {CNTR}
      </Text>
      <Text>{CNTR_CODE}</Text>
      <Text>{AU.join(" ")}</Text>
    </Space>
  );
};

