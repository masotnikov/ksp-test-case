import {IData_SnippetNews} from "../../types/news.types.ts";
import {renderSafeHTMLWithHighlights} from "../../utils/renderSafeHTMLWithHighlights.tsx";
import {Collapse, Space, Typography} from "antd";
import {useState} from "react";

interface SnippetsListProps {
  snippetNews: IData_SnippetNews;
}

export const SnippetsList = ({snippetNews}: SnippetsListProps) => {
  const {Paragraph} = Typography;
  const [showMore, setShowMore] = useState<boolean>(false);
  const {HIGHLIGHTS} = snippetNews;

  return (
    <Space direction="vertical">
      {HIGHLIGHTS.slice(0, 1).map((snippet, index) => (
        <Paragraph
          key={index}>{renderSafeHTMLWithHighlights(snippet)}
        </Paragraph>
      ))}

      <Collapse
        ghost
        expandIconPosition="start"
        activeKey={showMore ? ["1"] : []}
        onChange={() => setShowMore(!showMore)}
        items={[
          {
            key: "1",
            label: "Show more",
            showArrow: true,
            children: (
              <>
                {HIGHLIGHTS.slice(1).map((snippet, index) => (
                  <Paragraph key={index}>
                    {renderSafeHTMLWithHighlights(snippet)}
                  </Paragraph>
                ))}
              </>
            ),
          },
        ]}
      />
    </Space>
  );
};

