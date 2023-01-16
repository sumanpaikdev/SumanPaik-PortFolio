import React from "react";
import SkillData from "../Data/SkillData.json"
import SkillLogo from "../components/SkillLogo";

function Skill() {
    const skillItem = SkillData.map(item => {
        return(
            <SkillLogo myskill={item} key={item.id}/>
        )
    })
    return(
        <div className="skill-container">
            {skillItem}
        </div>
    )
}
export default Skill;