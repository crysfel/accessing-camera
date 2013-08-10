Ext.define('Users.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            backBtn: 'main > toolbar button[action=back]'
        },
        control: {
            'main > toolbar button[action=newuser]': {
                tap: 'showUserForm'
            },
            'main > toolbar button[action=back]': {
                tap: 'showMainView'
            },
            'main userform button[action=save]': {
                tap: 'saveUser'
            }
        }
    },

    saveUser: function() {
        var form = this.getMain().down('userform'),
            capture = form.down('capturepicture'),
            values = form.getValues();

        Ext.Ajax.request({
            url: '/api/users',
            method: 'POST',
            params: {
                'user[name]': values.name,
                'user[email]': values.email,
                'user[image]': capture.getImageDataUrl()
            },
            scope: this,
            success: this.showMessage,
            failure: this.showMessage
        });
    },

    showMessage: function(response, options) {
        if (response.status === 200) {
            var form = this.getMain().down('userform'),
                capture = form.down('capturepicture');

            this.showMainView();
            this.getMain().down('userslist').getStore().load();
            form.reset();
        } else {
            Ext.Msg.alert('Error', 'There was an error while saving this user.');
        }
    },

    showUserForm: function() {
        this.getMain().animateActiveItem(this.getMain().down('userform'), {
            type: 'slide',
            direction: 'left'
        });
        this.getBackBtn().show();
    },

    showMainView: function() {
        this.getMain().animateActiveItem(this.getMain().down('userslist'), {
            type: 'slide',
            direction: 'right'
        });
        this.getBackBtn().hide();
    }
});