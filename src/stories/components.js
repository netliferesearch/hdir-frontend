import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  withKnobs,
  text,
  boolean,
  object,
  select
} from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

// Components
import Alert from '../components/Alert';
import AlertBar from '../components/AlertBar';
import ArticleIntro from '../components/ArticleIntro';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import Card from '../components/Card';
import MainHeader from '../components/MainHeader';
import ChapterHeading from '../components/ChapterHeading';
import CheckboxGroup from '../components/CheckboxGroup';
import Collapsible from '../components/Collapsible';
import FilterList from '../components/FilterList';
import Footer from '../components/Footer';
import FooterHelfo from '../components/FooterHelfo';
import Heading from '../components/Heading';
import InputSearch from '../components/InputSearch';
import Link from '../components/Link';
import List from '../components/List';
import LinkList from '../components/LinkList';
import ListItemType from '../components/ListItemType';
import ListHeading from '../components/ListHeading';
import LongShortHeading from '../components/LongShortHeading';
import MultiSelector from '../components/MultiSelector';
import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import PressRelease from '../components/PressRelease';
import Questionnaire from '../components/Questionnaire';
import Quote from '../components/Quote';
import RadioButtonGroup from '../components/RadioButtonGroup';
import SectionSidebar from '../components/SectionSidebar';
import Select from '../components/Select';
import Statistics from '../components/Statistics';
import TableExample from '../components/TableExample';
import TransportBlock from '../components/TransportBlock';
import Wrapper from './components/Wrapper.js'



storiesOf('Komponenter', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
    .addWithStaticMarkup('Artikkelintro', () => (
      <Wrapper title="Artikkelintro" wide>
        <div className="l-container">
          <div className="row">
            <div className="col-xs-12">
              <ArticleIntro
                heading={text('Heading', 'Arbeid og psykisk helse')}
                lead={text(
                  'Lead',
                  'Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse.'
                )}
                image={text(
                  'Image url (empty string will change the layout)',
                  './photo.jpg'
                )}
                imageDescription={text('Image description', 'Bildetekst')}
                feature={boolean('Feature', false)}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    ));
    
  
  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
      .addWithStaticMarkup('Boks', () => (
        <Wrapper title="Boks">
          <Box
            color={select(
              'Color',
              {
                none: 'None',
                green: 'Green',
                white: 'White',
                blue: 'Blue',
                blueDark: 'Blue dark',
                yellow: 'Yellow'
              },
              'none'
            )}
            square={boolean('Square', false)}
          >
            {text('Text', 'Here is some content, even HTML')}
          </Box>
        </Wrapper>
      ));
      
  storiesOf('Komponenter', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
    .addWithStaticMarkup('Brødsmulesti', () => (
      <Wrapper title="Brødsmulesti">
        <Breadcrumbs
          paths={object('Paths', [
            {
              name: 'Forsiden',
              href: '#a'
            },
            {
              name: 'Konferanse',
              href: '#a'
            },
            {
              name: 'Arbeid og psykisk helse',
              href: '#a'
            }
          ])}
        />
      </Wrapper>
    ));
    
    

  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
      .addWithStaticMarkup('Checkbox-gruppe', () => (
        <Wrapper title="Checkbox-gruppe">
          <CheckboxGroup
            heading={text('Heading', 'Heading')}
            name={text('Name', 'usedForForms')}
            options={object('Options', [
              {
                value: 'a',
                label: 'A',
                disabled: false
              },
              {
                value: 'b',
                label: 'B',
                disabled: true
              },
              {
                value: 'c',
                label: 'C',
                disabled: false
              },
              {
                value: 'd',
                label: 'D'
              }
            ])}
          />
        </Wrapper>
      ));

  

  storiesOf('Komponenter/Ekspanderbar liste', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Standard', () => (
      <Wrapper title="Ekspanderbar liste">
        <Collapsible
          heading={text('Heading', 'Heading')}
          subheading={text('Subheading', 'Svak anbefaling')}
          subheadingContent={text('Subheading Content', 'Bla bla bla bla')}
          collapsed={boolean('Collapsed', false)}
          subtle={boolean('Subtle', false)}
          noBorder={boolean('No border', false)}
          code={text('Code', '')}
          id={text('Id', 'Some unique id')}
          smallContent={boolean('Small content', false)}
          size={select(
            'Size',
            {
              large: 'large',
              medium: 'medium',
              small: 'small'
            },
            'large'
          )}
          alert={text('Alert', '')}
        >
          {text('Text', 'You can place any content in here.')}
        </Collapsible>
      </Wrapper>
    ))
    .addWithStaticMarkup('Med JSX-innhold', () => (
      <Wrapper title="Ekspanderbar liste med JSX-innhold">
      <Collapsible
        heading={text('Heading', 'Heading')}
        subheadingContent={
          <>
            <span style={{ color: 'limegreen' }}>Some</span> HTML/JSX{' '}
            <span style={{ color: 'pink' }}>content</span>
          </>
        }
        id={text('Id', 'Some unique id')}
        size={select(
          'Size',
          {
            large: 'large',
            medium: 'medium',
            small: 'small'
          },
          'large'
        )}
      >
        {text('Text', 'You can place any content in here.')}
      </Collapsible>
      </Wrapper>
    ));

  storiesOf('Komponenter/Footer', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('HDIR Standard', () => (
      <Wrapper title="HDIR Standard">
        <Box square color="blueDark">
          <div className="l-container">
            <Footer />
          </div>
        </Box>
      </Wrapper>
    ))
    .addWithStaticMarkup('Helfo Standard', () => (
      <Wrapper title="Helfo standard">
        <Box square color="blueDark">
          <div className="l-container">
            <FooterHelfo />
          </div>
        </Box>
      </Wrapper>
    ))

  
  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Flervelger', () => (
      <Wrapper title="Flervelger">
      <MultiSelector
        buttonText={text('Button text', 'Velg tema')}
        confirmText={text('Confirm text', 'Bekreft tema')}
        handleChange={arg => {
          console.table(arg);
        }}
        options={object('Options', [
          {
            value:
              'Kommunalt pasient- og brukerregister sdfgs dfgsd fgsd fgdfg dsfg sdfg',
            label:
              'Kommunalt pasient- og brukerregister sdfgs dfgsd fgsd fgdfg dsfg sdfg',
            checked: true
          },
          {
            value: 'Kvalitetsindikator',
            label: 'Kvalitetsindikator',
            checked: false
          },
          {
            value: 'Norsk pasientregister',
            label: 'Norsk pasientregister',
            checked: false
          },
          {
            value: 'Kommunalt pasient- og brukerregister',
            label: 'Kommunalt pasient- og brukerregister',
            checked: false
          },
          {
            value: 'Kvalitetsindikator',
            label: 'Kvalitetsindikator',
            checked: false
          },
          {
            value: 'Norsk pasientregister',
            label: 'Norsk pasientregister',
            checked: false
          },
          {
            value: 'Kommunalt pasient- og brukerregister',
            label: 'Kommunalt pasient- og brukerregister',
            checked: false
          },
          {
            value: 'Kvalitetsindikator',
            label: 'Kvalitetsindikator',
            checked: false
          },
          {
            value: 'Norsk pasientregister',
            label: 'Norsk pasientregister',
            checked: false
          }
        ])}
      />
      </Wrapper>
    ))
  
  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Grid', () => (
      <Wrapper title="Grid" wide>
      <div className="l-container grid-example">
        <p>
          <code>.l-container</code> is not needed for the grid to work.
        </p>
        <p>
          <code>.grid-example</code> only helps showing the grid visually.
        </p>
        <p>
          The columns always need the row wrapper. A row can not be a direct
          descendant of a row.
        </p>
        <p>
          Unlike the bootstrap-grid and other typical 12 column grids, this grid
          needs to specify the smallest column width. With xs or no specified size
          (i.e. col-xs).
        </p>
        <div className="row">
          <div className="col-xs-12">xs 12</div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">xs 12, sm-6</div>
          <div className="col-xs-12 col-sm-6">xs 12, sm-6</div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">xs 12, sm-6, md-4</div>
          <div className="col-xs-12 col-sm-6 col-md-4">xs 12, sm-6, md-4</div>
          <div className="col-xs-12 col-sm-6 col-md-4">xs 12, sm-6, md-4</div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            xs 12, sm-6, md-4, lg-3
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            xs 12, sm-6, md-4, lg-3
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            xs 12, sm-6, md-4, lg-3
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            xs 12, sm-6, md-4, lg-3
          </div>
        </div>
      </div>
      </Wrapper>
    ));


  storiesOf('Komponenter/Headings', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Standard', () => (
      <Wrapper title="Standard heading">
        <Heading
          h={select(
            'H(eading)',
            {
              h1: 'h1',
              h2: 'h2',
              h3: 'h3',
              h4: 'h4',
              h5: 'h5',
              h6: 'h6',
              h0: 'h0'
            },
            'h1'
          )}
        >
          {text('Text', 'Heading')}
        </Heading>
      </Wrapper>
    ))
    .addWithStaticMarkup('LongShortHeading uten link', () => (
      <Wrapper title="Helfo standard" lead="Viser kortvariant med overskriftsstil og lang variant som mindre tekst.">
        <LongShortHeading
          long={text(
            'Long heading',
            'Nasjonal faglig retningslinje for svangerskapsdiabetes'
          )}
          short={text('Short heading', 'Svangerskapsdiabetes')}
          icon={'./icons/Retningslinjer_Veiledere_Faglige_råd.svg'}
        />
      </Wrapper>
    ))
    .addWithStaticMarkup('LongShortHeading med link', () => (
      <Wrapper title="Helfo standard" lead="Viser kortvariant med overskriftsstil og lang variant som mindre tekst. Har også link til utdypende info om innholdstypen.">
        <LongShortHeading
          long={text("Long heading", "Nasjonal faglig retningslinje for svangerskapsdiabetes")}
          short={text("Short heading", "Svangerskapsdiabetes")}
          icon={'./icons/Retningslinjer_Veiledere_Faglige_råd.svg'}
          url="#a"
          linkText={text("Link text: ", "Hva er nasjonal faglig retningslinje")}
        />
      </Wrapper>
    ));

  
storiesOf('Komponenter/Header', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Standard', () => (
    <Wrapper title="Header" wide>
      <MainHeader
        name={text('Name', 'Helsedirektoratet')}
        hideSearch={boolean('Hide search', false)}
        links={object('List', [
          { name: 'Om Helsedirektoratet', href: '#' },
          { name: 'English', href: '#' }
        ])}
        inputSearchLabel={text('Input search label', 'Søk')}
        exampleSuggestions={object('List', ['aaa', 'bbbb', 'ccccc'])}
      />
    </Wrapper>
  ))
  .addWithStaticMarkup('QA Environment', () => (
    <Wrapper title="Header" lead="Vises på testmiljøet" wide>
    <MainHeader
      name={text('Name', 'Helsedirektoratet')}
      hideSearch={boolean('Hide search', false)}
      links={object('List', [
        { name: 'Om Helsedirektoratet', href: '#' },
        { name: 'English', href: '#' }
      ])}
      inputSearchLabel={text('Input search label', 'Søk')}
      exampleSuggestions={object('List', ['aaa', 'bbbb', 'ccccc'])}
      qaEnvironment={boolean('QA Environment', true)}
    />
    </Wrapper>
));



storiesOf('Komponenter', module)
  .addWithStaticMarkup('Kapittel-overskrift', () => (
    <Wrapper title="Kapittel-overskrift">
      <ChapterHeading
        heading={text('Heading', 'Heading')}
        subheading={text('Subheading', 'Subheading')}
        line={select(
          'Line',
          { top: 'Top', bottom: 'Bottom', none: 'None' },
          'top'
        )}
        h={select('H', { h1: 'h1', h2: 'h2' }, 'h2')}
        url={text('URL', '')}
      />
    </Wrapper>
  ))

storiesOf('Komponenter/Kort', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
    .addWithStaticMarkup('Standard', () => (
      <Wrapper title="Kort standard">
        <Card
          heading={text('Heading', 'This is a heading')}
          text={text('Text', 'This is some text')}
          url={text('URL', '#')}
          arrow={select(
            'Arrow',
            { none: '', left: 'left', right: 'right' },
            'right'
          )}
        >
          {text(
            'Content',
            'This is some content, it can be anything, even an image'
          )}
        </Card>
      </Wrapper>
    ))
    .addWithStaticMarkup('Med statistikk', () => (
      <Wrapper title="Kort med statistikk">
        <Card
          heading={text('Heading', 'This is a heading')}
          text={text('Text', 'This is some text')}
          url={text('URL', '#')}
          arrow={select(
            'Arrow',
            { none: '', left: 'left', right: 'right' },
            'right'
          )}
        >
          <Statistics
            bigText={text('Statistics: Big text', '99.9%')}
            smallText={text(
              'Statistics: Small text',
              "This is some text that is smaller, and it doesn't really make any sense here. This is some more text to make it longer."
            )}
            icon={text('Statistics: Icon', './icons/pie.svg')}
          />
        </Card>
      </Wrapper>
    ))
    .addWithStaticMarkup('Horisontal', () => (
      <Wrapper title="Kort horisontal">
        <Card
          heading={text('Heading', 'This is a heading')}
          text={text('Text', 'This is some text')}
          url={text('URL', '#')}
          arrow={select(
            'Arrow',
            { none: '', left: 'left', right: 'right' },
            'right'
          )}
          horizontal={boolean('Horizontal', true)}
          content={<p>This is some text</p>}
        >
          <Box color="blueDark" square>
            <img
              src={text('Statistics: Icon', './icons/pie.svg')}
              alt="Illustrasjon av et kakediagram"
              className="b-icon b-icon--large"
            />
          </Box>
        </Card>
      </Wrapper>
    ))
    .addWithStaticMarkup('Med bilde', () => (
      <Wrapper title="Kort med bilde">
        <Card
          url={text('URL', '#')}
          arrow={select(
            'Arrow',
            { none: '', left: 'left', right: 'right' },
            'right'
          )}
          mainContent={
            <>
              <h3>De minste tåler minst</h3>
              <p>Hva skjer hvis antibiotika ikke lenger virker?</p>
            </>
          }
        >
          <img src="http://placehold.it/500x150" alt="alt..." />
        </Card>
      </Wrapper>
    ));

storiesOf('Komponenter/Knapp', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
    .addWithStaticMarkup('Alle knapper', () => (
      <Wrapper title="Alle knapper">
        <div>
          <Button>{text('Content', 'Submit')}</Button>
          <br /><br />
          <Button arrow={boolean('Arrow', true)}>{text('Content', 'Arrow')}</Button>
          <br /><br />
          <Button download={boolean('Download', true)}>
            {text('Content', 'Download')}
          </Button>
          <br /><br />
          <Button small={boolean('Small', true)}>{text('Content', 'Small')}</Button>
          <br /><br />
          <Button secondary={boolean('Secondary', true)}>
            {text('Content', 'Secondary')}
          </Button>
          <br /><br />
          <Button plain={boolean('Plain', true)}>{text('Content', 'Plain')}</Button>
          <br /><br />
          <Button secondaryDark={boolean('Secondary dark', true)}>
            {text('Content', 'SecondaryDark')}
          </Button>
        </div>
      </Wrapper>
    ))
    .addWithStaticMarkup('Standard', () => (
      <Wrapper title="Standard knapp">
        <Button
          arrow={boolean('Arrow', false)}
          download={boolean('Download', false)}
          secondary={boolean('Secondary', false)}
          secondaryDark={boolean('Secondary dark', false)}
          plain={boolean('Plain', false)}
          small={boolean('Small', false)}
        >
          {text('Content', 'Submit')}
        </Button>
      </Wrapper>
    ))
    .addWithStaticMarkup('Pil høyre', () => (
      <Wrapper title="Knapp m. pil høyre">
        <Button
          arrow={boolean('Arrow', true)}
          download={boolean('Download', false)}
          secondary={boolean('Secondary', false)}
          secondaryDark={boolean('Secondary dark', false)}
          plain={boolean('Plain', false)}
          small={boolean('Small', false)}
        >
          {text('Content', 'Arrow')}
        </Button>
      </Wrapper>
    ))
    .addWithStaticMarkup('Nedlastingsknapp', () => (
      <Wrapper title="Nedlastingsknapp">
        <Button
          arrow={boolean('Arrow', false)}
          download={boolean('Download', true)}
          secondary={boolean('Secondary', false)}
          secondaryDark={boolean('Secondary dark', false)}
          plain={boolean('Plain', false)}
          small={boolean('Small', false)}
        >
          {text('Content', 'Download')}
        </Button>
      </Wrapper>
    ))
    .addWithStaticMarkup('Liten knapp', () => (
      <Wrapper title="Liten knapp">
        <Button
          arrow={boolean('Arrow', false)}
          download={boolean('Download', false)}
          secondary={boolean('Secondary', false)}
          secondaryDark={boolean('Secondary dark', false)}
          plain={boolean('Plain', false)}
          small={boolean('Small', true)}
        >
          {text('Content', 'Small')}
        </Button>
      </Wrapper>
    ))
    .addWithStaticMarkup('Sekundær knapp', () => (
      <Wrapper title="Sekundær knapp">
        <Button
          arrow={boolean('Arrow', false)}
          download={boolean('Download', false)}
          secondary={boolean('Secondary', true)}
          secondaryDark={boolean('Secondary dark', false)}
          plain={boolean('Plain', false)}
          small={boolean('Small', false)}
        >
          {text('Content', 'Secondary')}
        </Button>
      </Wrapper>
    ))
    .addWithStaticMarkup('Enkel knapp', () => (
      <Wrapper title="Enkel knapp">
        <Button
          arrow={boolean('Arrow', false)}
          download={boolean('Download', false)}
          secondary={boolean('Secondary', false)}
          secondaryDark={boolean('Secondary dark', false)}
          plain={boolean('Plain', true)}
          small={boolean('Small', false)}
        >
          {text('Content', 'Plain')}
        </Button>
      </Wrapper>
    ))
    .addWithStaticMarkup('Sekundær mørk', () => (
      <Wrapper title="Sekundær mørk knapp">
        <Button
          arrow={boolean('Arrow', false)}
          download={boolean('Download', false)}
          secondary={boolean('Secondary', false)}
          secondaryDark={boolean('Secondary dark', true)}
          plain={boolean('Plain', false)}
          small={boolean('Small', false)}
        >
          {text('Content', 'SecondaryDark')}
        </Button>
      </Wrapper>
    ))
    .addWithStaticMarkup('Valgt sekundær', () => (
      <Wrapper title="Valgt sekundær knapp">
        <Button
          arrow={boolean('Arrow', false)}
          download={boolean('Download', false)}
          secondary={boolean('Secondary', false)}
          secondaryDark={boolean('Secondary dark', false)}
          plain={boolean('Plain', false)}
          small={boolean('Small', false)}
        >
          {text('Content', 'Option secondary')}
        </Button>
      </Wrapper>
    ));


    

  storiesOf('Komponenter/Lister', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Liste-heading', () => (
      <Wrapper title="Headinglinje på liste">
        <ListHeading
          heading={text('Heading', '250 rapporter')}
          selectLabel={text('Sort', 'SORTÉR')}
          selectOptions={object('Options', [
            'Sist publisert',
            'Først publisert',
            'Alfabetisk rekkefølge'
          ])}
        />
      </Wrapper>
    ))
    .addWithStaticMarkup('Filterliste', () => (
      <Wrapper title="Filterliste">
        <FilterList
          list={object('List', [
            'Alt',
            'Retningslinjer',
            'Pakkeforløp',
            'Rundskriv'
          ])}
        />
      </Wrapper>
    ))
    .addWithStaticMarkup('Link-liste med bilder', () => (
      <Wrapper title="Linkliste med bilder">
      <LinkList
        list={object('Options', [
          {
            href: '#a',
            text: 'Sykdom, tilstand og behandling',
            image: 'http://placehold.it/64x64',
            imageAlt: 'image alt text'
          },
          {
            href: '#a',
            text: 'Autorisasjon og spesialistutdanning',
            image: 'http://placehold.it/64x64',
            imageAlt: 'image alt text',
            active: true
          },
          {
            href: '#a',
            text: 'Psykisk helse',
            image: 'http://placehold.it/64x64',
            imageAlt: 'image alt text'
          },
          {
            href: '#a',
            text: 'Tilskudd og finansiering',
            image: 'http://placehold.it/64x64',
            imageAlt: 'image alt text'
          },
          {
            href: '#a',
            text: 'Folkehelse, ernæring og fysisk aktivitet',
            image: 'http://placehold.it/64x64',
            imageAlt: 'image alt text'
          },
          {
            href: '#a',
            text: 'Statistikk, registre og rapporter',
            image: 'http://placehold.it/64x64',
            imageAlt: 'image alt text'
          },
          {
            href: '#a',
            text: 'Lover og forskrifter',
            image: 'http://placehold.it/64x64',
            imageAlt: 'image alt text'
          }
        ])}
      />
      </Wrapper>
    ))
    .addWithStaticMarkup('Navigasjonsliste', () => (
      <Wrapper title="Navigasjonsliste">
        <NavList
          heading={text('Heading', '')}
          columns={boolean('Columns', false)}
          noArrow={boolean('No arrow', false)}
          small={boolean('Small', false)}
          ordered={boolean('Ordered', false)}
          list={object('List', [
            {
              title: 'KAPITTEL 1',
              url: '#',
              meta: 'Nasjonale faglige retningslinjer'
            },
            {
              title: 'KAPITTEL 2',
              url: '#',
              meta: 'Nasjonale faglige retningslinjer',
              infoText: 'PDF (3,5 MB)',
              file: true
            },
            {
              title: 'KAPITTEL 3',
              url: '#',
              infoText: 'This is infoText: more text in another column',
              meta: 'Nasjonale faglige retningslinjer',
              active: true
            }
          ])}
        />
      </Wrapper>
    ))
    .addWithStaticMarkup('Nyhetsliste', () => (
      <Wrapper title="Nyhetsliste" lead="Kun nyheter">
      <List
        heading={text('Heading', '')}
        list={object('List', [
          {
            type: 'news',
            url: '#1',
            fields: {
              download: 'true',
              category: '',
              heading:
                'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
              publishDate: '3. desember 2018',
              lead:
                'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
              topic: ''
            }
          },
          {
            type: 'news',
            url: '#1',
            fields: {
              download: 'true',
              category: '',
              heading: '– Legg til rette for influensavaksinering',
              publishDate: '4. desember 2018',
              lead:
                '– Det er viktig at arbeidsgiverne legger til rette for at helsepersonell skal kunne ta influensavaksine, sier helsedirektør Bjørn Guldvog.',
              topic: ''
            }
          }
        ])}
      />
      </Wrapper>
    ))
    .addWithStaticMarkup('Artikkelliste', () => (
      <Wrapper title="Artikkelliste" lead="For alle innholdstyper">
      <List
        heading={text('Heading', '')}
        list={object('List', [
          {
            type: 'news',
            url: '#1',
            fields: {
              category: '',
              heading:
                'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
              publishDate: '3. desember 2018',
              lead:
                'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
              topic: ''
            }
          },
          {
            type: 'news',
            url: '#1',
            fields: {
              download: 'true',
              category: '',
              heading:
                'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
              publishDate: '3. desember 2018',
              lead:
                'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
              topic: ''
            }
          },
          {
            type: 'person',
            fields: {
              category: '',
              name: 'Ole Magnus Støvern',
              email: 'ole.stovern@netlife.com',
              phoneNumber: '+47 123 45 678',
              position: 'Developer',
              department: 'Oslo',
              topic: ''
            }
          },
          {
            type: 'grantFunding',
            url: '#2',
            fields: {
              download: 'true',
              category: '',
              heading: 'Kommunalt kompetanse- og innovasjonstilskudd',
              deadline: 'Søknadsfrist: 11. oktober 2018',
              topic:
                'If this module is shown on a search page, it might have a text like this for topics'
            }
          },
          {
            type: 'grantFunding',
            url: '#2',
            fields: {
              category: '',
              heading: 'Kommunalt kompetanse- og innovasjonstilskudd',
              deadline: 'Søknadsfrist: 11. oktober 2018',
              topic:
                'If this module is shown on a search page, it might have a text like this for topics'
            }
          },
          {
            type: 'pressRelease',
            url: '#3',
            fields: {
              download: 'true',
              category: 'Brosjyre',
              heading: 'Hvordan sjonglere (illustrert)',
              image:
                'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
              publishDate: '01. januar 2003',
              topic: ''
            }
          },
          {
            type: 'pressRelease',
            url: '#3',
            fields: {
              category: 'Brosjyre',
              heading: 'Hvordan sjonglere (illustrert)',
              image:
                'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
              publishDate: '01. januar 2003',
              topic: ''
            }
          },
          {
            type: 'conference',
            url: '#4',
            fields: {
              download: 'true',
              category: '',
              heading: 'Kurs i hendelsesanalyse og pasientsikkerhet',
              dateFrom: '3. november 1990',
              dateTo: '6. desember 2018',
              location: 'Oslo',
              registrationDeadline: '15. oktober',
              lead: 'This is some text describing the event. It is nice to have.',
              topic: ''
            }
          }
        ])}
      />
      </Wrapper>
    ));
    
  storiesOf('Komponenter/Listeelement-typer', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Nyhetstype', () => (
      <ListItemType
        itemType={{
          type: 'news',
          fields: object('Fields', {
            heading: 'A new thing happened',
            publishDate: '3. desember 2018',
            lead: 'asdsdf'
          })
        }}
      />
    ))
    .addWithStaticMarkup('Konferanse', () => (
      <ListItemType
        itemType={{
          type: 'conference',
          fields: object('Fields', {
            heading: 'Christmas 2',
            dateFrom: '2. november 1990',
            dateTo: '3. november 1990',
            registrationDeadline: '3. februar 1990',
            address: 'Dronninggata 28, 3004 Drammen',
            lead: 'We can write some stuff in here too'
          })
        }}
      />
    ))
    .addWithStaticMarkup('Bevilgning', () => (
      <ListItemType
        itemType={{
          type: 'grantFunding',
          fields: object('Fields', {
            heading: 'A new thing happened',
            deadline: '3. desember 2018',
            topic: ''
          })
        }}
      />
    ))
    .addWithStaticMarkup('Pressemelding', () => (
      <ListItemType
        itemType={{
          type: 'pressRelease',
          fields: object('Fields', {
            heading: 'Hvordan sjonglere (illustrert)',
            category: 'Brosjyre',
            image: 'https://placehold.it/300x300',
            publishDate: '1. januar 2003'
          })
        }}
      />
    ))
    .addWithStaticMarkup('Person', () => (
      <ListItemType
        itemType={{
          type: 'person',
          fields: object('Fields', {
            name: 'Donald Trump',
            email: 'donald@whitehouse.gov',
            phoneNumber: '+1 123 456 789',
            position: 'President',
            department: 'The Cabinet '
          })
        }}
      />
    ));
    
    storiesOf('Komponenter', module)
      .addDecorator(withKnobs)
      .addDecorator(checkA11y)
      .addWithStaticMarkup('Metadata', () => (
        <Wrapper title="Metadata">
          <PageMeta
            publishDate={text('Publish date', '1. januar 2015')}
            editDate={text('Edit date', '1. januar 2018')}
            url={text('URL', '#')}
          />
        </Wrapper>
      ))

  
  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Nedtrekksmeny', () => (
      <Wrapper title="Nedtrekksmeny">
        <Select
          label={text('Label', 'Tilpass siden til meg')}
          placeholder={text('Placeholder', 'Velg')}
          stacked={boolean('Stacked', false)}
          simple={boolean('Simple', false)}
          options={object('Options', [
            'Lege',
            'Kommune',
            'Fysioterapaut',
            'Apotek/bandasjist',
            'Psykolog',
            'Logoped',
            'Kiropraktor',
            'Sykehus/poliklinikk',
            'Tannpleier'
          ])}
        />
      </Wrapper>
    ));


      storiesOf('Komponenter', module)
        .addDecorator(withKnobs)
        .addDecorator(checkA11y)
        .addWithStaticMarkup('Pressemeldinger', () => (
          <Wrapper title="Pressemeldinger">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <PressRelease
                  title={text(
                    'Title',
                    'Barns miljø og sikkerhet / når barnet skader seg'
                  )}
                  info={text('Info', 'Plakat (pdf)')}
                  releaseDate={text('Release date', '1. juni 2009')}
                  url={text('url', '#')}
                  image={text(
                    'Image',
                    'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
                  )}
                  imageAlt={text('Image alt', 'Some monster that looks scary')}
                />
              </div>
              <div className="col-xs-12 col-md-6">
                <PressRelease
                  title={text(
                    'Title',
                    'Barns miljø og sikkerhet / når barnet skader seg'
                  )}
                  info={text('Info', 'Plakat (pdf)')}
                  releaseDate={text('Release date', '1. juni 2009')}
                  url={text('url', '#')}
                  image={text(
                    'Image',
                    'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
                  )}
                  imageAlt={text('Image alt', 'Some monster that looks scary')}
                />
              </div>
            </div>
          </Wrapper>
        ));


      storiesOf('Komponenter', module)
        .addDecorator(withKnobs)
        .addDecorator(checkA11y)
        .addWithStaticMarkup('Radiobuttons', () => (
          <Wrapper title="Radiobuttons">
            <RadioButtonGroup
              heading={text('Heading', 'Heading')}
              name={text('Name', 'usedForForms')}
              options={object('Options', [
                {
                  value: 'a',
                  label: 'A',
                  disabled: false
                },
                {
                  value: 'b',
                  label: 'B',
                  disabled: true
                },
                {
                  value: 'c',
                  label: 'C',
                  disabled: false
                },
                {
                  value: 'd',
                  label: 'D'
                }
              ])}
            />
          </Wrapper>
        ));


  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Sidemeny', () => (
      <Wrapper title="Sidemeny">
        <SectionSidebar
          heading={text('Heading', 'Some heading')}
          headingUrl={text('Heading Url', '#a')}
          icon={text('Icon', 'http://placehold.it/50x50')}
          list={object('List', [
            {
              title: 'KAPITTEL 1',
              url: '#',
              description: 'Kost og fysisk aktivitet ved svangerskaps-diabetes',
              children: [
                {
                  description: 'Underkapittel',
                  url: '#',
                  prefix: '1.1'
                },
                {
                  description: 'Underkapittel',
                  active: true,
                  url: '#',
                  prefix: '1.2'
                }
              ]
            },
            {
              title: 'KAPITTEL 2',
              url: '#',
              description: 'Diagnostikk og tiltak'
            },
            {
              title: 'KAPITTEL 3',
              url: '#',
              description: 'Nytt kapittel'
            }
          ])}
        />
      </Wrapper>
    ));
    
    storiesOf('Komponenter/Sitatstil', module)
      .addDecorator(withKnobs)
      .addDecorator(checkA11y)
      .addWithStaticMarkup('Standard', () => (
        <Wrapper title="Sitatstil standard">
          <Quote>{text('Text', 'nasjonal faglig retningslinje')}</Quote>
        </Wrapper>
      ))
      .addWithStaticMarkup('Med flere paragrafer', () => (
        <Wrapper title="Sitatstil med flere paragrafer">
          <Quote>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <ul>
              <li>a. abc</li>
              <li>b. def</li>
              <li>c. ghi</li>
            </ul>
            <ul>
              <li>1. abc</li>
              <li>2. def</li>
              <li>3. ghi</li>
            </ul>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
              ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
            <ol>
              <li>abc</li>
              <li>def</li>
              <li>ghi</li>
            </ol>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
              quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
            <p className="b-quote__footnote">
              Fotnote:
              <br />0 Tilføyd ved lov 24 juni 2011 nr. 30 (ikr. 1 jan 2012 iflg. res.
              16 des 2011 nr. 1252). Endres ved lov 16 juni 2017 nr. 55 (ikr. fra den
              tid Kongen bestemmer).
            </p>
          </Quote>
        </Wrapper>
      ));

    storiesOf('Komponenter/Spørreskjema', module)
      .addDecorator(withKnobs)
      .addDecorator(checkA11y)
      .addWithStaticMarkup('Standard', () => 
        <Wrapper title="Spørreskjema standard">
          <Questionnaire />
        </Wrapper>
      )
      .addWithStaticMarkup('Med layout', () => (
        <Wrapper title="Spørreskjema med layout">
          <Box color="grey" square noPadding>
            <div className="l-container">
              <Questionnaire />
            </div>
          </Box>
        </Wrapper>
      ));
  

  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Statistikk', () => (
      <Wrapper title="Statistikk">
        <Statistics
          bigText={text('Big text', '99.9%')}
          smallText={text(
            'Small text',
            "This is some text that is smaller, and it doesn't really make any sense here. This is some more text to make it longer."
          )}
          icon={text('Icon', './icons/pie.svg')}
        />
      </Wrapper>
    ));

  
  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Søk', () => (
      <Wrapper title="Standard søkefelt">
        <InputSearch dark={boolean('Dark mode', false)} label={text('Label', '')} />
      </Wrapper>
    ));


  
  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Tabell', () => 
      <Wrapper title="Tabell">
        <TableExample />
      </Wrapper>
  );

  
  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Transportblokk', () => (
      <Wrapper title="Transportblokk">
        <TransportBlock
          title={text('Title', 'Tittel')}
          text={text('Text', 'Her er det noe tekst')}
        />
      </Wrapper>
    ));


  storiesOf('Komponenter/Varsling', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .addWithStaticMarkup('Varsling Standard', () => (
      <Wrapper title="Varsling standard">
        <Alert
          status={select(
            'Status',
            {
              none: 'none',
              success: 'success',
              warning: 'warning',
              danger: 'danger',
              info: 'info'
            },
            'success'
          )}
          small={boolean('Small', false)}
          inline={boolean('Inline', false)}
          title={text('Title', '')}
        >
          {text('Content', 'Søknadsfrist 6.desember 2020')}
        </Alert>
      </Wrapper>
    ))
    .addWithStaticMarkup('Varslingslinje Standard', () => (
      <Wrapper title="Varslingslinje standard">
        <AlertBar
          heading={text(
            'Heading',
            'WHO erklærer Public Health Emergency of International Concern (PHEIC) i forbindelse med influensautbrudd.'
          )}
          lastUpdated={text('Text', 'Mandag 6. oktober 08:15')}
          alertLevel={select(
            'Alert level',
            {
              high: 'high',
              medium: 'medium',
              low: 'low'
            },
            'high'
          )}
        >
          {text('Text', 'This is some content, probably from rich text.')}
        </AlertBar>
      </Wrapper>
    ))
    .addWithStaticMarkup('Varslingslinje med knapp', () => (
      <Wrapper title="Varslingslinje med knapp">
        <AlertBar
          heading={text(
            'Heading',
            'WHO erklærer Public Health Emergency of International Concern (PHEIC) i forbindelse med influensautbrudd.'
          )}
          lastUpdated={text('Last updated', 'Mandag 6. oktober 08:15')}
          alertLevel={select(
            'Alert level',
            {
              high: 'high',
              medium: 'medium',
              low: 'low'
            },
            'high'
          )}
        >
          <Link href="#a" buttonInherit>
            Les mer
          </Link>
        </AlertBar>
      </Wrapper>
    ));



