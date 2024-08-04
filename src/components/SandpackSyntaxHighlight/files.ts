type FCFiles = (dark: boolean, children: string) => Record<'customSetup' | 'files', Record<string, any>>

/**
 * @description 获取React的files
 * @param dark
 * @param children
 * @returns
 */
export const getReactFiles: FCFiles = (dark, children) => {
  return {
    customSetup: {
      dependencies: {
        react: '^18.0.0',
        'react-dom': '^18.0.0',
        antd: '^5.0.0',
      },
      devDependencies: {
        '@types/react': '^18.0.0',
        '@types/react-dom': '^18.0.0',
        typescript: '^5',
      },
      entry: 'index.tsx',
    },
    files: {
      'index.tsx': `import React from 'react';
				import { createRoot } from 'react-dom/client';
				import App from './app';
				import './index.css';

				const root = createRoot(document.getElementById("root"));
				root.render(<App />);
			`,

      'index.css': `html, body {
					padding: 0;
					margin: 0;
					background: ${dark ? '#000' : '#fff'};
				}

				#root {
					padding: 24px;
				}`,

      'app.tsx': children,
    },
  }
}
