
import React, { useState, useEffect } from 'react';
import { X, MapPin, Phone, Mail, Send, CheckCircle2, Building2, User, MessageSquare } from 'lucide-react';

interface ContactProps {
  onClose: () => void;
}

export const ContactOverlay: React.FC<ContactProps> = ({ onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const recipient = "info@dotlink.co.kr";
        const subject = `[Partner Inquiry] ${formData.company} - ${formData.name}`;
        const body = `
[Partner Inquiry]

--------------------------------------------------
SENDER INFORMATION
--------------------------------------------------
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}

--------------------------------------------------
MESSAGE
--------------------------------------------------
${formData.message}
        `.trim();

        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
                <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-md p-8 text-center shadow-2xl relative">
                     <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
                        <X size={20} />
                     </button>
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500">
                        <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-8">
                        Thank you for contacting <strong>DotLink</strong>.<br/>
                        We will get back to you as soon as possible.
                    </p>
                    <button onClick={onClose} className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-5xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
                <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors">
                    <X size={20} />
                </button>

                {/* Left Side: Info & Map */}
                <div className="w-full md:w-1/2 bg-[#0a0a0a] p-8 md:p-10 flex flex-col border-b md:border-b-0 md:border-r border-white/10 overflow-y-auto">
                    <div className="mb-8">
                        <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">Contact Us</div>
                        <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
                        <p className="text-gray-400 mt-2">
                            Global B2B solutions starting from Seoul.<br/>
                            Visit us or send a message for partnership.
                        </p>
                    </div>

                    <div className="space-y-6 mb-8">
                        <div className="flex items-start space-x-4">
                            <div className="mt-1 w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                                <MapPin size={16} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Headquarters</h4>
                                <p className="text-gray-400 text-sm mt-1">
                                    #324, AP Tower, 16, Gasan digital 1-ro,<br/>
                                    Geumcheon-gu, Seoul, Republic of Korea
                                </p>
                                <p className="text-gray-500 text-xs mt-1">(서울특별시 금천구 가산디지털1로 16, 에이피타워 324호)</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                             <div className="mt-1 w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                                <Phone size={16} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Phone</h4>
                                <p className="text-gray-400 text-sm mt-1">010-2646-1316</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                             <div className="mt-1 w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                                <Mail size={16} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Email</h4>
                                <p className="text-gray-400 text-sm mt-1">info@dotlink.co.kr</p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="flex-grow min-h-[200px] rounded-xl overflow-hidden border border-white/10 relative bg-[#111]">
                        <iframe 
                            src="https://maps.google.com/maps?q=서울특별시%20금천구%20가산디지털1로%2016%20에이피타워&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%) contrast(1.2)' }} 
                            allowFullScreen 
                            loading="lazy" 
                            title="Company Location"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-1/2 p-8 md:p-10 bg-[#111] overflow-y-auto">
                    <h3 className="text-xl font-bold text-white mb-6">Partner Inquiry</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center">
                                <User size={12} className="mr-1" /> Name
                            </label>
                            <input 
                                required 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-gray-700" 
                                placeholder="Your Name" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center">
                                <Building2 size={12} className="mr-1" /> Company
                            </label>
                            <input 
                                required 
                                type="text" 
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-gray-700" 
                                placeholder="Company Name" 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center">
                                <Mail size={12} className="mr-1" /> Email
                            </label>
                            <input 
                                required 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-gray-700" 
                                placeholder="email@company.com" 
                            />
                        </div>

                        <div className="space-y-2">
                             <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center">
                                <MessageSquare size={12} className="mr-1" /> Message
                             </label>
                             <textarea 
                                required 
                                rows={5} 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-gray-700 resize-none" 
                                placeholder="Tell us about your inquiry..."
                             ></textarea>
                        </div>

                        <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center space-x-2 mt-4">
                            <span>Send Message</span>
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
