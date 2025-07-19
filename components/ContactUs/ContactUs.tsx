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
import useTranslation from '@/hooks/useTranslation';
import parse from 'html-react-parser';

const ContactUs = () => {
    const { translation } = useTranslation();

    const [loadSubmit, setLoadSubmit] = useState(false),
    [status, setStatus] = useState('');

    const {isOpen, onClose, onOpen} = useDisclosure();

    const {
        handleSubmit,
        setFieldValue,
        errors,
        values,
        resetForm,
    } = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            message: ""
        },
            validationSchema: Yup.object({
                first_name: Yup.string()
                    .required(translation('home.contact.form.first.name.required')),
                last_name: Yup.string()
                    .required(translation('home.contact.form.last.name.required')),
                email: Yup.string()
                    .required(translation('home.contact.form.email.required'))
                    .email(translation('home.contact.form.email.invalid')),
                message: Yup.string()
                    .required(translation('home.contact.form.message.required')),
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
            <p className='text-[30px] lg:text-[40px] font-bold text-center text-white'>{translation('home.contact.title')}</p>
            <p className='text-md text-[#BDF6FF] text-center md:w-[50%] mx-auto'>{translation('home.contact.description')}</p>

            <div className='w-full md:w-[80%] bg-[#06333D] rounded-xl p-[20px] mx-auto mt-[35px] space-y-6'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="first_name" className='text-white'>{translation('home.contact.form.first.name')}<span className='text-[#05CBE9]'>*</span></label>
                        <input 
                            name='first_name' 
                            type='text'
                            placeholder={translation('home.contact.form.first.name')}
                            value={values.first_name}
                            onChange={(e) => setFieldValue('first_name', e.target.value)}
                            className={'w-full outline-1 outline-[#3AA7B8] p-3 rounded-md text-white placeholder:text-[#2F6F78] mt-2'}
                        />
                        <small className='text-red-500'>{errors.first_name}</small>
                    </div>
                    <div>
                        <label htmlFor="last_name" className='text-white'>{translation('home.contact.form.last.name')}<span className='text-[#05CBE9]'>*</span></label>
                        <input 
                            name='last_name' 
                            type='text'
                            placeholder={translation('home.contact.form.last.name')}
                            value={values.last_name}
                            onChange={(e) => setFieldValue('last_name', e.target.value)}
                            className={'w-full outline-1 outline-[#3AA7B8] p-3 rounded-md text-white placeholder:text-[#2F6F78] mt-2'}
                        />
                        <small className='text-red-500'>{errors.last_name}</small>
                    </div>
                </div>

                <div className=''>
                    <label htmlFor="email" className='text-white'>{translation('home.contact.form.email')}<span className='text-[#05CBE9]'>*</span></label>
                    <input 
                        name='email' 
                        type='email'
                        placeholder={translation('home.contact.form.email.placeholder')}
                        value={values.email}
                        onChange={(e) => setFieldValue('email', e.target.value)}
                        className={'w-full outline-1 outline-[#3AA7B8] p-3 rounded-md text-white placeholder:text-[#2F6F78] mt-2'}
                    />
                    <small className='text-red-500'>{errors.email}</small>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-white'>{translation('home.contact.form.message')}<span className='text-[#05CBE9]'>*</span></label>
                    <textarea 
                        rows={8} 
                        name="message" 
                        value={values.message} 
                        placeholder={translation('home.contact.form.message.placeholder')}
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
                        {translation('home.contact.form.submit')}
                    </Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-[100px] items-center">
                <div className='p-2 rounded-xl bg-[#06333D] shrink-0 h-fit'>
                    <Image src='/images/guard.png' alt='' width={100} height={100} className='w-[50px]' />
                </div>
                <div className='text-[#3AA7B8] text-center md:text-left'>{parse(translation('global.footer.description'))}</div>
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
                                <p className='text-xl font-bold'>{translation('home.contact.form.dialog.message.success')}</p>
                                <p className='text-md font-medium'>{translation('home.contact.form.dialog.message.success.description.one')} <span className='font-semibold'>{values.email}</span>, {translation('home.contact.form.dialog.message.success.description.two')}</p>
                            </>
                        ): (
                            <>
                                <p className='text-xl font-bold'>{translation('home.contact.form.dialog.message.failed')}</p>
                                <p className='text-md font-medium'>{translation('home.contact.form.dialog.message.failed.description.one')} <span className='font-semibold'>support@a-trader.com</span></p>
                            </>
                        )}
                    </div>
                </div>
            </Dialog>

        </div>
    )
}

export default ContactUs