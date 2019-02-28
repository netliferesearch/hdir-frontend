import React from 'react';
import Box from '../components/Box';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import NavList from '../components/NavList';

const ParentHearingPage = () => (
  <div>
    <div className="l-container l-mt-3">
      <div className="row">
        <div className="col-xs-12">
          <h1>Høringer</h1>
          <div className="l-mt-4">
            <ChapterHeading heading="Ute på høring" line="bottom" />
            <NavList
              list={[
                {
                  title: 'Prioritering på klinisk nivå ',
                  url: '#',
                  meta: 'Høringsfrist: 26. oktober 2018'
                },
                {
                  title:
                    'Nasjonal faglig retningslinje for veiing og måling i helsestasjons- og skolehelsetjenesten (høring)',
                  url: '#',
                  meta: 'Høringsfrist: 5. oktober 2018'
                },
                {
                  title:
                    'Veileder i vurdering av kompetanse hos leger i spesialisering',
                  url: '#',
                  meta: 'Høringsfrist: 10. oktober 2018'
                },
                {
                  title:
                    'Nasjonal faglig retningslinje for svangerskapsdiabetes (høring)',
                  url: '#',
                  meta: 'Høringsfrist: 13. november 2018'
                }
              ]}
            />
          </div>
          <div className="l-mt-4">
            <ChapterHeading heading="Under behandling" line="bottom" />
            <NavList
              list={[
                {
                  title:
                    'Faglige råd for klinisk rettsmedisinske og medisinske undersøkelser i Statens Barnehus (høring)',
                  url: '#',
                  meta:
                    'Høringsfrist utløpt Forventet ferdigbehandlet 17. november 2018'
                },
                {
                  title:
                    'Veileder for helseeffekter i samfunnsøkonomisk analyse',
                  url: '#',
                  meta:
                    'Høringsfrist utløptForventet ferdigbehandlet31. desember 2018'
                },
                {
                  title: 'Læringsmål for generell kirurgi del 2 og',
                  url: '#',
                  meta:
                    'Høringsfrist utløptForventet ferdigbehandlet31. desember 2018'
                },
                {
                  title: 'Læringsmål for de kliniske fagene i del 1',
                  url: '#',
                  meta:
                    'Høringsfrist utløptForventet ferdigbehandlet31. desember 2018'
                }
              ]}
            />
          </div>
          <div className="l-mt-4">
            <ChapterHeading heading="Ferdig behandlet" line="bottom" />
            <NavList
              list={[
                {
                  title:
                    'Overføring av finansieringsansvar for legemidler til de regionale helseforetakene i 2019',
                  url: '#',
                  meta: 'Ferdig behandlet'
                },
                {
                  title: 'Multidose – nasjonale faglige råd',
                  url: '#',
                  meta: 'Ferdig behandlet'
                },
                {
                  title: 'Pakkeforløp for psykisk helse og rus (høring)',
                  url: '#',
                  meta: 'Ferdig behandlet'
                },
                {
                  title:
                    'Veileder til forskrift om håndtering av humane celler og vev (høring)',
                  url: '#',
                  meta: 'Ferdig behandlet'
                },
                {
                  title:
                    'Nasjonal faglig retningslinje for mat og måltider i barnehagen',
                  url: '#',
                  meta: 'Ferdig behandlet'
                },
                {
                  title:
                    'Overføring av finansieringsansvar for legemidler mot HIV, Hepatitt B og C og alvorlig ',
                  url: '#',
                  meta: 'Ferdig behandlet'
                }
              ]}
            />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="l-mt-4">
            <PageMeta
              publishDate="11. august 2008"
              editDate="11. august 2018"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="l-mt-4">
      <Box color="grey" square noPadding>
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
  </div>
);

export default ParentHearingPage;
