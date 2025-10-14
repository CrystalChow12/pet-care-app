
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


export type Owner = {
    id: number; 
    firstname: string; 
    lastname: string; 
    email?: string;  //not every owner would have an email. It can be null
    phone: string; 
}; 

export type OwnerInput = Omit<Owner, 'id'>; //omit the id key since its not inserted from the form 


//the messages returning from the db actions 
export type Message = {
    type: 'success' | 'error'; 
    text: string; 
}