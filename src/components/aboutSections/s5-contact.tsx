import AboutItemLayout from "@components/layout/AboutItemLayout";
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
    <AboutItemLayout
      
      vertical="Kontakt!"
      largeText="Nachdem sie sich ausreichend erholt haben, sind nun Sie an der Reihe!"
      content="Waterbyte wäre nicht dort wo es jetzt ist ohne seine zahlreichen Partner und Freunde. Jetzt liegt es nur noch an ihnen den letzten Schritt zu wagen und mit uns in Kontakt zu treten. Wir werden uns allen ihren Wünschen widmen und jene in Realität umsetzen zu welchen wir uns bemächtigt fühlen. "
    >
      <CenterWrapper>
        <h3 className="mb-4 font-bold">contact@waterbyte.studio</h3>
        <RefArr5 />
        <button
          type="button"
          class="flex text-white items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4"
        >
          <Mail className="mr-2"/>
          Send us a Message
        </button>
      </CenterWrapper>
    </AboutItemLayout>
  );
};

export default S5Contact;
