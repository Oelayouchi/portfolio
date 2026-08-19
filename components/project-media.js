'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PdfViewer from './pdf-viewer';
import { useLanguage } from './language-context';

const PROJECT_ASSETS = {
  'tolerance-aux-fautes': { imageCount: 5, report: '/projects/tolerance-aux-fautes/report/rapport.pdf' },
  'balance-numerique': {
    imageCount: 5,
    report: '/projects/balance-numerique/report/rapport.pdf',
    images: ['/projects/balance-numerique/images/image-01.png','/projects/balance-numerique/images/image-02.png','/projects/balance-numerique/images/image-03.png','/projects/balance-numerique/images/image-04.png','/projects/balance-numerique/images/image-05.png'],
  },
  'station-meteo': {
    imageCount: 5,
    report: '/projects/station-meteo/report/rapport.pdf',
    images: ['/projects/station-meteo/images/image-01.png','/projects/station-meteo/images/image-02.png','/projects/station-meteo/images/image-03.png','/projects/station-meteo/images/image-04.png','/projects/station-meteo/images/image-05.png'],
  },
  'convoyeur-ascenseur': { imageCount: 5, report: '/projects/convoyeur-ascenseur/report/rapport.pdf' },
  'parking-vhdl': { imageCount: 5, report: '/projects/parking-vhdl/report/rapport.pdf' },
  'machines-electriques': { imageCount: 5, report: '/projects/machines-electriques/report/rapport.pdf' },
};

function ProjectVisual({ src, number, title, enlarged = false }) {
  if (!src) return <div className="projectPlaceholder" aria-label={`Emplacement image ${number}`}><span>{number}</span></div>;
  return <div className={`projectRealImageWrap${enlarged ? ' enlarged' : ''}`}><img className="projectRealImage" src={src} alt={`${title} — image ${number}`} loading={enlarged ? 'eager' : 'lazy'} /></div>;
}

export default function ProjectMedia({ slug, title }) {
  const { t } = useLanguage();
  const config = PROJECT_ASSETS[slug] || { imageCount: 5, report: `/projects/${slug}/report/rapport.pdf` };
  const images = config.images || [];
  const imageCount = images.length || config.imageCount || 5;
  const [active, setActive] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const intervalRef = useRef(null);
  const stopRotation = () => { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } };
  const startRotation = () => { stopRotation(); intervalRef.current = setInterval(() => setActive((current) => (current + 1) % imageCount), 1100); };
  useEffect(() => () => stopRotation(), []);
  const previous = () => setActive((active - 1 + imageCount) % imageCount);
  const next = () => setActive((active + 1) % imageCount);
  const activeImage = images[active];

  const imageModal = isZoomed && typeof document !== 'undefined' ? createPortal(
    <div className="projectModal" role="dialog" aria-modal="true" aria-label={`Image agrandie de ${title}`} onClick={() => setIsZoomed(false)}>
      <div className="projectModalContent imageModal" onClick={(event) => event.stopPropagation()}>
        <button className="projectModalClose" type="button" onClick={() => setIsZoomed(false)} aria-label={t('close')}>×</button>
        <ProjectVisual src={activeImage} number={active + 1} title={title} enlarged />
      </div>
    </div>,
    document.body
  ) : null;

  const reportModal = reportOpen && typeof document !== 'undefined' ? createPortal(
    <div className="projectModal" role="dialog" aria-modal="true" aria-label={`${t('projectReport')} ${title}`} onClick={() => setReportOpen(false)}>
      <div className="projectModalContent reportModal" onClick={(event) => event.stopPropagation()}>
        <div className="reportModalHeader">
          <div><span>{t('projectReport')}</span><strong>{title}</strong></div>
          <button className="projectModalClose" type="button" onClick={() => setReportOpen(false)} aria-label={t('close')}>×</button>
        </div>
        <PdfViewer src={config.report} title={`${t('projectReport')} ${title}`} />
      </div>
    </div>,
    document.body
  ) : null;

  return <div className="projectMedia">
    <div className="projectMediaHeader"><button className="projectReportButton" type="button" onClick={() => setReportOpen(true)}><span aria-hidden="true">◉</span>{t('viewReport')}</button></div>
    <div className="projectCarousel" onMouseEnter={startRotation} onMouseLeave={stopRotation}>
      <button className="projectCarouselArrow previous" type="button" onClick={previous} aria-label="Image précédente">‹</button>
      <button className="projectImageButton" type="button" onClick={() => setIsZoomed(true)} aria-label={`Agrandir l'image ${active + 1} de ${title}`}>
        <ProjectVisual src={activeImage} number={active + 1} title={title} /><span className="projectZoomHint">Agrandir</span>
      </button>
      <button className="projectCarouselArrow next" type="button" onClick={next} aria-label="Image suivante">›</button>
    </div>
    <div className="projectDots" aria-label="Navigation des images">{Array.from({ length: imageCount }, (_, index) => <button key={index} type="button" className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Afficher l'image ${index + 1}`} />)}</div>
    {imageModal}
    {reportModal}
  </div>;
}
