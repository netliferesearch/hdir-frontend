import React from 'react';
import Collapsible from '../components/Collapsible';
import Button from '../components/Button';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Alert from '../components/Alert';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from '../components/Link';
import IconWithText from '../components/IconWithText';
import ProductSearch from '../components/ProductSearch';
import Quote from '../components/Quote';

const MemoPage = () => (
  <>
    <main id="main">
      <div className="l-container">
        <Breadcrumbs
          paths={[
            {
              name: 'Forsiden',
              href: '#a'
            },
            {
              name: 'Rundskriv',
              href: '#a'
            },
            {
              name: 'Helsepersonelloven med kommentarer',
              href: '#a'
            }
          ]}
        />
        <div className="l-layout">
          <aside className="l-hide-to-lg l-sidebar l-bleed-right">
            <SectionSidebar
              heading="Rundskriv"
              icon="../icons/Rundskriv_Veileder_til_lov.svg"
              list={[
                {
                  url: '#',
                  description: '1. Lovens formål, virkeområde og definisjoner'
                },
                {
                  url: '#',
                  description: '2. Krav til helsepersonells yrkesutøvelse',
                  active: true,
                },
                {
                  url: '#',
                  description: '3. Krav til organisering og virksomhet'
                },
                {
                  url: '#',
                  description: '4. Særskilte regler i tilknytning til autorisasjon, krav om politiattest m.v.',
                },
                {
                  url: '#',
                  description: '5. Taushetsplikt og opplysningsrett'
                },
                {
                  url: '#',
                  description: '6. Opplysningsplikt m.v.'
                },
                {
                  url: '#',
                  description: '7. Meldeplikt'
                },
                {
                  url: '#',
                  description: '8. Dokumentasjonsplikt'
                },
                {
                  url: '#',
                  description: '9. Vilkår for autorisasjon, lisens og spesialistgodkjenning'
                },
                {
                  url: '#',
                  description: '10. Tildeling og bortfall av autorisasjon, lisens og spesialistgodkjenning'
                },
                {
                  url: '#',
                  description: '11. Reaksjoner mv. ved brudd på lovens bestemmelser'
                },
                {
                  url: '#',
                  description: '12. Statens helsepersonellnemnd og Apotekklagenemnda'
                },
                {
                  url: '#',
                  description: '13. Forskjellige bestemmelser'
                },
                {
                  url: '#',
                  description: '14. Om helsepersonelloven'
                },
              ]}
            />
          </aside>
          <div className="l-article">
            <ProductSearch label="Søk i rundskrivet" />
            <ChapterHeading
              heading="1.Krav til helsepersonells yrkesutøvelse"
              h="h1"
              line="none"
            />
            <Collapsible
              background
              heading="§ 4. Forsvarlighet"
              date="Sist faglig oppdatert: 28. juni 2018"
            >
              <Quote>
              <h3>Lovtekst:</h3>
              <p>Helsepersonell skal utføre sitt arbeid i samsvar med de krav til faglig forsvarlighet og omsorgsfull hjelp som kan forventes ut fra helsepersonellets kvalifikasjoner, arbeidets karakter og situasjonen for øvrig.</p>

              <p>Helsepersonell skal innrette seg etter sine faglige kvalifikasjoner, og skal innhente bistand eller henvise pasienter videre der dette er nødvendig og mulig. Dersom pasientens behov tilsier det, skal yrkesutøvelsen skje ved samarbeid og samhandling med annet kvalifisert personell. Helsepersonell har plikt til å delta i arbeid med individuell plan når en pasient eller bruker har rett til slik plan etter pasient- og brukerrettighetsloven § 2-5.</p>

              <p>Ved samarbeid med annet helsepersonell, skal legen og tannlegen ta beslutninger i henholdsvis medisinske og odontologiske spørsmål som gjelder undersøkelse og behandling av den enkelte pasient.</p>

              <p>Departementet kan i forskrift bestemme at visse typer helsehjelp bare kan gis av personell med særskilte kvalifikasjoner.</p>
              </Quote>
              <h3>Kommentarer</h3>
              <p>Helsepersonelloven § 4 er en sentral bestemmelse i helseretten. Bestemmelsen stiller krav til helsepersonells utførelse av arbeidet. Dette skal være faglig forsvarlig og helsepersonellet skal gi omsorgsfull hjelp. Bestemmelsen er grunnlag for de vurderinger som gjøres i tilsynssaker mot helsepersonell.</p>
              <p>Det enkelte helsepersonells plikt til forsvarlig yrkesutøvelse må sees i sammenheng med den plikt helse- og omsorgstjenesten har til forsvarlig virksomhet, se&nbsp;<a href="https://lovdata.no/NL/lov/1999-07-02-61/%c2%a72-2">spesialisthelsetjenesteloven § 2-2</a>,&nbsp;<a href="https://lovdata.no/NL/lov/2011-06-24-30/%c2%a74-1">helse- og omsorgstjenesteloven § 4-1</a>&nbsp;og&nbsp;<a href="https://lovdata.no/NL/lov/1983-06-03-54/%c2%a71-3">tannhelsetjenesteloven § 1-3a</a>. Kravet til forsvarlighet i tjenestelovgivningen pålegger virksomheten en plikt til organisering og etablering av rutiner og prosedyrer som sikrer forsvarlige helsetjenester. Plikten innebærer også at virksomhetens eier og ledelse har ansvar for å legge forholdene til rette slik at det enkelte helsepersonell kan utføre sine oppgaver på en forsvarlig måte. Se nærmere om dette under kommentarene til&nbsp;<a href="https://lovdata.no/NL/lov/1999-07-02-64/%c2%a716">helsepersonelloven § 16</a>. Det vises også til&nbsp;<a href="https://lovdata.no/forskrift/2016-10-28-1250">forskrift om ledelse og kvalitetsforbedring i helse- og omsorgstjenesten (FOR-2016-10-28-1250)&nbsp;</a>og til&nbsp;<a href="https://www.regjeringen.no/no/dokumenter/rundskriv-i-2013/id728043/">Helse- og omsorgsdepartementets rundskriv I-2/2013 Lederansvaret i sykehus.</a></p>

              <h3>Første ledd:</h3>
              <p>Første ledd stiller krav til helsepersonell om å utøve arbeidet sitt i samsvar med krav til faglig forsvarlighet og omsorgsfull hjelp.</p>
            </Collapsible >
            <Collapsible
              background
              heading="§ 5. Bruk av medhjelpere"
            >
            </Collapsible >
          </div>
        </div>
      </div>
    </main>

    <div className="l-mt-4">
      <Box color="grey" square>
        <div className="l-container">
          <strong>Kontakt:</strong>
          <br />
          <a href="#a">spesialisthelsetjenester@helsedir.no</a>
          <br />
          <a href="#a">navn.etternavn@helsedir.no</a>
          <br />
          <a href="#a">999 99 999</a>
        </div>
      </Box>
    </div>
  </>
);

export default MemoPage;
