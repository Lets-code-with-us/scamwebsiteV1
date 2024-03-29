import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const posts = [
    {
      category: 'Online Scam',
      title: 'Phishing Attacks',
      description: ' These scams involve sending fake emails, messages, or websites that appear to be from legitimate sources, such as banks, government agencies, or popular companies.',
      date: '3 April 2023',
      poster:
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
        route:'/scams/onlinescams'
    },
    {
      category: 'Technology',
      title: 'Tech Support Scams',
      description:
        'In these scams, fraudsters pose as technical support representatives from reputable companies like Microsoft or Apple.',
      date: '1 April 2023',
      poster:
        'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        route:'/scams/techsupportscam'
    },
    {
      category: 'Business',
      title: 'Online Shopping Scams',
      description:
        'These scams typically involve fake online stores or sellers offering goods at incredibly low prices. ',
      date: '28 March 2023',
      poster:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        route:'/scams/onlineshopscam'
    },
    {
      category: 'Health',
      title: 'Romance Scams',
      description:
        'Scammers create fake profiles on dating websites or social media platforms to develop romantic relationships with victims.',
      date: '25 March 2023',
      poster:
        'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        route:"/scams/romancescam"
    },
    {
      category: 'Education',
      title: 'Investment Scams',
      description:
        'These scams promise high returns on investments with little to no risk. Victims are persuaded to invest money in fake schemes or Ponzi schemes, only to lose their money when the scheme collapses.',
      date: '22 March 2023',
      poster:
        'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        route:"/scams/investmentscam"
    },
    {
      category: 'Travel',
      title: 'Lottery or Sweepstakes Scams',
      description: `Victims receive notifications claiming they've won a lottery or sweepstakes, but they must pay fees or taxes upfront to claim their prize. `,
      date: '19 March 2023',
      poster:
        'https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        route:"/scams/lotteryscam"
    },
    {
      category: 'Job',
      title: 'Job Offer Scams',
      description:
        'Scammers pose as employers offering lucrative job opportunities, often with work-from-home options. ',
      date: '16 March 2023',
      poster:
        'https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
        route:"/scams/jobscam"
    },
    {
      category: 'Fashion',
      title: 'Charity Scams',
      description:
        'Fraudsters create fake charity websites or use emotional appeals to solicit donations for fabricated causes or disasters',
      date: '13 March 2023',
      poster:
        'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        route:"/scams/charityscams"
    },
    
  ]
  

function page() {
  return (
    <>
    
    <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Resources and insights
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
         
        </div>

        {/* posts */}
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post,index) => (
            <Link key={index} href={`${post.route}`}>
            <div key={post.title} className="border">
              <Image height={500} width={500} src={post.poster} className="aspect-video w-full rounded-md" alt="" />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #{post.category}
                </p>
                <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{post.title}</p>
                <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                  {post.description}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
        
      </div>
    </>
  )
}

export default page