import PropTypes from "prop-types";
import SkillList from "./Skill-list";

export default function Skills(props) {
    return (
        <>
            {props.condition === "#SKILLS" ? (
                <div className="grid lg:grid-cols-2 mt-10 gap-10 z-0">
                    <div className="flex flex-col items-center">
                        <h1 className="lg:text-2xl text-xl ml-6  text-white font-extrabold">Software Development</h1>
                        <hr className="my-3 w-1/3 border-web-m border-2"/>
                        <SkillList skills={['python.svg','java.svg','C.svg','c-plusplus.svg','android-icon.svg', 'JUnit.svg', 'docker-icon.svg','git-icon.svg']} tooltip={['Python','Java','C','C++','Android Studio', 'JUnit', 'Docker','Git']}/>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="lg:text-2xl text-xl ml-6 text-white font-extrabold">Web Development</h1>
                        <hr className="my-3 w-1/3 border-web-m border-2"/>
                        <SkillList skills={['javascript.svg','typescript-icon.svg', 'html-5.svg', 'css-3.svg','react.svg', 'angular-icon.svg', 'nextjs-icon.svg', 'jquery.svg', 'tailwindcss-icon.svg', 'flask.svg']} tooltip={['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Angular', 'Next.js','JQuery','TailwindCSS','Flask']} />
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="lg:text-2xl text-xl ml-6 text-white font-extrabold">Data Analytics</h1>
                        <hr className="my-3 w-1/3 border-web-m border-2"/>
                        <SkillList skills={['RStudio.svg','numpy.svg','pandas-icon.svg','matplotlib-icon.svg','seaborn-icon.svg','microsoft-power-bi.svg','tableau-icon.svg','SSIS.svg','databricks.svg']} tooltip={['RStudio', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'PowerBI', 'Tableau','SSIS', 'Databricks']} />
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="lg:text-2xl text-xl ml-6 text-white font-extrabold">Databases, Tools & Technologies</h1>
                        <hr className="my-3 w-1/3 border-web-m border-2"/>
                        <SkillList skills={['aws.svg','microsoft-azure.svg','jira.svg', 'linear-icon.svg','bash-icon.svg','selenium.svg','cypress-icon.svg','mysql-icon.svg','postgresql.svg','neo4j.svg']} tooltip={['AWS','Azure', 'Jira', 'Linear', 'Bash', 'Selenium', 'Cypress', 'SQL', 'PostgreSQL','Neo4j']} />
                    </div>

                </div>
                
            ): (
                <></>        
            )}
        </>
    )
}

Skills.propTypes = {
    condition: PropTypes.string,
}