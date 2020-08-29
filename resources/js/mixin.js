import Vue from "vue";
import store from "@/store";


/**
 * É esperado o formato de permissoes do usuário da seguinte maneira:
 * 
 * Array[
 *      REF1 => [
 *                  read => 1 || 0,
 *                  create => 1 || 0,
 *                  update => 1 || 0,
 *                  delete => 1 || 0,
 *              ], 
 *      ...
 * ]
 * 
 */

Vue.mixin({
    methods: {
        hasPermission: function (access, action) {
            action = action.toLowerCase()

            try {
                const permissions = store.state.user.permissions;
                return permissions[access][action];
            } catch (error) {
                return false
            }

        }

    }
})