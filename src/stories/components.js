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
import IconWithText from '../components/IconWithText';



  storiesOf('Komponenter/Anbefaling', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .add('Standard', () => (
      <Wrapper title="Anbefaling">
        <Collapsible
          background
          collapsed
          heading="Sekundær peritonitt"
          date="Sist oppdatert: 16.oktober 2020"
        >
          <Collapsible
            heading="Sterk anbefaling"
            subtle
            size="small"
            smallContent
            key="sterk-anbefaling"
          >
            <p>...Hva er en sterk anbefaling...</p>
          </Collapsible>
          <Collapsible
            h="h3"
            heading="Behandling"
            size="small"
            key="behandling"
            collapsed
          >
          <p>Antibiotikabehandling erstatter ikke kirurgi (drenasje av abscess, revisjon ved anastomoselekkasje)</p>
          <p>Minimum behandlingstid ved ukomplisert forløp (inkludert oral behandling): 5 døgn</p>
          <h4>Standard behandling</h4>
          <p>Anidulafungin 200 mg x 1 iv ladningsdose etterfulgt av<br />
          Anidulafungin 100 mg x 1 iv<br />
          &#43; Ampicillin iv 1,2 g x 4 iv <span className="t--infotext">– Infunderes over 3 timer</span><br />
          &#43; Metronidazol 1g x 1 iv <span className="t--infotext">– I dialyseposen</span>
          </p>
            <Collapsible
              h="h5"
              heading="Kontraindikasjoner"
              size="tiny"
            >
              <Box
              color="transparent" square noPadding>
                <div>
                <p />
                  <IconWithText text="Penicillinallergi" size="clean" icon="../icons/warning_high.svg" />
                  Ampicillin <br />
                  Skal ikke gis til pasienter med penicillinallergi
                </div>
                
                <div>
                  <IconWithText text="Graviditet" size="clean" icon="../icons/warning_high.svg" />
                  Gentamicin: <br />
                  Aminoglykosider bør unngås i andre og tredje trimester. <a href="#test">Les mer.</a><br />
                  Metronidazol:<br />
                  Tilbakeholden med bruk av høye doser i første trimester. <a href="#test">Les mer.</a>
                </div>
                
                <div>
                  <IconWithText text="Ammende" size="clean" icon="../icons/warning_high.svg" />
                  Metronidazol<br />
                  Overgang til morsmelk er moderat til høy. Andre midler bør benyttes om det finnes alternativer.
                </div>
                
              </Box>
            </Collapsible>
            <Collapsible
              h="h5"
              heading="Dosering ved overvekt"
              size="tiny"
              key="dosering"
            >
            <p>
            Ampicillin<br />
            TBW &gt; 100: 2g x 4
            </p>
            </Collapsible>
            
            <h4>Alternative behandlingsregimer </h4>
            <Collapsible
              h="h5"
              heading="Behandling ved redusert nyrefunksjon"
              size="small"
              key="behandling-1"
              >
              <p>tekst</p>
            </Collapsible>
            <Collapsible
              h="h5"
              heading="Behandling ved redusert leverfunksjon"
              size="small"
              key="behandling-2"
            >
              <p>tekst</p>
            </Collapsible>
            <Collapsible
              h="h5"
              heading="Behandling ved pencillin ikke straksallergi"
              size="small"
              key="behandling-3"
            >
              <p>Minimum behandlingstid ved ukomplisert forløp (inkludert oral behandling): 5 døgn</p>
              <p>Klindamycin 600x3 iv <br />
              &#43; Metronidazol 1x1 iv</p>
              <Collapsible
                h="h5"
                heading="Kontraindikasjoner"
                size="tiny"
                key="Kontraindikasjoner"
              >
              <p>tekst</p>
              </Collapsible>
            </Collapsible>
          </Collapsible>
          <Collapsible
            h="h3"
            heading="Praktisk - Slik kan anbefalingen følges"
            size="small"
            key="praktisk"
          >
          </Collapsible>
          <Collapsible
            h="h3"
            heading="Begrunnelse - dette er anbefalingen basert på"
            size="small"
            key="begrunnelse"
          >
          <Collapsible
            h="h4"
            heading="Sammmendrag"
            size="small"
            key="sammendrag"
          >
          </Collapsible>
          <Collapsible
            h="h4"
            heading="Vurdering"
            size="small"
            key="vurdering"
          >
          </Collapsible>
            <Collapsible
              h="h4"
              heading="Forskningsgrunnlag"
              size="small"
              key="forskningsgrunnlag"
            >
              <div className="row l-mt-1">
                <strong className="col-xs-12 col-md-3 top-xs">Populasjon</strong>
                <div className="col-xs-12 col-md-9">Pasienter med type 2 diabetes</div>
              </div>
              <div className="row">
                <strong className="col-xs-12 col-md-3 top-xs">Intervensjon</strong>
                <div className="col-xs-12 col-md-9">Intensiv blodsukkersenkende behandling</div>
              </div>
              <div className="row">
                <strong className="col-xs-12 col-md-3 top-xs">Komparator</strong>
                <div className="col-xs-12 col-md-9">Ikke intensiv blodsukkersenkende behandling (standard behandling)</div>
              </div>
              <Collapsible
                h="h5"
                heading="Sammendrag av studie"
                size="tiny"
                key="sammendrag-studie"
              >
              test
              
              <Collapsible
                h="h5"
                heading="Referanser"
                size="tiny"
                key="referanser"
              >
                <ol>	<li>Coca SG, Ismail-Beigi F, Haq N, Krumholz HM, &amp; Parikh CR (2012). "Role of intensive glucose control in development of renal end points in type 2 diabetes mellitus: systematic review and meta-analysis intensive glucose control in type 2 diabetes". Arch Intern Med, 172(10), 761-769.</li>	<li>Hemmmingsen B, Lund SS, Gluud C, Vaag A, Almdal TP, Hemmingsen C, Wetterslev W. Targeting intensive glycaemic control versus targeting conventional glycaemic control for type 2 diabetes (Review). <em>The Cochrane Library </em>2013, Issue 11</li>	<li>UK Prospective Diabetes Study (UKPDS) Group (1998) Intensive blood-glucose control with sulphonylureas or insulin compared with conventional treatment and risk of complications in patients with type 2 diabetes (UKPDS 33). Lancet 352:837–853</li>	<li>UK Prospective Diabetes Study (UKPDS) Group. Effect of intensive blood-glucose control with metformin on complications in overweight patients with type 2 diabetes(UKPDS 34). <em>Lancet </em>1998;<strong>352</strong>(9131):854–65</li>	<li>Stratton I, Adler A,NeilH et al (2000) Association of glycaemia with macrovascular and microvascular complications of type 2 diabetes (UKPDS 35): prospective observational study. BMJ 321:405–412</li>	<li>Holman RR, Paul SK, Bethel MA, Matthews DR, Neil HA. 10-year follow-up of intensive glucose control in type 2 diabetes. <em>The New England Journal of Medicine </em>2008;<strong>359 </strong>(15):1577–89. [PUBMED: 18784090]</li>	<li>The Action to Control Cardiovascular Risk in Diabetes Study Group (2008) Effects of intensive glucose lowering in type 2 diabetes. N Engl J Med 358:2545–2559</li>	<li>The ADVANCE Collaborative Group (2008) Intensive blood glucose control and vascular outcomes in patients with type 2 diabetes. N Engl J Med 358:2560–2572</li>	<li>Duckworth W, Abraira C, Moritz T et al (2009) Glucose control and vascular complications in veterans with type 2 diabetes. N Engl J Med 360:129–139</li>	<li>Turnbull FM, Abraira C, Anderson RJ, et al. Intensive glucose control and macrovascular outcomes in type 2 diabetes. Diabetologia 2009; 52: 2288-98</li>	<li>Kahn SE, Haffner SM, Heise MA, et al. Glycemic duarbillity of rosiglitazone, metformin or glyburide therapy. N Engl J Med 2006; 355: 2427-43</li>	<li><em>Buehler, A. M., Cavalcanti, A. B., Berwanger, O. Et al.. Effect of tight blood glucose control versus conventional control in patients with type 2 diabetes mellitus: a systematic review with meta-analysis of randomized controlled trials. <em>Cardiovasc Ther </em>2013<em>, 31</em>;147-160. doi: 10.1111/j.1755-5922.2011.00308.x PMID: 22212499</em></li></ol>
                </Collapsible>
              
              </Collapsible>
            </Collapsible>
          </Collapsible>
        </Collapsible>
      </Wrapper>
    ))
    .add('Ninja state', () => (
      <Wrapper title="Anbefaling Ninja State">
      <div className="b-collapsible b-collapsible--active b-collapsible--clean">
        <h2 className="b-collapsible__heading h2" id="sekundaer-peritonitt">
          <span className="js-copy-icon">#</span>
          <span className="js-copy-icon-text">Sekundær peritonitt</span>
        </h2>
          <Collapsible
            heading="Sterk anbefaling"
            subtle
            size="small"
            smallContent
          >
            <p>...Hva er en sterk anbefaling...</p>
          </Collapsible>
          <Collapsible
            h="h3"
            heading="Behandling"
            size="small"
            collapsed
          >
          <p>Antibiotikabehandling erstatter ikke kirurgi (drenasje av abscess, revisjon ved anastomoselekkasje)</p>
          <p>Minimum behandlingstid ved ukomplisert forløp (inkludert oral behandling): 5 døgn</p>
          <h4>Standard behandling</h4>
          <p>Anidulafungin 200 mg x 1 iv ladningsdose etterfulgt av<br />
          Anidulafungin 100 mg x 1 iv<br />
          &#43; Ampicillin iv 1,2 g x 4 iv <span className="t--infotext">– Infunderes over 3 timer</span><br />
          &#43; Metronidazol 1g x 1 iv <span className="t--infotext">– I dialyseposen</span>
          </p>
            <Collapsible
              h="h5"
              heading="Spesielle hensyn"
              size="tiny"
            >
              <Box
              color="transparent" square noPadding>
                <div>
                <p />
                  <IconWithText text="Penicillinallergi" size="clean" icon="../icons/warning_high.svg" />
                  Ampicillin <br />
                  Skal ikke gis til pasienter med penicillinallergi
                </div>
                
                <div>
                  <IconWithText text="Graviditet" size="clean" icon="../icons/warning_high.svg" />
                  Gentamicin: <br />
                  Aminoglykosider bør unngås i andre og tredje trimester. <a href="#test">Les mer.</a><br />
                  Metronidazol:<br />
                  Tilbakeholden med bruk av høye doser i første trimester. <a href="#test">Les mer.</a>
                </div>
                
                <div>
                  <IconWithText text="Ammende" size="clean" icon="../icons/warning_high.svg" />
                  Metronidazol<br />
                  Overgang til morsmelk er moderat til høy. Andre midler bør benyttes om det finnes alternativer.
                </div>
                
              </Box>
            </Collapsible>
            <Collapsible
              h="h5"
              heading="Dosering ved overvekt"
              size="tiny"
            >
            <p>
            Ampicillin<br />
            TBW &gt; 100: 2g x 4
            </p>
            </Collapsible>
            
            <h4>Alternative behandlingsregimer </h4>
            <Collapsible
              h="h5"
              heading="Behandling ved redusert nyrefunksjon"
              size="small"
              >
              <p>tekst</p>
            </Collapsible>
            <Collapsible
              h="h5"
              heading="Behandling ved redusert leverfunksjon"
              size="small"
            >
              <p>tekst</p>
            </Collapsible>
            <Collapsible
              h="h5"
              heading="Behandling ved pencillin ikke straksallergi"
              size="small"
            >
              <p>Minimum behandlingstid ved ukomplisert forløp (inkludert oral behandling): 5 døgn</p>
              <p>Klindamycin 600x3 iv <br />
              &#43; Metronidazol 1x1 iv</p>
              <Collapsible
                h="h5"
                heading="Spesielle hensyn"
                size="tiny"
              >
              <p>tekst</p>
              </Collapsible>
            </Collapsible>
          </Collapsible>
          <Collapsible
            h="h3"
            heading="Praktisk - Slik kan anbefalingen følges"
            size="small"
          >
          </Collapsible>
          <Collapsible
            h="h3"
            heading="Begrunnelse - dette er anbefalingen basert på"
            size="small"
          >
          <Collapsible
            h="h4"
            heading="Sammmendrag"
            size="small"
          >
          </Collapsible>
          <Collapsible
            h="h4"
            heading="Vurdering"
            size="small"
          >
          </Collapsible>
            <Collapsible
              h="h4"
              heading="Forskningsgrunnlag"
              size="small"
            >
              <div className="row l-mt-1">
                <strong className="col-xs-12 col-md-3 top-xs">Populasjon</strong>
                <div className="col-xs-12 col-md-9">Pasienter med type 2 diabetes</div>
              </div>
              <div className="row">
                <strong className="col-xs-12 col-md-3 top-xs">Intervensjon</strong>
                <div className="col-xs-12 col-md-9">Intensiv blodsukkersenkende behandling</div>
              </div>
              <div className="row">
                <strong className="col-xs-12 col-md-3 top-xs">Komparator</strong>
                <div className="col-xs-12 col-md-9">Ikke intensiv blodsukkersenkende behandling (standard behandling)</div>
              </div>
              <Collapsible
                h="h5"
                heading="Sammendrag av studie"
                size="tiny"
              >
              <div id="collapsible-forskningsgrunnlag-tekst1c873ac8-0e47-49a6-b601-efa38ecf843c" className="b-collapsible__content" hidden="" aria-hidden="true">
              <div><p><a href="https://helsedirektoratet.no/retningslinjer/diabetes/dokumenter-diabetes/PICO%201.1%20-%20Summary%20of%20findings%20tabell.pdf">Evidensprofil (PDF)</a></p><p>Følgende utfall ble vurdert som relevante for problemstillingen (gradert etter hvor viktige vi tror de er for pasienten) og er vist i vedlagte evidensprofil:<br />1. Død – KRITISK<br />2. Livskvalitet – KRITISK<br />3. Hjerteinfarkt/hjerneslag – KRITISK<br />4. Ketoacidose/annen alvorlig hyperglykemi – VIKTIG<br />5. HbA1c – VIKTIG<br />6. (Alvorlig) hypoglykemi – KRITISK<br />7. Bivirkninger – VIKTIG<br />8. Vektendring – MINDRE VIKTIG<br />9. Synstruende retinopati – KRITISK<br />10. Amputasjon – KRITISK<br />11. ESRD - KRITISK<br />12. Makroalbuminuri - KRITISK<br />13. Mikroalbuminuri - VIKTIG<br />14. Dobling av plasma kreatinin - KRITISK<br />15. Død fra renal sykdom - KRITISK</p><p>I tillegg til disse utfallene ble også insidens av autonom nevropati og insidens av perifer nevropati vurdert (Buehler AM, 2013), og kategorisert som kritiske Risikoreduksjon ved intervensjon for insidens av perifer nevropati var 6 %, dvs. 26 færre av 1000. Kvaliteten på evidensen er moderat og nedgradert pga fare for høy bias da deltagerne ikke var blindet for intervensjonen. Risikoforskjell med intervensjon for insidens av autonom nevropati var 26 flere per 1000. RR 1.15 (95% KI 0.72-1.86). Kvaliteten på evidensen anses som lav og er nedgradert pga høy risiko for bias og publiseringsskjevhet.</p><p>I en metaanalyse fra Coca et al. er data fra intensiv blodglukosebehandling hos 15.000 - 28.000 deltakere oppsummert for nyrespesifikke utfallsmål (nr. 11-15 i listen ovenfor) (Coca SG, 2012). Studiene er open label, som øker muligheten for bias. Funnel plot for flere av effektmålene reiser mistanke om publikasjonsskjevhet. Ingen studier tar høyde for hvorvidt pasientene har diabetes nefropati (som er den absolutt vanligste nyreskaden ved diabetes type 1) eller hypertensiv nyreskade/ nefrosklerose (som ved diabetes type 2 er en minst like vanlig nyreskade som diabetes nefropati). Ved sistnevnte diagnose er ikke intensivert glukoseregulering forventet å ha like stor effekt på effektmålene som ved diabetes nefropati. I følge litteraturen kan det også forekomme blandingsformer av diabetes nefropati og hypertensiv nyreskade hos pasienten med diabetes type 2.</p><p>I den systematiske oversikten som best besvarte PICO, og som danner grunnlaget for Evidensprofilen, var følgende utfallsmål IKKE inkludert: HbA1c, ketoacidose, bivirkninger og vektendring.</p><p>En Cochrane review fra 2013 konkluderer med at intensiv behandling reduserer risiko for mikrovaskulære senkomplikasjoner (manifestasjon av retinopati med 21 %, relativ risiko (RR) 0,79 med 95 % konfidensintervall (KI) 0,68-0,92, og manifestasjon av nefropati med 25 %, RR 0,75 med 95 % KI 0,59-0,95,) samt amputasjoner av underekstremiteter (RR 0,65 med 95 % KI 0,45-0,94) uten signifikant effekt på risiko for total eller kardiovaskulær dødelighet, ikke fatalt hjerteinfarkt eller ikke fatalt hjerneslag (Hemmingsen B, 2013).</p><p>Bare to studier hadde undersøkt effekten på helserelatert livskvalitet og fant ingen signifikant effekt (ADDITION Netherlands og ACCORD 2008).</p><p>ADDITION Netherlands: No negative effects of a multi-factorial, intensified treatment on self-reported health status, treatment satisfaction, and diabetes-related distress in screen-detected type 2 diabetes patients. The ADDITION-Netherlands study. van den Donk M, Gorter KJ, Rutten GE. Quality of Life Research, 2010<br />ACCORD 2008: Effects of Intensive Glucose Lowering in Type 2 Diabetes. The Action to Control Cardiovascular Risk in Diabetes Study Group<sup><a className="showFootNotesLayer" href="http://www.nejm.org/doi/full/10.1056/NEJMoa0802743#FN1" rel="#footNotesLayer"><u>*</u></a></sup><span>N Engl J Med 2008; 358:2545-2559</span><a href="http://www.nejm.org/toc/nejm/358/24/"><u>June 12, 2008</u></a><span>DOI: 10.1056/NEJMoa0802743</span></p><p>Ved diabetes type 2 finnes det en stor randomisert, kontrollert intervensjonsstudie (UKPDS 33, 1998) som har undersøkt effekten av intensiv mot mindre intensiv blodsukkerkontroll (snitt HbA1c 7,0 % mot 7,9 %) over lang tid (10 år) hos pasienter med nyoppdaget diabetes på risiko for enhver diabeteskomplikasjon, mikrovaskulære komplikasjoner, hjerte-/karsykdom og død. Studien fant at intensiv behandling basert på insulin eller sulfonylurea reduserte summen av diabetiske senkomplikasjoner med 12 %, mikrovaskulære senkomplikasjoner med 25 %, men påvirket ikke risiko for død eller hjerte-/karsykdom signifikant. I en undergruppe av overvektige reduserte intensivert behandling med metformin både dødelighet og risiko for hjerteinfarkt signifikant (UKPDS, 1998). I en epidemiologisk analyse av UKPDS-data undersøkte Stratton et al sammenhengen mellom blodsukkerkontroll og mikro- og makrovaskulære komplikasjoner, og fant en signifikant, tydelig sammenheng mellom HbA1c og risiko for komplikasjoner (UKPDS 35, 2000).</p><p>I en oppfølgingsundersøkelse 10 år etter at den randomiserte studien var avsluttet, er det rapportert at så vel risiko for hjerteinfarkt som for tidlig død var lavere i gruppen som ble intensivt behandlet de 10 år studien varte (Holmann RR, 2008). Det finnes i tillegg tre store, randomiserte, kontrollerte undersøkelser av intensiv versus ikke-intensiv behandling ved diabetes type 2. Inkludert var pasienter som ikke hadde nyoppdaget diabetes, hvor målet for blodsukkerkontroll var strengere enn i UKPDS og hvor varigheten av studiene var betydelig kortere: ACCORD (7) , ADVANCE (8) og VADT (9). De aktuelle studier er også oppsummert i flere metaanalyser, bla Turnbull et al fra 2009 (10). ACCORD-studien ble stoppet prematurt på grunn av økt total dødelighet i intensiv behandlet gruppe. Behandlingsmålet i denne gruppen var HbA1c &lt;6 %. Tilsvarende økt dødelighet ble ikke observert i ADVANCE eller VADT. Ingen av studiene fant at intensiv behandling reduserte risiko for død eller kardiovaskulære hendelser, men den positive effekten på mikrovaskulære komplikasjoner som ble observert i UKPDS ble bekreftet.</p><p>Når det gjelder risiko for alvorlig hyperglykemi (ketotisk eller ikke ketotisk koma) har vi ikke funnet rapporter som har sammenliknet intensiv mot ikke-intensiv blodsukkersenkende behandling.</p><p>Risiko for hypoglykemi øker ved intensiv blodsukkersenkende behandling. Hemmingsen et al (2) rapporterer en relativ risiko for mild og moderat hypoglykemi på 1,54 (95% KI 1,35-1,75) og for alvorlig hypoglykemi relativ risiko 2,18 (95% KI 1,53-3,11). Risikoen for alvorlig hypoglykemi varierte i betydelig grad mellom de randomiserte studiene nevnt over.</p><p>Vektøkning er vanligvis sterkere ved intensiv blodsukkersenkende behandling, men varierer med de ulike medikamentene og vil omtales i relasjon til disse.</p>
              
              <Collapsible
                h="h5"
                heading="Referanser"
                size="tiny"
              >
                <ol>	<li>Coca SG, Ismail-Beigi F, Haq N, Krumholz HM, &amp; Parikh CR (2012). "Role of intensive glucose control in development of renal end points in type 2 diabetes mellitus: systematic review and meta-analysis intensive glucose control in type 2 diabetes". Arch Intern Med, 172(10), 761-769.</li>	<li>Hemmmingsen B, Lund SS, Gluud C, Vaag A, Almdal TP, Hemmingsen C, Wetterslev W. Targeting intensive glycaemic control versus targeting conventional glycaemic control for type 2 diabetes (Review). <em>The Cochrane Library </em>2013, Issue 11</li>	<li>UK Prospective Diabetes Study (UKPDS) Group (1998) Intensive blood-glucose control with sulphonylureas or insulin compared with conventional treatment and risk of complications in patients with type 2 diabetes (UKPDS 33). Lancet 352:837–853</li>	<li>UK Prospective Diabetes Study (UKPDS) Group. Effect of intensive blood-glucose control with metformin on complications in overweight patients with type 2 diabetes(UKPDS 34). <em>Lancet </em>1998;<strong>352</strong>(9131):854–65</li>	<li>Stratton I, Adler A,NeilH et al (2000) Association of glycaemia with macrovascular and microvascular complications of type 2 diabetes (UKPDS 35): prospective observational study. BMJ 321:405–412</li>	<li>Holman RR, Paul SK, Bethel MA, Matthews DR, Neil HA. 10-year follow-up of intensive glucose control in type 2 diabetes. <em>The New England Journal of Medicine </em>2008;<strong>359 </strong>(15):1577–89. [PUBMED: 18784090]</li>	<li>The Action to Control Cardiovascular Risk in Diabetes Study Group (2008) Effects of intensive glucose lowering in type 2 diabetes. N Engl J Med 358:2545–2559</li>	<li>The ADVANCE Collaborative Group (2008) Intensive blood glucose control and vascular outcomes in patients with type 2 diabetes. N Engl J Med 358:2560–2572</li>	<li>Duckworth W, Abraira C, Moritz T et al (2009) Glucose control and vascular complications in veterans with type 2 diabetes. N Engl J Med 360:129–139</li>	<li>Turnbull FM, Abraira C, Anderson RJ, et al. Intensive glucose control and macrovascular outcomes in type 2 diabetes. Diabetologia 2009; 52: 2288-98</li>	<li>Kahn SE, Haffner SM, Heise MA, et al. Glycemic duarbillity of rosiglitazone, metformin or glyburide therapy. N Engl J Med 2006; 355: 2427-43</li>	<li><em><em>Buehler, A. M., Cavalcanti, A. B., Berwanger, O. Et al.. Effect of tight blood glucose control versus conventional control in patients with type 2 diabetes mellitus: a systematic review with meta-analysis of randomized controlled trials. <em>Cardiovasc Ther </em>2013<em>, 31</em>;147-160. doi: 10.1111/j.1755-5922.2011.00308.x PMID: 22212499</em></em></li></ol>
                </Collapsible>
              
              </div>
              </div>
              </Collapsible>
            </Collapsible>
          </Collapsible>
        </div>
      </Wrapper>
    ));


storiesOf('Komponenter', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
    .add('Artikkelintro', () => (
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
      .add('Boks', () => (
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
    .add('Brødsmulesti', () => (
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
      .add('Checkbox-gruppe', () => (
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

  


  storiesOf('Komponenter/Footer', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .add('HDIR Standard', () => (
      <Wrapper title="HDIR Standard">
        <Box square color="blueDark">
          <div className="l-container">
            <Footer />
          </div>
        </Box>
      </Wrapper>
    ))
    .add('Helfo Standard', () => (
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
    .add('Flervelger', () => (
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
    .add('Grid', () => (
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
    .add('Standard', () => (
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
    .add('LongShortHeading uten link', () => (
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
    .add('LongShortHeading med link', () => (
      <Wrapper title="Helfo standard" lead="Viser kortvariant med overskriftsstil og lang variant som mindre tekst. Har også link til utdypende info om innholdstypen.">
        <LongShortHeading
          long={text("Long heading", "Nasjonal faglig retningslinje for svangerskapsdiabetes")}
          short={text("Short heading", "Svangerskapsdiabetes")}
          icon={'./icons/Retningslinjer_Veiledere_Faglige_råd.svg'}
          url="#a"
          linkText={text("Link text: ", "Hva er dette?")}
        />
      </Wrapper>
    ));

  
storiesOf('Komponenter/Header', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('Standard', () => (
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
  .add('QA Environment', () => (
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
  .add('Kapittel-overskrift', () => (
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
    .add('Standard', () => (
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
    .add('Med statistikk', () => (
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
    .add('Horisontal', () => (
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
    .add('Med bilde', () => (
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
    .add('Alle knapper', () => (
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
    .add('Standard', () => (
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
    .add('Pil høyre', () => (
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
    .add('Nedlastingsknapp', () => (
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
    .add('Liten knapp', () => (
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
    .add('Sekundær knapp', () => (
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
    .add('Enkel knapp', () => (
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
    .add('Sekundær mørk', () => (
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
    .add('Valgt sekundær', () => (
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
    .add('Liste-heading', () => (
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
    .add('Filterliste', () => (
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
    .add('Link-liste med bilder', () => (
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
    .add('Navigasjonsliste', () => (
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
    .add('Nyhetsliste', () => (
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
    .add('Artikkelliste', () => (
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
    .add('Nyhetstype', () => (
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
    .add('Konferanse', () => (
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
    .add('Bevilgning', () => (
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
    .add('Pressemelding', () => (
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
    .add('Person', () => (
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
      .add('Metadata', () => (
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
    .add('Nedtrekksmeny', () => (
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
        .add('Pressemeldinger', () => (
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
        .add('Radiobuttons', () => (
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
    .add('Sidemeny', () => (
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
      .add('Standard', () => (
        <Wrapper title="Sitatstil standard">
          <Quote>{text('Text', 'nasjonal faglig retningslinje')}</Quote>
        </Wrapper>
      ))
      .add('Med flere paragrafer', () => (
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
      .add('Standard', () => 
        <Wrapper title="Spørreskjema standard">
          <Questionnaire />
        </Wrapper>
      )
      .add('Med layout', () => (
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
    .add('Statistikk', () => (
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
    .add('Søk', () => (
      <Wrapper title="Standard søkefelt">
        <InputSearch dark={boolean('Dark mode', false)} label={text('Label', '')} />
      </Wrapper>
    ));


  
  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .add('Tabell', () => 
      <Wrapper title="Tabell">
        <TableExample />
      </Wrapper>
  );

  
  storiesOf('Komponenter', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)
    .add('Transportblokk', () => (
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
    .add('Varsling Standard', () => (
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
    .add('Varslingslinje Standard', () => (
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
    .add('Varslingslinje med knapp', () => (
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
          <Link href="#testa" buttonInherit>
            Les mer
          </Link>
        </AlertBar>
      </Wrapper>
    ));



