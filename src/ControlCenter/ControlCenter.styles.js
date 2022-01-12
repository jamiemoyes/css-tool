import styled from "styled-components";

const ControlCenterContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 0.5em;
`;

const ControlContainer = styled.div`
  height: 20em;
  background-color: #0f0e0e;
  border-radius: 0.3em;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 3em;
  padding: 3em;
  place-items: center;
`;

const Tab = styled.div`
  padding: 1em 0;
  background: ${({ active }) => (active ? "#100e0e" : "#1a1919")};
  border-radius: 0.3em;
  color: white;
  font-weight: 700;
  font-size: 0.7em;
  cursor: pointer;
  transition: 0.4s;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;
  font-size: 1.2em;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export { ControlCenterContainer, ControlContainer, Tabs, Tab, SliderContainer };
