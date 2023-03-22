import { useState, useEffect } from "react";


import style from './App.module.css'

export const Tab = function ({ children, activeTab }) {



    const [active, setActive] = useState(activeTab);

    /*useEffect(() =>{
        setActive(active)
    },[active])*/

    return (

        <div>
            <nav>
                {children.map((tab, index) =>
                    <button
                        className={tab.props.panelColor === 'red' ? style.Red : tab.props.panelColor === 'magenta' ? style.Magenta : style.Brown}
                        onClick={() => setActive(index)}

                        key={index}>{tab.props.title}</button>)}
            </nav>

            {children[active]}
        </div>
    );
}

Tab.Panel = function ({ children, panelColor }) {
    return <p className={panelColor === 'red' ? style.Red : panelColor === 'magenta' ? style.Magenta : style.Brown}>{children}</p>
}