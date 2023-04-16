let cookie = {
    set: ( name, value, options ) => {
        if ( !name || !value ) {
            return null;
        }

        let string = name + "=" + value;
        if ( options ) {
            string += ";" + options;
        }

        document.cookie = string;
        return cookie;
    },
    get: ( name ) => {
        const value = ";" + document.cookie;
        const parts = value.split( `; ${ name }=` );
        if ( parts.length === 2 ) {
            return parts.pop().split( ";" ).shift();
        }
    },
    delete: ( name ) => {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:001 GMT";
    }
};