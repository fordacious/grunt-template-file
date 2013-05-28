/*
 * By Lachlan Ford (Fordy) (github.com/shadowford)
 *
 * Copyright (c) 2013 Lachlan Ford
 * Licensed under the MIT license.
 */

 /* Usage: 

        Requires a file and an options object with a data object inside. 
        The data object contains name-value pairs. e.g.
            data : {
                file : "some/file.js",
                options : {
                    data: {
                        foo : "bar"
                    }
                }
            }

        this will tepmlate '<%= foo %>' into 'bar' in the file some/file.js

    
 */

'use strict';
module.exports = function (grunt) {

    var fs = require("fs");

    grunt.registerMultiTask('templateFile', 'Replaces file with templated version defined by options. Useful for compile time definitions', function () {

        // read entire file into memory synchronously
        var fileData = fs.readFileSync(this.data.file).toString();

        // template it with options
        fileData = grunt.template.process(fileData, this.data.options);

        // write back synchronously
        fs.writeFileSync(this.data.file, fileData);

    });
};
