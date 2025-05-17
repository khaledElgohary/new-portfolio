import PropTypes from "prop-types";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"
  
export default function SkillList({ skills, tooltip }) {
    return (
        <div className="flex flex-wrap justify-center items-center py-8 gap-3 lg:gap-8 p-12">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-row items-center justify-center hover:scale-110" >
                    <div className="bg-white rounded-xl p-4 transition-all duration-300 
                                  transform hover:scale-105 hover:bg-web-m 
                                  flex items-center justify-center
                                  shadow-lg hover:shadow-xl h-[100px]">
                        
                        <TooltipProvider className="">
                        <Tooltip delayDuration={10} >
                            <TooltipTrigger>
                                <img src={skill} width={65} alt={tooltip[index]} />
                            </TooltipTrigger>
                            <TooltipContent className="my-5">
                                <p className="text-center text-white text-sm">{tooltip[index]}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    </div>
                </div>
            ))}
        </div>
    );
}



SkillList.propTypes = {
    skills : PropTypes.arrayOf(PropTypes.img),
    tooltip : PropTypes.arrayOf(PropTypes.string)
}