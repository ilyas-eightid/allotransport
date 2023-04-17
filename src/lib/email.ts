export const sendContactForm = async (data: any) => fetch('/api/send-email', {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type" : "text/html; charset=utf-8",
    Accept: "text/html"
  }
});
