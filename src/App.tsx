import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Homepage from "./pages/HomeScreen/homeScreen";
import Login from "./pages/Login/login";
import MobileVerification from "./pages/MobileVerification/mobileVerification";
import SelectUser from "./pages/SelectUser/SelectUser";
import Signup from "./pages/Signup/signup";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import SignupSuccessful from "./pages/signupSuccessful/signupSuccessful";
import SelectMedicine from "./pages/SelectMedicine/SelectMedicine";
import CreateSchedule from "./pages/CreateSchedule/CreateSchedule";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <SelectUser />
        </Route>
        <Route exact path="/selectUser">
          <SelectUser />
        </Route>
        <Route exact path="/mobileVerification">
          <MobileVerification />
        </Route>
        <Route exact path="/splashScreen">
          <SplashScreen />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/homeScreen">
          <Homepage />
        </Route>
        <Route exact path="/signupSuccessful">
          <SignupSuccessful />
        </Route>
        <Route exact path="/selectMedicine">
          <SelectMedicine />
        </Route>
        <Route exact path="/createSchedule">
          <CreateSchedule />
        </Route>
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
