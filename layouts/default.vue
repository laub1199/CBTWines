<template>
  <v-app :style="{ 'background-image': 'url(/img/BG.png)'}" dark class="backstage-container">
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
    <v-app-bar app :elevation="0" color="white" :style="{'opacity': 0.8}">
      <v-btn
        v-if="loggedIn"
        color="blue"
        dark
        small
        absolute
        class="backstageBtn"
        fab
        to="/backstage"
      >
        <v-icon>settings</v-icon>
      </v-btn>
      <v-toolbar-item class="font-weight-light">
        <nuxt-link v-if="loggedIn" to="/" class="black--text">
          <v-btn text @click="logout">
            <v-icon>supervisor_account</v-icon> Logout
          </v-btn>
        </nuxt-link>
      </v-toolbar-item>

      <v-spacer />

      <v-toolbar-item>
        <v-toolbar-title>
          <nuxt-link to="/">
            <img class="logo" src="/img/logo.png" alt="logo">
          </nuxt-link>
        </v-toolbar-title>
      </v-toolbar-item>

      <v-spacer />

      <v-toolbar-item>
        <v-btn text @click="changeLang('traditionalChinese')">
          繁
        </v-btn> |
        <v-btn text @click="changeLang('simplifiedChinese')">
          简
        </v-btn> |
        <v-btn text @click="changeLang('english')">
          ENG
        </v-btn>
      </v-toolbar-item>
    </v-app-bar>

    <nuxt />

    <v-footer
      class="font-weight-light v-footer"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        &copy; 2020 CBT WINES CO. LIMITED; Designed by&nbsp;<a href="https://github.com/laub1199" class="black--text">Sennett Lau</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      loggedIn: false,
      fab: false
    }
  },
  watch: {
    $route () {
      this.loggedIn = false
      if (localStorage.getItem('token')) {
        axios.get('/api/auth-with-jwt', { headers: { token: localStorage.getItem('token') } })
          .then(
            (res) => {
              console.log(res)
              if (res.status === 200) {
                this.loggedIn = true
              }
              return res.status
            },
            (err) => {
              console.log(err)
            }
          )
          .catch((e) => {
            console.log(e)
          })
      }
    }
  },
  mounted () {
    if (localStorage.getItem('token')) {
      axios.get('/api/backstage/auth-with-jwt', { headers: { token: localStorage.getItem('token') } })
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            this.loggedIn = true
          }
          return res.status
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  methods: {
    changeLang (lang) {
      if (lang === 'traditionalChinese') {
        this.$router.push('/hk')
      } else if (lang === 'simplifiedChinese') {
        this.$router.push('/cn')
      } else {
        this.$router.push('/')
      }
    },
    logout () {
      localStorage.clear()
      this.loggedIn = false
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style scoped>
#title {
  text-decoration: none;
  color: #555;
}

a{
  text-decoration: none;
}

.logo {
  position: absolute;
  height: 55px;
  margin-left: auto;
  margin-right: auto;
  top: 4px;
}

.backstageBtn {
  left: 130px;
  top: 10px;
}

#app > div > div {
  min-height: 85.6vh;
}

.v-footer {
  width: 100%;
}
</style>
