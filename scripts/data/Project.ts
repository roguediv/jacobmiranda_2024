export interface Project {
  body: {
    title?: string;
    displayTitle?: string;
    header?: string;
    desc?: string;
    theme?: string;
  }
  sct1: {
    title?: string;
    overview?: string;
    timeframe?: {
      num: string;
      type: string;
      desc: string;
    };
    technologies?: {
      react: number;
      mysql: number;
      next: number;
      php: number;
      wordpress: number;
      ts: number;
      figma: number;
      photoshop: number;
      tailwind: number;
      html: number;
      sass: number;
      digitalOcean: number;
      ubuntu: number;
      nginx: number;
    };
  }
  sct2: {
    header?: string;
    desc?: string;
    card1?: {
      header: string;
      desc: string;
    };
    card2?: {
      header: string;
      desc: string;
    };
  }
  sct3: {
    header1?: string;
    desc1?: string;
    header2?: string;
    desc2?: string;
  }
  sct4: {
    header?: string;
    desc?: string;
  }
  sct5: {
    header?: string;
    items?: {
      header?: string;
      headerLow?: string;
      desc?: string;
    }[];
  }
}