import styled from "styled-components";

type Props = {
  text: string;
  icon?: React.ReactNode;
  theme?: string;
};

const Wrapper = styled.a`
  background-color: ${(props) => props.theme.colors.waterblue};
  border-radius: 10px;
  height: 60px;
  width: 250px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  color: white;
  margin: 30px 5px;
  font-family: Inter;
  * {
    margin: 0 10px;
  }
`;

const WbytBtn: React.FC<Props> = ({ text: name, icon }) => {
  return (
    // <Wrapper href="mailto:contact@waterbyte.studio">
    //   {icon}
    //   {name}
    // </Wrapper>

    <button
      type="button"
      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {name}
    </button>
  );
};

export default WbytBtn;
