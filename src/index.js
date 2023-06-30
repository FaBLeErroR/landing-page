import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const logo = "logo.png"
const logo_2 = "logo_2.png"
const name = "Василий Нижнегородов"
const phone = "89123456781"
const codeSamples= [
    {head: "Основы",
        code: `print(2 + 3)
        print("Hello")`},
    {head: "Условные операторы",
        code: `language = "russian"\nif language == "english":\n\tprint("Hello")\nelse:\n\tprint("Привет")\nprint("End")`},
    {head: "Циклы",
        code: `number = 1\n\nwhile number < 5:\n\tprint(f"number = {number}")\n\tnumber += 1\nprint("Работа программы завершена")`}
]
function Content() {
    return(
        <>
            <Head logo={logo_2} />
            <Button />
            <Features title="Чему вы научитесь в первые дни обучения:" list={codeSamples} />
            <Login />
            <Foot logo={logo} name={name} phone={phone} />
        </>
    )
}

function Foot(props) {
    return(
        <div className="foot">
            <img src={props.logo} />
            <p></p>
            <div>
                <p>Свяжитесь с нами:</p>
                <p>ФИО: {props.name}</p>
                <p>Номер телефона: {props.phone}</p>
            </div>
        </div>
    )
}
function Head(props) {
    return(
        <div className="head">
            <img src={props.logo} />
            <br/>
            <h1>Успейте записаться на новый <br/> курс по программированию!</h1>
        </div>
    )
}

function CalcForm() {
    const [text, setText] = React.useState("");
    React.useEffect(() => {
        setText(text)
    })
    function changeText(event) {
        setText(event.target.value);
    }
    return (
        <>
            <div className="calc">
                <input className="text" onChange={changeText} />
                <p>print({text})</p>
            </div>
        </>
    )
}
function Button() {
    const [isPressed, setButton] = React.useState(true);
    const press = () => {
        setButton(!isPressed);
    };

    return(
        <>
            <div className="calc">
                {!isPressed ? <CalcForm /> : null}
                <br/>
                <input className="button" type="button"
                       value={isPressed ? "Начните писать код уже сегодня" :
                           "Закрыть"} onClick={press} />
            </div>
        </>
    )
}

function Features (props) {

    const codeSamples = props.list.map((item, index) =>
        <Feature key={index} head={item.head} code={item.code} />

    );
    return (
        <div className="prof">
            <h2>{props.title} </h2>
            <ul>
                {codeSamples}
            </ul>
        </div>

    )
}

function Feature(props) {

    const [isOpen, setOpenClose] = React.useState(false);
    const press = () => {
        setOpenClose(!isOpen);
    }
    return(
        <li onClick={press}>
            <span className="left">{props.head}</span>
            <span className="right">{isOpen ? "<" : ">"}</span>
                {isOpen &&
                    <pre>{props.code}</pre>
                }
        </li>
    )
}

function Login() {
    const [isPressed, setButton] = React.useState(false);

    const [login, setLogin] = React.useState("");
    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");

    const press = () => {
        setButton(true);
    };
    React.useEffect(() => {
        setLogin(login);
        setName(name);
        setSurname(surname);
    })
    const changeLogin = (event) => setLogin(event.target.value)
    const changeName = (event) => setName(event.target.value)
    const changeSurname = (event) => setSurname(event.target.value)
    return(
        <>
            <div className="login">
                <h3>Подайте заявку на обучение!</h3>
                {isPressed ?
                    <p>Уважаемый {name != "" ? name : "Name"} {surname}, в ближайшее время Вам на
                        почту придет приглашение на курс. <br/>Надеемся вы не
                        забыли ввести пароль.</p> :
                    <ul>
                        <li><input className="text" placeholder="Логин" onChange={changeLogin} value={login} /></li>
                        <li><input className="text" placeholder="Имя" onChange={changeName} value={name} /></li>
                        <li><input className="text" placeholder="Фамилия" onChange={changeSurname} value={surname} /></li>
                        <li><input className="button" type="button" onClick={press} value="Подать заявку" /></li>
                    </ul>
                }
            </div>
        </>
    )
}

root.render(<Content />)

reportWebVitals();
