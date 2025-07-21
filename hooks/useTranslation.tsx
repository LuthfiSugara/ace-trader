'use client'

import { useEffect, useState } from 'react'
import langEN from '@/lang/english.json';
import langID from '@/lang/indonesia.json';
import langJPN from '@/lang/japanese.json';
import langCHN from '@/lang/chinese.json';
import { getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const useTranslation = () => {
    const router = useRouter();

    let lang = getCookie('lang') ?? 'en';

    const [locales, setLocales] = useState<any>(langEN);

    const getTranslation = (key: string, objects?: any) => {
        objects = objects ?? {};
        if(Object.keys(objects).length > 0){
            let text = locales[key];
            for(let object in objects){
                text = text.replace('{'+object+'}', objects[object]);
            }
            return text;
        }else{
            return locales[key];
        }
    }

    const setLanguage = async(language = 'en') => {
        if(language === 'id'){
            setCookie('lang', 'id');
            setLocales(langID);
        }else if(language === 'jpn'){
            setCookie('lang', 'jpn');
            setLocales(langJPN);
        }else if(language === 'chn'){
            setCookie('lang', 'chn');
            setLocales(langCHN);
        }else{
            setCookie('lang', 'en');
            setLocales(langEN);
        }

        router.refresh();
    }
    
    useEffect(() => {
        setLanguage(String(lang));
    }, [lang]);

    return {
        translation: getTranslation,
        setLanguage: setLanguage,
    }
}

export default useTranslation