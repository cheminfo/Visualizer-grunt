Clazz.load(["java.io.FilterInputStream"],"java.io.PushbackInputStream",["java.io.IOException","java.lang.IllegalArgumentException","$.IndexOutOfBoundsException","$.NullPointerException"],function(){c$=Clazz.decorateAsClass(function(){this.buf=null;this.pos=0;Clazz.instantialize(this,arguments)},java.io,"PushbackInputStream",java.io.FilterInputStream);$_M(c$,"ensureOpen",($fz=function(){if(null==this.$in)throw new java.io.IOException("Stream closed");},$fz.isPrivate=!0,$fz));Clazz.makeConstructor(c$,
function(a,b){Clazz.superConstructor(this,java.io.PushbackInputStream,[a]);if(0>=b)throw new IllegalArgumentException("size <= 0");this.buf=Clazz.newByteArray(b,0);this.pos=b},"java.io.InputStream,~N");$_V(c$,"readByteAsInt",function(){this.ensureOpen();return this.pos<this.buf.length?this.buf[this.pos++]&255:this.$in.readByteAsInt()});$_V(c$,"read",function(a,b,c){this.ensureOpen();if(null==a)throw new NullPointerException;if(0>b||0>c||c>a.length-b)throw new IndexOutOfBoundsException;if(0==c)return 0;
var d=this.buf.length-this.pos;0<d&&(c<d&&(d=c),System.arraycopy(this.buf,this.pos,a,b,d),this.pos+=d,b+=d,c-=d);return 0<c?(c=this.$in.read(a,b,c),-1==c?0==d?-1:d:d+c):d},"~A,~N,~N");$_M(c$,"unreadByte",function(a){this.ensureOpen();if(0==this.pos)throw new java.io.IOException("Push back buffer is full");this.buf[--this.pos]=a},"~N");$_M(c$,"unread",function(a,b,c){this.ensureOpen();if(c>this.pos)throw new java.io.IOException("Push back buffer is full");this.pos-=c;System.arraycopy(a,b,this.buf,
this.pos,c)},"~A,~N,~N");$_V(c$,"available",function(){this.ensureOpen();var a=this.buf.length-this.pos,b=this.$in.available();return a>2147483647-b?2147483647:a+b});$_V(c$,"skip",function(a){this.ensureOpen();if(0>=a)return 0;var b=this.buf.length-this.pos;0<b&&(a<b&&(b=a),this.pos+=b,a-=b);0<a&&(b+=this.$in.skip(a));return b},"~N");$_V(c$,"markSupported",function(){return!1});$_V(c$,"mark",function(){},"~N");$_V(c$,"reset",function(){throw new java.io.IOException("mark/reset not supported");});
$_V(c$,"close",function(){null!=this.$in&&(this.$in.close(),this.buf=this.$in=null)})});
Clazz.load(["java.io.DataInput","$.FilterInputStream"],"java.io.DataInputStream","java.io.EOFException $.PushbackInputStream $.UTFDataFormatException java.lang.Double $.Float $.IndexOutOfBoundsException".split(" "),function(){c$=Clazz.decorateAsClass(function(){this.lineBuffer=this.readBuffer=this.chararr=this.bytearr=null;Clazz.instantialize(this,arguments)},java.io,"DataInputStream",java.io.FilterInputStream,java.io.DataInput);Clazz.prepareFields(c$,function(){this.bytearr=Clazz.newByteArray(80,
0);this.chararr=Clazz.newCharArray(80,"\x00");this.readBuffer=Clazz.newByteArray(8,0)});$_V(c$,"read",function(a,b,c){return this.$in.read(a,b,c)},"~A,~N,~N");$_M(c$,"readFully",function(a,b,c){if(0>c)throw new IndexOutOfBoundsException;for(var d=0;d<c;){var f=this.$in.read(a,b+d,c-d);if(0>f)throw new java.io.EOFException;d+=f}},"~A,~N,~N");$_V(c$,"skipBytes",function(a){for(var b=0,c=0;b<a&&0<(c=this.$in.skip(a-b));)b+=c;return b},"~N");$_V(c$,"readBoolean",function(){var a=this.$in.readByteAsInt();
if(0>a)throw new java.io.EOFException;return 0!=a});$_V(c$,"readByte",function(){var a=this.$in.readByteAsInt();if(0>a)throw new java.io.EOFException;return a});$_V(c$,"readUnsignedByte",function(){var a=this.$in.readByteAsInt();if(0>a)throw new java.io.EOFException;return a});$_V(c$,"readShort",function(){var a=this.$in.readByteAsInt(),b=this.$in.readByteAsInt();if(0>(a|b))throw new java.io.EOFException;return(a<<8)+(b<<0)});$_M(c$,"readUnsignedShort",function(){var a=this.$in.readByteAsInt(),b=
this.$in.readByteAsInt();if(0>(a|b))throw new java.io.EOFException;return(a<<8)+(b<<0)});$_V(c$,"readChar",function(){var a=this.$in.readByteAsInt(),b=this.$in.readByteAsInt();if(0>(a|b))throw new java.io.EOFException;return String.fromCharCode((a<<8)+(b<<0))});$_V(c$,"readInt",function(){var a=this.$in.readByteAsInt(),b=this.$in.readByteAsInt(),c=this.$in.readByteAsInt(),d=this.$in.readByteAsInt();if(0>(a|b|c|d))throw new java.io.EOFException;return(a<<24)+(b<<16)+(c<<8)+(d<<0)});$_V(c$,"readLong",
function(){this.readFully(this.readBuffer,0,8);return(this.readBuffer[0]<<56)+((this.readBuffer[1]&255)<<48)+((this.readBuffer[2]&255)<<40)+((this.readBuffer[3]&255)<<32)+((this.readBuffer[4]&255)<<24)+((this.readBuffer[5]&255)<<16)+((this.readBuffer[6]&255)<<8)+((this.readBuffer[7]&255)<<0)});$_V(c$,"readFloat",function(){return Float.intBitsToFloat(this.readInt())});$_V(c$,"readDouble",function(){return Double.longBitsToDouble(this.readLong())});$_V(c$,"readLine",function(){var a=this.lineBuffer;
null==a&&(a=this.lineBuffer=Clazz.newCharArray(128,"\x00"));var b=a.length,c=0,d;a:for(;;)switch(d=this.$in.readByteAsInt()){case -1:case "\n":break a;case "\r":b=this.$in.readByteAsInt();10!=b&&-1!=b&&(Clazz.instanceOf(this.$in,java.io.PushbackInputStream)||(this.$in=new java.io.PushbackInputStream(this.$in,1)),this.$in.unreadByte(b));break a;default:0>--b&&(a=Clazz.newCharArray(c+128,"\x00"),b=a.length-c-1,System.arraycopy(this.lineBuffer,0,a,0,c),this.lineBuffer=a),a[c++]=String.fromCharCode(d)}return-1==
d&&0==c?null:String.copyValueOf(a,0,c)});$_V(c$,"readUTF",function(){return java.io.DataInputStream.readUTFBytes(this,-1)});c$.readUTFBytes=$_M(c$,"readUTFBytes",function(a,b){var c=0<=b;c||(b=a.readUnsignedShort());var d=null,f=null;Clazz.instanceOf(a,java.io.DataInputStream)?(a.bytearr.length<b&&(a.bytearr=Clazz.newByteArray(c?b:2*b,0),a.chararr=Clazz.newCharArray(a.bytearr.length,"\x00")),f=a.chararr,d=a.bytearr):(d=Clazz.newByteArray(b,0),f=Clazz.newCharArray(b,"\x00"));var g,h,e=0,j=0;for(a.readFully(d,
0,b);e<b;){c=d[e]&255;if(127<c)break;e++;f[j++]=String.fromCharCode(c)}for(;e<b;)switch(c=d[e]&255,c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e++;f[j++]=String.fromCharCode(c);break;case 12:case 13:e+=2;if(e>b)throw new java.io.UTFDataFormatException("malformed input: partial character at end");g=d[e-1];if(128!=(g&192))throw new java.io.UTFDataFormatException("malformed input around byte "+e);f[j++]=String.fromCharCode((c&31)<<6|g&63);break;case 14:e+=3;if(e>b)throw new java.io.UTFDataFormatException("malformed input: partial character at end");
g=d[e-2];h=d[e-1];if(128!=(g&192)||128!=(h&192))throw new java.io.UTFDataFormatException("malformed input around byte "+(e-1));f[j++]=String.fromCharCode((c&15)<<12|(g&63)<<6|(h&63)<<0);break;default:throw new java.io.UTFDataFormatException("malformed input around byte "+e);}return String.instantialize(f,0,j)},"java.io.DataInput,~N")});Clazz.declarePackage("JU");c$=Clazz.declareType(JU,"BC");Clazz.makeConstructor(c$,function(){});
$_M(c$,"bytesToFloat",function(a,b,c){return this.intToFloat(this.bytesToInt(a,b,c))},"~A,~N,~B");$_M(c$,"bytesToInt",function(a,b,c){return c?a[b+3]&255|(a[b+2]&255)<<8|(a[b+1]&255)<<16|(a[b]&255)<<24:a[b++]&255|(a[b++]&255)<<8|(a[b++]&255)<<16|(a[b++]&255)<<24},"~A,~N,~B");$_M(c$,"intToFloat",function(a){if(0==a)return 0;var b=JU.BC;null==b.fracIEEE&&b.setFracIEEE();return(0==(a&2147483648)?1:-1)*b.shiftIEEE(a&8388607|8388608,((a&2139095040)>>23)-149)},"~N");
$_M(c$,"bytesToDoubleToFloat",function(a,b,c){null==JU.BC.fracIEEE&&JU.BC.setFracIEEE();var d=JU.BC,f,g,h;c?(c=a[b]&255,f=a[b+1]&255,g=a[b+2]&255,h=a[b+3]&255,a=a[b+4]&255):(c=a[b+7]&255,f=a[b+6]&255,g=a[b+5]&255,h=a[b+4]&255,a=a[b+3]&255);b=((c&127)<<4|f>>4)-1026;return(0==(c&128)?1:-1)*(d.shiftIEEE(f&15|16,b)+d.shiftIEEE(g,b-8)+d.shiftIEEE(h,b-16)+d.shiftIEEE(a,b-24))},"~A,~N,~B");
c$.setFracIEEE=$_M(c$,"setFracIEEE",($fz=function(){JU.BC.fracIEEE=Clazz.newFloatArray(270,0);for(var a=0;270>a;a++)JU.BC.fracIEEE[a]=Math.pow(2,a-141)},$fz.isPrivate=!0,$fz));c$.shiftIEEE=$_M(c$,"shiftIEEE",function(a,b){return 0==a||-140>b?0:128<b?3.4028235E38:a*JU.BC.fracIEEE[b+140]},"~N,~N");Clazz.defineStatics(c$,"fracIEEE",null);Clazz.declarePackage("J.io2");
Clazz.load(["JU.BC","J.api.JmolDocument"],"J.io2.BinaryDocument",["java.io.DataInputStream","java.lang.Double","J.util.Logger"],function(){c$=Clazz.decorateAsClass(function(){this.stream=null;this.isRandom=!1;this.isBigEndian=!0;this.t8=null;this.nBytes=0;this.out=null;Clazz.instantialize(this,arguments)},J.io2,"BinaryDocument",JU.BC,J.api.JmolDocument);Clazz.prepareFields(c$,function(){this.t8=Clazz.newByteArray(8,0)});Clazz.makeConstructor(c$,function(){Clazz.superConstructor(this,J.io2.BinaryDocument,
[])});$_V(c$,"close",function(){if(null!=this.stream)try{this.stream.close()}catch(a){if(!Clazz.exceptionOf(a,Exception))throw a;}null!=this.out&&this.out.closeChannel()});$_V(c$,"setStream",function(a,b){null!=a&&(this.stream=new java.io.DataInputStream(a));this.isBigEndian=b},"java.io.BufferedInputStream,~B");$_V(c$,"setStreamData",function(a,b){null!=a&&(this.stream=a);this.isBigEndian=b},"java.io.DataInputStream,~B");$_M(c$,"setRandom",function(a){this.isRandom=a},"~B");$_V(c$,"readByte",function(){this.nBytes++;
return this.ioReadByte()});$_M(c$,"ioReadByte",($fz=function(){var a=this.stream.readByte();null!=this.out&&this.out.writeByteAsInt(a);return a},$fz.isPrivate=!0,$fz));$_V(c$,"readByteArray",function(a,b,c){b=this.ioRead(a,b,c);0<b&&(this.nBytes+=b);var d=b;if(0<b&&b<c)for(;d<c&&0<b;)b=this.ioRead(a,d,c-d),0<b&&(this.nBytes+=b,d+=b);return d},"~A,~N,~N");$_M(c$,"ioRead",($fz=function(a,b,c){c=this.stream.read(a,b,c);0<c&&null!=this.out&&this.writeBytes(a,b,c);return c},$fz.isPrivate=!0,$fz),"~A,~N,~N");
$_M(c$,"writeBytes",function(a,b,c){this.out.write(a,b,c)},"~A,~N,~N");$_V(c$,"readString",function(a){var b=Clazz.newByteArray(a,0);a=this.readByteArray(b,0,a);return String.instantialize(b,0,a,"UTF-8")},"~N");$_V(c$,"readShort",function(){this.nBytes+=2;return this.isBigEndian?this.ioReadShort():this.ioReadByte()&255|(this.ioReadByte()&255)<<8});$_M(c$,"ioReadShort",($fz=function(){var a=this.stream.readShort();null!=this.out&&this.writeShort(a);return a},$fz.isPrivate=!0,$fz));$_M(c$,"writeShort",
function(a){this.out.writeByteAsInt(a>>8);this.out.writeByteAsInt(a)},"~N");$_V(c$,"readIntLE",function(){this.nBytes+=4;return this.readLEInt()});$_V(c$,"readInt",function(){this.nBytes+=4;return this.isBigEndian?this.ioReadInt():this.readLEInt()});$_M(c$,"ioReadInt",($fz=function(){var a=this.stream.readInt();null!=this.out&&this.writeInt(a);return a},$fz.isPrivate=!0,$fz));$_M(c$,"writeInt",function(a){this.out.writeByteAsInt(a>>24);this.out.writeByteAsInt(a>>16);this.out.writeByteAsInt(a>>8);
this.out.writeByteAsInt(a)},"~N");$_V(c$,"swapBytesI",function(a){return a>>24&255|(a>>16&255)<<8|(a>>8&255)<<16|(a&255)<<24},"~N");$_V(c$,"swapBytesS",function(a){return a>>8&255|(a&255)<<8},"~N");$_V(c$,"readUnsignedShort",function(){this.nBytes+=2;var a=this.ioReadByte()&255,b=this.ioReadByte()&255;return this.isBigEndian?(a<<8)+b:(b<<8)+a});$_V(c$,"readLong",function(){this.nBytes+=8;return this.isBigEndian?this.ioReadLong():this.ioReadByte()&255|(this.ioReadByte()&255)<<8|(this.ioReadByte()&
255)<<16|(this.ioReadByte()&255)<<24|(this.ioReadByte()&255)<<32|(this.ioReadByte()&255)<<40|(this.ioReadByte()&255)<<48|(this.ioReadByte()&255)<<54});$_M(c$,"ioReadLong",($fz=function(){var a=this.stream.readLong();null!=this.out&&this.writeLong(a);return a},$fz.isPrivate=!0,$fz));$_M(c$,"writeLong",function(a){this.writeInt(a>>32&4294967295);this.writeInt(a&4294967295)},"~N");$_M(c$,"readLEInt",($fz=function(){this.ioRead(this.t8,0,4);return this.bytesToInt(this.t8,0,!1)},$fz.isPrivate=!0,$fz));
$_V(c$,"readFloat",function(){return this.intToFloat(this.readInt())});$_V(c$,"readDouble",function(){this.readByteArray(this.t8,0,8);return this.bytesToDoubleToFloat(this.t8,0,this.isBigEndian)});$_M(c$,"ioReadDouble",($fz=function(){var a=this.stream.readDouble();null!=this.out&&this.writeLong(Double.doubleToRawLongBits(a));return a},$fz.isPrivate=!0,$fz));$_M(c$,"readLELong",($fz=function(){return this.ioReadByte()&255|(this.ioReadByte()&255)<<8|(this.ioReadByte()&255)<<16|(this.ioReadByte()&255)<<
24|(this.ioReadByte()&255)<<32|(this.ioReadByte()&255)<<40|(this.ioReadByte()&255)<<48|(this.ioReadByte()&255)<<56},$fz.isPrivate=!0,$fz));$_V(c$,"seek",function(a){try{a!=this.nBytes&&(a<this.nBytes?(this.stream.reset(),this.nBytes=0):a-=this.nBytes,this.stream.skipBytes(a),this.nBytes+=a)}catch(b){if(Clazz.exceptionOf(b,Exception))J.util.Logger.errorEx(null,b);else throw b;}},"~N");$_V(c$,"getPosition",function(){return this.nBytes});$_V(c$,"setOutputChannel",function(a){this.out=a},"JU.OC");$_V(c$,
"getAllDataFiles",function(){return null},"~S,~S");$_V(c$,"getAllDataMapped",function(){},"~S,~S,java.util.Map")});
