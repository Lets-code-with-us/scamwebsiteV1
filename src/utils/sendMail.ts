import nodemailer from "nodemailer"

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0231b166b704b9",
      pass: "eb73e7e3aed65e"
    }
  });

export async function sendmail({email}:any){
    try {
        const info = await transport.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', 
          to: email,
          subject: "Hello ✔", 
          html: "<b>Welcome to scam website</b><br/><b>Thanks for joining the newsletter</b>", 
        });
        const mailResponse = await transport.sendMail(info);
        return mailResponse
        
      } catch (error: any) {
        throw new Error(error);
      }

}