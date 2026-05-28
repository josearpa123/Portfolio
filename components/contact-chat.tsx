"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, CheckCircle2 } from 'lucide-react';

const ContactChat = () => {
    const [messages, setMessages] = useState<{ role: 'bot' | 'user'; content: string }[]>([
        { role: 'bot', content: '¡Hola! Soy el asistente virtual de Jose. ¿Cómo te llamas?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [step, setStep] = useState(0); // 0: Name, 1: Email, 2: Message, 3: Sending/Done
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isTyping, setIsTyping] = useState(false);
    
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const newUserMessage = { role: 'user' as const, content: inputValue };
        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(async () => {
            let botResponse = '';
            let nextStep = step;

            if (step === 0) {
                setFormData(prev => ({ ...prev, name: newUserMessage.content }));
                botResponse = `¡Mucho gusto, ${newUserMessage.content}! Ahora, ¿cuál es tu correo electrónico?`;
                nextStep = 1;
            } else if (step === 1) {
                if (!inputValue.includes('@') && !newUserMessage.content.includes('@')) {
                    botResponse = 'Ups, eso no parece un correo válido. Inténtalo de nuevo.';
                    nextStep = 1;
                } else {
                    setFormData(prev => ({ ...prev, email: newUserMessage.content }));
                    botResponse = 'Perfecto. Finalmente, cuéntame ¿en qué puedo ayudarte?';
                    nextStep = 2;
                }
            } else if (step === 2) {
                setFormData(prev => ({ ...prev, message: newUserMessage.content }));
                botResponse = '¡Entendido! Estoy enviando tu mensaje a Jose ahora mismo...';
                nextStep = 3;
                
                // Submit to Formspree
                const fData = new FormData();
                fData.append('name', formData.name || 'User');
                fData.append('email', formData.email || newUserMessage.content);
                fData.append('message', newUserMessage.content);

                try {
                    const response = await fetch('https://formspree.io/f/xgvwbekd', {
                        method: 'POST',
                        body: fData,
                        headers: { 'Accept': 'application/json' },
                    });
                    if (response.ok) {
                        setTimeout(() => {
                            setMessages(prev => [...prev, { role: 'bot', content: '¡Mensaje enviado con éxito! Jose te contactará muy pronto. 👋' }]);
                            setIsTyping(false);
                        }, 1500);
                        return;
                    }
                } catch (e) {
                    botResponse = 'Hubo un error al enviar el mensaje. Por favor, inténtalo más tarde.';
                }
            }

            setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
            setStep(nextStep);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="w-full max-w-2xl mx-auto linear-card overflow-hidden flex flex-col h-[600px] border-white/10">
            {/* Header del Chat */}
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/30">
                            <Bot size={20} />
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-[#000212]" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold">Jose&apos;s AI Assistant</h3>
                        <span className="text-[10px] text-secondary font-bold uppercase tracking-widest">En línea</span>
                    </div>
                </div>
            </div>

            {/* Area de Mensajes */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                <AnimatePresence initial={false}>
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[80%] flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${msg.role === 'user' ? 'bg-secondary text-darkBg' : 'bg-white/10 text-white'}`}>
                                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                                </div>
                                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                                    msg.role === 'user' 
                                    ? 'bg-secondary text-darkBg font-medium rounded-tr-none' 
                                    : 'bg-white/5 border border-white/10 text-slate-300 rounded-tl-none'
                                }`}>
                                    {msg.content}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex gap-1">
                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" />
                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Input del Chat */}
            <div className="p-4 border-t border-white/5 bg-black/40">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        disabled={step === 3 && !isTyping}
                        placeholder={step === 3 ? "Mensaje enviado" : "Escribe tu respuesta..."}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-secondary transition-colors disabled:opacity-50"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim() || (step === 3 && !isTyping)}
                        className="absolute right-2 p-2 bg-secondary text-darkBg rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
                    >
                        <Send size={18} />
                    </button>
                </div>
                <p className="text-[9px] text-slate-600 mt-2 text-center uppercase tracking-widest font-bold">
                    Desarrollado con Next.js & Framer Motion
                </p>
            </div>
        </div>
    );
};

export default ContactChat;
