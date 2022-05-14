import { StyledFooter } from "@styles/Footer.styled";
import styled from "styled-components";

const FooterHeader = styled.p`
  font-size: 20px;
`;

const FooterSlogan = styled.p`
  font-size: 40px;
  margin: 0px;
  font-weight: 700;
`;

const WaterblueFooterSlogan = styled(FooterSlogan)`
  color: ${(props) => props.theme.colors.waterblue};
`;

const SloganWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SloganWrapper>
        <FooterSlogan>effektiv.</FooterSlogan>

        <FooterSlogan>effizient.</FooterSlogan>

        <FooterSlogan>engelbyte</FooterSlogan>

        <WaterblueFooterSlogan>waterbyte.</WaterblueFooterSlogan>
      </SloganWrapper>

      <div>
        <FooterHeader>Location</FooterHeader>
        <p>Loremhausen 1</p>
        <p>1234 Ipsumkirchen </p>
        <p>Austria</p>
      </div>

      <div>
        <FooterHeader>Contact</FooterHeader>
        <p>+43 677 614 514 90</p>
        <p>office@waterbyte.studio</p>
        <p>Erreichbar? Meistens.</p>
      </div>

      <div>
        <FooterHeader>Legal</FooterHeader>
        <p>Imprint</p>
        <p>Policies</p>
        <p>Terms of Service</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
