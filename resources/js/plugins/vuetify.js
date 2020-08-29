import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi"
    },

    /*
     * Documentação sobre temas/cores vuetify
     * https://vuetifyjs.com/en/styles/colors#colors
     * https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/styles/settings/_colors.scss
     */
    theme: {
        themes: {
            light: {
                primary: colors.indigo.base,
                secondary: colors.blueGrey.base,
                accent: colors.lightBlue.base,
                error: colors.red.base,
                warning: colors.deepOrange.base,
                info: colors.cyan.base,
                success: colors.green.base,
                menuActive: colors.yellow.lighten3
            }
        }
    }
});
