(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[219],{1151:function(e,n){e.exports=function(){var e={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}};return{localize:function(n,o,a){var r;return a=a||{},r="string"===typeof e[n]?e[n]:1===o?e[n].one:e[n].other.replace("{{count}}",o),a.addSuffix?a.comparison>0?"over "+r:r+" geleden":r}}}}}]);