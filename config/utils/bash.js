import { exec } from 'child_process';

function sh( cmd ) {

    return new Promise( function ( resolve, reject ) {

        exec( cmd, ( err, stdout, stderr ) => {

            if ( err ) {

                console.log( err );
                reject( err );

            } else {

                resolve( { stdout, stderr } );
            }

        });

    });

}

export default sh;