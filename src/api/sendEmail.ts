import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

//Async Function to fetch registered user from database
const getRegisteredUsers = async () => {
    // You can replace it with your database logic to fetch the registered users
    return [{ email: 'user@example.com' }];
};

//Async Function to fetch new blogs from database
const getNewBlogs = async () => {
    // You can replace it with your database logic to fetch the new blogs
    return [{ title: 'New Blog Post 1', url: '/blog/1' }];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try{
        const users = await getRegisteredUsers();
        const blogs = await getNewBlogs();

        const transporter = nodemailer.createTransport({
            service: "your-service",
            auth:{
                //securely store your user and pass in .env file
                user: process.env.EMAIL, 
                pass: process.env.PASSWORD,
            },
        });

        const emailPromises = users.map(user => {
            transporter.sendMail({
                from: '"Your Blog" <yourblog@example.com',
                to: user.email,
                subject: 'Latest Blogs',
                text: `Check out our latest blogs: ${blogs.map(blog => blog.title).join(', ')}`, 
                html: `
                    <h1>New Blogs Published!</h1>
                    <ul>
                    ${blogs.map(blog => `<li><a href="${blog.url}">${blog.title}</a></li>`).join('')}
                    </ul>
                `,
            });
    });

    await Promise.all(emailPromises);

        res.status(200).json({ message: 'Emails sent successfully!' });

    } catch (error) {
        res.status(500).json({ error: 'Error sending emails' });
    }
}
