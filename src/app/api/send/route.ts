import { EmailTemplate } from '@/components/Template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email, subject, message } = await request.json();
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [`${process.env.HOST_ADDRESS}`],
            subject: subject,
            react: EmailTemplate({ firstName: email, description: message }),
        });

        if (error) {
        return Response.json({ error }, { status: 500 });
        }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
