import { registerHelper } from 'discourse-common/lib/helpers';

registerHelper('greaterThan', function(arg1, arg2) {
     if (arg1 > arg2) {
         return true
    } else {
       return false
    }
})
