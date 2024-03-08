import { definePage } from "./pages"

export function definePages<DataTypes=any, MetadataTypes=any>() {
     
    return definePage((pages: {
        [id: symbol | string]: {
          data?: DataTypes,
          metaData?: MetadataTypes
        } 
        default: {
          metaData?: MetadataTypes
          data?: DataTypes
        }
      }) => {
        return pages
    });
  }
  