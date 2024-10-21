import PropTypes from "prop-types";
import SkillList from "./Skill-list";

export default function Skills(props) {
    return (
        <>
            {props.condition === "#SKILLS" ? (
                <div className="flex flex-col">
                    <h1 className="lg:text-2xl text-xl ml-6 mt-10 text-white font-extrabold">Programming & Markup Languages</h1>
                    <hr className="my-3 w-1/3 border-web-m border-2"/>
                    <SkillList skills={['python.svg','java.svg','javascript.svg', 'typescript-icon.svg','C.svg','c-plusplus.svg','html-5.svg','css-3.svg']} tooltip={['TailwindCSS','Java','JavaScript', 'TypeScript','C','C++','HTML','CSS']}/>
                    <h1 className="lg:text-2xl text-xl ml-6 text-white font-extrabold">Libraries & Frameworks</h1>
                    <hr className="my-3 w-1/3 border-web-m border-2"/>
                    <SkillList skills={['react.svg', 'angular-icon.svg', 'nextjs-icon.svg', 'jquery.svg', 'tailwindcss-icon.svg', 'flask.svg']} tooltip={['React', 'Angular', 'NextJs', 'JQuery', 'TailwindCSS', 'Flask']} />
                    <h1 className="lg:text-2xl text-xl ml-6 text-white font-extrabold">Testing & Tools</h1>
                    <hr className="my-3 w-1/3 border-web-m border-2"/>
                    <SkillList skills={['selenium.svg', 'cypress-icon.svg', 'JUnit.svg', 'git-icon.svg', 'jira.svg', 'docker-icon.svg', 'bash-icon.svg']} tooltip={['Selenium', 'Cypress', 'JUnit', 'Git', 'Jira', 'Docker', 'Bash']} />
                    <h1 className="lg:text-2xl text-xl ml-6 text-white font-extrabold">Databases & Cloud Technologies</h1>
                    <hr className="my-3 w-1/3 border-web-m border-2"/>
                    <SkillList skills={['mysql-icon.svg','postgresql.svg','mongodb-icon.svg','neo4j.svg','microsoft-azure.svg','aws.svg']} tooltip={['SQL','PostgreSQL','MongoDB','Neo4j','Microsoft Azure','AWS']} />

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