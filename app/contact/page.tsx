import {Suspense} from 'react';
import AboutLoadingSkeleton from "@/app/about/loading";
import {ContactSection, StaticHeader} from "@/components";

import contactImage from "@/public/images/img_contact.jpg"

function ContactPage() {

    return (
        <section className="w-full">
            <Suspense fallback={<AboutLoadingSkeleton/>}>

                <StaticHeader image={contactImage}/>

                <div className="container mx-auto px-4">

                    <ContactSection/>
                </div>
            </Suspense>
        </section>
    )
}

export default ContactPage