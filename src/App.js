import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
// Styles
import './styles/App.scss';
// Import components
import GlobalScopeScripts from './components/GlobalScopeScripts';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';
import Box from './components/Box';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';
// Import pages
import ArticlePage from './pages/ArticlePage';
import ArticlePageNews from './pages/ArticlePageNews';
import ArticlePageNewsAlt from './pages/ArticlePageNewsAlt';
import ArticlePageNewsAlt3 from './pages/ArticlePageNewsAlt3';
import ArticlePageNewsAlt4 from './pages/ArticlePageNewsAlt4';
import ArticlePageSecondaryBranding from './pages/ArticlePageSecondaryBranding';
import ArticlePageSecondaryBrandingTwo from './pages/ArticlePageSecondaryBranding-2';
import ArticlePageSecondaryBrandingThree from './pages/ArticlePageSecondaryBranding-3';
import ArticlePageSecondaryBrandingFour from './pages/ArticlePageSecondaryBranding-4';
import ArticlePageNoH2 from './pages/ArticlePageNoH2';
import ArticlePageWithForm from './pages/ArticlePageWithForm';
import ArticlePageWithIframe from './pages/ArticlePageWithIframe';
import AuthorizationFrontPage from './pages/AuthorizationFrontPage';
import AuthorizationStepPage from './pages/AuthorizationStepPage';
import AuthorizationStepPage2 from './pages/AuthorizationStepPage2';
import ChapterPage from './pages/ChapterPage';
import ChapterPageTag from './pages/ChapterPageTag';
import ChapterPageWithSubchapters from './pages/ChapterPageWithSubchapters';
import ChapterPageReport from './pages/ChapterPageReport';
import ChapterPageWithLead from './pages/ChapterPageWithLead';
import EarlierVersionsPage from './pages/EarlierVersionsPage';
import FormbuilderTestPage from './pages/FormbuilderTestPage';
import FrontPage from './pages/FrontPage';
import FrontPageHdir from './pages/FrontPageHdir';
import FrontPageHelfo from './pages/FrontPageHelfo';
import ListGrants from './pages/ListGrants';
import GrantsSubPage from './pages/GrantsSubPage';
import GrantsWizard from './pages/GrantsWizard';
import GrantsSubPageExpired from './pages/GrantsSubPageExpired';
import HearingPage from './pages/HearingPage';
import JobPostingPage from './pages/JobPostingPage';
import LisFrontPage from './pages/LisFrontPage';
import LisLearning from './pages/LisLearning';
import LisLearningActivities from './pages/LisLearningActivities';
import LisSpeciality from './pages/LisSpeciality';
import MemoPage from './pages/MemoPage';
import MemoPageEdit from './pages/MemoPageEdit';
import MemoPageDefinition from './pages/MemoPageDefinition';
import MedicinePage from './pages/MedicinePage';
import MedicineListPage from './pages/MedicineListPage';
import ListNews from './pages/ListNews';
import ListHearings from './pages/ListHearings';
import NormativeContentPage from './pages/NormativeContentPage';
import NotFound from './pages/NotFound';
import ParentHearingPage from './pages/ParentHearingPage';
import ParentMemoPage from './pages/ParentMemoPage';
import ListBrochures from './pages/ListBrochures';
import ListConferences from './pages/ListConferences';
import PrintPdfPreview from './pages/PrintPdfPreview';
import ProductPage from './pages/ProductPage';
import ProductPageMalgruppe from './pages/ProductPageMalgruppe';
import ProfessionSelector from './pages/ProfessionSelector';
import RecommendationPage from './pages/RecommendationPage';
import RecommendationPageAntibiotics from './pages/RecommendationPageAntibiotics';
import NinjaStateRecommendation from './pages/NinjaStateRecommendation';
import NinjaStateGrant from './pages/NinjaStateGrant';
import ReportListPage from './pages/ReportListPage';
import ReportPage from './pages/ReportPage';
import ReportPageWithoutImage from './pages/ReportPageWithoutImage';
import SearchResultPage from './pages/SearchResultPage';
import StatisticsPage from './pages/StatisticsPage';
import StatisticsSubpage from './pages/StatisticsSubpage';
import StatisticsSubpage2 from './pages/StatisticsSubpage2';
import SubscriptionSettingsPage from './pages/SubscriptionSettingsPage';
import ThemePage from './pages/ThemePage';
import TransportPage from './pages/TransportPage';
import TreatmentPageNew from './pages/TreatmentPageNew';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <GlobalScopeScripts />
            <Loading message="PDF-versjon opprettes. Dette kan ta litt tid." />
            <MainHeader
              name={this.props.name}
              links={this.props.links}
              linksMobile={this.props.linksMobile}
              inputSearchLabel={this.props.inputSearchLabel}
              hideSearch={this.props.hideSearch}
              exampleSuggestions={[
                'Antibiotika',
                'Diabetes',
                'Hjerneslag',
                'Helsestasjon',
                'Rus og avhengighet',
                'Svangerskap',
                'Navn på ansatt',
                'Retningslinje',
                'Pakkeforløp',
                'Rundskriv',
                'Statistikk',
                'Tilskudd'
              ]}
              qaEnvironment={this.props.qaEnvironment}
            />
            <Switch>
              <Route exact path="/" component={FrontPage} />
              <Route path="/produkt" component={ProductPage} />
              <Route
                path="/produkt-malgruppevelger"
                component={ProductPageMalgruppe}
              />
              <Route path="/søkeresultat" component={SearchResultPage} />
              <Route path="/artikkel" component={ArticlePage} />
              <Route path="/nyhet" component={ArticlePageNews} />
              <Route path="/nyhet-2" component={ArticlePageNewsAlt} />
              <Route path="/nyhet-3" component={ArticlePageNewsAlt3} />
              <Route path="/nyhet-4" component={ArticlePageNewsAlt4} />
              <Route
                path="/artikkel-sekundar-branding"
                component={ArticlePageSecondaryBranding}
              />
              <Route
                path="/artikkel-sekundar-branding-2"
                component={ArticlePageSecondaryBrandingTwo}
              />
              <Route
                path="/artikkel-sekundar-branding-3"
                component={ArticlePageSecondaryBrandingThree}
              />
              <Route
                path="/artikkel-sekundar-branding-4"
                component={ArticlePageSecondaryBrandingFour}
              />
              <Route path="/artikkel-ingen-h2" component={ArticlePageNoH2} />
              <Route
                path="/artikkel-med-skjema"
                component={ArticlePageWithForm}
              />
              <Route
                path="/artikkel-med-iframe"
                component={ArticlePageWithIframe}
              />
              <Route path="/hdir-tema" component={ThemePage} />
              <Route path="/helfo-forside" component={FrontPageHelfo} />
              <Route path="/hdir-forside" component={FrontPageHdir} />
              <Route
                path="/rapportside-uten-bilde"
                component={ReportPageWithoutImage}
              />
              <Route path="/kapittel" component={ChapterPage} />
              <Route path="/kapittel-tag" component={ChapterPageTag} />
              <Route path="/kapittel-med-ingress" component={ChapterPageWithLead} />
              <Route path="/kapittel-med-underkapitler" component={ChapterPageWithSubchapters} />
              <Route path="/høringer" component={HearingPage} />
              <Route path="/høringer-forside" component={ParentHearingPage} />
              <Route path="/anbefaling" component={RecommendationPage} />
              <Route
                path="/anbefaling-antibiotika"
                component={RecommendationPageAntibiotics}
              />
              <Route path="/ninja-state" component={NinjaStateRecommendation} />
              <Route path="/ninja-state-tilskudd" component={NinjaStateGrant} />
              <Route path="/rundskriv" component={MemoPage} />
              <Route path="/rundskriv-edit" component={MemoPageEdit} />
              <Route
                path="/rundskriv-definisjon"
                component={MemoPageDefinition}
              />
              <Route path="/rundskriv-forside" component={ParentMemoPage} />
              <Route path="/rapport" component={ReportPage} />
              <Route path="/horinger" component={ListHearings} />
              <Route
                path="/normerende-innhold"
                component={NormativeContentPage}
              />
              <Route path="/lis-spesialitet" component={LisSpeciality} />
              <Route path="/lis-læringsmål" component={LisLearning} />
              <Route path="/lis-forside" component={LisFrontPage} />
              <Route
                path="/lis-læringsaktiviteter"
                component={LisLearningActivities}
              />
              <Route path="/rapport-kapittel" component={ChapterPageReport} />
              <Route
                path="/tidligere-versjoner"
                component={EarlierVersionsPage}
              />
              <Route path="/yrke-velger" component={ProfessionSelector} />
              <Route
                path="/autorisasjon-forside"
                component={AuthorizationFrontPage}
              />
              <Route
                path="/autorisasjon-steg"
                component={AuthorizationStepPage}
              />
              <Route
                path="/autorisasjon-steg-2"
                component={AuthorizationStepPage2}
              />
              <Route path="/statistikk" component={StatisticsPage} />
              <Route
                path="/abonnement-tilpassing"
                component={SubscriptionSettingsPage}
              />
              <Route path="/transportside" component={TransportPage} />
              <Route path="/nyhetsliste" component={ListNews} />
              <Route path="/tilskudd" component={ListGrants} />
              <Route
                path="/statistikk-underside"
                component={StatisticsSubpage}
              />
              <Route
                path="/statistikk-underside-2"
                component={StatisticsSubpage2}
              />
              <Route path="/rapport-liste" component={ReportListPage} />
              <Route path="/brosjyrer-liste" component={ListBrochures} />
              <Route path="/konferanser-liste" component={ListConferences} />
              <Route path="/tilskudd-underside" component={GrantsSubPage} />
              <Route
                path="/tilskudd-underside-utgått-søknadsfrist"
                component={GrantsSubPageExpired}
              />
              <Route path="/tilskudd-veiviser" component={GrantsWizard} />
              <Route path="/ledig-stilling" component={JobPostingPage} />
              <Route
                path="/skjemabygger-enonic"
                component={FormbuilderTestPage}
              />
              <Route path="/pakkeforløp" component={TreatmentPageNew} />
              <Route path="/pdf-print-preview" component={PrintPdfPreview} />
              <Route path="/medisin" component={MedicinePage} />
              <Route path="/medisinListe" component={MedicineListPage} />
              MedicinePage
              <Route component={NotFound} />
            </Switch>
            <Box square color="blueDark">
              <div className="l-container l-mt-2">
                <Footer />
              </div>
            </Box>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  qaEnvironment: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.object),
  linksMobile: PropTypes.arrayOf(PropTypes.object),
  inputSearchLabel: PropTypes.string
};

export default App;
