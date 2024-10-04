/* eslint-disable @next/next/no-img-element */
'use client';

import { useGlobalContext } from '@/contextApi/ContextApi';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

interface FormData {
    name: string;
    email: string;
    password: string;
}

const SignUpPage: React.FC = () => {
    // Form handling with react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const { signUp } = useGlobalContext();
    // Form submit handler
    const onSubmit: SubmitHandler<FormData> = (data) => {
        const SignUp = signUp(data.email, data.password, data.name)
        if (SignUp.res == 200) {
            toast.success(`Authenticating as ${data.email}`);

        }

        // Sign-in user with email and password
        // SignInUser(data.email, data.password)
        //   .then(result => {
        //     // Success toast notification
        //     toast.success(`Authenticating as ${result.user.email}`);
        //     // Redirect based on location or to home
        //     // location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/');
        //   })
        //   .catch((error) => {
        //     // Error handling and toast notification
        //     const errorMessage = error.message;
        //     toast.error(`Error!! Reason: ${errorMessage}`, { duration: 3000 });
        //   });
    };

    // Password visibility toggle
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    return (
        <div className="h-[90vh]">
            {/* Left section with form */}
            <div className="h-full flex border items-center justify-center">
                <div className="p-padding_base rounded-rounded_primary shadow-md">
                    <div className="flex flex-col">
                        <p className="font-semibold text-text_primary text-primary">Welcome Back!</p>
                        <p className="mt-m_small text-secondary">Enter your Credentials to access your account</p>
                    </div>

                    {/* Form section */}
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-gap_base mt-m_lg">
                            {/* name input */}
                            <div className="flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                <label className="text-text_small text-gray-500">Full Name</label>
                                <input
                                    {...register('name', { required: true })}
                                    type="text"
                                    placeholder="John Doe"
                                    className="focus:outline-none"
                                />
                                {/* Error message for email */}
                                {errors.name && <span className="text-error text-xs mt-m_small">Please enter your name</span>}
                            </div>
                            {/* Email input */}
                            <div className="flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                <label className="text-text_small text-gray-500">Email address</label>
                                <input
                                    {...register('email', { required: true })}
                                    type="email"
                                    placeholder="john@doe.com"
                                    className="focus:outline-none"
                                />
                                {/* Error message for email */}
                                {errors.email && <span className="text-error text-xs mt-m_small">Email field is required</span>}
                            </div>

                            {/* Password input with show/hide functionality */}
                            <div className="relative flex flex-col space-y-1 border p-input_padding focus-within:border-primary rounded-rounded_primary bg-white">
                                <label className="text-text_small text-gray-500">Password</label>
                                <input
                                    {...register('password', {
                                        required: 'Password is required!',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters long!',
                                        },
                                        validate: {
                                            hasUpperCase: (value) =>
                                                /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter!',
                                            hasSpecialChar: (value) =>
                                                /[!@#$%^&*]/.test(value) || 'Password must contain at least one special character!',
                                        },
                                    })}
                                    type={showPassword ? 'text' : 'password'} // Toggling between text and password type
                                    placeholder="Password"
                                    className="focus:outline-none"
                                />
                                {/* Display password errors */}
                                {errors.password && (
                                    <div className="text-error text-xs mt-m_small">
                                        {errors?.password.message}
                                    </div>
                                )}
                                {/* Show/hide password icon */}
                                <div onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    {showPassword ? (
                                        <Eye size={25} className="-translate-x-4" />
                                    ) : (
                                        <EyeOff size={25} className="-translate-x-4" />
                                    )}
                                </div>
                            </div>

                            {/* Forgot password link */}
                            <p className="text-end text-primary hover:underline">Forget Password</p>

                            {/* Submit button */}
                            <button type='submit' className="relative flex items-center justify-center py-padding_small px-padding_medium rounded-rounded_secondary  overflow-hidden group active:scale-95 transition-all ease-linear">

                                <span className="absolute inset-0 bg-secondary transition-all duration-300 ease-in-out rounded-rounded_secondary"></span>
                                <span className="absolute inset-0 bg-primary transition-all duration-300 ease-in-out group-hover:translate-x-full rounded-rounded_secondary"></span>
                                <span className="relative z-10 flex items-center gap-2  text-white">
                                    <LogIn size={20} />
                                    Log in
                                </span>
                            </button>
                        </form>
                    </div>
                    {/* Link to sign-up SignUpPage */}
                    <p className="text-gray-800 text-sm mt-m_secondary text-center font-semibold">
                        Don&apos;t Have an account? <Link href="/login" className="text-primary font-semibold hover:underline ml-1">Log In</Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SignUpPage;
