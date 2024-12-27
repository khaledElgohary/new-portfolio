import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

import PropTypes from "prop-types";

export default function Projectscard({title, skills, tooltip,description,projectLink}) { 
    return (
        <div className="flex flex-wrap ml-10 mt-8">
                        <Card className="w-80 h-72 hover:text-web-m cursor-default">
                            <CardHeader>
                                <CardTitle>{title}</CardTitle>
                                <CardDescription>
                                            <TooltipProvider>
                                                <div className="flex flex-row py-3 gap-5 -mb-8">
                            {                       skills.map((url, index) => (
                                                        <Tooltip key={index}>
                                                            <TooltipTrigger>
                                                                <img key={index} src={url} width={30} />
                                                            </TooltipTrigger>
                                                            <TooltipContent><p>{ tooltip[index] }</p></TooltipContent>
                                                        </Tooltip>
                                                    ))}
                                                </div>
                                            </TooltipProvider>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{description}</p>
                            </CardContent>
                            <CardFooter className='flex justify-center items-end h-min '>
                                <div className="flex flex-col items-center ">
                                    <a className="hover:scale-110 cursor-pointer" href={projectLink} target="_blank">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <img width={25} src='/github-icon (1).svg' />
                                                </TooltipTrigger>
                                                <TooltipContent>View Project</TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </a>
                                </div>
                            </CardFooter>
                        </Card>
        </div>
    );
}

Projectscard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    projectLink: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.img),
    tooltip: PropTypes.arrayOf(PropTypes.string)
}
