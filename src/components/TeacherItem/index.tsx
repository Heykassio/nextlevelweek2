import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent-gig2-1.xx.fbcdn.net/v/t31.0-8/20819291_736969636486584_7238598600146543075_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=UTebtIEIMeoAX-bH78x&_nc_ht=scontent-gig2-1.xx&oh=1978136e42b9f4354839a88a5c5ea079&oe=5F4D1ED4" alt="Diego Fernandes" />
                <div>
                    <strong>Kassio Costa</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200000 pessoas já assistiram às suas explosões.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="whatsapp icon" />
                            Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;