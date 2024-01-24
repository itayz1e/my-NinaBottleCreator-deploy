export class ErrorsService {

    public getError(err: any) {

        if (typeof err === "string") return err;
        if (typeof err.error === "string") return err.error;

        if (Array.isArray(err.error)) {
            let allErrors = "";
            for (const item of err.error) {
                allErrors += item + "<br>";
            }
            return allErrors;
        }

        if (err.response?.data) return err.response.data;

        if (typeof err.message === "string") {
            if (err.message.startsWith("Network Error")) {
                return "The server is down or your network \n please try again.";
            }
            return err.message;
        }

        return "Some error occurred, please try again later.";

    }

    public getFormValidationErrors(formData: any): string[] {
        const errors: string[] = [];
    
        if (!formData.picture) errors.push("No Picture Selected");
        if (!formData.spiritTypeId) errors.push("Spirit TypeId is required");
        if (!formData.description) errors.push("Description is required");
        if (!formData.isoCode) errors.push("ISO Code is required");
    
        return errors;
    }
}
export const errorsService = new ErrorsService();

