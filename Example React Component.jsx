// Import: Packages
import React from "react";


// Import: Components
import example from "";


// Import: Elements
import {
example
} from "example";


// Import: Assets
import { ReactComponent as AlertIcon } from "../../../assets/img/icon/alertIcon.svg";

// Import: Utils
import {
    example
    } from "example";


// Component: PatientDetailsCard
export default function name(props) {

    // Any variables go here.

  return (
    // Highest level styled component. 
    <Container>

        {/* example of inline styling */}
      <div style={{ backgroundColor: "red" }}>

        {/* conditinal rendering example requires the varibale to be true to show the thing on the right.  */}
        {showPatientHeading && <H5>Patient Details</H5>}

        <NameMetaWrapper>
          <PatientNameEl ref={innerRef}>{name ? name : "N/A"}</PatientNameEl>
          <TableData
            duplicateSurname={duplicateSurname}
            display={displayToolTip}
          >
            <div>
                {/* it would be great to have an on click event open an alert popup.  */}
              <AlertIcon
                onClick={(event) => {
                  event.stopPropagation();
                  setDisplayToolTip(!displayToolTip);
                }}
              />
            
            </div>
          </TableData>
        </NameMetaWrapper>
       
    </Container>
  );
}
