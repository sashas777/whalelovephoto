'use client';

import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { sendMessage} from "@/services/Telegram";
import Spinner from '@/components/Spinner';

// Define the validation schema using Yup
const schema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
    email: yup
        .string()
        .email('Enter a valid email address')
        .required('Email is required'),
    phone: yup
        .string()
        .required('Phone number is required')
        .matches(
            /^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})$/,
            'Enter a valid US phone number (e.g., 123-456-7890 or +1 (123) 456-7890)'
        ),
    instagram: yup
        .string()
        .url('Enter a valid URL (e.g., https://instagram.com/yourprofile)')
        .matches(
            /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_.]+)/im,
            'Enter a valid Instagram profile URL'
        )
        .optional() // This field is optional as per the request
        .transform((value, originalValue) => (originalValue === '' ? undefined : value)),
    story: yup.string().max(2000, 'The message cannot exceed 2000 characters').required('A message is required'),
});

type FormData = yup.InferType<typeof schema>;

export default function ContactFormSection() {
    const [loading, setLoading] = useState(false);


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            setLoading(true);
            await sendMessage(data);
            toast.success('Message sent successfully!', {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            reset();
        } catch (error) {
            console.error('Form submission error:', error);

            let errorMessage = 'Unknown error';
            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === 'object' && error !== null && 'message' in error) {
                errorMessage = String((error as { message: unknown }).message);
            }

            toast.error(`Failed to send message: ${errorMessage}`, {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors duration-200 text-gray-800 text-sm rounded-md";
    const errorClass = "text-red-600 text-xs mt-1 absolute -bottom-5 left-0";
    if (loading) {
        return (
            <div className="py-12 md:py-20 px-4 bg-white">
                <Spinner loading={loading}/>
            </div>
        );
    }

    return (
        <section id="contact-form" className="py-12 md:py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* First Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                {...register('name')}
                                placeholder="Name *" // Added placeholder
                                className={inputClass}
                            />
                            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                        </div>
                        <div className="relative">
                            <input
                                type="tel" // Use type="tel" for phone numbers
                                id="phone"
                                {...register('phone')}
                                placeholder="Phone *" // Added placeholder
                                className={inputClass}
                            />
                            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                {...register('email')}
                                placeholder="E-mail *"
                                className={inputClass}
                            />
                            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                        </div>
                        <div className="relative">
                            <input
                                type="url"
                                id="instagram"
                                {...register('instagram')}
                                placeholder="Your Instagram (optional)"
                                className={inputClass}
                            />
                            {errors.instagram && <p className={errorClass}>{errors.instagram.message}</p>}
                        </div>
                    </div>

                    {/* Third Row - Textareas */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="relative">
                            <textarea
                                id="story"
                                {...register('story')}
                                rows={4}
                                placeholder="Tell me your story"
                                className={inputClass}
                            ></textarea>
                            {errors.story && <p className={errorClass}>{errors.story.message}</p>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="bg-black text-white py-4 px-10 rounded-full uppercase text-sm font-normal tracking-widest
                             hover:bg-gray-700 transition-colors duration-300 w-full md:w-auto"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}