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
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="#fff"
          d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
        ></path>
        <path
          fill="#fff"
          d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
        ></path>
        <path
          fill="#cfd8dc"
          d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
        ></path>
        <path
          fill="#40c351"
          d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
          clipRule="evenodd"
        ></path>
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M22 2h-14c-1.104 0-2 .896-2 2v4h16v3.5c0 .276-.224.5-.5.5h-1.5v2h2c1.104 0 2-.896 2-2v-8c0-1.104-.896-2-2-2zm0 3h-14v-.5c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5v.5zm-6 5h-14c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-8c0-1.104-.896-2-2-2zm-11 10h-2v-1h2v1zm3 0h-2v-1h2v1zm.32-3.377c-.383.239-.836.377-1.32.377-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c.484 0 .937.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.326 1.571.857 2.123zm3.68 3.377h-2v-1h2v1zm-1-3c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm4 3h-2v-1h2v1z" />
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
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M21 11c0-.552-.448-1-1-1s-1 .448-1 1c0 .551.448 1 1 1s1-.449 1-1m3 .486c-1.184 2.03-3.29 4.081-5.66 5.323-1.336-1.272-2.096-2.957-2.103-4.777-.008-1.92.822-3.704 2.297-5.024 2.262.986 4.258 2.606 5.466 4.478m-6.63 5.774c-.613.255-1.236.447-1.861.573-1.121 1.348-2.796 2.167-5.287 2.167-.387 0-.794-.02-1.222-.061.647-.882.939-1.775 1.02-2.653-2.717-1.004-4.676-2.874-6.02-4.287-1.038 1.175-2.432 2-4 2 1.07-1.891 1.111-4.711 0-6.998 1.353.021 3.001.89 4 1.999 1.381-1.2 3.282-2.661 6.008-3.441-.1-.828-.399-1.668-1.008-2.499.429-.04.837-.06 1.225-.06 2.467 0 4.135.801 5.256 2.128.68.107 1.357.272 2.019.495-1.453 1.469-2.271 3.37-2.263 5.413.008 1.969.773 3.799 2.133 5.224" />
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M9.842 10.163c-.228.505-.789.858-1.365.858-.34 0-.648-.127-.883-.36-.234.233-.543.36-.883.36-.577 0-1.138-.353-1.365-.858-.247-.548.583-.924.831-.374.07.155.297.321.524.321.464 0 .438-.651.438-1.065-.428-.184-.73-.601-.73-.971 0-.491.532-.71 1.185-.71.654 0 1.185.219 1.185.71 0 .37-.301.787-.729.971 0 .431-.026 1.067.433 1.067.225 0 .459-.17.528-.323.248-.55 1.079-.175.831.374zm.254-3.701c-.331 0-.601-.27-.601-.601 0-.332.27-.601.601-.601.331 0 .601.269.601.601 0 .331-.27.601-.601.601zm0-2.104c-.829 0-1.501.673-1.501 1.503 0 .829.672 1.503 1.501 1.503.829 0 1.501-.674 1.501-1.503 0-.83-.672-1.503-1.501-1.503zm-5.004 2.104c-.331 0-.601-.27-.601-.601 0-.332.27-.601.601-.601.332 0 .601.269.601.601 0 .331-.269.601-.601.601zm1.501-.601c0-.83-.672-1.503-1.501-1.503-.829 0-1.501.673-1.501 1.503 0 .829.672 1.503 1.501 1.503.829 0 1.501-.674 1.501-1.503zm11.12 17.136c-1.254.007-4.557.004-4.896.004-1.704-.006-1.65-1.981-.222-1.978l2.605.005-.585-.8c-1.085-1.48-.86-4.456.95-5.815.529-.397-.069-1.197-.601-.802-2.002 1.505-2.423 4.451-1.602 6.411l-.757-.001c-.743-.011-1.432.329-1.795.941-.361.608-.367 1.37-.016 1.987l.039.051-2.653-.002c1.344-1.7.996-4.971.911-5.62-.088-.667-1.078-.521-.992.131.214 1.627.145 3.897-.755 4.939-.254.295-.564.475-.938.549h-2.053c-1.316 0-1.181-1.875.002-1.875.529.008.236.008 1.341-.004.595-2.113.371-3.143-.431-5.262-.613-1.619-.835-2.344-.623-3.95l-.312-.162c-1.925-.998-2.329-2.844-2.329-4.217 0-1.899.753-3.881 2.298-6.045.932.857 1.28 1.291 2.087 2.296.161-.041 1.125-.374 2.642 0 .615-.812.997-1.345 2.068-2.301 3.144 4.454 2.184 7.272 2.065 7.803 3.715 1.449 5.052 2.779 7.033 4.581-.883-3.458-1.504-5.231 1.006-7.94.401-.433 1.079.177.663.626-1.672 1.804-1.627 3.277-1.328 4.6.674 2.984 1.46 4.504 1.46 6.747 0 4.936-3.843 5.1-4.282 5.103zm3.798-12.071c-.283-1.255-.2-2.311 1.086-3.697.408-.44.514-1.019.284-1.546-.403-.925-1.695-1.216-2.413-.444-1.882 2.029-2.257 3.774-1.953 5.827-1.254-.957-2.68-1.775-4.197-2.405.355-2.215-.339-5.027-3.064-8.656-1.215 1.063-1.726 1.484-2.635 2.657-.555-.084-1.301-.085-1.846.001-.932-1.148-1.363-1.533-2.619-2.663-1.843 2.443-3.154 4.762-3.154 7.527 0 2.204.909 3.944 2.569 4.939-.108 1.451.332 2.617.76 3.746.468 1.235.911 2.406.594 3.913l-.584-.005c-1.247 0-1.919 1.016-1.919 1.972 0 .259.139 1.888 1.922 1.905 0 0 12.701.006 13.377.002 1.96-.012 5.277-1.31 5.277-6.105 0-2.432-.803-3.96-1.485-6.968z" />
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
        width="24"
        height="24"
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
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" />
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18v-1.511h-.5v1.511h-1v-1.511h-2.484l.25-1.489h.539c.442 0 .695-.425.695-.854v-4.444c0-.416-.242-.702-.683-.702h-.817v-1.5h2.5v-1.5h1v1.5h.5v-1.5h1v1.526c2.158.073 3.012.891 3.257 1.812.29 1.09-.429 2.005-1.046 2.228.75.192 1.789.746 1.789 2.026 0 1.742-1.344 2.908-4 2.908v1.5h-1zm-.5-5.503v2.503c1.984 0 3.344-.188 3.344-1.258 0-1.148-1.469-1.245-3.344-1.245zm0-.997c1.105 0 2.789-.078 2.789-1.25 0-1-1.039-1.25-2.789-1.25v2.5z" />
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
        className="h-9 w-9 text-red-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
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
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.248 18.348l-.371-1.295.896.833.847.784 1.505 1.33v-12.558c0-.798-.644-1.442-1.435-1.442h-9.38c-.791 0-1.435.644-1.435 1.442v9.464c0 .798.644 1.442 1.435 1.442h7.938zm-1.26-3.206l-.462-.567c.917-.259 1.267-.833 1.267-.833-.287.189-.56.322-.805.413-.35.147-.686.245-1.015.301-.672.126-1.288.091-1.813-.007-.399-.077-.742-.189-1.029-.301-.161-.063-.336-.14-.511-.238l-.028-.016-.007-.003-.028-.016-.028-.021-.196-.119s.336.56 1.225.826l-.469.581c-1.547-.049-2.135-1.064-2.135-1.064 0-2.254 1.008-4.081 1.008-4.081 1.008-.756 1.967-.735 1.967-.735l.07.084c-1.26.364-1.841.917-1.841.917l.413-.203c.749-.329 1.344-.42 1.589-.441l.119-.014c.427-.056.91-.07 1.414-.014.665.077 1.379.273 2.107.672 0 0-.553-.525-1.743-.889l.098-.112s.959-.021 1.967.735c0 0 1.008 1.827 1.008 4.081 0 0-.573.977-2.142 1.064zm-.7-3.269c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777 0-.427-.315-.777-.714-.777zm-2.555 0c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777.007-.427-.315-.777-.714-.777z" />
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
        width="24"
        height="24"
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
        clip-rule="evenodd"
        fillRule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m6 18v3c0 .621.52 1 1 1h14c.478 0 1-.379 1-1v-14c0-.478-.379-1-1-1h-3v-3c0-.478-.379-1-1-1h-14c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1zm10.5-12h-9.5c-.62 0-1 .519-1 1v9.5h-2.5v-13h13z"
          fillRule="nonzero"
        />
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
        className="h-9 w-9 text-red-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
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
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clip-rule="evenodd"
      >
        <path d="M24 3v18h-24v-18h24zm-7 13c2.208 0 4-1.792 4-4s-1.792-4-4-4-4 1.792-4 4c0 .728.195 1.412.536 2h-3.072c.341-.588.536-1.272.536-2 0-2.208-1.792-4-4-4s-4 1.792-4 4 1.792 4 4 4h10zm-10-6c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm10 0c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z" />
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        width="24"
        height="24"
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
        className="h-9 w-9 text-red-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
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
