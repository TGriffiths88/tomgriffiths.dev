import { classnames } from "@/lib/utils/classnames";
import * as React from "react";

type Skill = {
  title: string;
  items: string[];
};

type SkillListProps = {
  skills: Skill[];
  className?: string;
};

const SkillList = ({ skills, className }: SkillListProps) => {
  return (
    <ul className={classnames("flex flex-col gap-6", className)}>
      {skills.map((skill) => (
        <li key={skill.title}>
          <h3 className="font-bold uppercase text-sm">{skill.title}</h3>
          <ul className="flex flex-wrap gap-x-1 font-light text-sm">
            {skill.items.map((item, i) => (
              <li key={item}>
                {item}
                {i !== skill.items.length - 1 && ", "}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
