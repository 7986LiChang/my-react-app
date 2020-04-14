/**
 * @file useContext.js
 * @author: cdlichang1
 * @describe: useContext hook使用 context值变化时重新渲染
 * @create: 2020-04-14 16:31
 */
import React, {useContext} from 'react';

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
};

const ThemeContext = React.createContext(themes.light);

/**
 * 首先使用React.createContext创建1个上下文context对象，传入默认值
 * 然后在上层组件中使用<MyContext.Provider>为下层组件提供context，并通过props value传入，value必传
 * 在下层组件中通过useContext(MyContext)引入
 * @returns {*}
 * @constructor
 */
const CounterUseContext = () => {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    )
};

const Toolbar = () => {
    return (
        <div>
            <ThemedButton />
        </div>
    )
};

const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            I am styled by theme context!
        </button>
    )
};

export {
    CounterUseContext
}