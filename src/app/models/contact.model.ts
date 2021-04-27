export class Contact {
    firstName!: string;
    lastName!: string;
    email!: string;
    gender!: string;
    isMarried!: boolean;
    country!: string;
    address!: {
        cityName?: string;
        streetName?: string;
        pin?: string;
    } 
}
