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
  ],
}