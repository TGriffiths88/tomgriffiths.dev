import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const contactEmail = process.env.CONTACT_EMAIL;
const resendApiKey = process.env.RESEND_API_KEY;

if (!contactEmail || !resendApiKey)
  throw new Error("Missing contact email env variables");

const resend = new Resend(resendApiKey);

const sendContactMessage = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(422).json({ message: "Invalid input" });
    return;
  }

  try {
    const data = await resend.emails.send({
      from: "Website <roreply@tomgriffiths.dev>",
      to: [contactEmail],
      subject: "New Enquiry",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
export default sendContactMessage;
