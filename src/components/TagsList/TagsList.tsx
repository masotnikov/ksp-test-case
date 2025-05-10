import {IData_TagItem} from "../../types/news.types.ts";
import {Space, Tag} from "antd";
import styles from "../MainPanel/MainPanel.module.scss";

interface TagsListProps {
  tags: IData_TagItem[];
}

export const TagsList = ({tags}: TagsListProps) => {

  return (
    <Space direction="horizontal" wrap>
      {
        tags.map(keyword => (
          <Tag key={keyword.value} className={styles.tagItem}>
            {keyword.value}
            <span className={styles.highlightsCounter}>{keyword.count}</span>
          </Tag>
        ))
      }
    </Space>
  )
};

