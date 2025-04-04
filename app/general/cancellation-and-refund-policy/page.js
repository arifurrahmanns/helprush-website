import React from 'react'

export const generateMetadata = async () => {
    return {
        title: "Cancellation and Refund Policy",
        // description: "Generated by create next app",
    };
}
function page() {
    return (
        <div className="container py-10 lg:py-20">

            <div className="grid items-center lg:grid-cols-2 gap-5 lg:gap-10">

                <div>
                    <h1 className="text-3xl lg:text-5xl lg:mb-6 font-bold mb-4">
                        Cancellation and Refund Policy
                    </h1>
                    <p className='txt'>HelpRush, operated by Horfay Taqnia Private Limited, is committed to maintaining a fair and transparent cancellation and refund policy. Our goal is to balance the interests of customers and service providers while ensuring a smooth and reliable experience for all users.</p>

                </div>
                <div>
                    <img src="/img/37745.jpg" alt="" />
                </div>
            </div>

            <div className="py-10 lg:py-14">
                <h2 className="text-xl font-bold mt-4 mb-2">Why Cancellation Charges?</h2>
                <p>We charge cancellation fees to fairly compensate service providers for the time and effort they allocate for confirmed bookings. Last-minute cancellations impact their earnings and scheduling.</p>

            </div>
            <div className="pb-10 lg:pb-14">
                <h2 className="text-xl font-bold mt-4 mb-2">Cancellation Policy</h2>
                <h3 className="text-lg font-bold mt-2 mb-1">Cancellation Fees Breakdown:</h3>
                <ul className="list-disc list-inside">
                    <li>Before Provider Confirmation: No cancellation fee will be charged.</li>
                    <li>Within 12 Hours of Scheduled Service Time: Up to 30% of the estimated service cost.</li>
                    <li>Within 24 Hours of Scheduled Service Time: Up to 15% of the estimated service cost.</li>
                    <li>Within 48 Hours of Scheduled Service Time: 0-5% of the estimated service cost.</li>
                </ul>
                <h3 className="text-lg font-bold mt-2 mb-1">Provider-Initiated Cancellations:</h3>
                <ul className="list-disc list-inside">
                    <li>If a service provider cancels a confirmed booking, HelpRush will assign an alternative provider where possible.</li>
                    <li>If no replacement provider is available, the full amount will be refunded to the customer.</li>
                    <li>Frequent cancellations by a provider may lead to penalties or suspension from the platform.</li>
                </ul>
                <h3 className="text-lg font-bold mt-2 mb-1">Waiver of Cancellation Fee:</h3>
                <ul className="list-disc list-inside">
                    <li>If the service provider voluntarily waives the cancellation fee, HelpRush will not deduct it, and a full refund will be issued to the customer.</li>
                    <li>If a cancellation occurs due to reasons beyond the customer’s control (e.g., service provider delay of more than 60 minutes, unavailability of essential tools, or service issues), the cancellation fee may be waived.</li>
                </ul>
            </div>

            <div className="pb-10 lg:pb-14">
                <h2 className="text-xl font-bold mt-4 mb-2">Refund Policy</h2>
                <h3 className="text-lg font-bold mt-2 mb-1">Eligibility for Refunds:</h3>
                <ul className="list-disc list-inside">
                    <li>Refunds apply to payments made in advance for canceled services, subject to the cancellation fee outlined above.</li>
                    <li>If a service is deemed incomplete or unsatisfactory by the HelpRush Happiness Team, a partial or full refund may be issued.</li>
                </ul>
                <h3 className="text-lg font-bold mt-2 mb-1">Processing Time:</h3>
                <ul className="list-disc list-inside">
                    <li>Approved refunds will be processed within 7 business days from the cancellation request.</li>
                    <li>The actual time for the refund to reflect in your account depends on banking and payment processing entities.</li>
                </ul>
                <h3 className="text-lg font-bold mt-2 mb-1">Exceptions and Special Cases:</h3>
                <ul className="list-disc list-inside">
                    <li>Refund requests due to emergencies or extenuating circumstances (e.g., medical emergencies, natural disasters) will be evaluated on a case-by-case basis.</li>
                    <li>In the case of fraudulent bookings or misuse of the platform, HelpRush reserves the right to deny refunds.</li>
                </ul>
            </div>

            <div className="pb-10 lg:pb-14">
                <h2 className="text-xl font-bold mt-4 mb-2">Additional Terms</h2>
                <h3 className="text-lg font-bold mt-2 mb-1">Rescheduling:</h3>
                <p>Customers can reschedule their booking without penalty if done at least 24 hours before the scheduled service time.</p>
                <h3 className="text-lg font-bold mt-2 mb-1">No-Shows:</h3>
                <p>If a customer is unavailable or unresponsive at the scheduled time, the provider will wait for 15 minutes before marking the service as ‘Customer No-Show.’ In such cases, the cancellation fee will apply, and no refund will be issued.</p>
                <h3 className="text-lg font-bold mt-2 mb-1">Partial Completion:</h3>
                <p>If a service is partially completed and the customer requests a refund, HelpRush will evaluate the case and determine a fair resolution.</p>

            </div>
            <h2 className="text-xl font-bold mt-4 mb-2">Responsibility and Fairness</h2>
            <p>By booking a service with HelpRush, you agree to adhere to this cancellation and refund policy. We encourage responsible cancellations and respectful interactions between customers and providers to maintain a seamless service experience.</p>
            <p>For further inquiries or assistance, please contact our HelpRush Support Team.</p>
        </div>
    )
}

export default page