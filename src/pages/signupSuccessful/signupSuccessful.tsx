import { IonImg, IonPage, IonRouterLink, IonText } from "@ionic/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './signupSuccessful.css';
import done from '/src/assets/images/done.png';
import ImageWithText from "../../components/ImageWithText/imageWithTextComponent";
import { IonReactRouter } from "@ionic/react-router";
const SignupSuccessful: React.FC = () => {
    return(
        <IonPage>
            <div className="center-div">
                <ImageWithText 
                    imageSrc={ done } 
                    text="" 
                    style={{ width:"120px"}}/>
                
                <IonText className="title">Your SignUp was successful</IonText>
                <IonRouterLink routerLink="/homescreen">
                    <IonText className="home-link">Continue to Home</IonText>
                </IonRouterLink>
            </div>
        </IonPage>
    );
}


export default SignupSuccessful;