// requires getAt, has, typeOf
var countBy = Function('G,H,T', ('return[@"number"!==typeof c[f=g?d(b[a],a,b):G(b[a],d)]&&(c[f]=0),c[f]++#,@"Array"!==T(c[f=g?d(b[a],a,b):G(b[a],d)])&&(c[f]=[]),c[f].push(b[a])#,@f=c[g?d(b[a],a,b):G(b[a],d)]=b[a]#]').replace(/@([^#]+)#/g, 'function(b,d,c){c=c||{};d="string"===typeof d?[d]:d;for(var f,g="function"===typeof d,a=0,h=b.length;a<h;a++)H(b,a)&&($1);return c}'))(getAt, has, typeOf),
    groupBy = countBy[1],
    indexBy = countBy[2];
countBy = countBy[0];
