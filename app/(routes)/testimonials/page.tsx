"use client"

import { useState } from 'react';
import TransitionPage from '@/components/transition-page';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // FormData para enviar a Formspree
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        try {
            const response = await fetch('https://formspree.io/f/xgvwbekd', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                setSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <>
            <TransitionPage />
            <div className="flex flex-col justify-center h-screen px-4 py-8 md:px-0">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Contáctanos
                    <span className="block font-bold text-secondary"> Envíanos un mensaje</span>
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center w-full max-w-md mx-auto space-y-4"
                >
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                    />
                    <textarea
                        placeholder="Tu mensaje"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-black h-32 focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                    />

                    <button
                        type="submit"
                        className="px-6 py-3 text-white bg-secondary rounded-md hover:bg-secondary-dark transition"
                    >
                        Enviar mensaje
                    </button>
                </form>

                {submitted && (
                    <div className="mt-5 text-center text-green-500">
                        ¡Gracias por tu mensaje! Te contactaremos pronto.
                    </div>
                )}
            </div>
        </>
    );
}

export default ContactForm;