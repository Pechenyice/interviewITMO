import React, { MouseEventHandler, useState } from "react";
import SVGManager from "../../../SVGManager";
import styles from './Modal.module.css';
import { CSSTransition } from 'react-transition-group';

interface IProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface IName {
    error: boolean,
    errorText: string,
    value: string
}

interface IMail {
    error: boolean,
    errorText: string,
    value: string
}

interface IValidation {
    name: IName,
    mail: IMail,
    description: string
}

const Modal: React.FC<IProps> = (props) => {

    function handleActiveZone(e: any): void {
        e.stopPropagation();
    }

    const initialValue: IValidation = {
        name: {
            error: false,
            errorText: '',
            value: ''
        },
        mail: {
            error: false,
            errorText: '',
            value: ''
        },
        description: ''
    }

    const [state, setState] = useState(initialValue);

    const [success, setSuccess] = useState(false);

    function checkValid() : boolean {
        if (!state.name.value) {
            setState(
                Object.assign({}, state, {
                    name: Object.assign(
                        {}, state.name, {error: true, errorText: 'Введите имя!'}
                    )
                }
                )
            );
            return false;
        }

        if (!state.mail.value) {
            setState(
                Object.assign({}, state, {
                    mail: Object.assign(
                        {}, state.mail, {error: true, errorText: 'Введите почту!'}
                    )
                }
                )
            );
            return false;
        }

        if (
            !state.mail.value.includes('@') ||
            !state.mail.value.includes('.') ||
            !state.mail.value.split('@')[0] || 
            !state.mail.value.split('@')[1] ||
            !state.mail.value.split('.')[0] || 
            !state.mail.value.split('.')[1]
        ) {
            alert('asd')
            setState(
                Object.assign({}, state, {
                    mail: Object.assign(
                        {}, state.mail, {error: true, errorText: 'Введите правильную почту!'}
                    )
                }
                )
            );
            return false;
        }

        return true;
    }

    function handleValidation() : void {
        const check = checkValid();
        setSuccess(check);
    }

    function handleNameChange(e: any): void {
        setSuccess(false);
        setState(
            Object.assign({}, state, {
                name: Object.assign(
                    {}, state.name, {value: e.target.value}
                )
            }
            )
        );
    }

    function handleMailChange(e: any): void {
        setSuccess(false);
        setState(
            Object.assign({}, state, {
                mail: Object.assign(
                    {}, state.mail, {value: e.target.value}
                )
            }
            )
        );
    }

    function handleMailBlur(): void {
        const value = state.mail.value;
        if (!value) return;
        if (value.split('@').length < 2) {
            setState(
                Object.assign({}, state, {
                    mail: Object.assign(
                        {}, state.mail, {value: value + '@itmo.ru'}
                    )
                }
                )
            );
        }
    }

    function handleDescChange(e: any): void {
        setSuccess(false);
        setState(
            Object.assign({}, state, {
                description: Object.assign(
                    {}, state.description, {value: e.target.value}
                )
            }
            )
        );
    }

    return (
        <section className={styles.modalMain}>
            <div className={styles.validationWrapper}>
                <CSSTransition in={success} timeout={500} classNames="validation" unmountOnExit>
                    <div className={styles.validation}>Спасибо за обратную связь!</div>
                </CSSTransition>
            </div>
            <section className={styles.modalWrapper} onClick={props.onClick}>
                <div className={styles.modalContent} onClick={handleActiveZone}>
                    <button className={styles.closer} onClick={props.onClick}>{SVGManager.getSVG('close')}</button>
                    <h2 className={styles.modalHeader}>Напишите нам!</h2>
                    <div className={styles.modalInner}>
                        <div className={[styles.inputWrapper, state.name.error && styles.errorInputWrapper].join(' ')}>
                            <label className={styles.inputLabel} htmlFor="name">Ваши фамилия и имя <span className={styles.inputSpan}>*</span></label>
                            <input value={state.name.value} type="text" id="name" placeholder='Введите ваши данные' className={styles.input} onChange={handleNameChange}/>
                            {
                                state.name.error && <p className={styles.inputErrorText}>{state.name.errorText}</p>
                            }
                        </div>
                        <div className={[styles.inputWrapper, state.mail.error && styles.errorInputWrapper].join(' ')}>
                            <label className={styles.inputLabel} htmlFor="mail">Электронная почта <span className={styles.inputSpan}>*</span></label>
                            <input value={state.mail.value} type="text" id="mail" placeholder='primer@itmo.ru' className={styles.input} onChange={handleMailChange} onBlur={handleMailBlur}/>
                            {
                                state.mail.error && <p className={styles.inputErrorText}>{state.mail.errorText}</p>
                            }
                        </div>
                        <div className={styles.inputWrapper}>
                            <label className={styles.inputLabel} htmlFor="area">Что непонятно или нужно уточнить </label>
                            <textarea maxLength={300} id="area" placeholder='Введите ваше сообщение' className={[styles.input, styles.area].join(' ')} onChange={handleDescChange}/>
                        </div>
                    </div>
                    <p className={styles.modalHint}>Отправляя данную форму, вы даете согласие на обработку своих <span className={styles.modalHintAccent}>Персональных данных</span></p>
                    <button onClick={handleValidation} className={styles.buttonOuter}><div className={styles.buttonInner}>{SVGManager.getSVG('mail')}</div><p className={styles.buttonText}>Отправить</p></button>
                </div>
            </section>
        </section>
    );
}

export default Modal;