import styled from "styled-components";

type Props = {
  name: string;
  icon: React.ReactNode;
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
    margin: 30px 0;
    font-family: Inter;
    *{
        margin: 0 10px;
    }
`;

const Button1: React.FC<Props> = ({ name, icon }) => {
  return (
    <Wrapper href="mailto:contact@waterbyte.studio">
      {icon}
      {name}
    </Wrapper>
  );
};

export default Button1;
