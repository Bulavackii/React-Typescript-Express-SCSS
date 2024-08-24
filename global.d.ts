declare module '@svgr/webpack' {
    import * as React from 'react';
  
    interface SVGRProps {
      title?: string;
      titleId?: string;
      [key: string]: any;
    }
  
    export default function ReactSVGComponent(props: React.SVGProps<SVGSVGElement> & SVGRProps): JSX.Element;
  }

  