// requires getAt, has, typeOf
var countBy = Function('G,H,T', ('return[@"number"!==typeof c[f=g?d(b[a],a,b):G(b[a],d)]&&(c[f]=0),c[f]++#,@"Array"!==T(c[f=g?d(b[a],a,b):G(b[a],d)])&&(c[f]=[]),c[f].push(b[a])#,@f=c[g?d(b[a],a,b):G(b[a],d)]=b[a]#]').replace(/@([^#]+)#/g, 'function(b,d,c){c=c||{};d="string"===typeof d?[d]:d;for(var f,g="function"===typeof d,a=0,h=b.length;a<h;a++)H(b,a)&&($1);return c}'))(getAt, has, typeOf),
    groupBy = countBy[1],
    indexBy = countBy[2];
countBy = countBy[0];

// requires getAt
eval(
  "in<ax>".replace(
    /(..)(.)/g,
    "!!b[d]!b[a]!!!!By!,e!a&&g?e(b[d]):G(b[d],e)!g?e(b[a]):G(b[a],e)!,i!e='string'===typeof e?[e]:e;!g='function'===typeof e,!".replace(
      /([^! ]*)!([^!]*)!([^!]*)!([^!]*)!([^!]*)!([^!]*)!([^!]*)!/g,
      "m$$1Index$1=function(b$2){$6for(var c,$7a=1,d=0,h=b.length,f=$3;a<h;a++)c=$4,c$$2f&&(f=c,d=a);return d},m$$1$1=function(a$5){return a[m$$1Index$1(a$5)]},"
    )
  ).replace(/(.+)./, 'var min,minBy,max,maxBy,minIndex,minIndexBy,maxIndex,maxIndexBy;min=function(G){$1}')
)(getAt);
