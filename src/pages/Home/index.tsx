import { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import logoUniceub from '../../assets/logo_uniceub.png';
import { useParams } from 'react-router-dom';

export default function Home() {
    let { language} = useParams<{language: string}>();
    const { i18n,t } = useTranslation('common');


    useEffect(() => {
        if (language === 'br' || language === 'en') {
            i18n.changeLanguage(language)
        }
    }, [language,i18n])

    return (
        <div>
            <div id='about' className='about'>
                <h1>{t('sections.about.hi')},</h1>
                <p>{t('sections.about.first')}</p>
                <p>{t('sections.about.second')}</p>
                <p>{t('sections.about.third')} </p>           
            </div>
            <div className='separator' />
            <h1 className='title'>{t('sections.experience.title')}</h1>
            <div id='experience' className='experience'>
                <p className='xp'>
                    <div className='title'>{t('date.months.july')} 2021 - {t('common.current')}</div>
                    <div className='body'>
                        <h2>CooperSystem</h2>
                        <p>{t('sections.experience.coopersystem')}</p>
                    </div>
                </p>
                <p className='xp'>
                    <div className='title'>{t('date.months.february')} 2021 - {t('common.current')}</div>
                    <div className='body'>
                        <h2>CYTEI</h2>
                        <p>{t('sections.experience.cytei')}</p>
                    </div>
                </p>            
                <div className='timeline' />
            </div>            
            <div className='separator' />
            <h1 className='title'>{t('sections.techskills.title')}</h1>
            <div id='techskills' className='techSkills'>
                <ul>
                    <li className='skill-90'>React.JS<span>{t('sections.techskills.level.advanced')}</span></li>                    
                    <li className='skill-80'>Javascript<span>{t('sections.techskills.level.advanced')}</span></li>
                    <li className='skill-100'>HTML<span>{t('sections.techskills.level.advanced')}</span></li>
                    <li className='skill-100'>CSS<span>{t('sections.techskills.level.advanced')}</span></li>
                    <li className='skill-20'>Typescript <span>{t('sections.techskills.level.basic')}</span></li>      
                </ul>
                <ul>                    
                    <li className='skill-70'>Node.js<span>{t('sections.techskills.level.advanced')}</span></li>
                    <li className='skill-70'>GraphQL<span>{t('sections.techskills.level.intermediary')}</span></li>
                    <li className='skill-80'>REST<span>{t('sections.techskills.level.advanced')}</span></li>
                    <li className='skill-50'>PHP<span>{t('sections.techskills.level.advanced')}</span></li>
                    <li className='skill-60'>Python <span>{t('sections.techskills.level.intermediary')}</span></li>
                </ul>
                <ul>                
                    <li className='skill-60'>Docker<span>{t('sections.techskills.level.intermediary')}</span></li>
                    <li className='skill-90'>Jenkins<span>{t('sections.techskills.level.advanced')}</span></li>
                    <li className='skill-90'>Git<span>{t('sections.techskills.level.advanced')}</span></li>
                    <li className='skill-90'>Wordpress <span>{t('sections.techskills.level.advanced')}</span></li>
                    <li className='skill-50'>MongoDB <span>{t('sections.techskills.level.intermediary')}</span></li>
                </ul>             
            </div>
            <div className='separator' />
            <h1 id='academic' className='title'>{t('sections.academic.title')}</h1>
            <div className='academic'>
                <img src={logoUniceub} alt="logo-uniceub" />
                <h3>{t('sections.academic.computerscience', { university: 'UniCEUB' })}</h3>
                <p><b>{t('sections.academic.graduation')}</b> <br /> Jul/2021 - Dez/2023</p>
            </div>
            <div className='separator' />
            <h1 className='title'>{t('sections.language.title')}</h1>
            <div id='language' className='language'>
                <div>
                    <h3>{t('sections.language.portuguese')}</h3>
                    <p><b>{t('sections.language.native')}</b></p>
                </div>
                <div>
                    <h3>{t('sections.language.english')}</h3>
                    <p><b>{t('sections.language.intermediary')}</b></p>
                </div>
            </div>
            <div className='separator' />
            <h1 className='title'>{t('sections.portfolio.title')}</h1>
            <div id='portfolio' className='portfolio'>
                <div>                                   
                    <p>{t('sections.portfolio.projeto')}</p>
                </div>            
            </div>
        </div>
    )
}
