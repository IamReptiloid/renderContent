import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setParams,setInvalidPath, setValidPath, setValidValue } from '../store/reducer/contentReducer';
import {isValidPath, normalizePatn} from '../utils/index';
import { components } from '../const/components';
import '../style/Task.scss';

function Task() {
    const pathInput = useRef();
    const valueInput = useRef();
    const dispatch = useDispatch();
    const content = useSelector(state => state.content.content)
    const isValidPathState = useSelector(state => state.content.pathValid)
    const isValidValueState = useSelector(state => state.content.valueValid)

    function apply() {
        const newValue = valueInput.current.value;
        const path = normalizePatn(pathInput.current.value);

        if (isValidPath(path)) {
            dispatch(setValidPath())
            dispatch(setParams({path, newValue}))
        } else {
            dispatch(setInvalidPath())
            dispatch(setValidValue())
        }
        
    }

    function getElementTree(content) {
        return (
            content.map((el, i) => {
                const props = el.props || {};
                const isNested = Object.keys(el).some((key) => Array.isArray(el[key]))
                if (isNested) {
                    const blockСontent = getElementTree(el.content);
                    return components[el.type](props, i, blockСontent)
                }
                return components[el.type](props, i)
            })
        )

    }

    return (
        <div className="task">
            <div className="task__form">
                <label  className="task__label">
                    Путь
                    <input 
                        ref={pathInput} 
                        type="text" 
                        className={isValidPathState? "task__input" : "task__input error"}
                    /> 
                </label>

                <label className="task__label">
                    Новое значение
                    <input 
                        ref={valueInput} 
                        type="text" 
                        className={isValidValueState? "task__input" : "task__input error"}
                    />
                </label>

                <button onClick={apply} className="task__button">Применить</button>
            </div>
            <div className="task__board" data-testid="board">
                {getElementTree(content)}
            </div>
        </div>
    );
}

export default Task;