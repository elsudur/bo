(function() {
    'use strict';
    console.log('script bo.js loaded')

    let ln = document.createElement('link');
    ln.rel = 'stylesheet';
    ln.href = 'https://code.jquery.com/ui/1.14.1/themes/base/jquery-ui.css';
    document.head.appendChild(ln);
    
    let st = document.createElement('style');
    st.textContent = '.move{height:200px;width:200px;position:fixed;background:lime;}';
    document.head.appendChild(st);
    
    let sc = document.createElement('script');
    sc.type = 'text/javascript';
    sc.src = 'https://code.jquery.com/ui/1.14.1/jquery-ui.js';
    document.body.appendChild(sc);

    const body = $('body')
    body.append(`<div class='move'></div><div class='move'>`)
    let f = body.find('form')
    f.siblings('style').remove()
    f.css('display','none')

    //RENDERING
    let pasringHtml = (obj) =>{
        return `<${obj.el} ${obj.id ? `id="${obj.id}"` : ''} class='${obj.class|| ''}' ${obj.attr|| ''} style='${obj.style || ''}' >${obj.value}</${obj.el}>`
    }
    let toHtml = (obj) => {
        if(!obj) return
        if(!obj.length) return pasringHtml(obj)
        let rsp = '';
        for(let i = 0; i< obj.length; i++){
            rsp += pasringHtml(obj[i])
        }
        return rsp
    }
    let margerHtml = (o1, o2) => {
        return toHtml({...o1, value: toHtml(o2)})
    }
    let insertHtml = (selector, obj) => {
        if(typeof selector !== 'string') return
        $(selector).append(toHtml(obj))
    }
    const tunggu = (detik = 5) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, detik * 1000);
        });
    }
    const run = async () => {
        await tunggu(5)
        $('.move').draggable().resizable()
    }
    run()
})();
