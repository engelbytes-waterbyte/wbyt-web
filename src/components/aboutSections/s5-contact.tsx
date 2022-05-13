import AboutSectionLayout from "@components/layout/AboutSectionLayout";
import RefArr5 from "@assets/abstracts/refarr5.svg";
import styled from "styled-components";
import Button1 from "@components/buttons/button1";
import { Mail } from "tabler-icons-react";

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const S5Contact = () => {
  return (
    <AboutSectionLayout
      vertical="Kontakt!"
      largeText="Nachdem sie sich ausreichend erholt haben, sind nun Sie an der Reihe!"
      content="Waterbyte wäre nicht dort wo es jetzt ist ohne seine zahlreichen Partner und Freunde. Jetzt liegt es nur noch an ihnen den letzten Schritt zu wagen und mit uns in Kontakt zu treten. Wir werden uns allen ihren Wünschen widmen und jene in Realität umsetzen zu welchen wir uns bemächtigt fühlen. "
    >
      <CenterWrapper>
        <h3>office@waterbyte.studio</h3>
        <RefArr5 />
        <Button1 name="Mail schreiben" icon={<Mail></Mail>} />
      </CenterWrapper>
    </AboutSectionLayout>
  );
};

export default S5Contact;
