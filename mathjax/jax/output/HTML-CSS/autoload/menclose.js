/*
 *  ../SourceForge/trunk/mathjax/jax/output/HTML-CSS/autoload/menclose.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Unpack([
  ['(','function(','a,b','){var ','c="http://www.w3.org/2000/svg";var e="urn:schemas-microsoft-com:vml";var d="mjxvml";a.menclose.Augment({toHTML:',1,'J',3,'g','=this.getValues("','notation","thickness","padding","mathcolor","color");if(g.color&&!this','.mathcolor){g.mathcolor','=g.color}if(','g.thickness','==null){',13,'=".075em"}if(g.padding==null){g.padding=".2em"}var E=b.length2em(g.padding);var x=b.length2em(',13,');var s=b.Em(x)+" solid";J=this.HTMLcreateSpan(J);var q=b.createStack(J);var n=b.createBox(q);this.HTMLmeasureChild(0,n);var v=n.bbox.h+E+x,z=n.bbox.d+E+x,h=n.bbox.w+2*(E+x);var y','=b.createFrame(','q,v+z,0,h,x,"none");y.id="','MathJax-frame-"+this.spanID',';','b.addBox(q,','y);q.insertBefore(y,n);var j=g.notation.split(/ /);var k=0,C=0,l=0,r=0,w=0,u=0;var A,f;if(!g',11,'="black"}else{J.style.color=g.mathcolor}for(var I=0,G=j.length;I<G;I++){switch(j[I]){','case a.NOTATION.','BOX',':y.style.','border','=s;if(!b.msieBorderWidthBug){','k=C=r=l=x}','break;case a.NOTATION.','ROUNDEDBOX',':if(b.useVML){if(!f){f=this.HTMLvml(q,v,z,h,x,g.mathcolor)}this.HTMLvmlElement(f,"','roundrect",{style:{width:','this.HTMLpx(','h-2*x),height:',37,'v+z-2*x','),left:',37,'x)+0.5',',top:',37,43,'},arcsize:".25"})}','else{if(!A){A=this.HTMLsvg(q,v,z,h,x,g.mathcolor)}this.HTMLsvgElement(A.firstChild,"','rect",{x:1,y:1,width:',37,'h-x)-1,height:',37,'v+z-x',')-1,rx:',37,'Math.min(v+z,h)/4)})}',33,'CIRCLE',35,'oval",{style:{width:',37,'h-2*x),height:',37,40,'),left:',37,43,',top:',37,43,'}})}',48,'ellipse",{rx:',37,'h/2-x),ry:','this.HTMLpx((v+z)/2','-x),cx:',37,'h/2),cy:',76,')})}',33,'LEFT',29,'borderLeft',31,'r=x}',33,'ACTUARIAL',29,'borderTop',31,'k=x;y.bbox.w+=E-x}',27,'RIGHT',29,'borderRight',31,'l=x}',33,'VERTICALSTRIKE:var o','=b.createRule(q,',53,'/2,0,x);',23,'o',');b.placeBox(','o,E+x+n.bbox.w/2,-','z,true);',33,'TOP',29,'borderTop',31,'k=x}',33,'BOTTOM',29,'borderBottom',31,'C=x}',33,'HORIZONTALSTRIKE:var F',102,'x,0,h-x/2);',23,'F',107,'F,0,(v+z)/2-',109,33,'UPDIAGONALSTRIKE',35,'line",{from:"0',',"+',37,53,'),to:',37,'h)+",0"})}',48,'line",{x1:1,y1:',37,53,'),x2:',37,'h-x),y2:',37,'x)})}',33,'DOWNDIAGONALSTRIKE',35,134,',0",to:',37,'h)+","+',37,'v+z-x)})}',48,'line",{x1:1,y1:',37,'x),x2:',37,'h-x),y2:',37,158,33,'MADRUWB',29,'borderBottom=s;y.style.borderRight',31,'C=l=x}',33,'RADICAL',35,'polyline",{points:',37,'x/2)+","+',37,'0.6*(v+z))+" "+',37,'E)+","+',37,53,')+" "+',37,'2*E)+","+',37,'x/2)+" "+',37,'h)+","+',37,'x/2)});w=E}',48,'path",{d:"M',' 1,"+',37,'0.6*(v+z))+" L "+',37,'E)+","+',37,'v+z)+" L "+',37,'2*E)+",1 L "+',37,'h)+",1"});','b.placeBox(A.parentNode,0,','E/2-',109,'w=E;u=x}',33,'LONGDIV',35,134,',"+',37,'x/2),to:',37,'h-x)+","+',37,'x/2)});this.HTMLvmlElement(f,"arc",{style:{width:',37,'2*E),height:',37,40,'),left:this.HTMLpx(-E),top:',37,'x)},startangle:"10",endangle:"170"});w=E}',48,195,' "+',37,'h)+",1 L 1,1 a"+',37,'E)+","+',76,'-x)+" 0 0,1 1,"+',37,40,')});',207,'x-',109,'w=E;u=x}break}}y','.style.width=b.Em(','h-r-l);y','.style.height=b.Em(','v+z-k-C',107,'y,0,u-z,true',107,'n,w+E+x,0);this.HTMLhandleSpace(J);this.','HTMLhandleColor','(J);return J},HTMLpx:',1,'f){return(f*b.em)},',253,':',1,'g',3,'h=document.getElementById("',21,');if(h',3,'f',9,'mathbackground','","background");if(this.style&&g','.style.backgroundColor','){f.',268,'=g',270,'}if(f.background&&!this.',268,'){f.',268,'=f.background}if(f.',268,'&&f.',268,'!==a.COLOR.TRANSPARENT){h',270,'=f.',268,'}}else{this.SUPER(arguments).',253,'.call(this,g)}},HTMLsvg:',1,'g,k,l,f,j,i',3,'h','=document.createElementNS(c',',"svg");if(h.style){h',245,'f);h',247,'k+l)}var m=b.createBox(g);m.appendChild(h',107,'m,0,-l,true);this.HTMLsvgElement(h,"g",{fill:"none",stroke:i,"stroke-width":j*b.em});return h},HTMLsvgElement:',1,'f,g,h',3,'i',294,',g);if(h){for(var j in h){if(h.hasOwnProperty(j)){i.setAttributeNS(null,j,h[j].toString())}}}f.appendChild(i);return i},HTMLvml:',1,'h,k,l,g,j,i',3,'f',19,'h,k+l,0,g,0,"none");b.addBox(h,f',107,'f,0,-l,true);','this.constructor.','VMLcolor=i;',316,'VMLthickness','=',37,'j);return f},HTMLvmlElement:',1,'f,g,h',3,'i=b.addElement(f,d+":"+g,h);if(!h.fillcolor){i.fillcolor="none"}if(!h.strokecolor){i.strokecolor=',316,'VMLcolor}if(!h.strokeweight){i.strokeweight=',316,319,'}}});MathJax.Hub.Browser.Select({MSIE:',1,'f){b.useVML=true;if(!','document.namespaces','[d]){',334,'.add(d,e);var g=document.createStyleSheet();g.addRule(d+"\\\\:*","{behavior: url(#default#VML); position:absolute; top:0; left:0}")}}});MathJax.Hub.Startup.signal.Post("HTML-CSS menclose Ready");MathJax.Ajax.loadComplete(b.autoloadDir+"/menclose.js")})(MathJax.ElementJax.mml,MathJax.OutputJax["HTML-CSS"]);']
]);

