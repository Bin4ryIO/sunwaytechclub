module.exports = {
  siteMetadata: {
    title: `Sunway Innovators`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vhr5kc7919oa`,
        accessToken: `c5c6c5afda48a2b56afff7d6f36de60642e3810376da65b5285df1b938bfa305`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `UA-93349937-2`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Sunway Innovators",
        short_name: "Sunway Innovators",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icons: [
          {
            // Everything in /static will be copied to an equivalent 
            // directory in /public during development and build, so 
            // assuming your favicons are in /static/favicons, 
            // you can reference them here 
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-nprogress`
  ],
}
