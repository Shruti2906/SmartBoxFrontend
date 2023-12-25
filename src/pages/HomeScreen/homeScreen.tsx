import { IonButton, IonCol, IonGrid, IonImg, IonPage, IonRouterLink, IonRow, IonText } from "@ionic/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeScreen.css';
import createSchedule from '/src/assets/images/createSchedule.png';
import viewSchedule from '/src/assets/images/view_schedule.png';
import uploadPres from '/src/assets/images/upload_prescription.png';
import viewPres from '/src/assets/images/view_prescription.png';
import appointment from '/src/assets/images/appointment.png';
import ButtonComponent from "../../components/Button/ButtonComponent";


const Homepage: React.FC = () =>{
    return(
        <IonPage className="bg-light text-light d-flex justify-content-center">
            <div className="container-fluid">
                <div className="title mt-5">
                    <h3 className="text-center">Welcome Username</h3>
                </div>

                {/* Four buttons */}
                <div className="four-buttons">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonRouterLink routerLink="/selectMedicine">
                            <div className="image-btn">
                                <div className="image">
                                    <IonImg  src={ createSchedule } style={{ width:"50px" }} ></IonImg>
                                </div>
                                <IonText className="p-1 text-center mt-auto">Create Schedule</IonText>
                            </div>
                            </IonRouterLink>
                        </IonCol>
                        <IonCol>
                        <IonRouterLink routerLink="/createInsulinSchedule">
                            <div className="image-btn">
                                <div className="image">
                                    <IonImg  src={ viewSchedule } style={{ width:"50px" }} ></IonImg>
                                </div>
                                <IonText className="p-1 text-center mt-auto">View Schedule</IonText>
                            </div>
                        </IonRouterLink>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                        <IonRouterLink routerLink="/createLiquidSchedule">
                            <div className="image-btn">
                                <div className="image">
                                    <IonImg  src={ uploadPres } style={{ width:"50px" }} ></IonImg>
                                </div>
                                <IonText className="p-1 text-center mt-auto">Upload Prescription</IonText>
                            </div>
                        </IonRouterLink>
                        </IonCol>
                        <IonCol>
                        <IonRouterLink routerLink="/viewPrescription">
                            <div className="image-btn">
                                <div className="image">
                                    <IonImg  src={ viewPres } style={{ width:"50px" }} ></IonImg>
                                </div>
                                <IonText className="p-1 text-center mt-auto">View Prescription</IonText>
                            </div>
                        </IonRouterLink>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                </div>

                {/* Liquid Percentages */}
                <IonGrid className="mt-4">
                    <IonRow className="py-2">
                        <IonCol className="medicine-name" size="8">
                            <IonText>Zedex</IonText>
                        </IonCol>
                        <IonCol className="medicine-per" offset="1">
                            <IonText>60%</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow className="py-2">
                        <IonCol className="medicine-name" size="8">
                            <IonText>Insulin</IonText>
                        </IonCol>
                        <IonCol className="medicine-per" offset="1">
                            <IonText>30%</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow className="py-2">
                        <IonCol className="medicine-name" size="8">
                            <IonText>Benadryl</IonText>
                        </IonCol>
                        <IonCol className="medicine-per" offset="1">
                            <IonText>60%</IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* Appointment Button */}
                <IonRouterLink routerLink="/">
                <div className="apt-btn my-2">
                    <IonImg className="p-1" src={ appointment } style={{ width:"50px" }}></IonImg>
                    <IonText >Appointment</IonText>
                </div>
                </IonRouterLink>
            </div>
            
        </IonPage>

    );
} 

export default Homepage;