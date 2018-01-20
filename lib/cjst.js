/*	A javascript toolset for helping work with Chinese characters in a web context or nodeJS.
 *
 * (The MIT License)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the 'Software'), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * 這是一份MIT的非官方中文翻譯。它並非MIT發布，也不是使用MIT授權的軟件的法定發布條款——只有MIT授權的英文原版具
 * 有這樣的效力。然而，我們希望這份翻譯能夠幫助中文讀者更好的理解MIT授權。
 *
 * 現授予的權限，免費向任何人索取該軟件和相關的文檔文件（ “軟件” ），以處理軟件，沒有任何限制，包括但不限於使用權，複製，
 * 修改，合併，出版，發行，授權，和/或銷售軟件的副本，並允許的人提供的軟件是這樣做，但須符合下列條件：
 * 上述版權聲明和本許可聲明中應包括所有副本或實質性部分的軟件。
 * 該軟件是“按原樣”提供，不做任何保證，明示或暗示，包括但不限於適銷性，針對特定用途的適用性和非侵權的。
 * 在任何情況下，作者或版權持有人對任何索賠，損害賠償或其他責任，無論是在一項行動的合同，侵權或其他因出於或有關的軟件
 * 或利用等交易必須軟件。
 */


(function(window, exports){

var module = (function(){
	/* A complete lookup reference from pinyin (with no tones) to zhuyin (also with no tones) */
	var __pinyinToZhuyinLookup = {
		a:'ㄚ',
		ai:'ㄞ',
		an:'ㄢ',
		ang:'ㄤ',
		ao:'ㄠ',
		ba:'ㄅㄚ',
		bai:'ㄅㄞ',
		ban:'ㄅㄢ',
		bang:'ㄅㄤ',
		bao:'ㄅㄠ',
		bei:'ㄅㄟ',
		ben:'ㄅㄣ',
		beng:'ㄅㄥ',
		bi:'ㄅㄧ',
		bian:'ㄅㄧㄢ',
		biao:'ㄅㄧㄠ',
		bie:'ㄅㄧㄝ',
		bin:'ㄅㄧㄣ',
		bing:'ㄅㄧㄥ',
		bo:'ㄅㄛ',
		bu:'ㄅㄨ',
		ca:'ㄘㄚ',
		cai:'ㄘㄞ',
		can:'ㄘㄢ',
		cang:'ㄘㄤ',
		cao:'ㄘㄠ',
		ce:'ㄘㄜ',
		cen:'ㄘㄣ',
		ceng:'ㄘㄥ',
		cha:'ㄔㄚ',
		chai:'ㄔㄞ',
		chan:'ㄔㄢ',
		chang:'ㄔㄤ',
		chao:'ㄔㄠ',
		che:'ㄔㄜ',
		chen:'ㄔㄣ',
		cheng:'ㄔㄥ',
		chi:'ㄔ',
		chong:'ㄔㄨㄥ',
		chou:'ㄔㄡ',
		chu:'ㄔㄨ',
		chua:'ㄔㄨㄚ',
		chuai:'ㄔㄨㄞ',
		chuan:'ㄔㄨㄢ',
		chuang:'ㄔㄨㄤ',
		chui:'ㄔㄨㄟ',
		chun:'ㄔㄨㄣ',
		chuo:'ㄔㄨㄛ',
		ci:'ㄘ',
		cong:'ㄘㄨㄥ',
		cou:'ㄘㄡ',
		cu:'ㄘㄨ',
		cuan:'ㄘㄨㄢ',
		cui:'ㄘㄨㄟ',
		cun:'ㄘㄨㄣ',
		cuo:'ㄘㄨㄛ',
		da:'ㄉㄚ',
		dai:'ㄉㄞ',
		dan:'ㄉㄢ',
		dang:'ㄉㄤ',
		dao:'ㄉㄠ',
		de:'ㄉㄜ',
		dei:'ㄉㄟ',
		den:'ㄉㄣ',
		deng:'ㄉㄥ',
		di:'ㄉㄧ',
		dia:'ㄉㄧㄚ',
		dian:'ㄉㄧㄢ',
		diao:'ㄉㄧㄠ',
		die:'ㄉㄧㄝ',
		ding:'ㄉㄧㄥ',
		diu:'ㄉㄧㄡ',
		dong:'ㄉㄨㄥ',
		dou:'ㄉㄡ',
		du:'ㄉㄨ',
		duan:'ㄉㄨㄢ',
		dui:'ㄉㄨㄟ',
		dun:'ㄉㄨㄣ',
		duo:'ㄉㄨㄛ',
		e:'ㄜ',
		ei:'ㄟ',
		en:'ㄣ',
		eng:'ㄥ',
		er:'ㄦ',
		fa:'ㄈㄚ',
		fan:'ㄈㄢ',
		fang:'ㄈㄤ',
		fei:'ㄈㄟ',
		fen:'ㄈㄣ',
		feng:'ㄈㄥ',
		fo:'ㄈㄛ',
		fou:'ㄈㄡ',
		fu:'ㄈㄨ',
		ga:'ㄍㄚ',
		gai:'ㄍㄞ',
		gan:'ㄍㄢ',
		gang:'ㄍㄤ',
		gao:'ㄍㄠ',
		ge:'ㄍㄜ',
		gei:'ㄍㄟ',
		gen:'ㄍㄣ',
		geng:'ㄍㄥ',
		gong:'ㄍㄨㄥ',
		gou:'ㄍㄡ',
		gu:'ㄍㄨ',
		gua:'ㄍㄨㄚ',
		guai:'ㄍㄨㄞ',
		guan:'ㄍㄨㄢ',
		guang:'ㄍㄨㄤ',
		gui:'ㄍㄨㄟ',
		gun:'ㄍㄨㄣ',
		guo:'ㄍㄨㄛ',
		ha:'ㄏㄚ',
		hai:'ㄏㄞ',
		han:'ㄏㄢ',
		hang:'ㄏㄤ',
		hao:'ㄏㄠ',
		he:'ㄏㄜ',
		hei:'ㄏㄟ',
		hen:'ㄏㄣ',
		heng:'ㄏㄥ',
		hong:'ㄏㄨㄥ',
		hou:'ㄏㄡ',
		hu:'ㄏㄨ',
		hua:'ㄏㄨㄚ',
		huai:'ㄏㄨㄞ',
		huan:'ㄏㄨㄢ',
		huang:'ㄏㄨㄤ',
		hui:'ㄏㄨㄟ',
		hun:'ㄏㄨㄣ',
		huo:'ㄏㄨㄛ',
		ji:'ㄐㄧ',
		jia:'ㄐㄧㄚ',
		jian:'ㄐㄧㄢ',
		jiang:'ㄐㄧㄤ',
		jiao:'ㄐㄧㄠ',
		jie:'ㄐㄧㄝ',
		jin:'ㄐㄧㄣ',
		jing:'ㄐㄧㄥ',
		jiong:'ㄐㄩㄥ',
		jiu:'ㄐㄧㄡ',
		ju:'ㄐㄩ',
		juan:'ㄐㄩㄢ',
		jue:'ㄐㄩㄝ',
		jun:'ㄐㄩㄣ',
		ka:'ㄎㄚ',
		kai:'ㄎㄞ',
		kan:'ㄎㄢ',
		kang:'ㄎㄤ',
		kao:'ㄎㄠ',
		ke:'ㄎㄜ',
		kei:'ㄎㄟ',
		ken:'ㄎㄣ',
		keng:'ㄎㄥ',
		kong:'ㄎㄨㄥ',
		kou:'ㄎㄡ',
		ku:'ㄎㄨ',
		kua:'ㄎㄨㄚ',
		kuai:'ㄎㄨㄞ',
		kuan:'ㄎㄨㄢ',
		kuang:'ㄎㄨㄤ',
		kui:'ㄎㄨㄟ',
		kun:'ㄎㄨㄣ',
		kuo:'ㄎㄨㄛ',
		la:'ㄌㄚ',
		lai:'ㄌㄞ',
		lan:'ㄌㄢ',
		lang:'ㄌㄤ',
		lao:'ㄌㄠ',
		le:'ㄌㄜ',
		lei:'ㄌㄟ',
		leng:'ㄌㄥ',
		li:'ㄌㄧ',
		lia:'ㄌㄧㄚ',
		lian:'ㄌㄧㄢ',
		liang:'ㄌㄧㄤ',
		liao:'ㄌㄧㄠ',
		lie:'ㄌㄧㄝ',
		lin:'ㄌㄧㄣ',
		ling:'ㄌㄧㄥ',
		liu:'ㄌㄧㄡ',
		long:'ㄌㄨㄥ',
		lou:'ㄌㄡ',
		lu:'ㄌㄨ',
		lü:'ㄌㄩ',
		luan:'ㄌㄨㄢ',
		lüe:'ㄌㄩㄝ',
		lun:'ㄌㄨㄣ',
		luo:'ㄌㄨㄛ',
		ma:'ㄇㄚ',
		mai:'ㄇㄞ',
		man:'ㄇㄢ',
		mang:'ㄇㄤ',
		mao:'ㄇㄠ',
		me:'ㄇㄜ',
		mei:'ㄇㄟ',
		men:'ㄇㄣ',
		meng:'ㄇㄥ',
		mi:'ㄇㄧ',
		mian:'ㄇㄧㄢ',
		miao:'ㄇㄧㄠ',
		mie:'ㄇㄧㄝ',
		min:'ㄇㄧㄣ',
		ming:'ㄇㄧㄥ',
		miu:'ㄇㄧㄡ',
		mo:'ㄇㄛ',
		mou:'ㄇㄡ',
		mu:'ㄇㄨ',
		na:'ㄋㄚ',
		nai:'ㄋㄞ',
		nan:'ㄋㄢ',
		nang:'ㄋㄤ',
		nao:'ㄋㄠ',
		ne:'ㄋㄜ',
		nei:'ㄋㄟ',
		nen:'ㄋㄣ',
		neng:'ㄋㄥ',
		ni:'ㄋㄧ',
		nian:'ㄋㄧㄢ',
		niang:'ㄋㄧㄤ',
		niao:'ㄋㄧㄠ',
		nie:'ㄋㄧㄝ',
		nin:'ㄋㄧㄣ',
		ning:'ㄋㄧㄥ',
		niu:'ㄋㄧㄡ',
		nong:'ㄋㄨㄥ',
		nou:'ㄋㄡ',
		nu:'ㄋㄨ',
		nü:'ㄋㄩ',
		nuan:'ㄋㄨㄢ',
		nüe:'ㄋㄩㄝ',
		nun:'ㄋㄨㄣ',
		nuo:'ㄋㄨㄛ',
		o:'ㄛ',
		ou:'ㄡ',
		pa:'ㄆㄚ',
		pai:'ㄆㄞ',
		pan:'ㄆㄢ',
		pang:'ㄆㄤ',
		pao:'ㄆㄠ',
		pei:'ㄆㄟ',
		pen:'ㄆㄣ',
		peng:'ㄆㄥ',
		pi:'ㄆㄧ',
		pian:'ㄆㄧㄢ',
		piao:'ㄆㄧㄠ',
		pie:'ㄆㄧㄝ',
		pin:'ㄆㄧㄣ',
		ping:'ㄆㄧㄥ',
		po:'ㄆㄛ',
		pou:'ㄆㄡ',
		pu:'ㄆㄨ',
		qi:'ㄑㄧ',
		qia:'ㄑㄧㄚ',
		qian:'ㄑㄧㄢ',
		qiang:'ㄑㄧㄤ',
		qiao:'ㄑㄧㄠ',
		qie:'ㄑㄧㄝ',
		qin:'ㄑㄧㄣ',
		qing:'ㄑㄧㄥ',
		qiong:'ㄑㄩㄥ',
		qiu:'ㄑㄧㄡ',
		qu:'ㄑㄩ',
		quan:'ㄑㄩㄢ',
		que:'ㄑㄩㄝ',
		qun:'ㄑㄩㄣ',
		ran:'ㄖㄢ',
		rang:'ㄖㄤ',
		rao:'ㄖㄠ',
		re:'ㄖㄜ',
		ren:'ㄖㄣ',
		reng:'ㄖㄥ',
		ri:'ㄖ',
		rong:'ㄖㄨㄥ',
		rou:'ㄖㄡ',
		ru:'ㄖㄨ',
		rua:'ㄖㄨㄚ',
		ruan:'ㄖㄨㄢ',
		rui:'ㄖㄨㄟ',
		run:'ㄖㄨㄣ',
		ruo:'ㄖㄨㄛ',
		sa:'ㄙㄚ',
		sai:'ㄙㄞ',
		san:'ㄙㄢ',
		sang:'ㄙㄤ',
		sao:'ㄙㄠ',
		se:'ㄙㄜ',
		sen:'ㄙㄣ',
		seng:'ㄙㄥ',
		sha:'ㄕㄚ',
		shai:'ㄕㄞ',
		shan:'ㄕㄢ',
		shang:'ㄕㄤ',
		shao:'ㄕㄠ',
		she:'ㄕㄜ',
		shei:'ㄕㄟ',
		shen:'ㄕㄣ',
		sheng:'ㄕㄥ',
		shi:'ㄕ',
		shou:'ㄕㄡ',
		shu:'ㄕㄨ',
		shua:'ㄕㄨㄚ',
		shuai:'ㄕㄨㄞ',
		shuan:'ㄕㄨㄢ',
		shuang:'ㄕㄨㄤ',
		shui:'ㄕㄨㄟ',
		shun:'ㄕㄨㄣ',
		shuo:'ㄕㄨㄛ',
		si:'ㄙ',
		song:'ㄙㄨㄥ',
		sou:'ㄙㄡ',
		su:'ㄙㄨ',
		suan:'ㄙㄨㄢ',
		sui:'ㄙㄨㄟ',
		sun:'ㄙㄨㄣ',
		suo:'ㄙㄨㄛ',
		ta:'ㄊㄚ',
		tai:'ㄊㄞ',
		tan:'ㄊㄢ',
		tang:'ㄊㄤ',
		tao:'ㄊㄠ',
		te:'ㄊㄜ',
		tei:'ㄊㄟ',
		teng:'ㄊㄥ',
		ti:'ㄊㄧ',
		tian:'ㄊㄧㄢ',
		tiao:'ㄊㄧㄠ',
		tie:'ㄊㄧㄝ',
		ting:'ㄊㄧㄥ',
		tong:'ㄊㄨㄥ',
		tou:'ㄊㄡ',
		tu:'ㄊㄨ',
		tuan:'ㄊㄨㄢ',
		tui:'ㄊㄨㄟ',
		tun:'ㄊㄨㄣ',
		tuo:'ㄊㄨㄛ',
		wa:'ㄨㄚ',
		wai:'ㄨㄞ',
		wan:'ㄨㄢ',
		wang:'ㄨㄤ',
		wei:'ㄨㄟ',
		wen:'ㄨㄣ',
		weng:'ㄨㄥ',
		wo:'ㄨㄛ',
		wu:'ㄨ',
		xi:'ㄒㄧ',
		xia:'ㄒㄧㄚ',
		xian:'ㄒㄧㄢ',
		xiang:'ㄒㄧㄤ',
		xiao:'ㄒㄧㄠ',
		xie:'ㄒㄧㄝ',
		xin:'ㄒㄧㄣ',
		xing:'ㄒㄧㄥ',
		xiong:'ㄒㄩㄥ',
		xiu:'ㄒㄧㄡ',
		xu:'ㄒㄩ',
		xuan:'ㄒㄩㄢ',
		xue:'ㄒㄩㄝ',
		xun:'ㄒㄩㄣ',
		ya:'ㄧㄚ',
		yan:'ㄧㄢ',
		yang:'ㄧㄤ',
		yao:'ㄧㄠ',
		ye:'ㄧㄝ',
		yi:'ㄧ',
		yin:'ㄧㄣ',
		ying:'ㄧㄥ',
		yong:'ㄩㄥ',
		you:'ㄧㄡ',
		yu:'ㄩ',
		yuan:'ㄩㄢ',
		yue:'ㄩㄝ',
		yun:'ㄩㄣ',
		za:'ㄗㄚ',
		zai:'ㄗㄞ',
		zan:'ㄗㄢ',
		zang:'ㄗㄤ',
		zao:'ㄗㄠ',
		ze:'ㄗㄜ',
		zei:'ㄗㄟ',
		zen:'ㄗㄣ',
		zeng:'ㄗㄥ',
		zha:'ㄓㄚ',
		zhai:'ㄓㄞ',
		zhan:'ㄓㄢ',
		zhang:'ㄓㄤ',
		zhao:'ㄓㄠ',
		zhe:'ㄓㄜ',
		zhei:'ㄓㄟ',
		zhen:'ㄓㄣ',
		zheng:'ㄓㄥ',
		zhi:'ㄓ',
		zhong:'ㄓㄨㄥ',
		zhou:'ㄓㄡ',
		zhu:'ㄓㄨ',
		zhua:'ㄓㄨㄚ',
		zhuai:'ㄓㄨㄞ',
		zhuan:'ㄓㄨㄢ',
		zhuang:'ㄓㄨㄤ',
		zhui:'ㄓㄨㄟ',
		zhun:'ㄓㄨㄣ',
		zhuo:'ㄓㄨㄛ',
		zi:'ㄗ',
		zong:'ㄗㄨㄥ',
		zou:'ㄗㄡ',
		zu:'ㄗㄨ',
		zuan:'ㄗㄨㄢ',
		zui:'ㄗㄨㄟ',
		zun:'ㄗㄨㄣ',
		zuo:'ㄗㄨㄛ'
	};

	/* A reference lookup to convert pinyin with a tone into pinyin without */
	var __pinyinToneLookup = {
		'ā':'a1',
		'á':'a2',
		'ǎ':'a3',
		'à':'a4',
		'ē':'e1',
		'é':'e2',
		'ě':'e3',
		'è':'e4',
		'ō':'o1',
		'ó':'o2',
		'ǒ':'o3',
		'ò':'o4',
		'ī':'i1',
		'í':'i2',
		'ǐ':'i3',
		'ì':'i4',
		'ū':'u1',
		'ú':'u2',
		'ǔ':'u3',
		'ù':'u4',
		'ü':'v1',
		'ǘ':'v2',
		'ǚ':'v3',
		'ǜ':'v4',
		'ń':'n2',
		'ň':'n3',
		'':'m2'
	}

	/* The possible tones to use while rendering zhuyin. */
	var __zhuyinTones = '  ˊˇˋ˙';

	/* A list of chinese symbols that we have no intention of trying to write pinyin or zhuyin for. */
	var __chineseGrammarTokens = '，。 《》／？ ；「：『」』';

	/* A list of chinese symbols that we have no intention of trying to write pinyin or zhuyin for. */
	var __chineseGrammarTokens = '，。 《》／？ ；「：『」』';

	/* Joseph Myer's md5() algorithm wrapped in a self-invoked function to prevent
	 * namespace polution.
	 *
	 * http://www.myersdaily.org/joseph/javascript/md5-text.html
	 */
	var md5 = (function() {

		function md5cycle(x, k) {
			var a = x[0],
				b = x[1],
				c = x[2],
				d = x[3];

			a = ff(a, b, c, d, k[0], 7, -680876936);
			d = ff(d, a, b, c, k[1], 12, -389564586);
			c = ff(c, d, a, b, k[2], 17, 606105819);
			b = ff(b, c, d, a, k[3], 22, -1044525330);
			a = ff(a, b, c, d, k[4], 7, -176418897);
			d = ff(d, a, b, c, k[5], 12, 1200080426);
			c = ff(c, d, a, b, k[6], 17, -1473231341);
			b = ff(b, c, d, a, k[7], 22, -45705983);
			a = ff(a, b, c, d, k[8], 7, 1770035416);
			d = ff(d, a, b, c, k[9], 12, -1958414417);
			c = ff(c, d, a, b, k[10], 17, -42063);
			b = ff(b, c, d, a, k[11], 22, -1990404162);
			a = ff(a, b, c, d, k[12], 7, 1804603682);
			d = ff(d, a, b, c, k[13], 12, -40341101);
			c = ff(c, d, a, b, k[14], 17, -1502002290);
			b = ff(b, c, d, a, k[15], 22, 1236535329);

			a = gg(a, b, c, d, k[1], 5, -165796510);
			d = gg(d, a, b, c, k[6], 9, -1069501632);
			c = gg(c, d, a, b, k[11], 14, 643717713);
			b = gg(b, c, d, a, k[0], 20, -373897302);
			a = gg(a, b, c, d, k[5], 5, -701558691);
			d = gg(d, a, b, c, k[10], 9, 38016083);
			c = gg(c, d, a, b, k[15], 14, -660478335);
			b = gg(b, c, d, a, k[4], 20, -405537848);
			a = gg(a, b, c, d, k[9], 5, 568446438);
			d = gg(d, a, b, c, k[14], 9, -1019803690);
			c = gg(c, d, a, b, k[3], 14, -187363961);
			b = gg(b, c, d, a, k[8], 20, 1163531501);
			a = gg(a, b, c, d, k[13], 5, -1444681467);
			d = gg(d, a, b, c, k[2], 9, -51403784);
			c = gg(c, d, a, b, k[7], 14, 1735328473);
			b = gg(b, c, d, a, k[12], 20, -1926607734);

			a = hh(a, b, c, d, k[5], 4, -378558);
			d = hh(d, a, b, c, k[8], 11, -2022574463);
			c = hh(c, d, a, b, k[11], 16, 1839030562);
			b = hh(b, c, d, a, k[14], 23, -35309556);
			a = hh(a, b, c, d, k[1], 4, -1530992060);
			d = hh(d, a, b, c, k[4], 11, 1272893353);
			c = hh(c, d, a, b, k[7], 16, -155497632);
			b = hh(b, c, d, a, k[10], 23, -1094730640);
			a = hh(a, b, c, d, k[13], 4, 681279174);
			d = hh(d, a, b, c, k[0], 11, -358537222);
			c = hh(c, d, a, b, k[3], 16, -722521979);
			b = hh(b, c, d, a, k[6], 23, 76029189);
			a = hh(a, b, c, d, k[9], 4, -640364487);
			d = hh(d, a, b, c, k[12], 11, -421815835);
			c = hh(c, d, a, b, k[15], 16, 530742520);
			b = hh(b, c, d, a, k[2], 23, -995338651);

			a = ii(a, b, c, d, k[0], 6, -198630844);
			d = ii(d, a, b, c, k[7], 10, 1126891415);
			c = ii(c, d, a, b, k[14], 15, -1416354905);
			b = ii(b, c, d, a, k[5], 21, -57434055);
			a = ii(a, b, c, d, k[12], 6, 1700485571);
			d = ii(d, a, b, c, k[3], 10, -1894986606);
			c = ii(c, d, a, b, k[10], 15, -1051523);
			b = ii(b, c, d, a, k[1], 21, -2054922799);
			a = ii(a, b, c, d, k[8], 6, 1873313359);
			d = ii(d, a, b, c, k[15], 10, -30611744);
			c = ii(c, d, a, b, k[6], 15, -1560198380);
			b = ii(b, c, d, a, k[13], 21, 1309151649);
			a = ii(a, b, c, d, k[4], 6, -145523070);
			d = ii(d, a, b, c, k[11], 10, -1120210379);
			c = ii(c, d, a, b, k[2], 15, 718787259);
			b = ii(b, c, d, a, k[9], 21, -343485551);

			x[0] = add32(a, x[0]);
			x[1] = add32(b, x[1]);
			x[2] = add32(c, x[2]);
			x[3] = add32(d, x[3]);

		}

		function cmn(q, a, b, x, s, t) {
			a = add32(add32(a, q), add32(x, t));
			return add32((a << s) | (a >>> (32 - s)), b);
		}

		function ff(a, b, c, d, x, s, t) {
			return cmn((b & c) | ((~b) & d), a, b, x, s, t);
		}

		function gg(a, b, c, d, x, s, t) {
			return cmn((b & d) | (c & (~d)), a, b, x, s, t);
		}

		function hh(a, b, c, d, x, s, t) {
			return cmn(b ^ c ^ d, a, b, x, s, t);
		}

		function ii(a, b, c, d, x, s, t) {
			return cmn(c ^ (b | (~d)), a, b, x, s, t);
		}

		function md51(s) {
			txt = '';
			var n = s.length,
				state = [1732584193, -271733879, -1732584194, 271733878],
				i;
			for (i = 64; i <= s.length; i += 64) {
				md5cycle(state, md5blk(s.substring(i - 64, i)));
			}
			s = s.substring(i - 64);
			var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			for (i = 0; i < s.length; i++)
				tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
			tail[i >> 2] |= 0x80 << ((i % 4) << 3);
			if (i > 55) {
				md5cycle(state, tail);
				for (i = 0; i < 16; i++) tail[i] = 0;
			}
			tail[14] = n * 8;
			md5cycle(state, tail);
			return state;
		}

		/* there needs to be support for Unicode here,
		 * unless we pretend that we can redefine the MD-5
		 * algorithm for multi-byte characters (perhaps
		 * by adding every four 16-bit characters and
		 * shortening the sum to 32 bits). Otherwise
		 * I suggest performing MD-5 as if every character
		 * was two bytes--e.g., 0040 0025 = @%--but then
		 * how will an ordinary MD-5 sum be matched?
		 * There is no way to standardize text to something
		 * like UTF-8 before transformation; speed cost is
		 * utterly prohibitive. The JavaScript standard
		 * itself needs to look at this: it should start
		 * providing access to strings as preformed UTF-8
		 * 8-bit unsigned value arrays.
		 */
		function md5blk(s) { /* I figured global was faster.   */
			var md5blks = [],
				i; /* Andy King said do it this way. */
			for (i = 0; i < 64; i += 4) {
				md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
			}
			return md5blks;
		}

		var hex_chr = '0123456789abcdef'.split('');

		function rhex(n) {
			var s = '',
				j = 0;
			for (; j < 4; j++)
				s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
			return s;
		}

		function hex(x) {
			for (var i = 0; i < x.length; i++)
				x[i] = rhex(x[i]);
			return x.join('');
		}

		function md5(s) {
			return hex(md51(s));
		}

		/* this function is much faster,
			so if possible we use it. Some IEs
			are the only ones I know of that
			need the idiotic second function,
			generated by an if clause.
		*/

		function add32(a, b) {
			return (a + b) & 0xFFFFFFFF;
		}

		if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
			function add32(x, y) {
				var lsw = (x & 0xFFFF) + (y & 0xFFFF),
					msw = (x >> 16) + (y >> 16) + (lsw >> 16);
				return (msw << 16) | (lsw & 0xFFFF);
			}
		}
		return md5;
	})();


	/* Accepts a string or an array of Chinese characters.
	 * Returns a unique string hex representing the URI encoded Chinese chars.
	 * 	- Done like this since MD5ing unicode chars on the client is hard.
	 */
	var md5ChineseText = function(input) {
		var payload;
		// ensure our working payload is in string form
		if (typeof input == 'object') {
			payload = input.join('');
		} else {
			payload = input;
		}
		// now process input
		return md5(encodeURI(payload));
	}


	/* Lookup pinyin tone. Use the lookup to find a friendly character for the pinyin and a tone number
	 * for the programmer.
	 */
	var getPinyinTone = function(input) {
		for (var pinyin in __pinyinToneLookup) {
			if (input.indexOf(pinyin) > -1) {
				var tone = __pinyinToneLookup[pinyin].split('');
				return [
					input.replace(pinyin, tone[0]),
					parseInt(tone[1])
				];
			}
		}
		// if it's not found in the lookup table, then it must be a first flat tone,, which is often not
		// 	included in the written form of pinyin when using shorthand.
		return [input, 1];
	}


	/* Accepts an array of, or string of space separated pinyin strings, to be converted into the
	 * zhuyin equivalants.
	 * Returns: an array of zhuyin strings for each respective pinyin input
	 * Example:
	 * 	console.log(pinyinToZhuyin(["zhū", "niú", "jī", "yáng"]));
	 * 	>> [["ㄓㄨ","1"],["ㄋㄧㄡ","2"],["ㄐㄧ","1"],["ㄧㄤ","2"]]
	 */
	var pinyinToZhuyin = function(input) {
		var payload;
		// ensure our working payload is in array from
		if (typeof input == 'string') {
			payload = input.split(' ');
		} else {
			payload = input;
		}
		// now start processing input
		// __pinyinToZhuyinLookup     __pinyinToneLookup
		var output = [];
		for (var i = 0; i < payload.length; i++) {
			var tone = getPinyinTone(payload[i]);
			var zhuyin = __pinyinToZhuyinLookup[tone[0]];
			if (zhuyin == undefined)
				zhuyin = null;
			output.push([zhuyin, __zhuyinTones[tone[1]]]);
		}
		// return to caller
		return output;
	}

	var api = {
		// converting Pinyin text to Zhuyin characters (used in R.O.C.)
		pinyinToZhuyin: pinyinToZhuyin,
			p2z: pinyinToZhuyin,
			拼音到注音: pinyinToZhuyin,
	};

	return api;
});


/* Decide how to load this code.
 * If exports is set, then this is likely NodeJS else this must be clientside.
 *   If RequireJS is not detected, a global variable called 'cjst' will be created.
 *
 */
if (exports) {
	exports.cjst = module();
} else {
	if (window['define'] !== undefined) {
		define(module);
	} else {
		window['cjst'] = module();
	}
	if (typeof define === 'function' && define.amd) {
		define('cjst', [], module);
	} else {
		window.cjst = module();
	}
}

})(typeof window === 'undefined' ? null : window, typeof exports === 'undefined' ? null : exports);
