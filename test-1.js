
/** 
 * ##Task 1
 * Count how many Apples, Pears, Lemons, Oranges, Pineapples, Tomatoes, Mangos and Bananas are in the list.
 */

function fruits() {

    const fruits_collection = {
        'apple': {
            label: 'Apple'
        },
        'pear': {
            label: 'Pear'
        },
        'lemon': {
            label: 'Lemon'
        },
        'orange': {
            label: 'Orange'
        },
        'pineaple': {
            label: 'Pineaple'
        },
        // classification? it is a berry ;-)
        'tomato': {
            label: 'Tomato'
        },
        'mango': {
            label: 'Mango'
        },
        'banana': {
            label: 'Banana'
        },
        
    };


    function matchAll( fruits = [], print_output = false  ) {

        // prepre output format
        let output = prepareOutput();

        fruits.forEach( fruit => {

            // check if element exists in collection
            let fruitFound = getFromCollection( fruit ); 

            // increment qty in output collection
            if( fruitFound ) {
                let label = fruitFound.label;
                output[label] = ++output[label];
            }
            
        } );

        if( print_output ) {
            printOutput( output );
        }

        return output;

    }


    function prepareOutput() {
        let output = {};

        for(let el in fruits_collection) {
            output[ fruits_collection[el].label ] = 0;
        }

        return output;
    }


    function printOutput( output ) {
        
        for(let el in output ) {
            console.log(`${el}: ${output[el]}`)
        }
    }



    function getFromCollection( fruit ) {
        let found = fruits_collection.hasOwnProperty( fruit ) ? fruits_collection[fruit] : null;
        return found;
    }


    return {
        matchAll: matchAll
    }


}