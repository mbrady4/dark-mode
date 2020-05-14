import useLocalStorage from './useLocalStorage.js';
import { useEffect } from 'react';

const useDarkMode = (value) => {
    const [darkModeValue, setDarkModeValue] = useLocalStorage('dark-mode', value);

    useEffect( () => {
        if (darkModeValue === true) {
            // add dark-mode to body element
            document.body.className += (' ' + 'dark-mode');
        }
        else {
            // remove dark-mode from body element
            document.body.className = document.body.className.replace('dark-mode', '');
        }
    }, [darkModeValue]) 

    return [darkModeValue, setDarkModeValue]
}

export default useDarkMode;