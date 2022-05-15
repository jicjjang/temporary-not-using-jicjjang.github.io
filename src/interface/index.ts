export interface IQuerySiteData<T> {
  site: {
    siteMetadata: T;
  };
}

export interface IQueryFileData {
  file: {
    childImageSharp: {
      fixed: any;
    };
  };
}
