import { StyledFooter } from "@styles/Footer.styled";
import styled from "styled-components";
import LogoMono from "@assets/logos/wbyt-norm-tight-mono.svg";
import {
  BrandLinkedin,
  BrandGithub,
  BrandTwitter,
  BrandYoutube,
  BrandDribbble,
} from "tabler-icons-react";

const StyledLogoMono = styled(LogoMono)`
  width: 240px;
  height: 180px;
`;

const BrandContainer = styled.div`
  display: flex;
`;

const UpperFooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 80px 0px;
  width: 90%;
`;

const LowerFooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

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

const iconStrokeWidth = "10%";

const iconStyle = {
  strokeWidth: iconStrokeWidth,
  margin: "10px",
  width: "30px",
  height: "30px",
};

const Footer = () => {
  return (
    <StyledFooter>
      <UpperFooterSection>
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
      </UpperFooterSection>
      <LowerFooterSection>
        <StyledLogoMono />

        <BrandContainer>
          {/* <a href="http://google.com">
            <BrandDribbble style={iconStyle} />
          </a> */}
          <a href=""></a>
          <BrandYoutube style={iconStyle} />
          <BrandGithub style={iconStyle} />
          <BrandLinkedin style={iconStyle} />
          <BrandTwitter style={iconStyle} />
        </BrandContainer>
      </LowerFooterSection>
    </StyledFooter>
  );
};

export default Footer;
