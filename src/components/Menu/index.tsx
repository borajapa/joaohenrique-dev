import React, { ReactElement } from 'react'
import { Link } from "react-router-dom";
import HeaderMenu from './HeaderMenu';
import { useTranslation } from "react-i18next";

import flagBrazil from "../../assets/brazil_flag.png"
import flagUsa from "../../assets/usa_flag.png"
interface Props {
    
}

export default function Menu({}: Props): ReactElement {
  const { t, i18n } = useTranslation('common');

    const onClick = (a: any) => {
      const section = document.querySelector( '#academic' );
      if(section){
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      }
        return false;
    }
    return (
        <div className='leftMenu'>
          <div className='flags'>
                <span onClick={() => i18n.changeLanguage('br')}><img src={flagBrazil} alt='flag-brazil' width='20px' /></span>
                <span onClick={() => i18n.changeLanguage('en')}><img src={flagUsa} alt='flag-usa' width='20px' /></span>
            </div>
            <HeaderMenu />
             <nav>
               <ul>
                 <li>
                   <Link to="#sobre">{t('sections.about.title')}</Link>
                 </li>
                 <li>
                   <Link to="#experiencia-profissional" onClick={onClick}>{t('sections.experience.title')}</Link>
                 </li>
                 <li>
                   <Link to="#conhecimentos-tecnicos">{t('sections.techskills.title')}</Link>
                 </li>
                 <li>
                   <Link to="#formacao-academica">{t('sections.academic.title')}</Link>
                 </li>
                 <li>
                   <Link to="#idiomas">{t('sections.language.title')}</Link>
                 </li>
                 <li>
                   <Link to="#portfolio">{t('sections.portfolio.title')}</Link>
                 </li>
               </ul>
             </nav>
        </div>
    )
}
