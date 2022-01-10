import { registerHelper } from 'discourse-common/lib/helpers';

registerHelper('greaterThan', function(arg1) {
     if (arg1 > 1) {
         return true
    } else {
       return false
    }
})
