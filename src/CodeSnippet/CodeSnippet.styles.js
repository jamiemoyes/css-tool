import styled from "styled-components";

const SnippetContainer = styled.div`
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

export { SnippetContainer };
