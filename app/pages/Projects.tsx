import { MDXProvider } from '@mdx-js/react';
import MdxRenderer from '../MDXRendere';

const mdxContent = `
# My MDX Example

This is some *Markdown* text.
`;

const Projects: React.FC = ({stop,app}:any) => {
  const projects = [];
    return (
      // <div className="flex flex-col items-center p-10">
      //   {projects.length==0?<div className="text-red-600">Sorry , this will be updated soon</div>:null}
      // </div>
      // <>
      // <MDXProvider>
      //   <MdxRenderer>{mdxContent}</MdxRenderer>
      // </MDXProvider>
      // </>
      <div className="flex flex-col items-center p-10">
        <div className="text-red-600">Sorry , this will be updated soon</div>
      </div>
    );
  };
  
  export default Projects;
  