grunt-template-file
===================

Grunt task which replaces file with templated version defined by options. Useful for compile time definitions

#Usage: 

    Requires a file and an options object with a data object inside. 
    The data object contains name-value pairs. e.g.
        file : "some/file.js",
        options : {
            data: {
                foo : "bar"
            }
        }

    this will tepmlate '<%= foo %>' into 'bar' in the file some/file.js