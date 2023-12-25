import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRouterLink,
    IonText,
  } from "@ionic/react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "../../components/Button/ButtonComponent"; 
import CheckboxComponent from "../../components/Checkbox/checkboxComponent";
  
  const Login: React.FC = () => {  
    return (
      <IonPage style={{ color: "black" }}>
        <div className="login-container">
          <IonText>
            <h1 className="text-center" style={{ color: "#FF0101" }}>
              Welcome back!
            </h1>
          </IonText>
  
          <IonText>
            <h6 className="subtitle" style={{ color: "gray" }}>
              Login to your account
            </h6>
          </IonText>
  
            <div className="input-field">
                <IonLabel className="label">Enter your username</IonLabel>
                <IonInput
                type="text"
                labelPlacement="floating"
                fill="outline"
                color="medium"
                className="form-control pl-2 mb-3"
                aria-label="username"
                style={{ backgroundColor:"#D9D9D9" }}
                />
                
                <IonLabel className="label">Enter your password</IonLabel>
                <IonInput
                type="password"
                labelPlacement="floating"
                fill="outline"
                className="form-control pl-2"
                aria-label="password"
                style={{ backgroundColor:"#D9D9D9" }}
                />

                <div className="text-center mb-">
                  <IonRouterLink routerLink="/homescreen">
                  <ButtonComponent title="Log In" style={{ backgroundColor: "#FF0101", 
                                                              color:"white",
                                                              padding:"10px 50px",
                                                              margin:"20px",
                                                              fontSize:"25px",
                                                              borderRadius:"14px"
                                                              }}/>
                  </IonRouterLink>
                </div>

                <div className="checkbox-forgot mb-5">
                    <CheckboxComponent label="Remember me" style={{  }}></CheckboxComponent>
                    <IonText >Forgot password?</IonText>
                </div>

                <IonText>
                    <h6 className="text-center">Don't have an account? 
                    <IonRouterLink routerLink="/signup">
                      <a><span style={{ color:"#FF0101", fontWeight:"bold"}}> Sign Up</span></a>
                    </IonRouterLink>
                    </h6>
                </IonText>
            </div>
          </div>
      </IonPage>
    );
  };
  
  export default Login;
  