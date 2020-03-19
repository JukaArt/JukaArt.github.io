const { SRC, TOOLS, ROOT } = require('./paths');

module.exports = {
  Home: ROOT,
  Root: SRC,
  Tools: TOOLS,
  Store: `${SRC}/scripts/store`,
  Sagas: `${SRC}/scripts/sagas`,
  Actions: `${SRC}/scripts/actions`,
  Reducers: `${SRC}/scripts/reducers`,
  Constants: `${SRC}/scripts/constants`,
  Selectors: `${SRC}/scripts/selectors`,
  Icons: `${SRC}/scripts/icons`,

  Atoms: `${SRC}/scripts/atoms`,
  Molecules: `${SRC}/scripts/molecules`,
  Templates: `${SRC}/scripts/templates`,

  Containers: `${SRC}/scripts/containers`,
  Components: `${SRC}/scripts/components`,

  Page: `${SRC}/scripts/pages`,
  AdminPage: `${SRC}/scripts/pages/admin`,
  AdvertiserPage: `${SRC}/scripts/pages/advertiser`,
  ContractorPage: `${SRC}/scripts/pages/contractor`,
  CommonPage: `${SRC}/scripts/pages/common`,
  PublicPage: `${SRC}/scripts/pages/public`,
  Modal: `${SRC}/scripts/modals`,

  Api: `${SRC}/scripts/api`,
  Mutations: `${SRC}/scripts/api/mutations`,
  Subscriptions: `${SRC}/scripts/api/subscriptions`,
  GraphTypes: `${SRC}/graphql/ts/__generated__`,
  Types: `${SRC}/scripts/types`,

  Util: `${SRC}/scripts/utils`,
  Helpers: `${SRC}/scripts/helpers`,
  Analytics: `${SRC}/scripts/analytics`,

  File: `${SRC}/files`,
  Stub: `${SRC}/scripts/stubs`,
  Locales: `${SRC}/scripts/locales`,
  Images: `${SRC}/files/images`,
  Videos: `${SRC}/files/videos`,
  Scripts: `${SRC}/scripts`,

  Styles: `${SRC}/stylesheets`,
  Fonts: `${SRC}/stylesheets/fonts`,
  Mixin: `${SRC}/scripts/mixin`,
};
