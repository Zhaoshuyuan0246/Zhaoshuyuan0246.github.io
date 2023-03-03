// poem
var words=[
    '天子呼来不上船','自称臣是酒中仙',
    '开琼筵以坐花','飞羽觞而醉月',
    '夫天地者','万物之逆旅也','光阴者','百代之过客也','而浮生若梦','为欢几何？',
    '麻姑垂两鬓，一半已成霜','天公见玉女，大笑亿千场。',
    '但为君故，沉吟至今。',
    '青青子衿，悠悠我心',
    '关山难越，谁悲失路之人','萍水相逢，尽是他乡之客','怀帝阍而不见，奉宣室以何年？',
    '哀吾生之须臾，羡长江之无穷',
    '人生代代无穷已，江月年年望相似。',
    '天高地迥，觉宇宙之无穷','兴尽悲来，识盈虚之有数。',
    '海客谈瀛洲，烟涛微茫信难求','越人语天姥，云霞明灭或可睹','天姥连天向天横，势拔五岳掩赤城','天台四万八千丈，对此欲倒东南倾。',
    '忽魂悸以魄动，恍惊起而长嗟','惟觉时之枕席，失向来之烟霞。',
    '梦里不知身是客，一晌贪欢','独自莫凭栏，无限江山',
    '往事已成空，还如一梦中',
    '柔情似水，佳期如梦，忍顾鹊桥归路','两情若是久长时，又岂在朝朝暮暮。',
    '庄生晓梦迷蝴蝶，望帝春心托杜鹃',
    '去日苦多','慨当以慷，忧思难忘',
    '风一更，雪一更，聒碎乡心梦不成，故园无此声。',
    '昆山玉碎凤凰叫，芙蓉泣露香兰笑',
    '非关宋玉有微辞，却是襄王梦觉迟。',
    '亲曾见，全胜宋玉，想像赋高唐。',
    '宋玉秋来续楚词，阴铿官漫足闲诗。',
    '此夕何年，来赋宋玉高唐。',
    '当时宋玉悲感，向此临水与登山',
    '有人说我胖了，我完全不相信，你相信不相信？','你现在生得是不是还像我们上次会面时一样？也许你实在很丑也说不定，但我总觉得你比一切的美都美','我完全找不出你有任何可以反对的地方，我甘心为你发痴。',
    '要是世上只有我们两个人多么好，我一定要把你欺负得哭不出来。',
    '我找到了你，便像是找到了我真的自己','如果没有你，即使我爱了一百个人，或有一百个人爱我，我的灵魂也仍将永远彷徨着','你是unique（独一无二）的。我将永远永远多么多么的欢喜你。',
    '自能窥宋玉，何必恨王昌。',
    '驿寄梅花，鱼传尺素。砌成此恨无重数。',
    '雾失楼台，月迷津渡。桃源望断无寻处',
    '还有自在飞花轻似梦，无边丝雨细如愁',
    '妙手写徽真。水翦双眸点绛唇','疑是昔年窥宋玉，东邻','只露墙头一半身。往事已酸辛','谁记当年翠黛颦。尽道有些堪恨处，无情','任是无情也动人。'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
    //   setTimeout(function(){
    //     textone.innerHTML = '从前从前,有个人爱你很久';
    //     texttwo.innerHTML = '但偏偏，风渐渐';
    //     textthree.innerHTML = '把距离吹的好远';
    //   },112500)


 
