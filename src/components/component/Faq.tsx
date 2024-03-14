import React from 'react'

export default function Faq() {
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-black">How do I get started?</h2>
              <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="/contact" title="" className="black font-semibold hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
  )
}
