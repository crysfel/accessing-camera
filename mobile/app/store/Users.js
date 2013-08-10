/**
 * @class Users.store.Users
 * @extends Ext.data.Store
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * The users collection
 */
Ext.define('Users.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    requires: [
        'Users.model.User'
    ],

    config: {
        model: 'Users.model.User',
        proxy: {
            type: 'ajax',
            url: '/api/users',
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
        }
    }
});