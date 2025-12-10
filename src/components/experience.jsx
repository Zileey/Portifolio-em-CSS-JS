import { FaReact, FaJs, FaPython } from "react-icons/fa6"
import { SiTypescript } from "react-icons/si" 
import ProgressBar from "./progressbar";

function Experience(){
    return(
    <section>
        <h2>Experience</h2>
        <p>3 years of experience as an eletronic technician with a solid base</p>
        <div className="skill-item">
            <FaReact size={28}/>
            <ProgressBar label="2 anos" value = "60%"/>
        </div>
         <div className="skill-item">
            <FaJs size={28}/>
            <ProgressBar label="3 anos" value = "80%"/>
        </div>
        <div className="skill-item">
            <SiTypescript size={28}/>
            <ProgressBar label="1 ano" value = "40%"/>
        </div>
        <div className="skill-item">
            <FaPython size={28}/>
            <ProgressBar label="2 anos" value = "60%"/>
        </div>
    </section>
    )
}
export default Experience;