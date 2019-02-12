import React from 'react';

import List from '../components/List';
import ListHeading from '../components/ListHeading';
import CheckboxGroup from '../components/CheckboxGroup';

const JobPostingPage = () => (
  <main>
    <div className="l-container">
      <div className="row l-mt-3">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <h4>Filtrér søk</h4>
          <div className="l-mt-2">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-2">
            <CheckboxGroup
              heading="Filtrer på ansettesform"
              name="statistikktype"
              options={[
                {
                  value: 'Fast stilling',
                  label: 'Fast stilling'
                },
                {
                  value: 'Vikariat',
                  label: 'Vikariat'
                }
              ]}
            />
          </div>
        </aside>
        <section className="col-md-8 col-xs-12 col-md-offset-1 l-mb-5">
          <ListHeading heading="Ledige stillinger" />
          <List
            list={[
              {
                type: 'conference',
                url:
                  'https://4343.webcruiter.no/Main/Recruit/Public/4012678375?language=NB&link_source_id=0',
                fields: {
                  heading:
                    'Rådgiver/ Seniorrådgiver – tilskuddsforvaltning og virkemiddelutvikling',
                  registrationDeadline: '15.02.2019',
                  address: 'Oslo',
                  lead:
                    'Vi søker seniorrådgiver/rådgiver til 2 spennende og faglig utviklende stillinger innenfor tilskuddsområdet.'
                }
              },
              {
                type: 'conference',
                url:
                  'https://4343.webcruiter.no/Main/Recruit/Public/4013019975?language=NB&link_source_id=0',
                fields: {
                  heading: 'Seniorrådgiver/ rådgiver – helserefusjoner',
                  registrationDeadline: '01.03.2019',
                  address: 'Oslo',
                  lead:
                    'Vi søker jurist til 12 måneders vikariat som seniorrådgiver/rådgiver helserefusjoner med mulighet for forlengelse'
                }
              },
              {
                type: 'conference',
                url:
                  'https://4010407859.webcruiter.no/Main/Recruit/Public/4015400568?language=NB&link_source_id=0',
                fields: {
                  heading: 'Seniorrådgiver - Tech Lead/utvikling',
                  registrationDeadline: '15.03.2019',
                  address: 'Oslo',
                  lead:
                    'Vil du være en spydspiss på ny teknologi og være med på digitaliseringsreisen i Helsedirektoratet?'
                }
              }
            ]}
          />
        </section>
      </div>
    </div>
  </main>
);

export default JobPostingPage;
