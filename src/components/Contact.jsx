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

// Custom Alert Component
const CustomAlert = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
      type === 'success' 
        ? 'bg-green-500 text-white' 
        : 'bg-red-500 text-white'
    } flex items-center gap-2 z-50 min-w-[300px] justify-center`}
  >
    <span>{message}</span>
    <button 
      onClick={onClose}
      className="ml-2 text-white hover:text-gray-200"
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
                    className="flex flex-col ml-6 mt-10 gap-10"
                >
                    <h1 className="font-extrabold tracking-tight lg:text-5xl text-3xl text-white">
                        You can check out my{" "}
                        <a
                            href="https://www.linkedin.com/in/khaled-elgohary2002/"
                            className="text-web-m underline cursor-pointer"
                        >
                            LinkedIn
                        </a>{" "}
                        or drop me a message!
                    </h1>
                    <form onSubmit={sendEmail}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-10"
                        >
                            <div className="flex flex-col items-center">
                                <label htmlFor="nameInput" className="text-white">
                                    Name
                                </label>
                                <input 
                                    id="nameInput" 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="rounded-md p-2"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <label htmlFor="emailInput" className="text-white">
                                    Email
                                </label>
                                <input 
                                    id="emailInput" 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="rounded-md p-2"
                                    disabled={isSubmitting}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col items-center py-5"
                        >
                            <label htmlFor="messageInput" className="text-white">
                                Message
                            </label>
                            <textarea 
                                id="messageInput" 
                                className="w-1/2 rounded-md p-2" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={4}
                                disabled={isSubmitting}
                            />
                        </motion.div>
                        
                        <motion.div   
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col items-center gap-1"
                        >
                            <label htmlFor="submit" className="text-white">Submit</label>
                            <button 
                                id="submit"
                                type="submit" 
                                className="bg-white text-black px-5 py-1"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send"}
                            </button>
                        </motion.div>
                    </form>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-row justify-center gap-7 items-center"
                    >
                        <TooltipProvider>
                            <Tooltip delayDuration={10}>
                                <TooltipTrigger>
                                    <a
                                        href="https://www.linkedin.com/in/khaled-elgohary2002/"
                                        target="_blank"
                                    >
                                        <img
                                            src="/linkedin-icon.svg"
                                            width={35}
                                            height={15}
                                            alt=""
                                            className="cursor-pointer hover:scale-110"
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
                                    <a href="https://github.com/khaledElgohary" target="_blank">
                                        <img
                                            src="/github-icon2.svg"
                                            width={35}
                                            height={15}
                                            alt=""
                                            className="cursor-pointer hover:scale-110"
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
                                    <a href="mailto:khaled.dev1010@gmail.com">
                                        <img
                                            src="/google-gmail.svg"
                                            width={35}
                                            height={15}
                                            alt=""
                                            className="cursor-pointer hover:scale-110"
                                        />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Email</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <a
                            href="/resume.pdf"
                            download="Khaled_Resume.pdf"
                            className="text-black bg-white border-transparent rounded py-2 px-2 hover:bg-gray-400"
                        >
                            Resume
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