import React from 'react';
import Collapsible from '../components/Collapsible';
import Link from '../components/Link';
import Box from '../components/Box';
import IconWithText from '../components/IconWithText';
import SectionSidebar from '../components/SectionSidebar';

const RecommendationPageAntibiotics = () => (
  <>
    <div className="l-container l-mt-3">
      <main id="main" className="row l-mt-4">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <SectionSidebar heading="Innhold på denne siden" />
        </aside>
        <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
          <p>Klikk på behandling og Kontraindikasjoner for eksempelinnhold.</p>
          <br /><br />
            <Collapsible
              background
              heading="Sekundær peritonitt"
              date="Sist oppdatert: 16.oktober 2020"
            >
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
              + Ampicillin iv 1,2 g x 4 iv <span className="t--infotext">– Infunderes over 3 timer</span><br />
               + Gentamicin 5 mg/kg x 1 iv <span className="t--infotext">– 6 timers intervall</span> <br />
              + Metronidazol 1g x 1 iv <span className="t--infotext">– I dialyseposen</span></p>
                <Collapsible
                  h="h5"
                  heading="Kontraindikasjoner"
                  size="tiny"
                >
                  <Box
                  color="transparent" square noPadding>
                    <p>
                      <IconWithText text="Penicillinallergi" size="clean" icon="../icons/warning_high.svg" />
                      Ampicillin <br />
                      Skal ikke gis til pasienter med penicillinallergi
                    </p>
                    
                    <p>
                      <IconWithText text="Graviditet" size="clean" icon="../icons/warning_high.svg" />
                      Gentamicin: <br />
                      Aminoglykosider bør unngås i andre og tredje trimester. <a href="#">Les mer.</a><br />
                      Metronidazol:<br />
                      Tilbakeholden med bruk av høye doser i første trimester. <a href="#">Les mer.</a>
                    </p>
                    
                    <p>
                      <IconWithText text="Ammende" size="clean" icon="../icons/warning_high.svg" />
                      Metronidazol<br />
                      Overgang til morsmelk er moderat til høy. Andre midler bør benyttes om det finnes alternativer.
                    </p>
                    
                  </Box>
                </Collapsible>
                <Collapsible
                  h="h5"
                  heading="Dosering ved overvekt"
                  size="tiny"
                >
                <p>
                Ampicillin<br />
                TBW > 100: 2g x 4
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
                   + Gentamicin 5mg/kgx1 iv  <br />
                  + Metronidazol 1x1 iv</p>
                  <Collapsible
                    h="h5"
                    heading="Kontraindikasjoner"
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
                  <div><p><a href="https://helsedirektoratet.no/retningslinjer/diabetes/dokumenter-diabetes/PICO%201.1%20-%20Summary%20of%20findings%20tabell.pdf" target="_blank">Evidensprofil (PDF)</a></p><p>Følgende utfall ble vurdert som relevante for problemstillingen (gradert etter hvor viktige vi tror de er for pasienten) og er vist i vedlagte evidensprofil:<br />1. Død – KRITISK<br />2. Livskvalitet – KRITISK<br />3. Hjerteinfarkt/hjerneslag – KRITISK<br />4. Ketoacidose/annen alvorlig hyperglykemi – VIKTIG<br />5. HbA1c – VIKTIG<br />6. (Alvorlig) hypoglykemi – KRITISK<br />7. Bivirkninger – VIKTIG<br />8. Vektendring – MINDRE VIKTIG<br />9. Synstruende retinopati – KRITISK<br />10. Amputasjon – KRITISK<br />11. ESRD - KRITISK<br />12. Makroalbuminuri - KRITISK<br />13. Mikroalbuminuri - VIKTIG<br />14. Dobling av plasma kreatinin - KRITISK<br />15. Død fra renal sykdom - KRITISK</p><p>I tillegg til disse utfallene ble også insidens av autonom nevropati og insidens av perifer nevropati vurdert (Buehler AM, 2013), og kategorisert som kritiske Risikoreduksjon ved intervensjon for insidens av perifer nevropati var 6 %, dvs. 26 færre av 1000. Kvaliteten på evidensen er moderat og nedgradert pga fare for høy bias da deltagerne ikke var blindet for intervensjonen. Risikoforskjell med intervensjon for insidens av autonom nevropati var 26 flere per 1000. RR 1.15 (95% KI 0.72-1.86). Kvaliteten på evidensen anses som lav og er nedgradert pga høy risiko for bias og publiseringsskjevhet.</p><p>I en metaanalyse fra Coca et al. er data fra intensiv blodglukosebehandling hos 15.000 - 28.000 deltakere oppsummert for nyrespesifikke utfallsmål (nr. 11-15 i listen ovenfor) (Coca SG, 2012). Studiene er open label, som øker muligheten for bias. Funnel plot for flere av effektmålene reiser mistanke om publikasjonsskjevhet. Ingen studier tar høyde for hvorvidt pasientene har diabetes nefropati (som er den absolutt vanligste nyreskaden ved diabetes type 1) eller hypertensiv nyreskade/ nefrosklerose (som ved diabetes type 2 er en minst like vanlig nyreskade som diabetes nefropati). Ved sistnevnte diagnose er ikke intensivert glukoseregulering forventet å ha like stor effekt på effektmålene som ved diabetes nefropati. I følge litteraturen kan det også forekomme blandingsformer av diabetes nefropati og hypertensiv nyreskade hos pasienten med diabetes type 2.</p><p>I den systematiske oversikten som best besvarte PICO, og som danner grunnlaget for Evidensprofilen, var følgende utfallsmål IKKE inkludert: HbA1c, ketoacidose, bivirkninger og vektendring.</p><p>En Cochrane review fra 2013 konkluderer med at intensiv behandling reduserer risiko for mikrovaskulære senkomplikasjoner (manifestasjon av retinopati med 21 %, relativ risiko (RR) 0,79 med 95 % konfidensintervall (KI) 0,68-0,92, og manifestasjon av nefropati med 25 %, RR 0,75 med 95 % KI 0,59-0,95,) samt amputasjoner av underekstremiteter (RR 0,65 med 95 % KI 0,45-0,94) uten signifikant effekt på risiko for total eller kardiovaskulær dødelighet, ikke fatalt hjerteinfarkt eller ikke fatalt hjerneslag (Hemmingsen B, 2013).</p><p>Bare to studier hadde undersøkt effekten på helserelatert livskvalitet og fant ingen signifikant effekt (ADDITION Netherlands og ACCORD 2008).</p><p>ADDITION Netherlands: No negative effects of a multi-factorial, intensified treatment on self-reported health status, treatment satisfaction, and diabetes-related distress in screen-detected type 2 diabetes patients. The ADDITION-Netherlands study. van den Donk M, Gorter KJ, Rutten GE. Quality of Life Research, 2010<br />ACCORD 2008: Effects of Intensive Glucose Lowering in Type 2 Diabetes. The Action to Control Cardiovascular Risk in Diabetes Study Group<sup><a class="showFootNotesLayer" href="http://www.nejm.org/doi/full/10.1056/NEJMoa0802743#FN1" rel="#footNotesLayer"><u>*</u></a></sup><span>N Engl J Med 2008; 358:2545-2559</span><a href="http://www.nejm.org/toc/nejm/358/24/"><u>June 12, 2008</u></a><span>DOI: 10.1056/NEJMoa0802743</span></p><p>Ved diabetes type 2 finnes det en stor randomisert, kontrollert intervensjonsstudie (UKPDS 33, 1998) som har undersøkt effekten av intensiv mot mindre intensiv blodsukkerkontroll (snitt HbA1c 7,0 % mot 7,9 %) over lang tid (10 år) hos pasienter med nyoppdaget diabetes på risiko for enhver diabeteskomplikasjon, mikrovaskulære komplikasjoner, hjerte-/karsykdom og død. Studien fant at intensiv behandling basert på insulin eller sulfonylurea reduserte summen av diabetiske senkomplikasjoner med 12 %, mikrovaskulære senkomplikasjoner med 25 %, men påvirket ikke risiko for død eller hjerte-/karsykdom signifikant. I en undergruppe av overvektige reduserte intensivert behandling med metformin både dødelighet og risiko for hjerteinfarkt signifikant (UKPDS, 1998). I en epidemiologisk analyse av UKPDS-data undersøkte Stratton et al sammenhengen mellom blodsukkerkontroll og mikro- og makrovaskulære komplikasjoner, og fant en signifikant, tydelig sammenheng mellom HbA1c og risiko for komplikasjoner (UKPDS 35, 2000).</p><p>I en oppfølgingsundersøkelse 10 år etter at den randomiserte studien var avsluttet, er det rapportert at så vel risiko for hjerteinfarkt som for tidlig død var lavere i gruppen som ble intensivt behandlet de 10 år studien varte (Holmann RR, 2008). Det finnes i tillegg tre store, randomiserte, kontrollerte undersøkelser av intensiv versus ikke-intensiv behandling ved diabetes type 2. Inkludert var pasienter som ikke hadde nyoppdaget diabetes, hvor målet for blodsukkerkontroll var strengere enn i UKPDS og hvor varigheten av studiene var betydelig kortere: ACCORD (7) , ADVANCE (8) og VADT (9). De aktuelle studier er også oppsummert i flere metaanalyser, bla Turnbull et al fra 2009 (10). ACCORD-studien ble stoppet prematurt på grunn av økt total dødelighet i intensiv behandlet gruppe. Behandlingsmålet i denne gruppen var HbA1c &lt;6 %. Tilsvarende økt dødelighet ble ikke observert i ADVANCE eller VADT. Ingen av studiene fant at intensiv behandling reduserte risiko for død eller kardiovaskulære hendelser, men den positive effekten på mikrovaskulære komplikasjoner som ble observert i UKPDS ble bekreftet.</p><p>Når det gjelder risiko for alvorlig hyperglykemi (ketotisk eller ikke ketotisk koma) har vi ikke funnet rapporter som har sammenliknet intensiv mot ikke-intensiv blodsukkersenkende behandling.</p><p>Risiko for hypoglykemi øker ved intensiv blodsukkersenkende behandling. Hemmingsen et al (2) rapporterer en relativ risiko for mild og moderat hypoglykemi på 1,54 (95% KI 1,35-1,75) og for alvorlig hypoglykemi relativ risiko 2,18 (95% KI 1,53-3,11). Risikoen for alvorlig hypoglykemi varierte i betydelig grad mellom de randomiserte studiene nevnt over.</p><p>Vektøkning er vanligvis sterkere ved intensiv blodsukkersenkende behandling, men varierer med de ulike medikamentene og vil omtales i relasjon til disse.</p>
                  
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
            </Collapsible>
            
            <Collapsible
              background
              heading="Noe annet"
              date="Sist faglig oppdatert: 11. juni 2020"
            >
              <Collapsible
                heading="Sterk anbefaling"
                subtle
                size="small"
                smallContent
              >
                <p>...Hva er en sterk anbefaling...</p>
              </Collapsible>
              <p>Antibiotikabehandling erstatter ikke kirurgi (drenasje av abscess, revisjon ved anastomoselekkasje)</p>
            </Collapsible>
          </article>
      </main>
    </div>
    <div className="l-mt-4">
      <Box square>
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

export default RecommendationPageAntibiotics;
