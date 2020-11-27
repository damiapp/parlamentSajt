import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';
import '../pages/helping.css';

import profpic from '../images/profile.jpeg';
import stefandur from '../images/stefandur.jpg';
import nikoladam from '../images/nikoladam.jpg';
import stefanjan from '../images/stefanjan.jpg';
import ananik from '../images/ananik.jpg';
import aleksat from '../images/aleksat.jpg';
import jelenates from '../images/jelenates.jpg';
import krismic from '../images/krismic.jpg';
import dragama from '../images/dragama.jpg';
import natlaz from '../images/natlaz.jpg';
import mihvla from '../images/mihvla.jpg';
import vari from '../images/vari.jpg';
import stefmalb from '../images/stefmalb.jpg';
import mitarav from '../images/mitarav.jpg';
import mgalj from '../images/mgalj.jpg';


class MemberCards extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    ime: 'Кристина Мићић',
                    imgSrc: krismic,
                    brIndeks:'40/2017',
                    smer:'Теоријска математика и примене',
                    mejl:'mm17040@alas.matf.bg.ac.rs',
                    funkcije:'Председник Студентског парламента, Члан Савета, Члан Наставно-научног већа'
                },
                {
                    id: 1,
                    ime: 'Алекса Тасић',
                    imgSrc: aleksat,
                    brIndeks:'1021/2020',
                    smer:'Примењена математика',
                    mejl:'mn15017@alas.matf.bg.ac.rs',
                    funkcije:'Студент продекан, Члан Представништва, Члан Наставно-научног већа'
                },
                {
                    id: 2,
                    ime: 'Ана Николић',
                    imgSrc: ananik,
                    brIndeks:'33/2016',
                    smer:'Рачунарство и информатика',
                    mejl:'mr16033@alas.matf.bg.ac.rs',
                    funkcije:'Члан одбора за сарадњу, Члан Наставно-научног већа'
                },
                {
                    id: 3,
                    ime: 'Дурлевић Стефан',
                    imgSrc: stefandur,
                    brIndeks:'163/2017',
                    smer:'Информатика',
                    mejl:'stefandur@hotmail.com',
                    funkcije:"Председник Клуба волонтера при Студентском парламенту Математичког факултета, Потпредседник за односе са јавношћу Студентском парламентуа Математичког факултета, Члан Наставно-научног већа, Члан дисциплинске комисије Математичког факултета, Члан комисије за вредновање ваннаставних активности Математичког факултета"
                },
                {
                    id: 4,
                    ime: 'Никола Дамјановић',
                    imgSrc: nikoladam,
                    brIndeks:'390/2015',
                    smer:'Рачунарство и информатика',
                    mejl:'ml15390@alas.matf.bg.ac.rs',
                    funkcije:'Члан одбора за односе са јавношћу, Члан Статутарне комисије, Члан Наставно-научног већа'
                },
                {
                    id: 5,
                    ime: 'Милан Димитријевић',
                    imgSrc: profpic,
                    brIndeks:'307/2018',
                    smer:'Рачунарство и информатика',
                    mejl:'mr18307@alas.matf.bg.ac.rs',
                    funkcije:'Потпредседник за студентски стандард, Члан Наставно-научног већа'
                },
                {
                    id: 6,
                    ime: 'Филип Недељковић',
                    imgSrc: profpic,
                    brIndeks:'305/2017',
                    smer:'Информатика',
                    mejl:'filip.nedeljkovic16@gmail.com',
                    funkcije:'Члан одбора за наставу, Члан одбора за науку, Члан Наставно-научног већа'
                },
                {
                    id: 7,
                    ime: 'Јован Руменић',
                    imgSrc: profpic,
                    brIndeks:'69/2017',
                    smer:'Информатика',
                    mejl:'jrumenic@gmail.com',
                    funkcije:'Члан Наставно-научног већа'
                },
                {
                    id: 8,
                    ime: 'Стефан Јанчић',
                    imgSrc: stefanjan,
                    brIndeks:'219/2018',
                    smer:'Информатика',
                    mejl:'mi18219@alas.matf.bg.ac.rs',
                    funkcije:'Члан одбора за наставу, Члан Наставно-научног већа'
                },
                {
                    id: 9,
                    ime: 'Јелена тешић',
                    imgSrc: jelenates,
                    brIndeks:'361/2017',
                    smer:'Професор математике',
                    mejl:'jelenatesic2998@gmail.com',
                    funkcije:'Члан одбора за наставу, Члан Наставно-научног већа'
                },
                {
                    id: 10,
                    ime: 'Драгана Маљковић',
                    imgSrc: dragama,
                    brIndeks:'7/2017',
                    smer:'Статистика, актуарска и финансијска математика',
                    mejl:'maljkovicdragana@gmail.com',
                    funkcije:'Потпредседник за наставу, Заменик председника Студентског парламента, члан Наставно-научног већа'
                },
                {
                    id: 11,
                    ime: 'Наталија Лазић',
                    imgSrc: natlaz,
                    brIndeks:'230/2018',
                    smer:'Статистика, актуарска и финансијска математика',
                    mejl:'nlnatalazic@gmail.com',
                    funkcije:'Потпредседник за сарадњу, Члан Савета, Члан Наставно-научног већа'
                },
                {
                    id: 12,
                    ime: 'Михаило Влајковић',
                    imgSrc: mihvla,
                    brIndeks:'247/2017',
                    smer:'Информатика',
                    mejl:'mihailovlajkovic98@gmail.com',
                    funkcije:'Члан одбора за односе са јавношћу, Члан Наставно-научног већа'
                },
                {
                    id: 13,
                    ime: 'Јован Вари',
                    imgSrc: vari,
                    brIndeks:'132/2019',
                    smer:'Теоријска математика и примене',
                    mejl:'mm19132@alas.matf.bg.ac.rs',
                    funkcije:'Члан Наставно-научног већа, члан одбора за наставу, члан одбора за науку, заменик члана Статутарне комисије'
                },
                {
                    id: 14,
                    ime: 'Иван Станић',
                    imgSrc: profpic,
                    brIndeks:'16/2016',
                    smer:'Рачунарство и информатика',
                    mejl:'ivan.stanic800@gmail.com',
                    funkcije:'Члан Савета Математичког факултета, шеф представничке групе студената у Наставно-научном већу'
                },
                {
                    id: 15,
                    ime: 'Стефан Малбашић',
                    imgSrc: stefmalb,
                    brIndeks:'4/2018',
                    smer:'Статистика, актуарска и финансијска математика',
                    mejl:'malbasic.matf@gmail.com',
                    funkcije:'Члан Наставно-научног већа'
                },
                {
                    id: 16,
                    ime: 'Алекса Благојевић',
                    imgSrc: profpic,
                    brIndeks:'23/2017',
                    smer:'Информатика',
                    mejl:'mi17023@alas.matf.bg.ac.rs',
                    funkcije:'Члан Наставно-научног већа'
                },
                {
                    id: 17,
                    ime: 'Марко Бекоња',
                    imgSrc: profpic,
                    brIndeks:'432/2019',
                    smer:'Информатика',
                    mejl:'markobekonja96@gmail.com',
                    funkcije:'Члан Наставно-научног већа, Координатор дебатног клуба'
                },
                {
                    id: 18,
                    ime: 'Ања Кнежевић',
                    imgSrc: profpic,
                    brIndeks:'252/2017',
                    smer:'Рачунарство и информатика',
                    mejl:'mr17252@matf.bg.ac.rs',
                    funkcije:'Члан Наставно-научног већа'
                },
                {
                    id: 19,
                    ime: 'Митар Аврамовић',
                    imgSrc: mitarav,
                    brIndeks:'97/2018',
                    smer:'Статистика, актуарска и финансијска математика',
                    mejl:'mv18097@alas.matf.bg.ac.rs',
                    funkcije:'Повереник за финансијске молбе, члан Савета, Члан Наставно-научног већа'
                },
                {
                    id: 20,
                    ime: 'Милица Гаљак',
                    imgSrc: mgalj,
                    brIndeks:'75/2019',
                    smer:'Рачунарство и информатика',
                    mejl:'milica.galjak@gmail.com',
                    funkcije:'Потпредседник за науку, Генерални секретар парламента Математичког факултета Универзитета у Београду'
                },
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default MemberCards;