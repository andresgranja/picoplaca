export class Validations {

    constructor() { }

    public ValidateEmpty(value: number) {
        if (value > 0) {
            return true;
        } else {
            return false;
        }
    }
}
