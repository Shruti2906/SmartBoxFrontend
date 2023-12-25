import {
  InputChangeEventDetail,
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "./CreateSchedule.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { add, subway } from "ionicons/icons";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ScheduleService } from "../../services/schedule.service";

interface StateType {
  medicineType: string;
}

const CreateScheduleTablet: React.FC = () => {
  const location = useLocation();
  const medicineType = (location.state as StateType)?.medicineType || "";

  const [showContent, setShowContent] = useState(false);
  const [contentDisplayed, setContentDisplayed] = useState(false);
  const handleAddClick = () => {
    if (!contentDisplayed) {
      setShowContent(true);
      setContentDisplayed(true);
    }
  };

  const [tabletData, setTabletData] = useState<{
    medicineName: string;
    day: string[] | never[];
    time: string;
    compartment: string;
    dose: string;
  }>({
    medicineName: "",
    day: [],
    time: "",
    compartment: "",
    dose: "",
  });

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const handleDaySelection = (e: CustomEvent) => {
    const selectedDays = e.detail.value as string[];
    setTabletData({ ...tabletData, day: selectedDays });
  };

  const handleCreateSchedule = async () => {
    const errors: Record<string, string> = {};

    if (medicineType === "tablet") {
      if (!tabletData.medicineName) {
        errors.medicineName = "Medicine name is required";
      }
      if (!tabletData.day || tabletData.day.length === 0) {
        errors.day = "Select at least one day";
      }
      if (!tabletData.time) {
        errors.time = "Time is required";
      }
      if (!tabletData.compartment) {
        errors.compartment = "Compartment is required";
      }
      if (!tabletData.dose) {
        errors.dose = "Dose is required";
      }

      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        return;
      }

      errors.medicineName = "";
      errors.day = "";
      errors.time = "";
      errors.compartment = "";
      errors.dose = "";
      setValidationErrors(errors);

      try {
        const response = await ScheduleService.addTabletSchedule(tabletData);

        console.log("Response data:", response);
        console.log("Tablet schedule added successfully!");
      } catch (error) {
        console.error("Failed to add tablet schedule:", (error as any).message);
      }
    } else if (medicineType === "liquid") {
    } else if (medicineType === "insulin") {
    }
  };

  const renderInputFields = () => {
    switch (medicineType) {
      case "tablet":
        return (
          <>
            {/* Render Tablet specific input fields */}
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="Name"
                    value={tabletData.medicineName}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      setTabletData({
                        ...tabletData,
                        medicineName: input.value || "",
                      });
                    }}
                    name="medicineName"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                  {validationErrors && (
                    <p style={{ color: "black" }}>
                      {validationErrors.medicineName}
                    </p>
                  )}
                </IonCol>
                <IonCol>
                  <IonSelect
                    multiple
                    value={tabletData.day}
                    placeholder="Select Days"
                    onIonChange={handleDaySelection}
                    name="day"
                    interface="action-sheet"
                    style={{ backgroundColor: "#D9D9D9" }}
                  >
                    <IonSelectOption value="M">Monday</IonSelectOption>
                    <IonSelectOption value="T">Tuesday</IonSelectOption>
                    <IonSelectOption value="W">Wednesday</IonSelectOption>
                    <IonSelectOption value="TH">Thursday</IonSelectOption>
                    <IonSelectOption value="F">Friday</IonSelectOption>
                    <IonSelectOption value="SA">Saturday</IonSelectOption>
                    <IonSelectOption value="SU">Sunday</IonSelectOption>
                  </IonSelect>
                  {validationErrors && (
                    <p style={{ color: "black" }}>{validationErrors.day}</p>
                  )}
                </IonCol>
                <IonCol>
                  <IonInput
                    type="time"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="Time"
                    value={tabletData.time}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      setTabletData({ ...tabletData, time: input.value || "" });
                    }}
                    name="time"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                  {validationErrors && (
                    <p style={{ color: "black" }}>{validationErrors.time}</p>
                  )}
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="Compartment No"
                    value={tabletData.compartment}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      setTabletData({
                        ...tabletData,
                        compartment: input.value || "",
                      });
                    }}
                    name="compartment"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                  {validationErrors && (
                    <p style={{ color: "black" }}>
                      {validationErrors.compartment}
                    </p>
                  )}
                </IonCol>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="When - after dinner"
                    value={tabletData.dose}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      setTabletData({ ...tabletData, dose: input.value || "" });
                    }}
                    name="dose"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                  {validationErrors && (
                    <p style={{ color: "black" }}>{validationErrors.dose}</p>
                  )}
                </IonCol>
              </IonRow>
            </IonGrid>
          </>
        );
      case "liquid":
        return (
          <>
            {/* Render Liquid specific input fields */}
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="Name"
                    value="Zedex"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="Total ml"
                    value="350ml"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="days"
                    value="M, T, W"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="Time"
                    value="9.00 pm"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="ml per Dose"
                    value="10ml per Dose"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="When"
                    value="After Dinner"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </>
        );
      case "insulin":
        return (
          <>
            {/* Render Insulin specific input fields */}
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="Name"
                    value="Insulin"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="Total ml"
                    value="350ml"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="days"
                    value="M, T, W"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="Time"
                    value="9.00 pm"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="ml per Dose"
                    value="10ml per Dose"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
                <IonCol>
                  <IonInput
                    type="text"
                    fill="outline"
                    color="medium"
                    className="form-control pl-2 mb-3"
                    placeholder="When"
                    value="After Dinner"
                    style={{ backgroundColor: "#D9D9D9" }}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <IonPage className="content">
      <div className="container-fluid">
        <div className="title-container">
          <div className="title-part p-5">
            <h1 className="text-center">Create Schedule</h1>
            <h1 className="text-center">({medicineType})</h1>
          </div>

          <div className="icon-container">
            <IonIcon
              className="icon"
              onClick={handleAddClick}
              icon={add}
            ></IonIcon>
          </div>
        </div>
        <div className="add-container mx-1">
          {showContent && renderInputFields()}
        </div>
      </div>
      <div className="btn-container- text-center">
        <ButtonComponent
          title="Add Schedule"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 70px",
            margin: "20px",
            fontSize: "20px",
            borderRadius: "30px",
          }}
          onClick={handleCreateSchedule}
        />
      </div>
    </IonPage>
  );
};

export default CreateScheduleTablet;
