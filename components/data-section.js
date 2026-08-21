'use client';

import { SectionLabel } from './ui';
import { useLanguage } from './language-context';

const copy={
fr:{label:'RECONVERSION VERS LE DATA ENGINEERING',title:'De l’ingénierie des systèmes au Data Engineering.',text:'Mon parcours d’ingénieur m’a appris à collecter, structurer et exploiter des données techniques pour comprendre des systèmes complexes et résoudre des problèmes concrets. Aujourd’hui, je mets cette expérience au service du Data Engineering en développant mes compétences en SQL, Python, Power BI, Excel et Power Query.',steps:[['Sources','API · Logs · IoT','Capteurs · Fichiers'],['Ingestion','Python','ETL · Connecteurs'],['Transformation','SQL · Power Query','Nettoyage · Agrégation'],['Stockage','Data Warehouse','Bases de données'],['Visualisation','Power BI','Tableaux de bord']]},
en:{label:'TRANSITION TO DATA ENGINEERING',title:'From systems engineering to Data Engineering.',text:'My engineering background taught me to collect, structure and use technical data to understand complex systems and solve real problems. Today, I apply this experience to Data Engineering while developing my skills in SQL, Python, Power BI, Excel and Power Query.',steps:[['Sources','API · Logs · IoT','Sensors · Files'],['Ingestion','Python','ETL · Connectors'],['Transformation','SQL · Power Query','Cleaning · Aggregation'],['Storage','Data Warehouse','Databases'],['Visualisation','Power BI','Dashboards']]},
ar:{label:'الانتقال نحو هندسة البيانات',title:'من هندسة الأنظمة إلى هندسة البيانات.',text:'علّمني مساري الهندسي جمع البيانات التقنية وتنظيمها واستغلالها لفهم الأنظمة المعقدة وحل المشاكل العملية. واليوم أوظف هذه الخبرة في هندسة البيانات مع تطوير مهاراتي في SQL وPython وPower BI وExcel وPower Query.',steps:[['المصادر','API · Logs · IoT','حساسات · ملفات'],['الإدخال','Python','ETL · موصلات'],['التحويل','SQL · Power Query','تنظيف · تجميع'],['التخزين','Data Warehouse','قواعد بيانات'],['التصور','Power BI','لوحات بيانات']]},
es:{label:'TRANSICIÓN HACIA DATA ENGINEERING',title:'De la ingeniería de sistemas al Data Engineering.',text:'Mi trayectoria como ingeniero me enseñó a recopilar, estructurar y utilizar datos técnicos para comprender sistemas complejos y resolver problemas concretos. Hoy aplico esta experiencia al Data Engineering desarrollando mis competencias en SQL, Python, Power BI, Excel y Power Query.',steps:[['Fuentes','API · Logs · IoT','Sensores · Archivos'],['Ingesta','Python','ETL · Conectores'],['Transformación','SQL · Power Query','Limpieza · Agregación'],['Almacenamiento','Data Warehouse','Bases de datos'],['Visualización','Power BI','Dashboards']]},
de:{label:'WECHSEL ZUM DATA ENGINEERING',title:'Von Systems Engineering zu Data Engineering.',text:'Mein Ingenieurhintergrund hat mich gelehrt, technische Daten zu erfassen, zu strukturieren und zu nutzen, um komplexe Systeme zu verstehen und konkrete Probleme zu lösen. Heute setze ich diese Erfahrung im Data Engineering ein und vertiefe SQL, Python, Power BI, Excel und Power Query.',steps:[['Quellen','API · Logs · IoT','Sensoren · Dateien'],['Ingestion','Python','ETL · Konnektoren'],['Transformation','SQL · Power Query','Bereinigung · Aggregation'],['Speicherung','Data Warehouse','Datenbanken'],['Visualisierung','Power BI','Dashboards']]}}
;

const images=['/data-pipeline/Sources.png','/data-pipeline/Ingestion.png','/data-pipeline/Transformation.png','/data-pipeline/Stockage.png','/data-pipeline/Visualisation.png'];
const tones=['sources','ingestion','transformation','storage','visualisation'];

export default function DataSection(){
  const{language}=useLanguage();
  const x=copy[language];
  return <section id="data" className="section shell dataPanel">
    <div className="dataPanelHeader">
      <SectionLabel>{x.label}</SectionLabel>
      <h2>{x.title}</h2>
      <p>{x.text}</p>
    </div>
    <div className="dataPipeline" aria-label="Data Engineering pipeline">
      {x.steps.map((step,index)=><div className="dataPipelineItemWrap" key={`${step[0]}-${index}`}>
        <article className={`dataPipelineCard ${tones[index]}`}>
          <div className="dataPipelineIconWrap"><img src={images[index]} alt="" loading="lazy"/></div>
          <span className="dataPipelineNumber">{String(index+1).padStart(2,'0')}</span>
          <h3>{step[0]}</h3>
          <div className="dataPipelineDivider"/>
          <p>{step[1]}</p>
          <p>{step[2]}</p>
        </article>
        {index<x.steps.length-1&&<div className="dataPipelineConnector" aria-hidden="true"><span/><b>›</b></div>}
      </div>)}
    </div>
  </section>;
}
