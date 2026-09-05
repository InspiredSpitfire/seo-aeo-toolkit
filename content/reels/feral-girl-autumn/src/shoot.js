const {chromium} = require('/opt/node22/lib/node_modules/playwright');
const path=require('path'), fs=require('fs');
(async()=>{
  const mode = process.argv[2] || 'preview';
  const dir  = __dirname;
  const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
                                   args:['--no-sandbox','--font-render-hinting=none','--force-color-profile=srgb']});
  const p = await b.newPage({viewport:{width:1080,height:1920}, deviceScaleFactor:1});
  await p.goto('file://'+path.join(dir,'reel.html'));
  await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(400); await p.evaluate(()=>window.fitAll());
  await p.waitForTimeout(600);
  if(mode==='preview'){
    fs.mkdirSync(path.join(dir,'preview'),{recursive:true});
    for(const t of [0.6,2.2,3.9,5.35,6.6,15.0,22.3,34.5,41.6]){
      await p.evaluate(v=>window.render(v), t);
      await p.screenshot({path:path.join(dir,'preview',`t${String(t).replace('.','_')}.jpg`),type:'jpeg',quality:82});
    }
    console.log('preview done');
  } else {
    const FPS=30, DUR=await p.evaluate(()=>window.DUR), N=Math.round(DUR*FPS);
    fs.mkdirSync(path.join(dir,'frames'),{recursive:true});
    const t0=Date.now();
    for(let i=0;i<N;i++){
      await p.evaluate(v=>window.render(v), i/FPS);
      await p.screenshot({path:path.join(dir,'frames',String(i).padStart(5,'0')+'.jpg'),type:'jpeg',quality:88});
      if(i%150===0) console.log(i,'/',N, ((Date.now()-t0)/1000).toFixed(0)+'s');
    }
    console.log('frames done',N);
  }
  await b.close();
})();
