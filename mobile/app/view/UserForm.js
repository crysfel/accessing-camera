/**
 * @class Users.view.UserForm
 * @extends Ext.form.Panel
 * @author Crysfel Villa <crysfel@moduscreate.com>
 *
 * The form to add new users
 */
Ext.define('Users.view.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userform',
    requires: [
        'Users.view.CapturePicture',
        'Ext.field.Email'
    ],

    config: {
        cls: 'user-form',
        items: [{
            xtype: 'capturepicture'
        }, {
            xtype: 'textfield',
            name: 'name',
            label: 'Name',
            margin: '0 20'
        }, {
            xtype: 'emailfield',
            name: 'email',
            label: 'email',
            margin: '0 20'
        }, {
            xtype: 'button',
            action: 'save',
            text: 'Save',
            margin: '10 20'
        }]
    },

    reset: function() {
        this.callParent(arguments);
        this.down('capturepicture').reset();
    }
});