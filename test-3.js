
/**
 *
 * @param {Array} list
 * 
 * return void or mix
 */
function firstRecurringChar( list = [], step = 1 ) {
 
    for(let i=0; i<=list.length; i++) { 
        
        let next = list[i+step];
        
        if( next && list[i] === next ) {
            return list[i];
        } else if( next ) {
            continue;
        } else {
            let nextStep = step + 1;
            if( nextStep < list.length ) { 
                return firstRecurringChar( list, nextStep );
            } else {
                return;
            }
        }
        
    }

}


