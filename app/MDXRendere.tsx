import { MDXProvider } from '@mdx-js/react';
import Projects from './pages/Projects';
const components = {
  Projects
};

const MdxRenderer = ({ children }:any) => {
  return (
    // <ThemeProvider theme={{}}>
      <MDXProvider components={components}>{children}</MDXProvider>
    // </ThemeProvider>
  );
};

export default MdxRenderer;
