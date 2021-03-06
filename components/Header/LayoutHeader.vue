<template>
  <div class="header">
    <div class="header-container">
      <div class="logo-container">
        <nuxt-link :to="$t('header.nav')[0].link">
          <img src="/media/logo.png" alt="logo" width="144px" height="70px">
        </nuxt-link>
      </div>
      <div class="navlist">
        <ul class="nav-ul">
          <li
            v-for="(navItem, index) in $t('header.nav')" :key="index"
            class="nav-item mobile-hide"
            :class="(currPage === navItem.title) ? 'current-page' : ''"
            @mouseover="navItem.showList = true"
            @mouseout="navItem.showList = false"
          >
            <nuxt-link v-if="!navItem.haveList" :to="$t('header.nav')[0].link" class="current-page-tag">
              {{ navItem.title }}
            </nuxt-link>
            <span v-else class="dummy-link current-page-tag">{{ navItem.title }}</span>
            <NavHoverList :v-if="navItem.haveList" :items="navItem.listItems" :show-list="navItem.showList" />
          </li>
          <li
            class="nav-item mobile-hide"
            @mouseover="$t('header.lang-switcher').showList = true"
            @mouseout="$t('header.lang-switcher').showList = false"
          >
            <span class="dummy-link current-page-tag">{{ $t('header.lang-switcher').title }}</span>
            <NavHoverList :v-if="$t('header.lang-switcher').haveList" :items="$t('header.lang-switcher').lang" :show-list="$t('header.lang-switcher').showList" type="lang-switcher" />
          </li>
          <li class="mobile nav-item">
            <span class="dummy-link menu-icon-container">
              <div class="menu-icon" :class="(showMobileMenu) ? 'open' : '' " @click="toggleMobileMenu">
                <span class="lines line-1" />
                <span class="lines line-2" />
                <span class="lines line-3" />
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavHoverList from './NavHoverList'
export default {
  name: 'LayoutHeader',
  components: { NavHoverList },
  computed: {
    currPage () {
      const currSplit = this.$route.path.split('/')
      const currSplitPage = currSplit[currSplit.length - 1]
      if (currSplitPage === '' || currSplitPage === 'hk' || currSplitPage === 'cn') {
        return this.$t('header.nav[0].title')
      } else if (currSplitPage === 'about-us' || currSplitPage === 'contact-us' || currSplitPage === 'find-us') {
        return this.$t('header.nav[1].title')
      } else if (currSplitPage === 'wine-list' || currSplitPage === 'new-arrivals' || currSplitPage === 'special-offers') {
        return this.$t('header.nav[2].title')
      } else {
        return -1
      }
    },
    showMobileMenu () {
      return this.$store.getters.showMobileMenu
    }
  },
  methods: {
    toggleMobileMenu () {
      this.$store.commit('SET_SHOWMOBILEMENU', !this.showMobileMenu)
    }
  }
}
</script>

<style lang="scss">
  .header {
    width: 100%;
    height: 70px;
    background-color: white;
    z-index: 50;
    position: fixed;
    @media (max-width: 768px) {
      position: fixed;
    }
    .header-container {
      width: 100%;
      height: 100%;
      .logo-container {
        float: left;
        height: 100%;
        width: auto;
        margin-left: 30px;
        @media (max-width: 768px) {
          margin-left: 5px;
        }
        img {
          height: 100%;
          padding-bottom: 6px
        }
      }
      .navlist {
        float: right;
        height: 100%;
        .nav-ul {
          list-style-type: none;
          margin: 0;
          padding: 0 10px 0 0;
          overflow: visible;
          height: 100%;
          @media (max-width: 768px) {
            padding: 0;
          }
          .current-page {
            .current-page-tag {
              color: #A44C4F !important;
            }
          }
          .nav-item {
            float: left;
            position: relative;
            a, .dummy-link {
              display: block;
              color: #2b2b2b;
              text-align: center;
              padding: 25px 37px;
              text-decoration: none;
              @media (max-width: 1180px) {
                padding: 25px 18px;
              }
              @media (max-width: 960px) {
                padding: 28px 16px;
                font-size: 13px;
              }
            }
            .hover-list {
              text-align: center;
              position: absolute;
              z-index: 100;
              width: 100%;
              top: 68px;
              padding: 0;
              .line {
                width: 44px;
                height: 1px;
                background: #ebc7d9;
                min-height: 1px;
                margin: 0 auto 0;
                transition: 0.8s;
              }
              &-item {
                min-height: 45px;
                transition: 0.8s;
                &:hover {
                  cursor: pointer;
                  background: #ebc7d9;
                  & .v-list-item__title {
                    color: white;
                  }
                  & + .line {
                    width: 100%;
                  }
                }
              }
            }
            .menu-icon-container {
              height: 70px;
              width: 70px;
              padding: 10px 0;
              .menu-icon {
                height: 50px;
                width: 50px;
                margin: auto;
                position: relative;
                cursor: pointer;
                .lines {
                  height: 2px;
                  background: #bd5558;
                  position: absolute;
                  border-radius: 9px;
                  transform: translate(-50%, -50%);
                }
                .line-1 {
                  width: 33px;
                  right: -11px;
                  top: 15px;
                  transition: 0.4s ease-in-out;
                }
                .line-2 {
                  width: 22px;
                  top: 25.5px;
                  right: -5px;
                  transition: 0.4s ease-in-out;
                }
                .line-3 {
                  width: 11px;
                  top: 37px;
                  right: 1px;
                  transition: 0.4s ease-in-out;
                }
                &.open {
                  .line-1 {
                    width: 22px;
                    right: 10px;
                    top: 24px;
                    transform: rotate(45deg);
                  }
                  .line-2 {
                    right: -20px;
                    opacity: 0;
                  }
                  .line-3 {
                    width: 22px;
                    top: 24px;
                    right: 10px;
                    transform: rotate(-45deg);
                  }
                }
              }
            }
          }
        }
      }
    }
    .mobile {
      @media (min-width: 769px){
        display: none;
      }
      @media (max-width: 768px){
        display: block;
      }
      &-hide{
        @media (max-width: 768px){
          display: none;
        }
      }
    }
  }
</style>
