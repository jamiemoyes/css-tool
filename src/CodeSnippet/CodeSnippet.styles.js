import styled from "styled-components";
import { Copy } from "styled-icons/boxicons-regular";

const SnippetContainer = styled.div`
  position: relative;
  font-size: 0.8em;
  /* width: 100%; */
  pre {
    overflow: auto;
    word-wrap: normal;
    white-space: pre;
    width: 100%;
  }
  width: 100%;
  border-radius: 0.7em;
`;

const CopyIcon = styled(Copy)`
  font-size: 1em;
  width: 1em;
  height: 1em;
  color: white;
  top: 1em;
  right: 1em;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  padding: 0.5em;
  background: black;
  border-radius: ;
`;

export { SnippetContainer, CopyIcon, IconContainer };
