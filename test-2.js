
/** 
    ## Task 2

    a) What is the performance, in terms of, Big O notation, of the below code?

    Performance of current script is quite low, because first it creates n-size array from all records in database using two loops:
    1. Low-level build in JS loop - Object.keys(domains)
    2. "For" loop to build an array of desired properties

    Moreover the new created array will require memory to keep "map of plicies" on every script invocation.
    
    Then there are two additional loops "some" and "every" which required process again temporary created array.
    
    First loop "some" is redundant (returns only bool) if second loop is true (if all domains are "block", it also means that at least one is "block").

    "policyArr" array has been defined globaly, there should be "var/let" syntax used

 */

const domains = {
        "one.com": { policy: "block" },
        "two.com": { policy: "none" },
        "three.com": { policy: "none" },
        "four.com": { policy: "block" },
    }


/**
 * Suggested solution is to using only one loop and not take memory for any redundant helpers, like temporary array of keys.
 *
 * For bigger databases, it might be worth to consider other format of collection as an array rather then object,
 * this can be helpfull for using split an array to loop partially huge databases in a cycles (pagination) rather than whole "databese" at once.
 * It depends on how data are storred and how one-time migration to array can affect other coreplated functionalities
 * 
 * @returns
 */
function getBlockPolicyState() {

    let count = 0,
        found = 0;

        // try utilise with one loop
        for(let name in domains) {

            count++;

            // property can be accessed directly
            if( domains[name].policy === 'block' ) {
                found++;
            }
        }

        let oneDomain = found > 0 ? true : false;
        let allDomains = found === count ? true : false;
    
    return { oneDomain, allDomains };

}