import { RecipientEmail } from "@/components/RecipientEmail/RecipientEmail";
import * as handlebars from "handlebars";

export interface EmailProps {
    subject: string;
    email: string;
    to: string;
    first_name: string;
    last_name: string;
    message: string;
}

export const sendEmail = async(data: EmailProps) => {
    const apiEndpoint = '/api/email';
    
    const result = await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then((res) => {
        return res.json();
    })
    .catch((error) => {
        return error;
    });

    return result;
}

export function emailSentTemplate(link: string, logo: string, first_name: string, last_name: string, email: string, message: string, year: number) {
    const template = handlebars.compile(RecipientEmail);
    const htmlBody = template({
        link: link,
        logo: logo,
        first_name: first_name,
        last_name: last_name,
        email: email,
        message: message,
        year: year,
    });

    return htmlBody;
  }