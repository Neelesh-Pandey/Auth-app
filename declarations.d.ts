declare module "react-quill" {
    import { FC } from "react";
  
    export interface ReactQuillProps {
      theme?: string;
      value?: string;
      readOnly?: boolean;
      onChange?: (content: string) => void;
    }
  
    const ReactQuill: FC<ReactQuillProps>;
    export default ReactQuill;
  }