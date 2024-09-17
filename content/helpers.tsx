/**
 * Formatting helpers for MDX Provider
 */
import React from "react";

import { MDXProvider } from "@mdx-js/react";

type Components = Parameters<typeof MDXProvider>[0]["components"];

const MDXComponents: Components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mb-6 text-2xl text-gray-600 dark:text-gray-400" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mb-2 mt-6 text-xl text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mb-2 mt-6 text-xl text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="mb-2 mt-6 text-xl text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-8 list-inside list-disc" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-8 list-inside list-decimal" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-4 border-l italic opacity-70 pl-4 text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
};

export { MDXComponents };
