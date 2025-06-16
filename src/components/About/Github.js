import React from "react";
import { Row, Button } from "react-bootstrap";

function Github() {
  const url = "https://github.com/payalpawar9579";

  return (
    <Row className="justify-content-center" style={{ padding: "20px 0" }}>
      <Button
        as="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
      >
        View my GitHub Profile
      </Button>
    </Row>
  );
}

export default Github;
