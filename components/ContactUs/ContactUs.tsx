'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import Button from '../Button/Button';
import { Dialog, Image, LottieFile } from '..';
import { emailSentTemplate, sendEmail } from '@/utils/email/send';
import useDisclosure from '@/hooks/useDisclosure';
import EmailSuccess from "@/public/lotties/EmailSent.json";
import EmailFailed from "@/public/lotties/EmailFailed.json";

const ContactUs = () => {

    const [loadSubmit, setLoadSubmit] = useState(false),
    [status, setStatus] = useState('');

    const {isOpen, onClose, onOpen} = useDisclosure();

    const {
        handleSubmit,
        setFieldValue,
        errors,
        values,
        resetForm,
        // setErrors,
    } = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            message: ""
        },
            validationSchema: Yup.object({
                first_name: Yup.string()
                    .required('First Nme is required!'),
                last_name: Yup.string()
                    .required('Last Name is required!'),
                email: Yup.string()
                    .required('Email is required!')
                    .email('Incorrect email format'),
                message: Yup.string()
                    .required('Message is required!'),
            }),
        onSubmit: async(values) => {
            setLoadSubmit(true);
            const logoImage = window.location.origin + '/images/Logo.png';
            const d = new Date();
            const link = process.env.EMAIL as string;

            const dataSent = {
                subject: 'New Message - ' + values.email,
                email: values.email,
                to: values.email,
                first_name: values.first_name,
                last_name: values.last_name,
                message: emailSentTemplate(link, logoImage, values.first_name, values.last_name, values.email, values.message, d.getFullYear())
            }

            const sender = await sendEmail(dataSent);
            if(sender.status === 'success'){
                setStatus('success');
            }else{
                setStatus('error');
            }
            onOpen();

            setLoadSubmit(false);
        },
    });

    return (
        <div className='target-element mt-[100px]' id='contact'>
            <p className='text-[30px] lg:text-[40px] font-bold text-center text-white'>Ready to Trade With Ace Trader?</p>
            <p className='text-md text-[#BDF6FF] text-center md:w-[50%] mx-auto'>Whether you’re just starting out or scaling your strategy, our funding solutions are designed to help you grow and profit - without unnecessary risk.</p>

            <div className='w-full md:w-[80%] bg-[#06333D] rounded-xl p-[20px] mx-auto mt-[35px] space-y-6'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="first_name" className='text-white'>First Name<span className='text-[#05CBE9]'>*</span></label>
                        <input 
                            name='first_name' 
                            type='text'
                            placeholder='First Name'
                            value={values.first_name}
                            onChange={(e) => setFieldValue('first_name', e.target.value)}
                            className={'w-full outline-1 outline-[#3AA7B8] p-3 rounded-md text-white placeholder:text-[#2F6F78] mt-2'}
                        />
                        <small className='text-red-500'>{errors.first_name}</small>
                    </div>
                    <div>
                        <label htmlFor="last_name" className='text-white'>Last Name<span className='text-[#05CBE9]'>*</span></label>
                        <input 
                            name='last_name' 
                            type='text'
                            placeholder='Last Name'
                            value={values.last_name}
                            onChange={(e) => setFieldValue('last_name', e.target.value)}
                            className={'w-full outline-1 outline-[#3AA7B8] p-3 rounded-md text-white placeholder:text-[#2F6F78] mt-2'}
                        />
                        <small className='text-red-500'>{errors.last_name}</small>
                    </div>
                </div>

                <div className=''>
                    <label htmlFor="email" className='text-white'>Email<span className='text-[#05CBE9]'>*</span></label>
                    <input 
                        name='email' 
                        type='email'
                        placeholder='username@mail.com'
                        value={values.email}
                        onChange={(e) => setFieldValue('email', e.target.value)}
                        className={'w-full outline-1 outline-[#3AA7B8] p-3 rounded-md text-white placeholder:text-[#2F6F78] mt-2'}
                    />
                    <small className='text-red-500'>{errors.email}</small>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-white'>Your Message<span className='text-[#05CBE9]'>*</span></label>
                    <textarea 
                        rows={8} 
                        name="message" 
                        value={values.message} 
                        placeholder='Enter your question or message...' 
                        onChange={(e) => setFieldValue('message', e.target.value)}
                        className='outline-1 outline-[#3AA7B8] p-3 rounded-md text-white placeholder:text-[#2F6F78]'
                    ></textarea>
                    <small className='text-red-500'>{errors.message}</small>
                </div>
                <div className='flex justify-center mt-8 mb-8'>
                    <Button 
                        onClick={() => handleSubmit()} 
                        disabled={loadSubmit}
                        className={`${loadSubmit ? 'cursor-progress' : ''} bg-[#05CBE9] text-[#072B33] text-md py-2 px-10 rounded-full flex items-center gap-2`}
                    >   
                        {loadSubmit ? (
                            <span className='animate-spin w-6 h-6 border-4 border-solid border-slate-300 border-b-[#0c0340] rounded-full inline-block box-border'></span>
                        ) : null}

                        Submit
                    </Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-[100px] items-center">
                <div className='p-2 rounded-xl bg-[#06333D] shrink-0 h-fit'>
                    <Image src='/images/guard.png' alt='' width={100} height={100} className='w-[50px]' />
                </div>
                <p className='text-[#3AA7B8] text-center md:text-left'> <span className='font-bold'>Ace-Trader</span> is provided by Forest Park FX LTD. Forest Park FX LTD offers fee-based simulated trading assessments for Potential Traders. All funding assessments are provided by Forest Park FX LTD and all assessment fees are paid to Forest Park FX LTD. If you qualify for a Funded Account, you will be required to enter into a Trader Agreement with Forest Park FX LTD. Forest Park FX LTD does not provide any trading education or other services.</p>
            </div>

            <Dialog
                isOpen={isOpen} 
                onClose={() => {
                    onClose();
                    if(status === 'success'){
                        resetForm();
                    }
                }} 
                size='sm'
            >
                <div className='bg-[#06333D] p-[8]'>
                    <LottieFile 
                        animationData={status === 'success' ? EmailSuccess : EmailFailed}
                        loop={false}
                        autoplay={true}
                        className='w-36 mx-auto'
                    />
                    <div className='text-center mb-8 space-y-2 text-white'>
                        {status === 'success' ? (
                            <>
                                <p className='text-xl font-bold'>Email sent successfully</p>
                                <p className='text-md font-medium'>Thank you <span className='font-semibold'>{values.email}</span>, I will check your email as soon as possible.</p>
                            </>
                        ): (
                            <>
                                <p className='text-xl font-bold'>Failed to send email</p>
                                <p className='text-md font-medium'>Please try again, or send me email manually to <span className='font-semibold'>support@a-trader.com</span></p>
                            </>
                        )}
                    </div>
                </div>
            </Dialog>

        </div>
    )
}

export default ContactUs