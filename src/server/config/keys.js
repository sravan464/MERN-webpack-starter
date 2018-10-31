module.exports = {
  mongoURI:
    process.env.MONGODB_URI || 'mongodb://sravang:goDaddy_464@ds231242.mlab.com:31242/mccarthy',
  glueKey: process.env.glueKey,
  glueSecret: process.env.glueSecret,
  glueCompanyId: process.env.glueCompanyId,
  glueUser: process.env.glueUser,
  gluePassword: process.env.gluePassword,
  bim360AccountId: process.env.bim360AccountId,
  bim360ClientId: process.env.bim360ClientId,
  bim360ClientSecret: process.env.bim360ClientSecret,

  companyName: 'Autodesk' // TODO update before McCarthy Testing
};
