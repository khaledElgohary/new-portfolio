import PropTypes from "prop-types";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

export default function Contact(props) {
    return (
        <>
            {props.condition === "#CONTACT" ? (
                <div className="flex flex-col ml-6 mt-10 gap-10 ">
                    <h1 className="font-extrabold tracking-tight lg:text-5xl text-3xl text-white">You can checkout my <a href="https://www.linkedin.com/in/khaled-elgohary2002/" className="text-web-m underline cursor-pointer">Linkedin</a> or drop me a message !</h1>
                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="flex flex-col items-center">
                            <label htmlFor="nameInput" className="text-white">Name</label>
                            <input id="nameInput" type="text"/>
                        </div>
                        <div className="flex flex-col items-center">
                            <label htmlFor="emailInput" className="text-white">Email</label>
                            <input id="emailInput" type="text"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="messageInput" className="text-white">Message</label>
                        <textarea id="messageInput" className="w-1/2"/>
                    </div>
                    <div className="flex flex-row justify-center gap-7 items-center">
                        <TooltipProvider>
                            <Tooltip delayDuration={10}>
                                <TooltipTrigger>
                                    <a href="https://www.linkedin.com/in/khaled-elgohary2002/" target="_blank">
                                        <img src="/linkedin-icon.svg" width={35} height={15} alt="" className="cursor-pointer hover:scale-110" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Linkedin</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip delayDuration={10}>
                                <TooltipTrigger>
                                    <a href="https://github.com/khaledElgohary" target="_blank">
                                        <img src="/github-icon (1).svg" width={35} height={15} alt="" className="cursor-pointer hover:scale-110" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Github</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip delayDuration={10}>
                                <TooltipTrigger>
                                    <a href="mailto:khaled.dev1010@gmail.com">
                                        <img src="/google-gmail.svg" width={35} height={15} alt="" className="cursor-pointer hover:scale-110" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Email</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <a href="/resume.pdf" download="Khaled_Resume.pdf" className="text-black bg-white border-transparent rounded py-2 px-2 hover:bg-gray-400">Resume</a>
                    </div>

                </div>
            ): (
                    null
            )}
        </>
    )
}



Contact.propTypes = {
    condition:PropTypes.string,
}