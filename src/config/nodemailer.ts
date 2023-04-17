const nodemailer = require("nodemailer");

type EmailPayload = {
    to: string
    subject: string
    html: string
}

// Replace with your SMTP credentials
const smtpOptions = {
    host: process.env.SMTP_HOST || "smtp.mailtrap.io",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: false,
    auth: {
        user: process.env.SMTP_USER || "user",
        pass: process.env.SMTP_PASSWORD || "password",
    },
}

const smtpGmail = {
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    }
}

export const sendEmail = async (data: EmailPayload) => {
    const transporter = nodemailer.createTransport({
        ...smtpGmail,
    })

    return await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        ...data,
    })
}