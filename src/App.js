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
import ArticlePageNoH2 from './pages/ArticlePageNoH2';
import ArticlePageWithForm from './pages/ArticlePageWithForm';
import ArticlePageWithIframe from './pages/ArticlePageWithIframe';
import AuthorizationFrontPage from './pages/AuthorizationFrontPage';
import AuthorizationStepPage from './pages/AuthorizationStepPage';
import AuthorizationStepPage2 from './pages/AuthorizationStepPage2';
import ChapterPage from './pages/ChapterPage';
import ChapterPageWithSubchapters from './pages/ChapterPageWithSubchapters';
import ChapterPageReport from './pages/ChapterPageReport';
import EarlierVersionsPage from './pages/EarlierVersionsPage';
import FormbuilderTestPage from './pages/FormbuilderTestPage';
import FrontPage from './pages/FrontPage';
import FrontPageHdir from './pages/FrontPageHdir';
import FrontPageHelfo from './pages/FrontPageHelfo';
import GrantsPage from './pages/GrantsPage';
import GrantsSubPage from './pages/GrantsSubPage';
import HearingPage from './pages/HearingPage';
import JobPostingPage from './pages/JobPostingPage';
import LisFrontPage from './pages/LisFrontPage';
import LisLearning from './pages/LisLearning';
import LisLearningActivities from './pages/LisLearningActivities';
import LisSpeciality from './pages/LisSpeciality';
import MemoPage from './pages/MemoPage';
import MedicinePage from './pages/MedicinePage';
import MedicineListPage from './pages/MedicineListPage';
import NewsListPage from './pages/NewsListPage';
import NormativeContentPage from './pages/NormativeContentPage';
import NotFound from './pages/NotFound';
import ParentHearingPage from './pages/ParentHearingPage';
import ParentMemoPage from './pages/ParentMemoPage';
import PressReleasePage from './pages/PressReleasePage';
import PrintPdfPreview from './pages/PrintPdfPreview';
import ProductPage from './pages/ProductPage';
import ProductPageMalgruppe from './pages/ProductPageMalgruppe';
import ProfessionSelector from './pages/ProfessionSelector';
import RecommendationPage from './pages/RecommendationPage';
import RecommendationPageAntibiotics from './pages/RecommendationPageAntibiotics';
import NinjaStateRecommendation from './pages/NinjaStateRecommendation';
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
import TreatmentPageA from './pages/TreatmentPageA';
import TreatmentPageC from './pages/TreatmentPageC';
import TreatmentPageE from './pages/TreatmentPageE';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <GlobalScopeScripts/>
            <Loading message="PDF-versjon opprettes. Dette kan ta litt tid."/>
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
              <Route path="/produkt-malgruppevelger" component={ProductPageMalgruppe} />
              <Route path="/søkeresultat" component={SearchResultPage} />
              <Route path="/artikkel" component={ArticlePage} />
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
              <Route path="/kapittel-med-underkapitler" component={ChapterPageWithSubchapters} />
              <Route path="/høringer" component={HearingPage} />
              <Route path="/høringer-forside" component={ParentHearingPage} />
              <Route path="/anbefaling" component={RecommendationPage} />
              <Route path="/anbefaling-antibiotika" component={RecommendationPageAntibiotics} />
              <Route path="/ninja-state" component={NinjaStateRecommendation} />
              <Route path="/rundskriv" component={MemoPage} />
              <Route path="/rundskriv-forside" component={ParentMemoPage} />
              <Route path="/rapport" component={ReportPage} />
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
              <Route path="/tidligere-versjoner" component={EarlierVersionsPage} />
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
              <Route path="/nyhetsliste" component={NewsListPage} />
              <Route path="/tilskudd" component={GrantsPage} />
              <Route
                path="/statistikk-underside"
                component={StatisticsSubpage}
              />
              <Route
                path="/statistikk-underside-2"
                component={StatisticsSubpage2}
              />
              <Route path="/rapport-liste" component={ReportListPage} />
              <Route path="/trykksaker" component={PressReleasePage} />
              <Route path="/tilskudd-underside" component={GrantsSubPage} />
              <Route path="/ledig-stilling" component={JobPostingPage} />
              <Route
                path="/skjemabygger-enonic"
                component={FormbuilderTestPage}
              />
              <Route path="/pakkeforløp-a" component={TreatmentPageA} />
              <Route path="/pakkeforløp-c" component={TreatmentPageC} />
              <Route path="/pakkeforløp-e" component={TreatmentPageE} />
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
