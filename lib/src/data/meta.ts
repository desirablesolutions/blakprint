import { defineData } from ".."

export type MetadataDefinition = {
    
}



export  function defineMetadata({ params }): Metadata {



    const { meta } = {
        meta: {
            title,
            appleWebApp: {
              title,
              statusBarStyle: "black-translucent",
              startupImage: [
                "/assets/startup/apple-touch-startup-image-768x1004.png",
                {
                  url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
                  media: "(device-width: 768px) and (device-height: 1024px)",
                },
              ],
            },
            openGraph: {
              title,
              description,
              url,
              siteName,
              images: [
                {
                  url: "https://nextjs.org/og.png", 
                  width: 800,
                  height: 600,
                },
                {
                  url: "https://nextjs.org/og-alt.png", 
                  width: 1800,
                  height: 1600,
                  alt: "My custom alt",
                },
              ],
              locale: "en_US",
              type: "website",
            },
            description,
                icons: {
              icon: "/logo.svg",
              shortcut: "/shortcut-icon.png",
              apple: "/apple-icon.png",
              other: {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-precomposed.png",
              },
            },
        }
     }


    

   return defineData(() => {
    const { title, description, url, siteName } = {
        title: params?.title ? params.title : meta.title,
        description: params?.description ? params.description : meta.description,
        url: params?.url ? params.url : meta.url, 
        siteName: params?.siteName ? params.siteName : meta.siteName,
      }
    
      return {
        title,
        appleWebApp: {
          title,
          statusBarStyle: "black-translucent",
          startupImage: [
            "/assets/startup/apple-touch-startup-image-768x1004.png",
            {
              url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
              media: "(device-width: 768px) and (device-height: 1024px)",
            },
          ],
        },
        openGraph: {
          title,
          description,
          url,
          siteName,
          images: [
            {
              url: "https://nextjs.org/og.png", 
              width: 800,
              height: 600,
            },
            {
              url: "https://nextjs.org/og-alt.png", 
              width: 1800,
              height: 1600,
              alt: "My custom alt",
            },
          ],
          locale: "en_US",
          type: "website",
        },
        description,
            icons: {
          icon: "/logo.svg",
          shortcut: "/shortcut-icon.png",
          apple: "/apple-icon.png",
          other: {
            rel: "apple-touch-icon-precomposed",
            url: "/apple-touch-icon-precomposed.png",
          },
        },
      };
   })
  }