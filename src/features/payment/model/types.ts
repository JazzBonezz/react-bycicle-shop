export interface activeButtons {
    active: string | null;
    setActive: (method: string) => void;
}

export interface InputFieldProps {
    name: string;
    placeholder: string;
}
