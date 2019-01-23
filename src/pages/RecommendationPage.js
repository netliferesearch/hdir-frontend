import React from 'react';
import Collapsible from '../components/Collapsible';
import Link from '../components/Link';
import Box from '../components/Box';

const RecommendationPage = () => (
  <div>
    <div className="l-container l-mt-3">
      <div className="row">
        <div className="col-xs-12 col-md-9">
          <h1 className="h2">
            Kvinner med svangerskapsdiabetes bør få kostråd og rådgivning basert
            på kostanamnese ved behandling av svangerskapsdiabetes
          </h1>
          <div className="l-mt-1">
            <Collapsible
              heading="Sterk anbefaling"
              subtle
              size="small"
              smallContent
            >
              <p>...Hva er en sterk anbefaling...</p>
            </Collapsible>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-md-9">
          <div className="l-mt-3">
            <div className="l-mb-3">
              <p>
                Kvinnen bør få kostveiledning og jevnlig oppfølging for å oppnå
                tilfredsstillende blodsukker fastende og etter måltider, og for
                å forhindre for stor vektøkning i svangerskapet. Det anbefales
                at kostanamnese benyttes i dette arbeidet.
              </p>
              <p>
                Kostrådene baseres på kostanamnesen og styres etter
                glukoseverdier ved egenmåling. Mål: Fastende: 5.3 mmol/l, 2
                timer etter måltid: 6.7 mmol/l (se anbefaling: Opplæring i
                egenmåling av glukose). Kvinnen kan rådes til å følge et
                kosthold med en karbohydratkvalitet og -mengde per måltid som
                gjør det enklere å nå behandlingsmålene for glukose
              </p>

              <div className="l-mb-3">
                <Collapsible
                  heading="Praktisk"
                  subheading="Slik følger du anbefalingen"
                  size="medium"
                >
                  <p>
                    For å bidra til god blodsukkerregulering, vil kvinner med
                    svangerskapsdiabetes ha nytte av å innta et kosthold med lav
                    glykemisk indeks, innta flere og gjerne regelmessige
                    måltider, fordele inntaket av karbohydrater jevnt mellom
                    måltidene og begrense inntaket av søte mat- og drikkevarer.
                    Dette er i samsvar med Helsedirektoratets kostråd og
                    Helsedirektoratet generelle kostråd for gravide. Det
                    viktigste er å ha et høyt inntak av fiber og å unngå
                    hurtigresorberbare karbohydrater, med andre ord en moderat
                    lav-GI-kost.
                  </p>{' '}
                  <p>
                    {' '}
                    Glukosestigningen etter et måltid avhenger primært av mengde
                    og kvalitet av karbohydratene i måltidet. Gravide kvinner
                    anbefales å innta minimum 175 gram karbohydrat per dag (IOM
                    2007, Reader 2007). Enkelte karbohydratrike matvarer bør
                    begrenses i mengde og heller fordeles over flere måltider
                    dersom ikke postprandiale glukosemål nås. Kostrådene
                    tilpasses kvinnens KMI og anbefalte vektøkning.
                  </p>{' '}
                  <p>Glykemisk indeks</p>{' '}
                  <p>
                    (GI) Begrepet benyttes om matvarer med mye fiber og langsomt
                    absorberbare karbohydrater. GI er en måte å inndele
                    karbohydratrike matvarer ut i fra den effekten de har på
                    glukosenivået. En GI på 0 betyr ingen/svært liten effekt,
                    mens GI på 100 vil si at matvaren har samme glukosestigende
                    effekt som glukose.
                  </p>{' '}
                  <p>
                    En kost med lav GI inkluderer matvarer som i hovedsak har en
                    GI-verdi under 70. Dette er ikke det samme som en
                    karbohydratredusert kost, der det legges vekt på å redusere
                    mengden karbohydrat. Kost med lav GI kan ha et høyt
                    karbohydratinnhold, men kvaliteten på karbohydratkildene er
                    det viktige.
                  </p>{' '}
                  <p>
                    Typisk vil en kost med lav GI kunne inneholde
                    karbohydratrike matvarer som belgvekster, hele korn/sammalt
                    mel, grove brød og kornprodukter, fullkornspasta/-ris, og
                    det legges også vekt på matvarer og matretter som er lite
                    bearbeidet (f.eks. kornblandinger av hele valsede korn og
                    nøtter framfor cornflakes og lignende frokostblandinger, rå
                    grønnsaker framfor kokte etc.).
                  </p>
                </Collapsible>
              </div>
              <div className="l-mb-3">
                <div className="l-mb-3">
                  <Collapsible
                    heading="Begrunnelse"
                    subheading="Dette er anbefalingen basert på"
                    size="medium"
                  >
                    <div className="l-mb-1">
                      <Collapsible heading="Sammendrag" size="small">
                        <p>
                          Individuelle kostråd for å senke fastende glukose og
                          redusere postprandial glukosestigning er målet med
                          behandlingen av svangerskapsdiabetes. Det er
                          veletablert klinisk praksis som også alle
                          behandlingsstudier bygger på og grunnlaget for den
                          sterke anbefalingen om å gi konkrete kostråd.
                        </p>
                        <p>
                          Det finnes lite evidens for hva som er den beste
                          fordelingen av næringsstoffer og det optimale
                          energiinntaket basert på den gravides vekt før/under
                          graviditeten. Forskningsfeltet møter betydelige
                          metodologiske utfordringer, da det vil være uetisk å
                          sette opp studier der kontrollgruppen ikke får tilgang
                          til standard informasjon om hvilken kost som anses
                          god.
                        </p>
                        <p>
                          Rasjonalet for å foreslå en vurdering av
                          karbohydratkvalitet og -mengde bygger på kunnskap om
                          at kost med lav glykemisk indeks er å foretrekke
                          fremfor andre kosthold for å redusere glukosenivået
                          (Viana LV, 2014). Studiene inkludert i denne
                          metaanalysen ble delt inn etter type kostintervensjon
                          (4 studier (n=257) med lav-GI kost, 2 studier (n=425)
                          med kost med total energirestriksjon (ca 30% av
                          energibehovet) og 2 studier (n=182) med
                          lavkarbohydratkost). Ved lav-GI koststudiene oppnådde
                          intervensjonsgruppene en glykemisk indeks på 47-49,
                          noe som indikerer en god etterlevelse hos pasienter
                          med svangerskapsdiabetes, og evidensen fra denne
                          oppsummeringen danner grunnlaget for at kost med lav
                          glykemisk indeks foreslås fremfor andre kosttyper.
                        </p>
                        <p>
                          Det finnes evidens av moderat kvalitet for at den
                          samlede behandlingspakken der kostråd og oppfølging er
                          sentralt, reduserer flere klinisk viktige utfall
                          (Hartling L, 2013): - preeklampsi med 38%, -
                          fastsittende skuldre med 58% - stort barn i forhold
                          til gestasjonsalder (LGA) med 58% - makrosomi med 50%{' '}
                        </p>
                        <p>
                          Det er ikke holdepunkt for ugunstige virkninger av
                          behandlingen, som økning i keisersnitt, overføring av
                          den nyfødte til intensivavdelinger, eller økning i
                          andel barn som er små i forhold til gestasjonsalder.
                          Heller ikke er det holdepunkt for økning i angst eller
                          depresjon hos mor, selv om evidensen er lav for disse
                          utfall. Det er ikke evidens for at behandlingen
                          reduserer perinatal død (veldig få hendelser i nyere
                          studier), senere fedme eller diabetes hos barnet eller
                          senere diabetes hos mor.
                        </p>
                      </Collapsible>
                    </div>
                    <div className="l-mb-1">
                      <Collapsible heading="Vurdering" size="small">
                        <h3>Fordeler og ulemper</h3>
                        <p>
                          <b>
                            Fordeler av den samlede behandlingen, der kostråd
                            med konkret oppfølging, er grunnpillaren:
                          </b>
                        </p>
                        <p>
                          Av 1000 kvinner vil 44 færre få preeklampsi, det vil
                          bli 20 færre barn med fastsittende skuldre under
                          fødsel, 90 færre barn over 4 kg og 80 færre barn som
                          er store for gestasjonsalder ved konvensjonell
                          behandling (oppfølging og kostråd) sammenlignet med
                          ingen behandling. Ved å følge kostråd som referert i
                          kunnskapsgrunnlaget (se også praktisk info) vil flere
                          kvinner oppnå god blodsukkerkontroll uten insulin
                          eller andre medikamenter. Ulemper ved den samlede
                          behandlingen: Det er ikke holdepunkter for ulemper som
                          økt keisersnittforekomst, økt overføring til
                          intensivavdeling for nyfødte, eller økning i andel
                          vekstretarderte barn.
                        </p>
                        <p>
                          De potensielt uønskede effektene vurderes som små.
                          Fordeler med kostråd om karbohydratkvalitet og
                          -mengde: Av 1000 kvinner med svangerskapsdiabetes som
                          følger en kost med lav glykemisk indeks vil 132 færre
                          trenge insulin sammenlignet med de som følger en
                          kontrollkost. Barn av mødre som fulgte en lavglykemisk
                          kost hadde en fødselsvekt som var 162 gram lavere enn
                          barn til kvinner som fulgte en kontrollkost. Det var
                          ingen forskjell i antall barn med lav fødselsvekt for
                          gestasjonsalder (SGA) mellom intervensjon- og
                          kontrollkost. Det var ingen forskjell i ufall for en
                          energirestriktiv kost eller en lavkarbohydratkost i
                          forhold til kontrollkost
                        </p>
                        <h3>Kvalitet på dokumentasjonen</h3>
                        <p>
                          <b>For samlet behandling:</b>
                        </p>
                        <p>
                          Vi har moderat tillit til effektestimatene for
                          preeklampsi, fastsittende skulder, makrosomi og barn
                          som er store for gestasjonsalder (LGA). Vi har lav
                          eller veldig lav tillit til effektestimatene for
                          øvrige utfall. For kostråd om karbohydratkvalitet og
                          -mengde: Det er Lav tillit til effektestimatene for
                          kvinner med svangerskapsdiabetes som følger en
                          lavglykemisk kost for utfall som
                        </p>
                        <ul>
                          <li> Andel kvinner som trenger insulin</li>
                          <li> Fødselsvekt </li>
                          <li> Andel SGA barn </li>
                        </ul>
                        <p>
                          Det er Svært lav tillitt til effektestimatene for
                          kvinner med svangerskapsdiabetes som følger en
                          energirestriktiv kost for utfall som
                        </p>
                        <ul>
                          <li> Makrosomi</li>
                          <li> Neonatal hypoglykemi</li>
                          <li> Keisersnitt</li>
                        </ul>
                        <p>
                          Det er Lav tillitt til effektestimatene for kvinner
                          med svangerskapsdiabetes som følger en
                          lavkarbohydratkost for utfall som
                        </p>
                        <ul>
                          <li> Andel kvinner som trenger insulin</li>
                          <li> Keisersnitt</li>
                        </ul>
                        <h3>Verdier og preferanser</h3>
                        <p>
                          <b>
                            Alle utfallene som er vurdert for den samlede
                            behandlingseffekt anses av helsepersonell som
                            kritiske eller viktige.
                          </b>
                        </p>
                        <p>
                          De fleste kvinner ønsker i utgangspunktet å gjøre det
                          som vil være best for barnet hun venter. Behandlingen
                          kan oppleves belastende for noen mødre. Noen kvinner
                          kan bli motivert av å se positiv effekt av kostholdet
                          på blodsukkeret. Det kan være enklere å endre kosten
                          dersom behandler tar utangspunkt i kvinnens kultur og
                          matpreferanser. Sunne matvarer og matvarer med lav
                          glykemisk indeks er ofte dyrere. For noen kan
                          økonomiske problemer gjøre det vanskelig å følge
                          kostrådene. Regelemssig oppfølging og støtte fra
                          helsepersonell kan være avgjørende for at kvinnen
                          mestrer den samlede behandlingen best mulig.
                        </p>
                        <h3>Ressurshensyn</h3>
                        <p>
                          Det er viktig at helsepersonell som gir kostråd til
                          gravide, gjør seg kjent med de spesifikke kostråd som
                          gjelder for kvinner med svangerskapsdiabetes. Disse
                          ligger nær Helsedirektoratet generelle kostråd for
                          gravide. Helsepersonell bør ha god kompetanse om kost
                          og ulike matkulturer. Gode ferdigheter i kommunikasjon
                          og endringsfokusert veiledning en forutsetning for en
                          god dialog med den gravide og for å oppnå de ønskede
                          effektene av tiltakene.
                        </p>
                        <p>
                          Enkel tilgang på skriftlig materiale, informasjon på
                          nett eller apper av god kvalitet for kvinner med
                          svangerskapsdiabetes på relevante språk, er viktig for
                          både den gravide og behandlere. Spesialkompetanse og
                          god tid er særllig viktig der kvinnen ikke oppnår
                          behandlingsmål for glukose.
                        </p>{' '}
                        <p>
                          Det er grunn til å anta at innholdet i tilbudet til
                          kvinner med svangerskapsdiabetes varierer mellom
                          sykehusene, avhengig av ressurser, rutiner og tilgang
                          på helsepersonell med spesiell kompetanse innenfor
                          ernæring og endringsfokusert veiledning (klinisk
                          ernæringsfysiolog, jordmor, diabetessykepleier,
                          andre). Internasjonale retningslinjer (NICE 2015, CDA
                          2013, ADA 2012) anbefaler at kvinner med
                          svangerskapsdiabetes henvises til klinisk
                          ernæringsfysiolog for kostråd/kostveiledning. I dag er
                          det liten eller ingen tilgang på denne
                          ressursen/kompetansen i svangerskapsomsorgen i Norge.
                        </p>
                      </Collapsible>
                    </div>
                    <div className="l-mb-1">
                      <Collapsible heading="Forskningsgrunnlag" size="small">
                        <div className="col-md-4" />

                        <div className="row l-mb-2">
                          <h4 className="col-xs-12 col-md-4 top-xs">
                            Populasjon
                          </h4>
                          <div className="col-xs-12 col-md-8">
                            Kvinner med svangerskapsdiabetes
                          </div>
                        </div>
                        <div className="row l-mb-2">
                          <h4 className="col-xs-12 col-md-4 top-xs">
                            Intervensjon
                          </h4>
                          <div className="col-xs-12 col-md-8">
                            Lav-GI kosthold
                          </div>
                        </div>
                        <div className="row l-mb-2">
                          <h4 className="col-xs-12 col-md-4 top-xs">
                            Komparator
                          </h4>
                          <div className="col-xs-12 col-md-8">
                            Standard kostveiledning
                          </div>
                        </div>
                        <div className="row l-mb-2">
                          <h4 className="col-xs-12 col-md-4 top-xs">Utfall</h4>
                          <div className="col-xs-12 col-md-8">
                            <p>
                              Vektøkning (mor), Fødselsvekt (gram), Keisersnitt,
                              Bruk av insulin, Makrosomi (fødselsvekt >4kg),
                              Barn med fødselsvekt
                            </p>
                            <div className="l-mt-4 l-mb-4">
                              <Link href="#a" small icon="../icons/method.svg">
                                Om metode og prosess
                              </Link>
                              <br />
                              <Link href="#a" small icon="../icons/print.svg">
                                Skriv ut hele retningslinjen
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4" />

                        <div className="row l-mb-2">
                          <h4 className="col-xs-12 col-md-4 top-xs">
                            Populasjon
                          </h4>
                          <div className="col-xs-12 col-md-8">
                            Kvinner med svangerskapsdiabetes
                          </div>
                        </div>
                        <div className="row l-mb-2">
                          <h4 className="col-xs-12 col-md-4 top-xs">
                            Intervensjon
                          </h4>
                          <div className="col-xs-12 col-md-8">
                            Lavkarbo kosthold
                          </div>
                        </div>
                        <div className="row l-mb-2">
                          <h4 className="col-xs-12 col-md-4 top-xs">
                            Komparator
                          </h4>
                          <div className="col-xs-12 col-md-8">
                            Standard kostveiledning
                          </div>
                        </div>
                        <div className="row l-mb-2">
                          <h4 className="col-xs-12 col-md-4 top-xs">Utfall</h4>
                          <div className="col-xs-12 col-md-8">
                            Vektøkning (mor), Fødselsvekt (gram), Keisersnitt,
                            Bruk av insulin, Makrosomi (fødselsvekt >4kg), Barn
                            med fødselsvekt
                          </div>
                        </div>
                      </Collapsible>
                    </div>
                    <div className="l-mb-1">
                      <Collapsible heading="Referanser" size="small">
                        <p>
                          <b>Thangaratinam S, Rogozinska E, Jolly K et al</b> :
                          Effects of interventions in pregnancy on maternal
                          weight and obstetric outcomes: meta-analysis of
                          randomised evidence.. BMJ (British Medical Journal)
                          2012; Pubmed Journal
                        </p>{' '}
                        <p>
                          <b>Hartling L, Dryden DM, Guthrie A et al</b> :
                          Benefits and harms of treating gestational diabetes
                          mellitus: a systematic review and meta-analysis for
                          the U.S. Preventive Services Task Force and the
                          National Institutes of Health Office of Medical
                          Applications of Research.. Annals of Internal Medicine
                          2013; Pubmed Journal
                        </p>
                        <p>
                          <b>Horvath K, Koch K, Jeitler K et al </b>: Effects of
                          treatment in women with gestational diabetes mellitus:
                          systematic review and meta-analysis.. BMJ (British
                          Medical Journal) 2010; Pubmed Journal
                        </p>
                        <p>
                          <b>Falavigna M, Schmidt MI, Trujillo J et al</b> :
                          Effectiveness of gestational diabetes treatment: a
                          systematic review with quality of evidence
                          assessment.. Diabetes Research and Clinical Practice
                          2012; Pubmed Journal
                        </p>{' '}
                        <p>
                          <b>Prutsky GJ, Domecq JP, Wang Z et al </b>: Glucose
                          targets in pregnant women with diabetes: a systematic
                          review and meta-analysis.. JCEM (The Journal of
                          Clinical Endocrinology & Metabolism) 2013; Pubmed
                          Journal
                        </p>{' '}
                        <p>
                          <b>Porter H, Lookinland S, Belfort MA</b> : Evaluation
                          of a new real-time blood continuous glucose monitoring
                          system in pregnant women without gestational diabetes.
                          A pilot study.. The Journal of Perinatal & Neonatal
                          Nursing 2004; Pubmed
                        </p>{' '}
                        <p>
                          <b>Crowther CA, Hiller JE, Moss JR et al</b> : Linn:
                          slett! Effect of treatment of gestational diabetes
                          mellitus on pregnancy outcomes.. NEJM (The New England
                          Journal of Medicine) 2005; Pubmed
                        </p>
                      </Collapsible>
                    </div>
                  </Collapsible>
                </div>
                <Collapsible heading="Informasjon til pasienten" size="medium">
                  <p>Noe innhold</p>
                </Collapsible>
              </div>
            </div>
          </div>
          <hr className="b-hr" />
          <div className="l-mt-3 t-sm-right">
            <Link href="#a" secondary small>
              Sist endret: 11.08.2018
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="l-mt-4">
      <Box color="green" square noPadding>
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

export default RecommendationPage;
