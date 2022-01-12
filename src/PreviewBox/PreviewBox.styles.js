import styled from "styled-components";

const Preview = styled.div`
  height: 7em;
  width: 80%;
  /* width: 40em; */
  background: #0f0e0e;
  border-radius: 1em;
  transition: 0.4s;
  ${(...styles) => styles}}
`;

const PreviewContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`;

const Circle = styled.div`
  position: absolute;
  width: 10em;
  height: 10em;
  border-radius: 10em;
`;

const Circle1 = styled(Circle)`
  top: 1em;
  left: 1em;
  background: conic-gradient(
    from 90deg at 40% -25%,
    #ffd700,
    #f79d03,
    #ee6907,
    #e6390a,
    #de0d0d,
    #d61039,
    #cf1261,
    #c71585,
    #cf1261,
    #d61039,
    #de0d0d,
    #ee6907,
    #f79d03,
    #ffd700,
    #ffd700,
    #ffd700
  );
`;

const Circle2 = styled(Circle)`
  right: 1em;
  bottom: 2.5em;
  background: conic-gradient(at top right, lime, cyan);
`;

export { Preview, PreviewContainer, Circle1, Circle2 };
