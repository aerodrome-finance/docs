/**
 * Formatting helpers for MDX Provider
 */
const MDXComponents = {
  h1: (props) => (
    <h1 className="mb-6 text-2xl text-gray-600 dark:text-gray-400" {...props} />
  ),
  h2: (props) => (
    <h2
      className="mb-2 mt-6 text-xl text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-2 mt-6 text-xl text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mb-2 mt-6 text-xl text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
  p: (props) => <p className="mb-4" {...props} />,
  ul: (props) => <ul className="mb-8 list-inside list-disc" {...props} />,
  ol: (props) => <ol className="mb-8 list-inside list-decimal" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l italic opacity-70 pl-4 text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
};

export { MDXComponents };
