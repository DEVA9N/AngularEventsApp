import { Directive } from '@angular/core'
import { Validator, FormGroup, ValidationErrors } from '@angular/forms';

@Directive({
    selector: "[validateLocation]",
})

export class LocationValidator implements Validator {

    validate(formGroup: FormGroup): ValidationErrors {
        let addressControl = formGroup.controls["address"]
        let cityControl = formGroup.controls["city"]
        let countryControl = formGroup.controls["country"]
        let onlineUrlControl = (<FormGroup>formGroup.root).controls["onlineUrl"]

        let isLocationValid = addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value
        let isUrlValid = onlineUrlControl && onlineUrlControl.value

        if (isLocationValid || isUrlValid) {
            return null
        }

        return { validateLocation: false }
    }

}