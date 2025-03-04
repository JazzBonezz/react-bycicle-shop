export interface activeButtons {
    active: string | null;
    setActive: (method: string) => void;
}

export interface InputFieldProps {
    name: string;
    placeholder: string;
}

export interface PaymentDetailsProps {
    activeDelivery: string | null;
    setActiveDelivery: (value: string) => void;
    activePayment: string | null;
    setActivePayment: (value: string) => void;
    totalWithDiscount: number;
    isSubmitting: boolean;
}