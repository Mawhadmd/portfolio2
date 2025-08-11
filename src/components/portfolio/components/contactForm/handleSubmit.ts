'use server'
import z, { ZodError } from 'zod'
import {createTransport} from 'nodemailer'
const schema = z.object({name: z.string().min(1, "Name is required"), message: z.string().min(1, "Message cannot be empty"), email: z.email("Invalid email address")});
const handleSubmit = async (
  state: { error: string | null; success: boolean }, formdata: FormData
): Promise<{ error: string | null; success: boolean; }> => {
  const email = formdata.get('email')
  const message = formdata.get('message')
  const name = formdata.get('name')

  try
  {
  schema.safeParse({email, name, message});

const transporter = createTransport({
  service: "gmail",
  auth: {
    user:  process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});


  const htmlTemplate = `
    Message from ${name} via ${email}:
    </br>
    ${message}
  `;

  try {
    const info = await transporter.sendMail({
      from: '"PFinance Team" <mohammedbus13@gmail.com>',
      to: "mohammedbus13@gmail.com",
      subject: `Portfolia Contact From ${name}`,
      html: htmlTemplate,
    });

    console.log("Email sent: " + info.response);
    
    return { success: true, error: null};
  } catch (error) {
    console.log("Email error:", error);
    return { error: "Failed to send verification email.", success: false};
  }

}

  catch (error: unknown) {
    if (error instanceof ZodError) {
      return { error: error.message, success: false };
    }
    return { error: "An unexpected error occurred", success: false };
  }


};

export default handleSubmit;
