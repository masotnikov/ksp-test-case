import { Tag } from "antd";
import DOMPurify from "dompurify";
import parse, { HTMLReactParserOptions, Element as DomElement } from "html-react-parser";
import React from "react";

export const renderSafeHTMLWithHighlights = (htmlString: string): React.ReactNode => {
  const clean = DOMPurify.sanitize(htmlString, {
    ALLOWED_TAGS: ["kw"],
    ALLOWED_ATTR: [],
  });

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode.type === "tag" &&
        (domNode as DomElement).name === "kw"
      ) {
        const children = (domNode as DomElement).children;
        const textContent = children.map((child) =>
          "data" in child ? child.data : ""
        ).join("");

        return (
          <Tag
            style={{
              border: "none",
              display: "inline-block",
              borderRadius: "8px",
              backgroundColor: "#12baf1",
              padding: "3px 12px",
              fontSize: "13px",
              margin: "0 2px",
              lineHeight: "20px",
              outline: "none",
            }}
          >
            {textContent}
          </Tag>
        );
      }
    },
  };

  return parse(clean, options);
};
