import { useEffect } from "react";
import { SnippetContainer } from "./CodeSnippet.styles";
import Prism from "prismjs";
import "../css/prism.css";

const CodeSnippet = ({ styles }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [styles]);

  return (
    <SnippetContainer>
      <pre>
        <code className="language-javascript">
          {JSON.stringify(styles, null, "\t")}
        </code>
      </pre>
    </SnippetContainer>
  );
};

export { CodeSnippet };
