import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const stacks = [
    { icon: <CgCPlusPlus size={40} />, label: 'C++' },
    { icon: <DiJavascript1 size={40} />, label: 'JavaScript' },
    { icon: <TbBrandGolang size={40} />, label: 'Go' },
    { icon: <DiNodejs size={40} />, label: 'Node.js' },
    { icon: <DiReact size={40} />, label: 'React' },
    { icon: <SiSolidity size={40} />, label: 'Solidity' },
    { icon: <DiMongodb size={40} />, label: 'MongoDB' },
    { icon: <SiNextdotjs size={40} />, label: 'Next.js' },
    { icon: <DiGit size={40} />, label: 'Git' },
    { icon: <SiFirebase size={40} />, label: 'Firebase' },
    { icon: <SiRedis size={40} />, label: 'Redis' },
    { icon: <SiPostgresql size={40} />, label: 'PostgreSQL' },
    { icon: <DiPython size={40} />, label: 'Python' },
    { icon: <DiJava size={40} />, label: 'Java' },
  ];

  return (
    <Row className="justify-content-center" style={{ paddingBottom: '50px' }}>
      {stacks.map((stack, idx) => (
        <Col
          key={idx}
          xs={6} sm={4} md={2}
          className="d-flex flex-column align-items-center mb-4"
        >
          {stack.icon}
          <span className="mt-2" style={{ fontWeight: 500 }}>
            {stack.label}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
