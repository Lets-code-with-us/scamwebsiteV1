'use client';
import React, { useState } from 'react';

const features = [
  {
    id: 1,
    title: 'Whatsapp Lottery Scam',
    color: 'blue',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 448 512">
        <path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/>
      </svg>
    ),
    description:
      'The WhatsApp lottery scam is a type of fraudulent scheme where scammers impersonate WhatsApp or other legitimate companies to deceive individuals into believing they have won a lottery or prize. .',
  },
  {
    id: 2,
    title: 'Debit Credit Card Fraud',
    color: 'orange',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 576 512">
        <path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"/>
      </svg>
    ),
    description:
      'A debit card scam refers to fraudulent activities where scammers use various tactics to obtain sensitive information related to debit cards, such as card numbers, expiration dates, CVV codes, and PINs.',
  },
  {
    id: 3,
    title: 'Phishing',
    color: 'green',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30"
        height="30"
        viewBox="0 0 576 512">
        <path d="M180.5 141.5C219.7 108.5 272.6 80 336 80s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8c4.7 9.2 4.7 20.1 0 29.3c-14.1 27.4-41.9 66.8-81 99.8C452.3 403.5 399.4 432 336 432s-116.3-28.5-155.5-61.5c-16.2-13.7-30.5-28.5-42.7-43.1L48.1 379.6c-12.5 7.3-28.4 5.3-38.7-4.9S-3 348.7 4.2 336.1L50 256 4.2 175.9c-7.2-12.6-5-28.4 5.3-38.6s26.1-12.2 38.7-4.9l89.7 52.3c12.2-14.6 26.5-29.4 42.7-43.1zM448 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
      </svg>
    ),
    description:
      'A phishing scam is a type of cyber attack where scammers use deceptive tactics to trick individuals into providing sensitive information such as usernames, passwords, credit card numbers, or other personal details. .',
  },
  {
    id: 4,
    title: 'Customer Care Number Fraud',
    color: 'red',
    icon: (
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M20.332 23h-6.999l-2.226-6.543c-.136-.279-.42-.457-.732-.457h-.375v-1h3.729l2.056-3.738c.106-.171.285-.262.467-.262.426 0 .691.469.467.834l-1.741 3.166h4.044l-1.741-3.166c-.224-.365.041-.834.467-.834.182 0 .361.091.467.262l2.056 3.738h3.729v1h-.374c-.312 0-.597.178-.733.459l-2.561 6.541zm-8.396-1h-11.936c0-.277-.002-2.552-.004-2.803-.008-2.111.083-3.319 2.514-3.88 2.663-.614 5.801-1.165 4.537-3.495-3.744-6.906-1.067-10.822 2.954-10.822 3.942 0 6.686 3.771 2.952 10.822l-1.091 2.178h-1.862c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h.236l1.7 5zm3.546-4.426c0-.276-.224-.5-.5-.5s-.5.224-.5.5v3c0 .276.224.5.5.5s.5-.224.5-.5v-3zm2-.074c0-.276-.224-.5-.5-.5s-.5.224-.5.5v3c0 .276.224.5.5.5s.5-.224.5-.5v-3zm2.036 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v3c0 .276.224.5.5.5s.5-.224.5-.5v-3z" />
      </svg>
    ),
    description:
      'Customer care number fraud is a type of scam where fraudsters impersonate customer support representatives from legitimate companies or organizations. .',
  },
  {
    id: 5,
    title: 'Randsomeware Attack',
    color: 'red',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path d="M10.872 6.831l1.695 3.904 3.654-1.561-1.79 3.426 3.333.954-3.417 1.338 2.231 4.196-4.773-2.582-2.869 2.287.413-3.004-3.792-.726 2.93-1.74-1.885-2.512 3.427.646.843-4.626zm-.786-6.831l-1.665 9.119-6.512-1.228 3.639 4.851-5.548 3.294 7.108 1.361-.834 6.076 5.742-4.577 9.438 5.104-4.288-8.064 6.834-2.677-6.661-1.907 3.25-6.22-6.98 2.982-3.523-8.114z" />
      </svg>
    ),
    description:
      'A ransomware attack is a type of cyberattack where malicious software (ransomware) is used to encrypt files or systems, rendering them inaccessible to the owner..',
  },
  {
    id: 6,
    title: 'CatFishing Attack',
    color: 'red',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 576 512">
      <path d="M320 192l17.1 0c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4l0 4 0 32 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-140.8L280 448l56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53 0-96-43-96-96l0-223.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3l0 85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5s0 0 0 0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32c0 0 0 0 0 0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128c0 0 0 0 0 0l0-96 0-20 0-1.3C352 4.8 356.7 .1 362.6 0l.2 0c3.3 0 6.4 1.6 8.4 4.2c0 0 0 0 0 .1L384 21.3l27.2 36.3L416 64l64 0 4.8-6.4L512 21.3 524.8 4.3c0 0 0 0 0-.1c2-2.6 5.1-4.2 8.4-4.2l.2 0C539.3 .1 544 4.8 544 10.7l0 1.3 0 20 0 96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/>
      </svg>
    ),
    description:
      'A catfishing attack is a type of deceptive online activity where someone creates a fake identity or persona on social media, dating platforms, or other online forums to trick others into forming relationships, sharing personal information, or engaging in fraudulent activities..',
  },
  {
    id: 7,
    title: 'Social Media',
    color: 'red',
    icon: (
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.248 18.348l-.371-1.295.896.833.847.784 1.505 1.33v-12.558c0-.798-.644-1.442-1.435-1.442h-9.38c-.791 0-1.435.644-1.435 1.442v9.464c0 .798.644 1.442 1.435 1.442h7.938zm-1.26-3.206l-.462-.567c.917-.259 1.267-.833 1.267-.833-.287.189-.56.322-.805.413-.35.147-.686.245-1.015.301-.672.126-1.288.091-1.813-.007-.399-.077-.742-.189-1.029-.301-.161-.063-.336-.14-.511-.238l-.028-.016-.007-.003-.028-.016-.028-.021-.196-.119s.336.56 1.225.826l-.469.581c-1.547-.049-2.135-1.064-2.135-1.064 0-2.254 1.008-4.081 1.008-4.081 1.008-.756 1.967-.735 1.967-.735l.07.084c-1.26.364-1.841.917-1.841.917l.413-.203c.749-.329 1.344-.42 1.589-.441l.119-.014c.427-.056.91-.07 1.414-.014.665.077 1.379.273 2.107.672 0 0-.553-.525-1.743-.889l.098-.112s.959-.021 1.967.735c0 0 1.008 1.827 1.008 4.081 0 0-.573.977-2.142 1.064zm-.7-3.269c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777 0-.427-.315-.777-.714-.777zm-2.555 0c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777.007-.427-.315-.777-.714-.777z" />
      </svg>
    ),
    description:
      'A social media scam refers to fraudulent activities conducted on social networking platforms with the aim of deceiving users for financial gain or other malicious purposes..',
  },
  {
    id: 8,
    title: 'Work From Home Scam',
    color: 'red',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30"
        height="30"
        viewBox="0 0 576 512">
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
      </svg>
    ),
    description:
      'Work-from-home scams are fraudulent schemes that promise individuals the opportunity to earn money from the comfort of their own homes, but in reality, they aim to deceive and defraud victims..',
  },

  {
    id: 9,
    title: 'Digital FootPrints',
    color: 'red',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30"
        height="30"
        viewBox="0 0 640 512">
        <path d="M416 0C352.3 0 256 32 256 32l0 128c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0zM128 96c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64zM288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32l0 128s96.3 32 160 32zM0 416c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64z"/>
      </svg>
    ),
    description:
      " A digital footprint scam generally refers to fraudulent activities or schemes that exploit an individual's online presence or digital footprint for malicious purposes",
  },
  {
    id: 10,
    title: 'Malware',
    color: 'red',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30"
        height="30"
        viewBox="0 0 512 512">
        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 11.5c0 49.9-60.3 74.9-95.6 39.6L120.2 75C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l8.2 8.2C118.4 163.7 93.4 224 43.5 224L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l11.5 0c49.9 0 74.9 60.3 39.6 95.6L75 391.8c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6l0 11.5c0 17.7 14.3 32 32 32s32-14.3 32-32l0-11.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6l11.5 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-11.5 0c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C348.3 118.4 288 93.4 288 43.5L288 32zM176 224a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
      </svg>
    ),
    description:
      'A  malware scam typically involves deceptive tactics used by cybercriminals to trick users into downloading or installing malicious software (malware) onto their devices.',
  },
  {
    id: 11,
    title: 'Social Engineering',
    color: 'red',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30"
        height="30"
        viewBox="0 0 640 512">
        <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
      </svg>
    ),
    description:
      'Social engineering scams involve manipulating people into performing certain actions or revealing sensitive information through psychological manipulation and deception.',
  },
  {
    id: 12,
    title: 'Cyber Bulling and Trolling',
    color: 'red',
    icon: (
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771" />
      </svg>
    ),
    description:
      'Cyberbullying is a serious issue that involves using digital communication tools, such as social media, messaging apps, email, or online forums, to harass, intimidate, or harm others..',
  },
  {
    id: 13,
    title: 'Fake Website Scam',
    color: 'red',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30"
        height="30"
        viewBox="0 0 512 512">
        <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>
      </svg>
    ),
    description:
      'A fake website scam involves creating fraudulent websites that mimic legitimate ones to deceive visitors and steal their personal information, financial details, or engage in other malicious activities..',
  },
  {
    id: 14,
    title: 'Matrimonial Fraud Scam',
    color: 'red',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30"
        height="30"
        viewBox="0 0 640 512">
        <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160l44.8 0c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2l0 72.8c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-115.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L576 464c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-72.8 47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240l0 32 96 0 0-32c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2l0-32-96 0 0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"/>
      </svg>
    ),
    description:
      'Gather all relevant information, including chat messages, emails, profiles, and any financial transactions related to the scam.Keep detailed records of dates, times, and amounts involved in any money transfers or payments made to the scammer..',
  },
  {
    id: 15,
    title: 'Fake Emails Scam',
    color: 'red',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="30"
        height="30"
        viewBox="0 0 512 512">
        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
      </svg>
    ),
    description:
      'A fake email scam, also known as phishing, involves sending fraudulent emails to trick individuals into revealing sensitive information such as login credentials, financial details, or personal information..',
  },
  {
    id: 16,
    title: 'Online Games Fraud',
    color: 'red',
    icon: (
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m9.665 9.428c-6.187-1.667-14.302 1.219-18.887 6.443.134.317.283.627.448.927l.291-.308.722.691-.468.5c1.805 2.608 4.819 4.319 8.229 4.319 5.52 0 10-4.48 10-10l-.016-.557c-.435-.104-.516-.119-.977-.218l.21-.978.654.143c-.054-.327-.122-.647-.206-.962m-15.226 5.81c-.912.738-1.193.995-1.509 1.277l-.664-.748c.798-.708.911-.793 1.544-1.306l.629.777m2.435-1.631c-.915.555-1.202.753-1.666 1.065l-.556-.831c.559-.375 1.127-.739 1.705-1.089l.517.855zm10.814-7.999c-1.834-2.204-4.599-3.608-7.688-3.608-5.283 0-9.614 4.105-9.976 9.296l.554.549-.569.575c.016.405.057.805.121 1.195 5.222-5.058 12.382-7.508 18.658-6.387-.18-.331-.378-.65-.593-.957l-.598-.097.091-.566zm-8.182 6.711c-1 .431-1.346.607-1.794.827l-.441-.897c.885-.435 1.838-.848 1.838-.848l.397.918m2.784-.89c-1.072.283-1.466.417-1.893.554l-.307-.951c1.026-.331 1.201-.373 1.945-.57l.255.967zm2.884-.431c-.654.062-1.307.14-1.955.24l-.154-.988c1.034-.16 1.226-.173 2.015-.248l.094.996m-12.338-1.009c-.872.649-1.203.929-1.553 1.218l-.637-.77c.755-.625 1.593-1.25 1.593-1.25l.597.802m15.33.095l-.087.997c-1.061-.094-1.135-.09-1.969-.117l.034-.999c1.07.035.994.03 2.022.119m-12.831-1.631c-1.012.564-1.325.763-1.707.999l-.525-.852c.932-.574 1.024-.619 1.745-1.021l.487.874m2.68-1.182c-.91.353-.68.256-1.827.757l-.402-.916c.617-.27 1.239-.53 1.868-.774l.361.933zm2.817-.814c-1.141.275-1.525.394-1.91.507l-.28-.96c.99-.291 1.151-.324 1.955-.519l.235.972m2.897-.404c-1.053.094-1.446.155-1.961.227l-.14-.99c.971-.137 2.011-.233 2.011-.233l.09.996m2.982-.977l-.059.999c-1.052-.063-1.475-.061-1.971-.064l.005-1c.752.004.985.003 2.025.065" />
      </svg>
    ),
    description:
      'Scammers create fake websites or links that claim to offer free downloads of popular games. In reality, these downloads may contain malware or lead to phishing attempts..',
  },
  {
    id: 17,
    title: 'Password Theft Scam',
    color: 'red',
    icon: (
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M24 22h-24v-20h7c1.695 1.942 2.371 3 4 3h13v17zm-9-9v-1c0-1.656-1.344-3-3-3s-3 1.344-3 3v1h-1v5h8v-5h-1zm-4-1v1h2v-1c0-.552-.448-1-1-1s-1 .448-1 1z" />
      </svg>
    ),
    description:
      'Password theft scams, also known as password phishing or credential harvesting, are a type of cybercrime where attackers trick individuals into revealing their login credentials..',
  },
  {
    id: 18,
    title: 'Online Investment Fraud Scam',
    color: 'red',
    icon: (
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M22 3c.53 0 1.039.211 1.414.586s.586.884.586 1.414v14c0 .53-.211 1.039-.586 1.414s-.884.586-1.414.586h-20c-.53 0-1.039-.211-1.414-.586s-.586-.884-.586-1.414v-14c0-.53.211-1.039.586-1.414s.884-.586 1.414-.586h20zm1 8h-22v8c0 .552.448 1 1 1h20c.552 0 1-.448 1-1v-8zm-15 5v1h-5v-1h5zm13-2v1h-3v-1h3zm-10 0v1h-8v-1h8zm-10-6v2h22v-2h-22zm22-1v-2c0-.552-.448-1-1-1h-20c-.552 0-1 .448-1 1v2h22z" />
      </svg>
    ),
    description:
      'Online investment fraud is a type of scam where individuals or organizations deceive investors into putting money into fraudulent investment schemes or fake opportunities. .',
  },
  {
    id: 20,
    title: 'Remote access Fraud Scam',
    color: 'red',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path d="M10 13h-4v-1h4v1zm2.318-4.288l3.301 3.299-4.369.989 1.068-4.288zm11.682-5.062l-7.268 7.353-3.401-3.402 7.267-7.352 3.402 3.401zm-6 8.916v.977c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h14.056l1.977-2h-18.033v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.843l-2 2.023z" />
      </svg>
    ),
    description:
      'Remote access fraud is a type of scam where criminals trick individuals into granting them access to their computers or devices, often under the guise of providing technical support or assistance. .',
  },
  {
    id: 21,
    title: 'Part time Job  Fraud Scam',
    color: 'red',
    icon: (
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M22.001 13c0-5.522-4.475-10.001-10.002-10.001-5.523 0-10.001 4.479-10.001 10.001 0 4.316 3.087 10 10.001 10 6.93 0 10.002-5.693 10.002-10zm-10.002 8c-4.411 0-8.001-3.59-8.001-8 0-4.413 3.59-8.001 8.001-8.001 4.412 0 8.002 3.588 8.002 8.001 0 4.41-3.59 8-8.002 8zm-1.279-6.817l-2.325-2.183-1.395 1.435 3.746 3.565 6.559-6.592-1.422-1.408-5.163 5.183zm-9.918-5.468c-.535-.824-.802-1.772-.802-2.718 0-2.757 2.233-4.995 4.991-4.995.948 0 1.896.268 2.721.803-3.172 1.217-5.692 3.739-6.91 6.91zm18.201-7.715c-.947 0-1.895.268-2.719.803 3.17 1.218 5.694 3.739 6.914 6.909.534-.823.801-1.77.801-2.717 0-2.761-2.236-4.995-4.996-4.995z" />
      </svg>
    ),
    description:
      'Part-time job scams are unfortunately common, especially online where scammers can easily reach a wide audience..',
  },
  {
    id: 22,
    title: 'Call Merging Fraud Scam',
    color: 'red',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        width="30"
        height="30"
        viewBox="0 0 512 512">
        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
      </svg>
    ),
    description:
      'A call merging scam, also known as a one-ring scam  or wangiri scam, is a type of telephone fraud where scammers use automated systems to make short, one-ring calls to random phone numbers..',
  },
];

export default function Feature() {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleReset = () => {
    setShowAll(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-8 pt-24 pb-24">
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        {features.slice(0, showAll ? features.length : 8).map((feature) => (
          <div key={feature.id}>
            <div
              className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-${feature.color}-100`}
            >
              {feature.icon}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              {feature.title}
            </h3>
            <p className="mt-4 text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="text-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      )}
      {showAll && (
        <div className="text-center mt-8">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
