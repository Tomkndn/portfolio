import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  description,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <h2>{description}</h2>
  </div>
);
