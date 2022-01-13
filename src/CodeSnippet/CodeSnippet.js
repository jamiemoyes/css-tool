import { useEffect } from "react";
import {
  SnippetContainer,
  CopyIcon,
  IconContainer,
} from "./CodeSnippet.styles";
import Prism from "prismjs";
import "../css/prism.css";

const CodeSnippet = ({ styles }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const copyToClipboard = () =>
    navigator.clipboard.writeText(JSON.stringify(styles, null, "\t"));

  Prism.highlightAll();

  return (
    <SnippetContainer>
      <IconContainer>
        <CopyIcon onClick={copyToClipboard} />
      </IconContainer>
      <pre>
        <code className="language-javascript">
          {JSON.stringify(styles, null, "\t")}
        </code>
      </pre>
    </SnippetContainer>
  );
};

export { CodeSnippet };
