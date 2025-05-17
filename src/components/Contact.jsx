import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const CustomAlert = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
      type === 'success' 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white'
    } flex items-center gap-2 z-50 min-w-[300px] justify-between`}
  >
    <span className="font-medium">{message}</span>
    <button 
      onClick={onClose}
      className="ml-2 text-white hover:text-gray-200 text-xl font-bold"
      aria-label="Close alert"
    >
      ×
    </button>
  </motion.div>
);

CustomAlert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error']).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => {
            setAlert(null);
        }, 5000);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        };

        try {
            await emailjs.send(
                'service_eiq62qs', 
                'template_6b00fne', 
                templateParams, 
                'qyEmFbnVZ-Tzjlou_'
            );
            
            showAlert("Message sent successfully! I'll get back to you soon.", 'success');
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            showAlert("Failed to send message. Please try again.", 'error');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {alert && (
                    <CustomAlert 
                        message={alert.message} 
                        type={alert.type} 
                        onClose={() => setAlert(null)} 
                    />
                )}
            </AnimatePresence>

            {props.condition === "#CONTACT" ? (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto px-6 py-12"
                >
                    <h1 className="font-extrabold tracking-tight text-4xl md:text-5xl text-white text-center mb-8">
                        Let's Connect
                    </h1>
                    
                    <div className="text-center mb-12">
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Feel free to check out my{" "}
                            <a
                                href="https://www.linkedin.com/in/khaled-elgohary2002/"
                                className="text-web-m underline font-medium hover:text-blue-400 transition-colors"
                            >
                                LinkedIn
                            </a>{" "}
                            or drop me a message below. I'm always open to new opportunities and connections!
                        </p>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700">
                        <form onSubmit={sendEmail} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                <div className="space-y-2">
                                    <label htmlFor="nameInput" className="block text-white text-sm font-medium">
                                        Name
                                    </label>
                                    <input 
                                        id="nameInput" 
                                        type="text" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500/20 p-3 text-white transition-all"
                                        placeholder="Your name"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="emailInput" className="block text-white text-sm font-medium">
                                        Email
                                    </label>
                                    <input 
                                        id="emailInput" 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500/20 p-3 text-white transition-all"
                                        placeholder="your.email@example.com"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="space-y-2"
                            >
                                <label htmlFor="messageInput" className="block text-white text-sm font-medium">
                                    Message
                                </label>
                                <textarea 
                                    id="messageInput" 
                                    className="w-full rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500/20 p-3 text-white transition-all" 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={5}
                                    placeholder="What would you like to discuss?"
                                    disabled={isSubmitting}
                                />
                            </motion.div>
                            
                            <motion.div   
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex justify-center pt-4"
                            >
                                <button 
                                    type="submit" 
                                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:ring-4 focus:ring-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : "Send Message"}
                                </button>
                            </motion.div>
                        </form>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-12 flex flex-wrap justify-center gap-6 items-center"
                    >
                        <div className="flex gap-6">
                            <TooltipProvider>
                                <Tooltip delayDuration={10}>
                                    <TooltipTrigger>
                                        <a
                                            href="https://www.linkedin.com/in/khaled-elgohary2002/"
                                            target="_blank"
                                            className=" p-3 rounded-full "
                                        >
                                            <img
                                                src="/linkedin-icon.svg"
                                                width={28}
                                                height={28}
                                                alt="LinkedIn"
                                                className="hover:scale-110 transition-transform"
                                            />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip delayDuration={10}>
                                    <TooltipTrigger>
                                        <a 
                                            href="https://github.com/khaledElgohary" 
                                            target="_blank"
                                            className="p-3 rounded-full "
                                        >
                                            <img
                                                src="/github-icon2.svg"
                                                width={28}
                                                height={28}
                                                alt="GitHub"
                                                className="hover:scale-110 transition-transform"
                                            />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>GitHub</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip delayDuration={10}>
                                    <TooltipTrigger>
                                        <a 
                                            href="mailto:khaled.dev1010@gmail.com"
                                            className=" p-3 rounded-full transition-colors "
                                        >
                                            <img
                                                src="/google-gmail.svg"
                                                width={28}
                                                height={28}
                                                alt="Email"
                                                className="hover:scale-110 transition-transform"
                                            />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Email</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <a
                            href="/resume.pdf"
                            download="Khaled_Resume.pdf"
                            className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-md hover:bg-gray-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            ) : null}
        </>
    );
}

Contact.propTypes = {
    condition: PropTypes.string,
};