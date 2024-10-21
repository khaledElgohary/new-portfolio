import PropTypes from "prop-types";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
  
export default function SkillList({ skills, tooltip }) {
    return (
        <div className="flex flex-wrap justify-center items-center py-8 gap-9 ">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-row items-center justify-center " >
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <img src={skill} width={65} alt={tooltip[index]} />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-center text-white text-sm">{tooltip[index]}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            ))}
        </div>
    );
}



SkillList.propTypes = {
    skills : PropTypes.arrayOf(PropTypes.img),
    tooltip : PropTypes.arrayOf(PropTypes.string)
}