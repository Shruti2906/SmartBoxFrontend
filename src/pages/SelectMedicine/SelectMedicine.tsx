import { IonButton, IonCheckbox, IonPage, IonText } from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./SelectMedicine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const SelectMedicine: React.FC = () => {
  const history = useHistory();
  const [selectedMedicine, setSelectedMedicine] = useState("");

  const handleCheckboxChange = (value: string) => {
    setSelectedMedicine(value);
  };

  const handleNextButtonClick = () => {
    if (selectedMedicine !== "") {
      history.push({
        pathname: "/createSchedule",
        state: { medicineType: selectedMedicine },
      });
    } else {
      console.log("error: please select medicine type");
    }
  };

  return (
    <IonPage>
      <div className="container-fluid">
        {/* title container */}
        <div className="title-container mt-5">
          <div className="title-part p-5">
            <h1 className="text-center">Choose type of Medicine</h1>
          </div>
        </div>
        {/* Checkboxex for Medicine type */}
        <div className="checkboxe-grp-medicines">
          <div className="checkbox-tablet">
            <IonCheckbox
              checked={selectedMedicine === "tablet"}
              onIonChange={() => {
                handleCheckboxChange("tablet");
              }}
            ></IonCheckbox>
            <IonText className="p-3">Tablet</IonText>
          </div>
          <div className="checkbox-tablet">
            <IonCheckbox
              checked={selectedMedicine === "liquid"}
              onIonChange={() => {
                handleCheckboxChange("liquid");
              }}
            ></IonCheckbox>
            <IonText className="p-3">Liquid</IonText>
          </div>
          <div className="checkbox-tablet">
            <IonCheckbox
              checked={selectedMedicine === "insulin"}
              onIonChange={() => {
                handleCheckboxChange("insulin");
              }}
            ></IonCheckbox>
            <IonText className="p-3">Insulin</IonText>
          </div>
        </div>

        {/* Button */}
        <div className="next-button mt-4">
          <IonButton onClick={handleNextButtonClick}>Next</IonButton>
        </div>
      </div>
    </IonPage>
  );
};

export default SelectMedicine;
