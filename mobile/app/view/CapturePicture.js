/**
 * @class Guestbook.view.picture.Capture
 * @extends Ext.Component
 * @author Crysfel Villa <crysfel@bleext.com>
 *
 * Component to capture an image using the device camera
 */
Ext.define('Users.view.CapturePicture', {
    extend: 'Ext.Component',
    xtype: 'capturepicture',

    config: {
        captured: false,
        width: 140,
        height: 100,
        cls: 'picture-capture',
        html: [
            '<div class="icon"><i class="icon-camera"></i> Make a pic</div>',
            '<img class="image-tns" />',
            '<input type="file" capture="camera" accept="image/*" />'
        ].join('')
    },

    initialize: function() {
        this.callParent(arguments);

        this.file = this.element.down('input[type=file]');
        this.img = this.element.down('img');

        this.file.on('change', this.setPicture, this);

        //FIX for webkit
        window.URL = window.URL || window.webkitURL;
    },

    setPicture: function(event) {
        if (event.target.files.length === 1 && event.target.files[0].type.indexOf("image/") === 0) {
            this.img.setStyle('display', 'block');
            this.img.set({
                src: URL.createObjectURL(event.target.files[0])
            });
            this.setCaptured(true);
        }
    },

    reset: function() {
        this.img.set({
            src: ''
        });
        this.img.setStyle('display', 'none');
        this.setCaptured(false);
    },

    getImageDataUrl: function() {
        var img = this.img.dom,
            imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext("2d");

        if (this.getCaptured()) {
            // Make sure canvas is as big as the picture
            imgCanvas.width = img.width;
            imgCanvas.height = img.height;

            // Draw image into canvas element
            imgContext.drawImage(img, 0, 0, img.width, img.height);

            // Return the image as a data URL
            return imgCanvas.toDataURL("image/png");
        }
    }
});