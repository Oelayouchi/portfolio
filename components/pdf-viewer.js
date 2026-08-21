'use client';

import { useEffect, useRef, useState } from 'react';

const PDFJS_URL='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
const PDFJS_WORKER='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

let loaderPromise;
export function loadPdfJs(){
  if(typeof window==='undefined')return Promise.reject(new Error('Browser only'));
  if(window.pdfjsLib)return Promise.resolve(window.pdfjsLib);
  if(loaderPromise)return loaderPromise;
  loaderPromise=new Promise((resolve,reject)=>{
    const existing=document.querySelector(`script[src="${PDFJS_URL}"]`);
    const done=()=>{
      if(!window.pdfjsLib){reject(new Error('PDF.js unavailable'));return;}
      window.pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS_WORKER;
      resolve(window.pdfjsLib);
    };
    if(existing){
      if(window.pdfjsLib){done();return;}
      existing.addEventListener('load',done,{once:true});
      existing.addEventListener('error',()=>reject(new Error('PDF.js load failed')),{once:true});
      return;
    }
    const script=document.createElement('script');
    script.src=PDFJS_URL;
    script.async=true;
    script.onload=done;
    script.onerror=()=>reject(new Error('PDF.js load failed'));
    document.head.appendChild(script);
  });
  return loaderPromise;
}

export function preloadPdfJs(){
  if(typeof window==='undefined')return;
  loadPdfJs().catch(()=>{});
}

function waitForIdle(){
  return new Promise(resolve=>{
    if(typeof window==='undefined'){resolve();return;}
    if('requestIdleCallback' in window){
      window.requestIdleCallback(()=>resolve(),{timeout:350});
    }else{
      window.setTimeout(resolve,32);
    }
  });
}

export default function PdfViewer({src,title}){
  const hostRef=useRef(null);
  const renderId=useRef(0);
  const [status,setStatus]=useState('loading');

  useEffect(()=>{
    let cancelled=false;
    let pdfDoc;

    const renderPage=async(pdfjs,pageNumber,width,current)=>{
      const host=hostRef.current;
      if(!host)return;
      const page=await pdfDoc.getPage(pageNumber);
      if(cancelled||current!==renderId.current)return;
      const base=page.getViewport({scale:1});
      const cssScale=width/base.width;
      const isSmallScreen=window.matchMedia?.('(max-width: 768px)').matches;
      const dpr=Math.min(window.devicePixelRatio||1,isSmallScreen?1.25:1.5);
      const viewport=page.getViewport({scale:cssScale*dpr});
      const canvas=document.createElement('canvas');
      canvas.className='pdfPageCanvas';
      canvas.width=Math.max(1,Math.floor(viewport.width));
      canvas.height=Math.max(1,Math.floor(viewport.height));
      canvas.style.width='100%';
      canvas.style.height='auto';
      canvas.setAttribute('aria-label',`${title} — page ${pageNumber}`);
      const ctx=canvas.getContext('2d',{alpha:false});
      await page.render({canvasContext:ctx,viewport}).promise;
      if(cancelled||current!==renderId.current)return;
      host.appendChild(canvas);
    };

    const render=async()=>{
      const host=hostRef.current;
      if(!host)return;
      const current=++renderId.current;
      setStatus('loading');
      host.replaceChildren();
      try{
        const pdfjs=await loadPdfJs();
        if(cancelled)return;
        pdfDoc=await pdfjs.getDocument({url:src,disableAutoFetch:false,disableStream:false}).promise;
        if(cancelled||current!==renderId.current)return;

        const width=Math.max(240,host.clientWidth-20);
        await renderPage(pdfjs,1,width,current);
        if(cancelled||current!==renderId.current)return;
        setStatus('ready');

        for(let pageNumber=2;pageNumber<=pdfDoc.numPages;pageNumber+=1){
          await waitForIdle();
          if(cancelled||current!==renderId.current)return;
          await renderPage(pdfjs,pageNumber,width,current);
        }
      }catch(error){
        if(cancelled)return;
        host.replaceChildren();
        setStatus('error');
      }
    };

    render();
    return()=>{
      cancelled=true;
      renderId.current+=1;
      try{pdfDoc?.destroy?.();}catch{}
    };
  },[src,title]);

  return <div className="projectReportViewport pdfCanvasViewport">
    {status==='loading'&&<div className="pdfViewerStatus" aria-live="polite">Chargement du PDF…</div>}
    {status==='error'&&<div className="pdfViewerStatus">Impossible d’afficher le PDF.</div>}
    <div className="pdfPages" ref={hostRef}/>
  </div>;
}
