import React from 'react'

const Pdtcard = () => {
  return (
    <div class="bg-[#1C1C1C] px-2 py-10">

            <div id="features" class="mx-auto max-w-6xl">
                <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
              
                <li class="rounded-xl bg-white px-6 py-8 shadow-sm transition-transform transform hover:-translate-y-6">

                        <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" class="mx-auto h-10 w-10"/>
                        <h3 class="my-3 font-display font-medium">Cross-Platform Compatibility</h3>
                        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                        Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.
                        </p>

                    </li>

                <li class="rounded-xl bg-white px-6 py-8 shadow-sm transition-transform transform hover:-translate-y-6">
                    <a href="/templates" class="group">
                    <img src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" class="mx-auto h-10 w-10"/>
                    <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                    Stay Informed with Essential Notifications
                    </h3>
                    <p class="mt-1.5 text-sm leading-6 text-secondary-500">We offer many templates covering areas such as
                        writing,
                        education, lifestyle and creativity to inspire your potential. </p>
                    </a>
                </li>
                <li class="rounded-xl bg-white px-6 py-8 shadow-sm transition-transform transform hover:-translate-y-6">
                    <a href="/download" class="group">
                    <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" class="mx-auto h-10 w-10"/>
                    <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Secure Data Encryption at all times</h3>
                    <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                    Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.
                    </p>
                    </a>
                </li>
                </ul>
            </div>
  </div>

  )
}

export default Pdtcard