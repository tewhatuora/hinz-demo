import MDXComponents from '@theme-original/MDXComponents';
import Standard from '@site/src/components/Standard';
import DetailedDescription from '@site/src/components/DetailedDescription';
import AsyncApiViewer from '@site/src/components/AsyncApiViewer';

export default {
  ...MDXComponents,
  // Custom components to be added globally
  Standard,
  AsyncApiViewer,
  DetailedDescription,
};
