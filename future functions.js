// requires getAt, has, typeOf
var countBy = Function('G,H,T', ('return[@"number"!==typeof c[f=g?d(b[a],a,b):G(b[a],d)]&&(c[f]=0),c[f]++#,@"Array"!==T(c[f=g?d(b[a],a,b):G(b[a],d)])&&(c[f]=[]),c[f].push(b[a])#,@f=c[g?d(b[a],a,b):G(b[a],d)]=b[a]#]').replace(/@([^#]+)#/g, 'function(b,d,c){c=c||{};d="string"===typeof d?[d]:d;for(var f,g="function"===typeof d,a=0,h=b.length;a<h;a++)H(b,a)&&($1);return c}'))(getAt, has, typeOf),
    groupBy = countBy[1],
    indexBy = countBy[2];
countBy = countBy[0];

// Requires getAt
// Generates minIndex, minIndexBy, min, minBy, maxIndex, maxIndexBy, max, maxBy, minMax, minMaxBy, minMaxIndex and minMaxIndexBy
eval(
  "minIndex t.min!min a[t.min]!maxIndex t.max!max a[t.max]!minMax{min:a[t.min],max:a[t.max]}!".replace(
    /(\w+)([^!]+)!/g,
    " By,i".replace(
      /\W|(..)(..)/g,
      "@ $$1$1(a$2){var t=#$1(a$2);return$$2}"
    )
  ).replace(
    /.+/,
    '$&var #,#By;#=@(G){#=@(h){for(var a,c,e,f,g,b=0,k=h.length;b<k;b++)a=h[b],b?a<c?(c=a,e=b):a>f&&(f=a,g=b):(c=f=a,e=g=b);return{min:e,max:g}};#By=@(h,a){a="string"===typeof a?[a]:a;for(var c,e,f,g,b,k="@"===typeof a,d=0,l=h.length;d<l;d++)c=k?a(h[d]):G(h[d],a),d?c<e?(e=c,f=d):c>g&&(g=c,b=d):(e=g=c,f=b=d);return{min:f,max:b}}}'
  ).replace(/#/g, 'minMaxIndex').replace(/@/g, 'function')
)(getAt);

// EDIT:  lt
// Generates add, subtract, multiply, divide, lt, gt, eq, ne, lte, gte, eqs and nes
eval('add+subtract-multiply*divide/lt<gt>eq==ne!=lte<=gte>=eqs===nes!=='.replace(/(\w+)(\W+)/g, 'function $1(a,b){return arguments.length-1?a$2b:function(b){return b$2a}}'));
