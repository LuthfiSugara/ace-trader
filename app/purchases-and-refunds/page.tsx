import React from 'react'

const Index = () => {
    return (
        <div className='text-white'>
            <div className="pt-[100px] lg:pt-[150px] mb-12 md:mb-24" style={{background: 'linear-gradient(180deg, #118C8A 0%, #072B33 80.29%)'}}>
                <div className='max-w-[1400px] mx-auto px-8 lg:px-[40px] mt-4'>
                    <h2 className='text-start text-[30px] lg:text-[40px] font-bold mx-auto'>Refund Policy</h2>
                </div>
            </div>

            <div className='max-w-[1400px] mx-auto px-8 lg:px-[40px] space-y-8'>
                <p>After a cleared payment on the purchase of one of our programs occurs, you will receive an email with the login details to access your account on our platform. Once this information is emailed to you, no refund will be given. In some special circumstances, we will provide a refund if there were no trades placed on the account.  For assistance, please contact our Support Team at support@propaccount.com</p>

                <p className='text-2xl font-bold'>DISPUTE POLICY</p>

                <p>Clients who improperly dispute charges or request chargebacks with their bank will be permanently banned from the Platform. Please contact our Support Team if you have any questions.</p>

                <p className='text-2xl font-bold'>ACCEPTANCE OF THIS POLICY</p>

                <p>It is your responsibility to familiarize yourself with this Refund Policy. By placing an order for any of our products, you indicate that you have read this Refund Policy and that you agree with and fully accept the terms of this Refund Policy. If you do not agree with or fully accept the terms of this Refund Policy, we ask that you do not place an order with us.</p>

                <p><strong>Contact Us:</strong> For any questions or comments regarding our Refund Policy, please email <u>support@propaccount.com</u> with Subject Line: Refund Policy</p>
            </div>

        </div>
    )
}

export default Index