export interface WhatsappCloudAPIResponse {
    messaging_product: string;
    contacts:    Contact[];
    messages:    Message[];
}

export interface Contact{
    imput: string;
    wa_id: string;
}

export interface Message{
    id: string;
}