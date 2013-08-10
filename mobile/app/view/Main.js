Ext.define('Users.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Users.view.UserForm',
        'Users.view.UsersList'
    ],
    config: {
        fullscreen: true,
        layout: 'card',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Users',
            items: [{
                xtype: 'button',
                text: 'Back',
                action: 'back',
                ui: 'back',
                hidden: true
            }, {
                xtype: 'spacer'
            }, {
                xtype: 'button',
                text: 'New User',
                action: 'newuser'
            }]
        }, {
            xtype: 'userslist'
        }, {
            xtype: 'userform'
        }]
    }
});