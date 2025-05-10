import {IData_SnippetNews} from "../../types/news.types.ts";
import {Collapse, Row, Space, Typography} from "antd";
import {GlobalOutlined} from "@ant-design/icons/lib/icons";
import style from "./Duplicates.module.scss"

interface DuplicatesProps {
  snippetNews: IData_SnippetNews;
}

export const Duplicates = ({snippetNews}: DuplicatesProps) => {
  const {Text, Title, Link} = Typography;
  const {DP, REACH, TI, DOM, CNTR_CODE, CNTR} = snippetNews
  return (
    <>
      <Row justify="space-between" align={"middle"}>
        <Text>Duplicates: 192</Text>
        <Collapse
          ghost
          expandIconPosition={"end"}
          items={[
            {
              key: "1",
              label: "By Relevance",
              showArrow: true,
            }
          ]}
        ></Collapse>
      </Row>
      <Space className={style.duplicateItem}  wrap direction={"vertical"}>
        <Row>
          <Text>{DP}</Text>
          <Text>Top Reach <span>{REACH}</span></Text>
        </Row>
        <Title level={4}>{TI}</Title>
        <Space>
          <Link>
            <GlobalOutlined/> <span>{DOM}</span>
          </Link>
          <Text>
            <span className={`fi fi-${CNTR_CODE}`}></span> {CNTR}
          </Text>
        </Space>
      </Space>
      <Collapse className={style.collapsPanel}
        ghost
        expandIconPosition="start"
        items={[
          {
            key: "1",
            label: "View Duplicates",
            showArrow: true,
          },
        ]}
      />
    </>

  );
};
