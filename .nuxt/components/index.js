export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const BestSellerComponent = () => import('../../components/best-seller/BestSeller.component.vue' /* webpackChunkName: "components/best-seller-component" */).then(c => wrapFunctional(c.default || c))
export const BrandComponent = () => import('../../components/brand/Brand.component.vue' /* webpackChunkName: "components/brand-component" */).then(c => wrapFunctional(c.default || c))
export const CollectionCardComponent = () => import('../../components/collection-card/CollectionCard.component.vue' /* webpackChunkName: "components/collection-card-component" */).then(c => wrapFunctional(c.default || c))
export const CollectionsComponent = () => import('../../components/collections/Collections.component.vue' /* webpackChunkName: "components/collections-component" */).then(c => wrapFunctional(c.default || c))
export const DayCardComponent = () => import('../../components/day-card/DayCard.component.vue' /* webpackChunkName: "components/day-card-component" */).then(c => wrapFunctional(c.default || c))
export const DealOfDayComponent = () => import('../../components/deal-of-day/DealOfDay.component.vue' /* webpackChunkName: "components/deal-of-day-component" */).then(c => wrapFunctional(c.default || c))
export const FooterComponent = () => import('../../components/footer/Footer.component.vue' /* webpackChunkName: "components/footer-component" */).then(c => wrapFunctional(c.default || c))
export const HeaderComponent = () => import('../../components/header/Header.component.vue' /* webpackChunkName: "components/header-component" */).then(c => wrapFunctional(c.default || c))
export const JoinCommunityComponent = () => import('../../components/join-community/JoinCommunity.component.vue' /* webpackChunkName: "components/join-community-component" */).then(c => wrapFunctional(c.default || c))
export const OurProductComponent = () => import('../../components/our-product/OurProduct.component.vue' /* webpackChunkName: "components/our-product-component" */).then(c => wrapFunctional(c.default || c))
export const ProductCardComponent = () => import('../../components/product-card/ProductCard.component.vue' /* webpackChunkName: "components/product-card-component" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
