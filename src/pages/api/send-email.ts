import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import ContactEmailTemplate from "../../components/emails/ContactEmailTemplate";

//import ContactEmail from "../../../emails/ContactTemplate";
import { sendEmail } from "@/config/nodemailer";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    //return res.status(200).json({ message: req.body });
    if (req.method == "POST") {
        const data = JSON.parse(req.body);
        await sendEmail({
            to: "ilyas.bouamama@gmail.com",
            subject: "New message from page contact",
            html: render(ContactEmailTemplate(req.body)),
        });

        return res.status(200).json({ message: "Email sent successfully" });


    }
}