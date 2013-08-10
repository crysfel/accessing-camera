/**
 * @class Users.view.UsersList
 * @extends Ext.dataview.List
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * The users list
 */
Ext.define('Users.view.UsersList', {
    extend: 'Ext.dataview.List',
    xtype: 'userslist',
    requires: [
        'Users.store.Users'
    ],
    config: {
        cls: 'user-list',
        itemTpl: '<img src="{image}" /> {name}<br><small>{email}</small></p>',
        store: {
            type: 'users',
            autoLoad: true
        }
    }
});