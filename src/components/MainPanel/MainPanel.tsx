import {FC} from "react";
import {Space} from "antd";
import {IData_SnippetNews} from "../../types/news.types.ts";
import {LinkDescription} from "../LinkDescription/LinkDescription.tsx";
import {SnippetsList} from "../SnippetsList/SnippetsList.tsx";
import {TagsList} from "../TagsList/TagsList.tsx";

interface MainPanelProps {
  snippetNews: IData_SnippetNews;
}

export const MainPanel: FC<MainPanelProps> = ({snippetNews}: MainPanelProps) => {
  const {KW : tags} = snippetNews;

  return (
    <Space direction={"vertical"} wrap>
      <LinkDescription snippetNews={snippetNews}/>
      <SnippetsList snippetNews={snippetNews}/>
      <TagsList tags={tags}/>
    </Space>
  );
};

