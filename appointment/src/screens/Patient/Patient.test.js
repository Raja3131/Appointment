import React from "react";
import renderer from "react-test-renderer";
import Patient from "./Patient";

describe("Patient", () => {
    it("renders correctly", () => {
        const navigation ={navigate:(screen)=>{}};
       const page = renderer.create(<Patient />).toJSON();
       const loginButton = page.getByTestId("loginButton");
       fireEvent.press(loginButton);
         expect(navigation.navigate).toHaveBeenCalledWith("DoctorProfile");
         
    });
    }
);