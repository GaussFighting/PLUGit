import React from "react";
import Box from "../components/Box.js";

const About = () => {
  return (
    <div className="container pt-4">
      {" "}
      <h1>O NAS</h1>
      <div className="container py-4 px-5">
        <Box
          num={
            "Wrocławska Spółka PLUG it powstała dzięki obecnej na polskim rynku, od 2000 roku hurtowni B.H.U ORION z Bełchatowa."
          }
        />
        <Box
          num={
            "Chęć rozwoju sieci sprzedaży, wieloletnie doświadczenie w branży elektrycznej i elektrotechnicznej, rozbudowane zaplecze magazynowe, pozwala dostarczać produkty do obecnych oraz nowych Odbiorców zgodnie z założeniami just-in-time."
          }
        />
        <Box
          num={
            "B.H.U ORION jest partnerem programu Rzetelna Firma, czego dowodem jeststatus jednego z kluczowych dostawców PGE Polska Grupa Energetyczna S.A."
          }
        />
        <Box
          num={
            <b>
              Firma PLUG it korzysta w 100% z doświadczenia oraz
              technicznejwiedzy i zasobów magazynowych, przez co staje się
              częścią tak udanego biznesu!
            </b>
          }
        />
      </div>
    </div>
  );
};
export default About;
