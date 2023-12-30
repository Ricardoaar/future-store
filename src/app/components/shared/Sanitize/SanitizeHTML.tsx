import React, { createElement, HTMLAttributes } from "react";
import sanitize from "sanitize-html";

interface SanitizeHtmlProps extends HTMLAttributes<HTMLElement> {
  children: string;
  tag: string;
}

const SanitizeHtml = ({ tag, children, ...rest }: SanitizeHtmlProps) => {
  const sanitizedHtml = sanitize(children, {
    allowedTags: [],
    ...rest
  });


  return createElement(tag, {
    ...rest,
    children: sanitizedHtml
  });
};

export default SanitizeHtml;