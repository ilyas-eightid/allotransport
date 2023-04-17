import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

export default function ContactEmailTemplate(content: any) {

  const data: any = JSON.parse(content);

  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hi Admin,</Text>
           <Text style={paragraph}>Fullname : {data?.firstname} {data?.lastname}</Text>
          <Text style={paragraph}>E-mail : {data?.email}</Text>
          <Text style={paragraph}>Phone : {data?.phone}</Text>
          <Text style={paragraph}>Company Name : {data?.companyname}</Text>
          <Text style={paragraph}>Company Titular Post : {data?.companypost}</Text>
          <Text style={paragraph}>Subject : {data?.subject}</Text>
          <Text style={paragraph}>Message :<br />{data?.message}</Text>
          <Text style={paragraph}>Agree terms :<br />{data?.terms}</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};