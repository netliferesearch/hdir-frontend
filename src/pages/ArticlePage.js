import React from 'react';

import NavList from '../components/NavList';

// import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import ThemeBox from '../components/ThemeBox';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionSidebar from '../components/SectionSidebar';
import Statistics from '../components/Statistics';

const ArticlePage = () => (

  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
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
        ]}
      />
      <main id="main">
        <div className="l-mt-3">
          <ArticleIntro
            heading="Arbeid og psykisk helse"
            lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
            imageDescription="Bildetekst"
          />
        </div>
        <div className="row l-mt-4">
          <aside className="col-md-3 col-xs-12 l-mb-4">
            <SectionSidebar heading="Innhold på denne siden" />
          </aside>
          <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
            <h2>Bakgrunn</h2>
            <p>
              Flertallet av personer med <i>psykiske helseproblemer</i> er i
              jobb. Likevel er det mange som står utenfor arbeidslivet og ønsker
              seg inn.
            </p>
            
            <div className="b-table__wrapper">
              <table>
                <caption>Tittel her</caption>
                <thead>
                  <tr>
                    <td>Overskrift 1</td>
                    <td>Overskrift 2</td>
                    <td>Overskrift 3</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="b-table__wrapper">
              <table>
                <caption>Tittel her</caption>
                <tbody>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 4</td>
                    <td>Kol 5</td>
                    <td>Kol 6</td>
                    <td>Kol 7</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 4</td>
                    <td>Kol 5</td>
                    <td>Kol 6</td>
                    <td>Kol 7</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 4</td>
                    <td>Kol 5</td>
                    <td>Kol 6</td>
                    <td>Kol 7</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 4</td>
                    <td>Kol 5</td>
                    <td>Kol 6</td>
                    <td>Kol 7</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 4</td>
                    <td>Kol 5</td>
                    <td>Kol 6</td>
                    <td>Kol 7</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="b-table__wrapper">
              <table>
                <caption>Tittel her</caption>
                <thead>
                  <tr>
                    <td>Overskrif 1</td>
                    <td>Overskriftskol 2</td>
                    <td>Overskriftskol 3</td>
                    <td>Overskriftskol 4</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="b-toggle-content__text"><h2>Enkel:</h2><div className="b-table__wrapper"><table className="b-table HPArsrapporttabellstil">	<thead>		<tr>			<th scope="col">&nbsp;</th>			<th scope="col">2015</th>			<th scope="col">2016</th>			<th scope="col">2017</th>			<th scope="col">2018</th>			<th scope="col">2019</th>			<th scope="col">2020</th>		</tr>	</thead>	<tbody>		<tr>			<td>Norsk utdanning</td>			<td>706</td>			<td>479</td>			<td>673</td>			<td>537</td>			<td>556</td>			<td>563</td>		</tr>		<tr>			<td>Utenlandsk utdanning</td>			<td>1 173</td>			<td>1 179</td>			<td>1 678</td>			<td>1 233</td>			<td>1 065</td>			<td>1 065</td>		</tr>		<tr>			<td>Totalt</td>			<td>1 879</td>			<td>1 658</td>			<td>2 351</td>			<td>1 770</td>			<td>1 621</td>			<td>1 628</td>		</tr>	</tbody></table></div><p>&nbsp;</p><h2>Litt mer kompleks:</h2><div className="b-table__wrapper"><table className="b-table Table">	<thead>		<tr>			<th scope="col">&nbsp;</th>			<th scope="col">&nbsp;</th>			<th scope="col">			<p>2017</p>			</th>			<th scope="col">			<p>2018</p>			</th>			<th scope="col">			<p>2019</p>			</th>			<th scope="col">			<p>2020</p>			</th>		</tr>	</thead>	<tbody>		<tr>			<td>			<p>Konsultasjoner</p>			</td>			<td>			<p>Konsultasjon</p>			</td>			<td>			<p>14 299 501</p>			</td>			<td>			<p>14 245 671</p>			</td>			<td>			<p>14 292 722</p>			</td>			<td>			<p>11 949 567</p>			</td>		</tr>		<tr>			<td>&nbsp;</td>			<td>			<p>Enkel kontakt med pasient tilstede</p>			</td>			<td>			<p>2 548 357</p>			</td>			<td>			<p>2 378 042</p>			</td>			<td>			<p>2 344 248</p>			</td>			<td>			<p>2 353 230</p>			</td>		</tr>		<tr>			<td>&nbsp;</td>			<td>			<p>Sykebesøk</p>			</td>			<td>			<p>88 889</p>			</td>			<td>			<p>88 575</p>			</td>			<td>			<p>88 519</p>			</td>			<td>			<p>116 501</p>			</td>		</tr>		<tr>			<td>			<p>Enkel kontakt med pasient</p>			</td>			<td>			<p>Enkel kontakt brev/tlf/adm</p>			</td>			<td>			<p>10 540 238</p>			</td>			<td>			<p>9 946 678</p>			</td>			<td>			<p>9 659 736</p>			</td>			<td>			<p>9 944 867</p>			</td>		</tr>		<tr>			<td>&nbsp;</td>			<td>			<p>Enkel kontakt elektronisk</p>			</td>			<td>			<p>464 965</p>			</td>			<td>			<p>1 015 741</p>			</td>			<td>			<p>1 569 865</p>			</td>			<td>			<p>2 387 202</p>			</td>		</tr>		<tr>			<td>&nbsp;</td>			<td>			<p>E-konsultasjon</p>			</td>			<td>			<p>91 912</p>			</td>			<td>			<p>238 374</p>			</td>			<td>			<p>445 093</p>			</td>			<td>			<p>3 540 361</p>			</td>		</tr>		<tr>			<td>			<p>Kontakt med andre instanser om pasient</p>			</td>			<td>			<p>Enkel kontakt med helsepersonell/kommunale tjenester/NAV</p>			</td>			<td>			<p>1 663 438</p>			</td>			<td>			<p>1 741 077</p>			</td>			<td>			<p>1 838 435</p>			</td>			<td>			<p>2 005 305</p>			</td>		</tr>		<tr>			<td>&nbsp;</td>			<td>			<p>Samarbeidsmøter</p>			</td>			<td>			<p>196 443</p>			</td>			<td>			<p>176 575</p>			</td>			<td>			<p>153 916</p>			</td>			<td>			<p>151 835</p>			</td>		</tr>		<tr>			<td>&nbsp;</td>			<td>			<p>Nødvendig dialog mellom fastlege og lege i spesialisthelsetjenesten</p>			</td>			<td>			<p>0</p>			</td>			<td>			<p>0</p>			</td>			<td>			<p>95 861</p>			</td>			<td>			<p>270 815</p>			</td>		</tr>		<tr>			<td>			<p>Adm. kontakt</p>			</td>			<td>			<p>Utvalgte takster administrativt arbeid</p>			</td>			<td>			<p>669 239</p>			</td>			<td>			<p>684 254</p>			</td>			<td>			<p>730 294</p>			</td>			<td>			<p>908 316</p>			</td>		</tr>	</tbody></table></div><p>&nbsp;</p><h2>Kompleks:</h2><div className="b-table__wrapper"><table>	<thead>		<tr>			<th scope="col">&nbsp;</th>			<th colSpan={3} scope="col">Utgifter 2019</th>			<th colSpan={3} scope="col">Utgifter 2020</th>			<th colSpan={3} scope="col">Endring i kroner</th>			<th colSpan={3} scope="col">Endring i prosent</th>		</tr>	</thead>	<tbody>		<tr>			<td>&nbsp;</td>			<td>Totalt</td>			<td>Fast</td>			<td>Næring</td>			<td>Totalt</td>			<td>Fast</td>			<td>Næring</td>			<td>Totalt</td>			<td>Fast</td>			<td>Næring</td>			<td>Totalt</td>			<td>Fast</td>			<td>Næring</td>		</tr>		<tr>			<td>Basisfinansiering</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>		</tr>		<tr>			<td>Grunntilskudd med knekkpunkttillegg</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>8,6</td>			<td>3,5</td>			<td>5,1</td>			<td>8,6</td>			<td>3,5</td>			<td>5,1</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>		</tr>		<tr>			<td>Knekkpunkttillegg</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>234,4</td>			<td>26,2</td>			<td>208,2</td>			<td>234,4</td>			<td>26,2</td>			<td>208,2</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>		</tr>		<tr>			<td>Basistilskudd</td>			<td>2 633,1</td>			<td>228,4</td>			<td>2 404,7</td>			<td>2 686,9</td>			<td>253,6</td>			<td>2 433,3</td>			<td>53,9</td>			<td>25,2</td>			<td>28,7</td>			<td>2,0 %</td>			<td>11,0 %</td>			<td>1,2 %</td>		</tr>		<tr>			<td>Utjamningstilskudd</td>			<td>159,2</td>			<td>96,4</td>			<td>62,9</td>			<td>155,5</td>			<td>99,1</td>			<td>56,3</td>			<td>-3,8</td>			<td>2,8</td>			<td>-6,5</td>			<td>-2,4 %</td>			<td>2,9 %</td>			<td>-10,4 %</td>		</tr>		<tr>			<td>Sum</td>			<td>2 792,3</td>			<td>324,8</td>			<td>2 467,5</td>			<td>3 085,4</td>			<td>382,4</td>			<td>2 703,0</td>			<td>293,1</td>			<td>57,6</td>			<td>235,4</td>			<td>10,5 %</td>			<td>17,7 %</td>			<td>9,5 %</td>		</tr>		<tr>			<td>Refusjoner</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>		</tr>		<tr>			<td>Takstrefusjoner</td>			<td>3 947,4</td>			<td>287,7</td>			<td>3 659,7</td>			<td>4 326,5</td>			<td>341,1</td>			<td>3 985,3</td>			<td>379,1</td>			<td>53,4</td>			<td>325,7</td>			<td>9,6 %</td>			<td>18,6 %</td>			<td>8,9 %</td>		</tr>		<tr>			<td>Refusjon frikortegenandeler</td>			<td>816,8</td>			<td>62,5</td>			<td>754,3</td>			<td>936,3</td>			<td>71,7</td>			<td>864,6</td>			<td>119,5</td>			<td>9,2</td>			<td>110,2</td>			<td>14,6 %</td>			<td>14,8 %</td>			<td>14,6 %</td>		</tr>		<tr>			<td>Refusjon øvrige egenandeler</td>			<td>412,5</td>			<td>28,3</td>			<td>384,2</td>			<td>622,9</td>			<td>53,2</td>			<td>569,7</td>			<td>210,4</td>			<td>25,0</td>			<td>185,5</td>			<td>51,0 %</td>			<td>88,4 %</td>			<td>48,3 %</td>		</tr>		<tr>			<td>Refusjon L-takster NAV</td>			<td>298,6</td>			<td>20,1</td>			<td>278,5</td>			<td>283,7</td>			<td>22,3</td>			<td>261,4</td>			<td>-14,9</td>			<td>2,2</td>			<td>-17,1</td>			<td>-5,0 %</td>			<td>10,8 %</td>			<td>-6,1 %</td>		</tr>		<tr>			<td>Sum</td>			<td>5 475,3</td>			<td>398,6</td>			<td>5 076,7</td>			<td>6 169,4</td>			<td>488,4</td>			<td>5 681,0</td>			<td>694,1</td>			<td>89,8</td>			<td>604,3</td>			<td>12,7 %</td>			<td>22,5 %</td>			<td>11,9 %</td>		</tr>		<tr>			<td>Pasientbetaling</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>		</tr>		<tr>			<td>Egenandeler</td>			<td>1 946,6</td>			<td>148,1</td>			<td>1 798,5</td>			<td>1 903,8</td>			<td>165,9</td>			<td>1 737,9</td>			<td>-42,8</td>			<td>17,8</td>			<td>-60,6</td>			<td>-2,2 %</td>			<td>12,0 %</td>			<td>-3,4 %</td>		</tr>		<tr>			<td>Egenbetaling</td>			<td>154,4</td>			<td>10,1</td>			<td>144,3</td>			<td>136,9</td>			<td>10,8</td>			<td>126,1</td>			<td>-17,5</td>			<td>0,7</td>			<td>-18,2</td>			<td>-11,3 %</td>			<td>7,3 %</td>			<td>-12,6 %</td>		</tr>		<tr>			<td>Sum</td>			<td>2 101,0</td>			<td>158,1</td>			<td>1 942,8</td>			<td>2 040,7</td>			<td>176,7</td>			<td>1 864,0</td>			<td>-60,3</td>			<td>18,6</td>			<td>-78,9</td>			<td>-2,9 %</td>			<td>11,7 %</td>			<td>-4,1 %</td>		</tr>		<tr>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>			<td>&nbsp;</td>		</tr>		<tr>			<td>Totalt</td>			<td>10 368,5</td>			<td>881,5</td>			<td>9 487,0</td>			<td>11 295,4</td>			<td>1 047,5</td>			<td>10 247,9</td>			<td>926,9</td>			<td>166,0</td>			<td>760,9</td>			<td>8,9 %</td>			<td>18,8 %</td>			<td>8,0 %</td>		</tr>	</tbody></table></div><p>Samlede utgifter til fastlegeordningen utgjorde 11,3 mrd. kroner i 2020. Dette er en økning på 927 mill. kroner fra 2019 målt i løpende priser, tilvarende en utgiftsøkning på 8,9 prosent.</p><p><strong>Figur 5.2. Utvikling i søkere og tilsatte i LiS1-stillinger i tilsettingsrundene våren 2013 til høsten 2020.</strong><br /><sup><a href="https://helsenett-xpprod-oidc.enonic.cloud/admin/site/preview/default/draft/helsedirektoratet/rapporter/handlingsplan-for-allmennlegetjenesten-arsrapport-2020/kostnader-knyttet-til-allmennlegetjenesten/kostnader-til-fastlegeordningen/graf.PNG">Last ned stor versjon av figuren</a></sup></p><figure className="editor-align-justify"><img alt="graf.PNG" src="https://helsenett-xpprod-oidc.enonic.cloud/admin/site/preview/default/draft/helsedirektoratet/rapporter/handlingsplan-for-allmennlegetjenesten-arsrapport-2020/kostnader-knyttet-til-allmennlegetjenesten/kostnader-til-fastlegeordningen/_/image/34e2a962-878c-4244-b8cb-9964d0a14706:e90c2477f1ec3765efc6032e16ba41d8e2cc5267/width-768/graf.PNG" /><figcaption>Kilde: Helsedirektoratet. Webcruiter. Merk at det benyttes en sekundær y-akse for prosentandelen som tilsettes.</figcaption></figure></div>

            <h2>Bakgrunn</h2>
            <p>
              Flertallet av personer med <i>psykiske helseproblemer</i> er i
              jobb. Likevel er det mange som står utenfor arbeidslivet og ønsker
              seg inn.
            </p>
            <p>
              Hele 96 prosent svarte at arbeid er{' '}
              <a href="#a">
                viktig for deres psykiske helse i en undersøkelse TNS Gallup har
                utført for Helsedirektoratet
              </a>
              . Bare hjem og nær familie ble ansett som viktigere.
            </p>
            <p>
              Rundt 15 prosent av det legemeldte sykefraværet i Norge skyldes
              psykiske lidelser. Andelen uføretrygdede med en psykisk lidelse er
              på noe over 30 prosent. Blant personer som faller ut av
              arbeidslivet, utgjør personer med psykiske lidelser en stor og
              økende gruppe.
            </p>
            <p>
              Norske og internasjonale studier viser at 30 – 50 prosent av den
              voksne befolkningen vil få en psykisk lidelse i løpet av livet.
            </p>
            <figure className="editor-align-justify">
              <img alt="Stopptober-materiell.png" src="https://www.helsedirektoratet.no/tema/tobakk-royk-og-snus/stopptober/_/image/1e786d6a-13cc-4f54-972e-8556eddac5a4:ff3d3416f23bd48e955313352cb77bf6453c50df/width-768/Stopptober-materiell.png" />
              <figcaption>Under kan du blant annet bestille plakat, kalender, button eller flyer.</figcaption>
            </figure>
            <figure className="editor-align-right">
              <img alt="Stopptober-materiell.png" src="https://www.helsedirektoratet.no/tema/tobakk-royk-og-snus/stopptober/_/image/1e786d6a-13cc-4f54-972e-8556eddac5a4:ff3d3416f23bd48e955313352cb77bf6453c50df/width-768/Stopptober-materiell.png" />
              <figcaption>Under kan du blant annet bestille plakat, kalender, button eller flyer.</figcaption>
            </figure>
            <h2>Forebyggende arbeid</h2>
            <p>
              Dette omfatter tiltak som kan bidra til å forhindre at psykiske
              plager og lidelser oppstår (primærforebygging).
            </p>
            <p>
              Arbeidsplassen er en sentral arena og arbeidsgivere har en viktig
              oppgave.
            </p>
            <p>
              Gjennom avtalen om et inkluderende arbeidsliv har NAV mange
              virkemidler og kompetansemiljøer, som nettopp skal bistå
              arbeidsgivere og ansatte/jobbsøkere til å skape et godt
              arbeidsmiljø.
            </p>

            <h2>Arbeid bidrar til raskere bedring</h2>
            <p>
              Flertallet av personer med psykiske helseproblemer er i jobb.
              Likevel er det mange som står utenfor arbeidslivet og ønsker seg
              inn.
            </p>

            <h2>3 søk</h2>
            <p>
              Flertallet av personer med psykiske helseproblemer er i jobb.
              Likevel er det mange som står utenfor arbeidslivet og ønsker seg
              inn.
            </p>

            <h2>3 søk</h2>
            <p>
              Flertallet av personer med psykiske helseproblemer er i jobb.
              Likevel er det mange som står utenfor arbeidslivet og ønsker seg
              inn.
            </p>
            <h2>3 søk</h2>

            <p>
              Flertallet av personer med psykiske helseproblemer er i jobb.
              Likevel er det mange som står utenfor arbeidslivet og ønsker seg
              inn.
            </p>
            <p>
              Flertallet av personer med psykiske helseproblemer er i jobb.
              Likevel er det mange som står utenfor arbeidslivet og ønsker seg
              inn.
            </p>
            <Statistics
              flexText
              bigText="1.4%"
              smallText="Andel av hofteprotese-operasjonene som endte med infeksjon i operasjonsimrådet i tredje tertial i 2017."
            />
            <p>
              Hele 96 prosent svarte at arbeid er{' '}
              <a href="#a">
                viktig for deres psykiske helse i en undersøkelse TNS Gallup har
                utført for Helsedirektoratet
              </a>
              . Bare hjem og nær familie ble ansett som viktigere.
            </p>
            <p>
              Rundt 15 prosent av det legemeldte sykefraværet i Norge skyldes
              psykiske lidelser. Andelen uføretrygdede med en psykisk lidelse er
              på noe over 30 prosent. Blant personer som faller ut av
              arbeidslivet, utgjør personer med psykiske lidelser en stor og
              økende gruppe.
            </p>
            <Statistics
              smallText="Tall for de regionale helseforetakene viser at det er lite variasjon mellom reglene."
              icon="../icons/pie.svg"
            />
            <div className="l-mt-2">
              <Box color="yellow" square>
                <h2>Ti råd for et inkluderende arbeidsliv</h2>
                <ol>
                  <li>​Bry deg. Alle trenger å bli sett og verdsatt.</li>
                  <li>Gi tillit. Alle har noe å gi hvis de slipper til.</li>
                  <li>Ikke aksepter mobbing og utfrysing. Stopp rykter.</li>
                  <li>Vær romslig. Verdsett mangfold og ulikheter.</li>
                  <li>Lytt til andre. Vis interesse for andres arbeid.</li>
                  <li>Verdsett åpenhet. Snakk sammen.</li>
                  <li>
                    Skap trygghet og takhøyde. Feil er noe vi kan lære av.
                  </li>
                  <li>
                    Ta ansvar. God tilrettelegging er et samarbeidsprosjekt.
                  </li>
                  <li>Ta problemer på alvor. Finn løsninger sammen.</li>
                  <li>Psykisk helse angår oss alle. Snakk om det.</li>
                </ol>
                (Kilde: Rådet for Psykisk Helse)
              </Box>
            </div>

            <div className="l-mt-4 col-xs-12">
              <NavList
                heading="Rapporter om arbeid og psykisk helse"
                list={[
                  { title: 'Jobber seg til bedre helse (Uni.no)', url: '#' },
                  { title: 'Omtale av IPS evalueringen (Napha.no)', url: '#' },
                  { title: 'Åtte prinsipper for IPS fra Napha (PDF)', url: '#' }
                ]}
              />
            </div>
            <div className="l-mt-4 col-xs-12">
              <NavList
                heading="Søk tilskudd innen arbeid og psykisk helse"
                list={[
                  { title: 'Jobber seg til bedre helse (Uni.no)', url: '#' },
                  { title: 'Omtale av IPS evalueringen (Napha.no)', url: '#' },
                  { title: 'Åtte prinsipper for IPS fra Napha (PDF)', url: '#' }
                ]}
              />
            </div>
          </article>
        </div>
      </main>
    </div>

    <div className="l-container l-mt-3 l-mb-5">
      <div className="row">
        <div className="col-md-8 col-xs-12 col-md-offset-4">
          <PageMeta publishDate="11. august 2008" editDate="12. august 2018" />

          <div className="l-mt-1">
            <small>
              <img
                src="../icons/print.svg"
                alt=""
                role="presentation"
                style={{
                  height: '1.4em',
                  width: 'auto',
                  marginRight: '0.5em',
                  marginBottom: '-0.2em'
                }}
              />
              Skriv ut/Lag PDF er midlertidig deaktivert
            </small>
          </div>
        </div>
      </div>
    </div>

    <ThemeBox
      heading="Siste om covid-19"
      cardsLeft={[
        {
          title: 'Helsepersonell og andre profesjonelle aktører',
          url: '#a',
          icon: '../icons/Nyheter.svg',
          category: 'Tema'
        },
        {
          title: 'Privatperson',
          url: '#b',
          icon: '../icons/Nyheter.svg',
          category: 'Helsenorge.no'
        },
      ]}
      cardsRight={[
        {
          title: 'Opp til kommunene å vurdere politianmeldelser',
          url: '#c',
          image: 'https://via.placeholder.com/800x300',
          imageAlt: 'alt description',
          icon: '../icons/Nyheter.svg',
          category: 'Nyhet'
        },
      ]}
      bottomLinks={[
        {
          title: 'Statistikk om covid-19',
          url: '#a'
        },
        {
          title: 'Kurs og konferanser',
          url: '#a'
        },
        {
          title: 'Alle nyheter om covid-19',
          url: '#a'
        },
      ]}
    />

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
  </>
);

export default ArticlePage;
