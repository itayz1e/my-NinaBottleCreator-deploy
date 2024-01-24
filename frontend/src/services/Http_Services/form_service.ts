// ** React Imports
import { useState } from "react";

// ** Model Imports
import { FormData } from "../../Models/interface"


export function useFormInitialState() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        manufacturer: "",
        description: "",
        picture: "",
        spiritTypeId: 0,
        alcoholPercentage: 0,
        caloriesPerOneOz: 0,
        countryOfOrigin: "",
        companyEstablishmentYear: 0,
        isoCode: "",
        orderUrl: "",
    });
    
    return { formData, setFormData }
};


export async function handleFormSubmission(
    ev: { preventDefault: () => void; },
    formData: FormData,
    setErrorMessage: (arg0: string) => void,
    setMessage: (arg0: string) => void,
    errorsService: { getFormValidationErrors: (arg0: any) => any; getError: (arg0: unknown) => any; },
    submitFormData: (arg0: any) => any
) {
    ev.preventDefault();
    const finalFormData = {
        ...formData,
    };
    const formValidationErrors = errorsService.getFormValidationErrors(finalFormData);
    if (formValidationErrors.length > 0) {
        setErrorMessage(formValidationErrors.join(' & '));
    } else {
        try {
            const bottleData = await submitFormData(finalFormData);
            setMessage("Success!");
            setErrorMessage("");
        } catch (error) {
            const errorMessage = errorsService.getError(error);
            setErrorMessage(errorMessage);
        }
    }
}
