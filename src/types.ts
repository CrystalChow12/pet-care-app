
//declare a type for the input props 
export type InputProps = {
    label: string; 
    type: 'text' | 'email' | 'password' | 'number' | 'tel';
    name: string; 
    id: string; 
    placeholder?: string; 
    validation: object; 
    multiline?: boolean; //true = textarea, false = input (optional) 
}; 
